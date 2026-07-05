import { useEffect, useMemo, useState } from 'react';
import './VisitorTracker.css';

const COUNT_NAMESPACE = process.env.REACT_APP_COUNTAPI_NAMESPACE || 'karen6099-github-io';
const COUNT_KEY = process.env.REACT_APP_COUNTAPI_KEY || 'site-visits';
const LOG_ENDPOINT = process.env.REACT_APP_VISITOR_LOG_ENDPOINT?.trim();
const FALLBACK_COUNT_KEY = 'karen6099-visit-fallback-count';

const readFallbackCount = () => {
  try {
    return Number(window.localStorage.getItem(FALLBACK_COUNT_KEY) || '0');
  } catch (error) {
    return 0;
  }
};

const writeFallbackCount = value => {
  try {
    window.localStorage.setItem(FALLBACK_COUNT_KEY, String(value));
  } catch (error) {
    // Ignore storage failures and keep the browser-local fallback best-effort only.
  }
};

const formatLocation = location => {
  const parts = [location.city, location.region, location.country].filter(Boolean);

  if (!parts.length) {
    return 'Location unavailable';
  }

  return parts.join(', ');
};

const VisitorTracker = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [visitSource, setVisitSource] = useState('loading');
  const [visitorLocation, setVisitorLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('loading');

  const visitCountLabel = useMemo(() => {
    if (visitCount === null) {
      return 'Loading...';
    }

    return visitCount.toLocaleString();
  }, [visitCount]);

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const recordVisit = async () => {
      try {
        const response = await fetch(`https://api.countapi.xyz/hit/${COUNT_NAMESPACE}/${COUNT_KEY}`);

        if (!response.ok) {
          throw new Error('Counter request failed');
        }

        const data = await response.json();

        if (isMounted) {
          setVisitCount(data.value);
          setVisitSource('global counter');
        }

        return data.value;
      } catch (error) {
        const fallbackCount = readFallbackCount() + 1;
        writeFallbackCount(fallbackCount);

        if (isMounted) {
          setVisitCount(fallbackCount);
          setVisitSource('browser fallback');
        }

        return fallbackCount;
      }
    };

    const loadVisitorLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/?output=json', { signal: abortController.signal });

        if (!response.ok) {
          throw new Error('Location request failed');
        }

        const data = await response.json();

        if (!isMounted || !data.success) {
          throw new Error('Location lookup failed');
        }

        const location = {
          city: data.city,
          region: data.region,
          country: data.country,
          countryCode: data.country_code,
          ip: data.ip
        };

        setVisitorLocation(location);
        setLocationStatus('ready');

        return location;
      } catch (error) {
        if (isMounted) {
          setLocationStatus('unavailable');
        }

        return null;
      }
    };

    const logToBackend = async payload => {
      if (!LOG_ENDPOINT) {
        return;
      }

      const body = JSON.stringify(payload);

      try {
        if (navigator.sendBeacon) {
          const beacon = new Blob([body], { type: 'application/json' });
          navigator.sendBeacon(LOG_ENDPOINT, beacon);
          return;
        }

        await fetch(LOG_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        });
      } catch (error) {
        // Keep analytics best-effort only.
      }
    };

    const runTracker = async () => {
      const [count, location] = await Promise.all([recordVisit(), loadVisitorLocation()]);

      if (count !== null) {
        logToBackend({
          event: 'page_view',
          path: window.location.pathname,
          count,
          location,
          timestamp: new Date().toISOString()
        });
      }
    };

    runTracker();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  return (
    <section id="visitor-tracker" className="visitor-tracker">
      <div className="container">
        <div className="visitor-tracker-shell">
          <div className="visitor-tracker-header">
            <span className="visitor-tracker-eyebrow">Site analytics</span>
            <h2>Visitor Tracker</h2>
            <p>
              A lightweight visit counter with approximate IP-based location reporting.
              Exact addresses are not available from a normal website.
            </p>
          </div>

          <div className="visitor-tracker-grid">
            <div className="visitor-stat-card">
              <span className="visitor-stat-label">Total visits</span>
              <strong className="visitor-stat-value">{visitCountLabel}</strong>
              <span className="visitor-stat-meta">
                {visitSource === 'global counter'
                  ? 'Counted through a shared external counter.'
                  : 'This browser is using a local fallback counter.'}
              </span>
            </div>

            <div className="visitor-stat-card">
              <span className="visitor-stat-label">Approximate location</span>
              <strong className="visitor-stat-value">
                {locationStatus === 'ready' && visitorLocation ? formatLocation(visitorLocation) : 'Looking up...'}
              </strong>
              <span className="visitor-stat-meta">
                {locationStatus === 'ready'
                  ? 'Derived from the visitor IP address and only accurate at a coarse level.'
                  : 'If geolocation is blocked, this card will stay generic.'}
              </span>
            </div>
          </div>

          <div className="visitor-tracker-footer">
            <p>
              Optional backend logging is supported with REACT_APP_VISITOR_LOG_ENDPOINT. When set,
              the site sends a best-effort page-view payload for your own server to store.
            </p>
            {LOG_ENDPOINT ? <span className="visitor-tracker-status">Backend logging enabled</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorTracker;