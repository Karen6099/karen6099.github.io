# React Migration Setup Guide

Your portfolio has been successfully converted to a React application! Follow these steps to get started:

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

This will open your portfolio at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

This builds and deploys your portfolio to GitHub Pages (ensure `homepage` in package.json matches your GitHub Pages URL).

## Project Structure

```
src/
├── components/
│   ├── Navbar/           # Navigation bar component
│   ├── Hero/             # Hero section
│   ├── About/            # About section
│   ├── Projects/         # Projects section with ProjectCard
│   ├── Skills/           # Skills section with SkillCategory
│   ├── Contact/          # Contact section
│   ├── FloatingNav/      # Floating navigation bar
│   └── Animations/       # DVD and StarField animations
├── hooks/
│   ├── useDarkMode.js    # Dark mode state management
│   └── useScrollAnimation.js  # Scroll animation hook
├── contexts/
│   └── ThemeContext.jsx  # Theme context provider
├── App.jsx               # Main app component
├── App.css               # Global styles
└── index.js              # React entry point

public/
├── index.html            # HTML template
└── dvd.svg               # DVD logo asset

```

## Features

✨ **Animations**
- Bouncing DVD logo with physics-based movement
- Falling starfield background
- Scroll-triggered fade-in animations

🎨 **Design**
- Glassmorphic UI with backdrop blur effects
- Responsive design (mobile, tablet, desktop)
- Dark mode with localStorage persistence
- Modern gradient colors

🧩 **Components**
- Modular, reusable React components
- Custom hooks for common patterns
- Context API for theme management

## Customization

### Change Portfolio Content

**Edit `src/components/Projects/Projects.jsx`** to add your projects:
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    link: 'https://project-link.com'
  },
  // Add more projects
];
```

**Edit `src/components/Skills/Skills.jsx`** to add your skills:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  // Add more categories
];
```

**Update contact links in `src/components/Contact/Contact.jsx`**

### Change Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --color-primary: #667eea;      /* Main gradient start */
  --color-secondary: #764ba2;    /* Main gradient end */
  --color-text: #2d3748;         /* Text color */
  --color-bg: #ffffff;           /* Background */
}

[data-theme="dark"] {
  --color-text: #e2e8f0;
  --color-bg: #0f172a;
}
```

### Disable Animations

Remove `<DVD />` and/or `<StarField />` from `src/App.jsx` if you prefer not to have those animations.

## Performance Tips

1. **Code Splitting**: React automatically code-splits components
2. **Lazy Loading**: Import heavy components with `React.lazy()` if needed
3. **Image Optimization**: Compress assets in `public/` folder
4. **Build Size**: Run `npm run build` to see actual bundle size

## Browser Support

The portfolio works on:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 9+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deploy on GitHub Pages

The portfolio is configured to deploy on GitHub Pages:

1. Ensure your repository is named `<username>.github.io` or set `homepage` correctly in `package.json`
2. Run `npm run deploy`
3. Your portfolio will be live at `https://<username>.github.io`

## Troubleshooting

**Issue: Animations not working**
- Check that `src/components/Animations/` contains `DVD.jsx` and `StarField.jsx`
- Verify these components are imported in `src/App.jsx`

**Issue: Dark mode not persisting**
- Clear browser localStorage and cache
- Check browser dev console for errors

**Issue: Styling looks off**
- Ensure all `.css` files are in the correct component folders
- Run `npm start` to rebuild

## Next Steps

1. Update your contact information in `src/components/Contact/Contact.jsx`
2. Add your real projects to `src/components/Projects/Projects.jsx`
3. Update skills in `src/components/Skills/Skills.jsx`
4. Customize colors in `src/App.css`
5. Deploy with `npm run deploy`

Happy coding! 🚀
