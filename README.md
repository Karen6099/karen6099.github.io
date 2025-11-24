# Karen's Portfolio Website

A modern, interactive React portfolio website featuring glassmorphic design, dark mode toggle, bouncing DVD animations, and starfall effects.

## 🎨 Features

- **Modern Glassmorphic Design**: Frosted glass effect with blur and transparency
- **Dark Mode Toggle**: Toggle between light and dark themes with persistent storage

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
│   ├── Navbar/              # Navigation bar with glassmorphic effect
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/                # Hero section with title and CTA
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── About/               # About me section
│   │   ├── About.jsx
│   │   └── About.css
│   ├── FlightRadar/         # Flight Radar 24 integration
│   │   ├── FlightRadar.jsx
│   │   └── FlightRadar.css
│   ├── Contact/             # Contact section with social links
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── FloatingNav/         # Floating navigation bar
│   │   │                    # Home | GitHub | LinkedIn | DVD Toggle | Starfield Toggle | Dark Mode Toggle
│   │   ├── FloatingNav.jsx
│   │   └── FloatingNav.css
│   ├── Projects/            # (Unused) Projects showcase section
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── Skills/              # (Unused) Skills display section
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── NotFound/            # (Unused) 404 Page component
│   │   ├── NotFound.jsx
│   │   └── NotFound.css
│   └── Animations/          # Animation components
│       ├── DVD/
│       │   ├── DVD.jsx      # Bouncing DVD logo with physics
│       │   └── DVD.css
│       └── StarField/
│           ├── StarField.jsx # Falling stars background
│           └── StarField.css
├── hooks/
│   ├── useDarkMode.js       # Dark mode state with localStorage
│   └── useScrollAnimation.js # Scroll animation trigger
├── contexts/
│   ├── ThemeContext.jsx     # Theme context provider (light/dark)
│   ├── StarfieldContext.jsx # Starfield visibility context
│   └── DVDContext.jsx       # DVD visibility context
├── App.jsx                  # Main component with providers
├── App.css                  # Global styles and CSS variables
└── index.js                 # React entry point

public/
├── index.html               # React mount point
└── dvd.svg                  # DVD logo asset

styles/
├── style.css                # Reference styles from original HTML

Root:
├── package.json             # Dependencies and scripts
├── README.md               # This file
├── LOCAL_DEVELOPMENT.md    # Local development guide
├── TESTING_GUIDE.md        # Testing procedures
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment
```

## ⚙️ Customization

### Customize Colors

Update CSS variables in `src/App.css`:
```css
:root {
    --color-primary: #667eea;      /* Gradient start */
    --color-secondary: #764ba2;    /* Gradient end */
    --color-text: #ffffff;         /* White text for visibility */
    --color-bg: #ffffff;           /* Background */
}

[data-theme="dark"] {
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-text: #e2e8f0;         /* Light text in dark mode */
    --color-bg: #0f172a;
}
```

### Toggle Features

Control animation visibility from the floating nav bar:
- **Dark Mode**: Click the sun/moon icon in the floating nav
- **Starfield**: Click the star icon to toggle falling stars
- **DVD Animation**: Click the DVD icon to toggle bouncing logo

Or programmatically in `src/App.jsx`:
```jsx
// Remove <StarField /> to disable starfield
// Remove <DVD /> to disable DVD animation
```

### Update Navigation Links

Edit `src/components/Navbar/Navbar.jsx` to customize navigation links:
```jsx
<ul className="nav-menu">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#flights">Flights</a></li>
  {/* <li><a href="#contact">Contact</a></li> */}
