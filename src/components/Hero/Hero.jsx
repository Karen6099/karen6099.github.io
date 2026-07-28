import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useStarfield } from '../../contexts/StarfieldContext';
import { useDVD } from '../../contexts/DVDContext';
import { playArcadeBlip } from '../../utils/sound';
import DVD from '../Animations/DVD';
import StarField from '../Animations/StarField';
import Doodles from '../Animations/Doodles';
import FlightRadar from '../FlightRadar/FlightRadar';
import Bowl from '../Bowl/Bowl';
import FriendshipMeter from '../FriendshipMeter/FriendshipMeter';
import VisitorTracker from '../VisitorTracker/VisitorTracker';
import SnakeGame from '../Game/SnakeGame';
import './Hero.css';

const sectionButtons = [
  { id: 'flights', label: 'Flights', icon: '✈', color: 'cyan', Component: FlightRadar },
  { id: 'bowl', label: 'Bowl', icon: '🍜', color: 'yellow', Component: Bowl },
  { id: 'friendship', label: 'Friends', icon: '👀', color: 'magenta', Component: FriendshipMeter },
  { id: 'tracker', label: 'Tracker', icon: '📍', color: 'green', Component: VisitorTracker },
  { id: 'game', label: 'Play', icon: '🕹', color: 'orange', Component: SnakeGame }
];

const ToggleSwitch = ({ label, checked, onClick }) => (
  <button type="button" className={`arcade-switch ${checked ? 'is-on' : ''}`} onClick={onClick} title={label}>
    <span className="arcade-switch-track">
      <span className="arcade-switch-knob" />
    </span>
    <span className="arcade-switch-label">{label}</span>
  </button>
);

const Hero = ({ activeSection, onSelectSection, showLegacyBar, onToggleLegacyBar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isStarfieldVisible, toggleStarfield } = useStarfield();
  const { isDVDVisible, toggleDVD } = useDVD();

  // A short-lived class drives the press burst. :active alone gets cut off
  // when a click is faster than the animation.
  const [pressedId, setPressedId] = useState(null);
  const pressTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(pressTimerRef.current), []);

  const flashPress = useCallback(id => {
    setPressedId(id);
    clearTimeout(pressTimerRef.current);
    pressTimerRef.current = setTimeout(() => setPressedId(null), 400);
  }, []);

  const withBlip = (variant, handler, id) => () => {
    playArcadeBlip(variant);
    if (id) {
      flashPress(id);
    }
    handler();
  };

  const activeButton = sectionButtons.find(section => section.id === activeSection);
  const ActiveComponent = activeButton?.Component;
  const isGame = activeSection === 'game';

  return (
    <section id="home" className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <Doodles />
        <StarField />
        <DVD />
      </div>

      <div className="arcade-perspective">
        <div className="arcade-machine">
          <span className="machine-sheen" aria-hidden="true" />

          <div className="arcade-marquee">
            <span className="marquee-lights" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="marquee-light" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
            <span className="marquee-title" key={activeSection ?? 'home'}>
              {ActiveComponent ? activeButton.label.toUpperCase() : 'KAREN'}
            </span>
          </div>

          <div className="arcade-screen">
            <div className="screen-scanlines" aria-hidden="true" />
            <div className="screen-vignette" aria-hidden="true" />
            <div className={`screen-content ${isGame ? 'screen-content--game' : ''}`}>
              {ActiveComponent ? (
                <div className="screen-app" key={activeSection}>
                  <button
                    type="button"
                    className="screen-back-btn"
                    onClick={withBlip('secondary', () => onSelectSection(null))}
                  >
                    ◀ BACK
                  </button>
                  <div className="screen-app-body">
                    <ActiveComponent />
                  </div>
                </div>
              ) : (
                <div className="hero-content" key="home">
                  <h1>Hi, I'm Karen</h1>
                  <p className="subtitle">Developer | Designer | Creator</p>
                  <p className="insert-coin">▶ INSERT COIN — PRESS A BUTTON BELOW</p>
                </div>
              )}
            </div>
          </div>

          <div className="control-panel">
            <span className="panel-screw panel-screw--tl" aria-hidden="true" />
            <span className="panel-screw panel-screw--tr" aria-hidden="true" />
            <span className="panel-screw panel-screw--bl" aria-hidden="true" />
            <span className="panel-screw panel-screw--br" aria-hidden="true" />

            <div className="control-panel-main">
              <div className="arcade-joystick" aria-hidden="true">
                <span className="joystick-base" />
                <span className="joystick-stick">
                  <span className="joystick-ball" />
                </span>
              </div>

              <div className="section-launcher">
                {sectionButtons.map(section => (
                  <div className="arcade-button-unit" key={section.id}>
                    <button
                      type="button"
                      className={`arcade-button arcade-button--${section.color} ${activeSection === section.id ? 'is-active' : ''} ${pressedId === section.id ? 'is-pressed' : ''}`}
                      onClick={withBlip('primary', () =>
                        onSelectSection(activeSection === section.id ? null : section.id), section.id
                      )}
                      title={`Reveal ${section.label}`}
                    >
                      <span className="launch-icon" aria-hidden="true">{section.icon}</span>
                    </button>
                    <span className="launch-label">{section.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="control-panel-aux">
              <div className="aux-plaque">
                <a href="https://github.com/karen6099" target="_blank" className="plaque-icon-btn" rel="noreferrer" title="GitHub">
                  <svg viewBox="0 0 438.549 438.549">
                    <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/karenlauhl" target="_blank" className="plaque-icon-btn" rel="noreferrer" title="LinkedIn">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>

              <div className="aux-switches">
                <ToggleSwitch label="DVD" checked={isDVDVisible} onClick={withBlip('secondary', toggleDVD)} />
                <ToggleSwitch label="Stars" checked={isStarfieldVisible} onClick={withBlip('secondary', toggleStarfield)} />
                <ToggleSwitch label="CRT" checked={isDarkMode} onClick={withBlip('secondary', toggleDarkMode)} />
                <ToggleSwitch label="Classic Bar" checked={showLegacyBar} onClick={withBlip('secondary', onToggleLegacyBar)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
