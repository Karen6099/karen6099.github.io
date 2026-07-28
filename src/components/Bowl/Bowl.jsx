import './Bowl.css';

const Bowl = () => {
  return (
    <section id="bowl" className="bowl">
      <div className="container">
        <h2>Bowl</h2>
        <p>A delicious bowl of noodles in 3D</p>
        <div className="bowl-embed-container">
          <iframe
            title="Bowl of Noodles"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/9210f13e03c84423899e90d62f173d16/embed?autospin=1&autostart=1&preload=1"
          ></iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: 'var(--color-text)', opacity: 0.75 }}>
            <a
              href="https://sketchfab.com/3d-models/bowl-of-noodles-9210f13e03c84423899e90d62f173d16?utm_medium=embed&utm_campaign=share-popup&utm_content=9210f13e03c84423899e90d62f173d16"
              target="_blank"
              rel="nofollow noreferrer"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Bowl of Noodles
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/KamillaKraus?utm_medium=embed&utm_campaign=share-popup&utm_content=9210f13e03c84423899e90d62f173d16"
              target="_blank"
              rel="nofollow noreferrer"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              KamillaKraus
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9210f13e03c84423899e90d62f173d16"
              target="_blank"
              rel="nofollow noreferrer"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bowl;
