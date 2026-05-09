import { useState } from 'react';
import './FriendshipMeter.css';

const FriendshipMeter = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Karen's traits (you can customize these!)
  const KarenProfile = {
    os: 'mac',
    memeKnowledge: 'chronically-online',
    sleepSchedule: 'questionable',
    chaoticEnergy: 'high',
    coffeePerson: 'never',
    codeLanguage: 'python',
    communityVibes: 'discord',
    workStyle: 'deadline-driven'
  };

  const categories = [
    {
      id: 'os',
      question: '🖥️ What\'s your OS of choice?',
      options: [
        { value: 'mac', label: 'Mac (respectable)', points: 60 },
        { value: 'windows', label: 'Windows (sophisticated choices)', points: 100 },
        { value: 'linux', label: 'Linux (sigma grindset)', points: 80 }
      ]
    },
    {
      id: 'memeKnowledge',
      question: '😂 Your meme knowledge level?',
      options: [
        { value: 'chronically-online', label: 'Chronically online (touch grass no no)', points: 100 },
        { value: 'casual-scroller', label: 'Casual scroller', points: 50 },
        { value: 'what-is-meme', label: 'What is a meme?', points: 20 }
      ]
    },
    {
      id: 'sleepSchedule',
      question: '😴 Your sleep schedule vibes?',
      options: [
        { value: 'questionable', label: 'Questionable (3am coding sessions)', points: 100 },
        { value: 'normal', label: 'Actually normal', points: 40 },
        { value: 'bed-by-9', label: 'Bed by 9pm sharp', points: 20 }
      ]
    },
    {
      id: 'chaoticEnergy',
      question: '⚡ Chaotic energy level?',
      options: [
        { value: 'high', label: 'High (unpredictable in the best way)', points: 100 },
        { value: 'medium', label: 'Medium (balanced chaos)', points: 70 },
        { value: 'low', label: 'Low (organized human)', points: 40 }
      ]
    },
    {
      id: 'coffeePerson',
      question: '☕ Coffee or Tea?',
      options: [
        { value: 'never', label: 'Tea (respectable)', points: 100 },
        { value: 'sometimes', label: 'Just water (athlete energy)', points: 60 },
        { value: 'always', label: 'Coffee (obviously)', points: 30 }
      ]
    },
    {
      id: 'codeLanguage',
      question: '💻 Favorite code language?',
      options: [
        { value: 'javascript', label: 'JavaScript (web dev homies)', points: 70 },
        { value: 'python', label: 'Python (data science era)', points: 100 },
        { value: 'other', label: 'Something else (interesting)', points: 50 }
      ]
    },
    {
      id: 'communityVibes',
      question: '💬 Where do you vibe?',
      options: [
        { value: 'discord', label: 'Discord (the main character energy)', points: 100 },
        { value: 'teams', label: 'Teams (professional settings)', points: -100 },
        { value: 'irl', label: 'In-person only (balanced human)', points: 40 }
      ]
    },
    {
      id: 'workStyle',
      question: '⏰ Work style?',
      options: [
        { value: 'deadline-driven', label: 'Deadline-driven chaos (procrastinator chic)', points: 100 },
        { value: 'planned', label: 'Planned & organized', points: 50 },
        { value: 'flexible', label: 'Go-with-the-flow', points: 70 }
      ]
    }
  ];

  const handleAnswer = (categoryId, optionValue, points) => {
    setAnswers({
      ...answers,
      [categoryId]: { value: optionValue, points }
    });
  };

  const calculateResults = () => {
    let totalPoints = 0;
    let matchedCategories = 0;
    const breakdown = {};

    categories.forEach(category => {
      if (answers[category.id]) {
        const points = answers[category.id].points;
        totalPoints += points;
        breakdown[category.id] = points;
      }
    });

    const answeredCount = Object.keys(answers).length;
    const compatibility = answeredCount > 0 ? Math.round((totalPoints / (answeredCount * 100)) * 100) : 0;

    return { compatibility, breakdown, answeredCount };
  };

  const getTierAndMessage = (compatibility) => {
    if (compatibility >= 90) {
      return {
        tier: '🔥 BESTIE TIER 🔥',
        message: 'We were destined to be friends. No take-backsies.',
        color: '#ff006e'
      };
    } else if (compatibility >= 75) {
      return {
        tier: '💫 CORE FRIEND ENERGY 💫',
        message: 'We\'re totally vibing. Group chat secured.',
        color: '#fb5607'
      };
    } else if (compatibility >= 60) {
      return {
        tier: '🎮 DISCORD HOMIE 🎮',
        message: 'I see potential here. Let\'s collab sometime.',
        color: '#8338ec'
      };
    } else if (compatibility >= 45) {
      return {
        tier: '👋 COOL PERSON ENERGY 👋',
        message: 'We\'d probably get along at a party.',
        color: '#ffbe0b'
      };
    } else {
      return {
        tier: '🌍 DISTANT TIMELINE FRIEND 🌍',
        message: 'We\'d probably vibe in a parallel universe.',
        color: '#06a77d'
      };
    }
  };

  const results = calculateResults();
  const { tier, message, color } = getTierAndMessage(results.compatibility);
  const answeredAll = results.answeredCount === categories.length;

  return (
    <section className="friendship-meter">
      <div className="friendship-container">
        <div className="friendship-header">
          <h2>Can We Be Friends? 👀</h2>
          <p>Answer these questions and let's calculate our compatibility...</p>
        </div>

        <div className="questions-grid">
          {categories.map(category => (
            <div key={category.id} className="question-group">
              <h3>{category.question}</h3>
              <div className="options">
                {category.options.map(option => (
                  <button
                    key={option.value}
                    className={`option-btn ${answers[category.id]?.value === option.value ? 'active' : ''}`}
                    onClick={() => handleAnswer(category.id, option.value, option.points)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`calculate-btn ${answeredAll ? 'ready' : ''}`}
          onClick={() => setShowResults(true)}
          disabled={results.answeredCount === 0}
        >
          {results.answeredCount === 0
            ? 'Answer all questions first...'
            : `Calculate Compatibility (${results.answeredCount}/${categories.length})`}
        </button>

        {showResults && (
          <div className="results-overlay" onClick={() => setShowResults(false)}>
            <div className="results-card" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowResults(false)}>✕</button>

              <div className="compatibility-display" style={{ borderColor: color }}>
                <div className="compatibility-score" style={{ color }}>
                  {results.compatibility}%
                </div>
                <div className="tier-badge" style={{ backgroundColor: color }}>
                  {tier}
                </div>
                <p className="tier-message">{message}</p>
              </div>

              <div className="compatibility-breakdown">
                <h4>Compatibility Breakdown:</h4>
                <div className="breakdown-grid">
                  {categories.map(category => {
                    const points = results.breakdown[category.id] || 0;
                    const filled = (points / 100) * 5;
                    return (
                      <div key={category.id} className="breakdown-item">
                        <div className="category-label">
                          {category.question.split(' ')[0]} {/* emoji */}
                        </div>
                        <div className="bar-container">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${filled * 20}%`,
                              backgroundColor: color
                            }}
                          ></div>
                        </div>
                        <div className="points-label">{points}/100</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="results-footer">
                <p>
                  {results.compatibility >= 75
                    ? '✨ Honestly, we should be friends'
                    : results.compatibility >= 45
                    ? '🤔 You\'re cool but we need to work on some things'
                    : '🌙 Different eras, same multiverse'}
                </p>
              </div>

              <button className="retake-btn" onClick={() => {
                setAnswers({});
                setShowResults(false);
              }}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FriendshipMeter;
