# Karen's Portfolio Website

A modern, interactive React portfolio website featuring glassmorphic design, dark mode toggle, bouncing DVD animations, and starfall effects.

## 🎨 Features

- **Modern Design**: Glassmorphic UI with blur effects and transparency
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Interactive Elements**: Bouncing DVD logo with color-changing animations
- **Starfall Animation**: Animated falling stars background effect
- **Responsive Layout**: Fully responsive design that works on all devices
- **Floating Navigation**: Bottom floating nav bar with smooth interactions
- **Smooth Scrolling**: Navigate smoothly between sections
- **Project Showcase**: Display your work with tagged technologies
- **Skills Section**: Organized by categories (Frontend, Backend, Tools)
- **Contact Links**: Easy access to GitHub, LinkedIn, and email
- **Component-Based Architecture**: Modular React components for maintainability
- **Custom Hooks**: Reusable logic for dark mode and scroll animations
- **Context API**: Global state management for theme

## 🛠️ Technologies Used

- **React 18** - Component-based UI framework
- **CSS3** - Advanced styling with animations and gradients
- **React Hooks** - State management and side effects
- **Context API** - Global state management
- **SVG** - Vector graphics for the DVD logo
- **localStorage** - Theme persistence
- **IntersectionObserver** - Scroll animation triggering

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm
- A modern web browser

### Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/karen6099/karen6099.github.io.git
cd karen6099.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
Opens automatically at `http://localhost:3000`

4. Build for production:
```bash
npm run build
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/           # Navigation bar
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/             # Hero section with CTA
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── About/            # About me section
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Projects/         # Projects grid
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.css
│   │   └── ProjectCard.css
│   ├── Skills/           # Skills section
│   │   ├── Skills.jsx
│   │   ├── SkillCategory.jsx
│   │   ├── Skills.css
│   │   └── SkillCategory.css
│   ├── Contact/          # Contact section
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── FloatingNav/      # Floating navigation
│   │   ├── FloatingNav.jsx
│   │   └── FloatingNav.css
│   └── Animations/       # Animation components
│       ├── DVD.jsx
│       └── StarField.jsx
├── hooks/
│   ├── useDarkMode.js    # Dark mode state hook
│   └── useScrollAnimation.js  # Scroll animation hook
├── contexts/
│   └── ThemeContext.jsx  # Theme context provider
├── App.jsx               # Main component
├── App.css               # Global styles
└── index.js              # React entry point

public/
├── index.html            # React mount point
├── dvd.svg              # DVD logo asset
└── dvd.png              # DVD logo (backup)

Root:
├── package.json          # Dependencies and scripts
├── SETUP.md             # Detailed setup guide
├── REACT_MIGRATION.md   # Migration documentation
├── REACT_STRUCTURE.md   # File structure overview
└── .gitignore          # Git ignore rules
```

## ⚙️ Customization

### Update Your Information

Edit component files to add your personal information:

**src/components/Projects/Projects.jsx** - Add your projects:
```jsx
const projects = [
  {
    title: 'My Awesome Project',
    description: 'Brief project description',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://project-link.com'
  }
];
```

**src/components/Skills/Skills.jsx** - Add your skills:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'CSS3']
  }
];
```

**src/components/Contact/Contact.jsx** - Update contact links

### Customize Colors

Update CSS variables in `src/App.css`:
```css
:root {
    --color-primary: #667eea;      /* Gradient start */
    --color-secondary: #764ba2;    /* Gradient end */
    --color-text: #2d3748;         /* Text color */
    --color-bg: #ffffff;           /* Background */
}

[data-theme="dark"] {
    --color-text: #e2e8f0;
    --color-bg: #0f172a;
}
```

### Toggle Features

- **Dark Mode**: Click the moon/sun icon in the floating nav bar
- **Starfall**: Remove `<StarField />` from `src/App.jsx` to disable
- **DVD Animation**: Remove `<DVD />` from `src/App.jsx` to disable

## 🎬 Animation Details

### Bouncing DVD Logo
- Fixed position element that bounces off viewport edges
- Changes hue when hitting walls
- Draggable with mouse
- Uses `requestAnimationFrame` for smooth 60fps animation

### Starfall
- 100 animated falling stars
- Random horizontal drift
- Infinite loop with varying speeds
- Uses CSS keyframe animations

### Glassmorphism Effects
- `backdrop-filter: blur()` for frosted glass effect
- Semi-transparent backgrounds
- Smooth gradient overlays
- Dark mode invert colors

## 🌙 Dark Mode

The dark mode preference is saved to localStorage and persists across sessions:
- Light mode: Purple-blue gradient background
- Dark mode: Deep indigo gradient background
- All components adapt colors automatically

## 📱 Responsive Breakpoints

- Mobile (max-width: 480px)
- Tablet (max-width: 768px)
- Desktop (1200px+)

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Karen**
- GitHub: [@karen6099](https://github.com/karen6099)
- LinkedIn: [Karen Lauhl](https://linkedin.com/in/karenlauhl)

---

**Last Updated**: November 2025