</ul>
```

### Update Social Links

Edit `src/components/FloatingNav/FloatingNav.jsx` to update GitHub and LinkedIn URLs:
```jsx
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
```

## 🎬 Animation Details

### Bouncing DVD Logo
- **Physics-based bouncing** with realistic velocity and collision detection
- **Color changing** when hitting viewport edges
- **Smooth rendering** using `requestAnimationFrame` at 60fps
- **Toggle visibility** from floating nav bar or remove component
- **Optional**: Can be dragged across the screen

### Starfall Animation
- **100 animated falling stars** with random properties
- **Horizontal drift** for natural movement patterns
- **Infinite looping** with varying speeds (5-15 seconds)
- **Random opacity** for depth effect
- **Toggle visibility** from floating nav bar without removing component

### Glassmorphic Effects
- **Frosted glass appearance** using `backdrop-filter: blur(10px)`
- **Semi-transparent backgrounds** with RGBA colors
- **Subtle borders** for definition (1px solid with transparency)
- **Shadow effects** for depth and layering
- **Light mode**: White text with subtle shadows for readability
- **Dark mode**: Adapted colors that maintain contrast and style

## 🌙 Dark Mode

The dark mode preference is automatically saved to browser localStorage and persists across sessions:

**Light Mode**:
- Purple-blue gradient background (light glassmorphic navbar)
- White text with subtle shadows for contrast
- Dark icons in floating nav
- Full starfield visibility

**Dark Mode**:
- Deep indigo gradient background (dark glassmorphic navbar)  
- Light text for readability
- White icons in floating nav
- Reduced opacity effects for accessibility

All components adapt automatically when theme is toggled.

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. **Automatic Deployment**: Push to `main` branch triggers GitHub Actions workflow
2. **Build Process**: `npm run build` creates optimized production bundle
3. **Deployment**: Built files are automatically deployed to `gh-pages` branch
4. **Live Site**: Accessible at `https://karen6099.github.io`

**Environment Setup**:
- `.env.local` - Development environment (local `npm start`)
- `.env.production` - Production build (GitHub Pages deployment)

### Manual Local Build

To test the production build locally:

```bash
npm run build
npm install -g serve
serve -s build -l 3000
```

Then visit `http://localhost:3000`

## 🧪 Testing

### Quick Local Testing

```bash
# 1. Start dev server
npm start

# 2. Open http://localhost:3000 in your browser
# 3. Test all features locally
# 4. Check console for errors (F12)
```

### Feature Testing Checklist

**Visual Elements**:
- [ ] Gradient background displays correctly
- [ ] Starfield falling stars animate smoothly
- [ ] DVD logo bounces and changes colors
- [ ] Floating nav bar visible at bottom
- [ ] All text is readable

**Navigation & Links**:
- [ ] Navbar links scroll to correct sections (Home, About, Flights, Contact)
- [ ] Floating nav Home button scrolls to top
- [ ] GitHub and LinkedIn links open in new tabs
- [ ] Flightradar24 iframe loads

**Dark Mode Toggle**:
- [ ] Light mode shows white text on gradient
- [ ] Dark mode applies to all components
- [ ] Theme persists after page reload
- [ ] Toggle button works smoothly

**Animation Toggles** (Floating Nav):
- [ ] DVD toggle hides/shows bouncing logo
- [ ] Starfield toggle hides/shows falling stars
- [ ] Dark mode toggle switches themes
- [ ] No console errors on any toggle

**Responsive Design**:
- [ ] Mobile (375px): All content visible
- [ ] Tablet (768px): Sections properly spaced
- [ ] Desktop (1200px+): Full layout displays
- [ ] Floating nav visible on all sizes

### Pre-Deployment Testing

```bash
# 1. Start dev server and test all features
npm start
# Visit http://localhost:3000 and verify everything

# 2. Check for console errors
# Press F12 → Console tab → should see no red errors

# 3. Build for production
npm run build

# 4. Stop dev server (Ctrl+C)

# 5. If satisfied, commit and push
git add .
git commit -m "Your message"
git push origin main
```

### GitHub Actions Verification

After pushing to GitHub:

1. Go to your repository Actions tab
2. Look for your commit - status shows 🟡 (building), ✅ (success), or ❌ (failed)
3. Wait 2-3 minutes for GitHub Pages to update
4. Visit `https://karen6099.github.io` to verify live changes
5. Hard refresh (Ctrl+Shift+Delete then Ctrl+F5) to clear cache if needed

### Troubleshooting

- **npm start fails**: Use cmd.exe or Git Bash instead of PowerShell
- **Port 3000 in use**: Let npm use a different port or kill the process
- **Module errors**: Run `npm install` again
- **Dark mode broken**: Clear localStorage in DevTools (Application tab)

## 📱 Responsive Breakpoints

- **Mobile**: max-width 480px
- **Tablet**: max-width 768px
- **Desktop**: 1200px and above

All animations and interactive elements scale appropriately for each breakpoint.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Karen**
- GitHub: [@karen6099](https://github.com/karen6099)
- LinkedIn: [Karen Lau](https://linkedin.com/in/karenlauhl)

---

**Last Updated**: November 2025
