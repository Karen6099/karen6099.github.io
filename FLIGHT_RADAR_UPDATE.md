# Flight Radar 24 Section Added! ✈️

## What's New

I've added a new **Flight Radar 24 tracking section** to your portfolio right after the Skills section!

### Section Features:

✈️ **Embedded Flight Tracker**
- Live Flightradar24 map embedded in your portfolio
- Shows your flight tracking profile in real-time
- Fully responsive and mobile-friendly

📍 **How It Works**
- The section displays your personal Flightradar24 feed: `https://my.flightradar24.com/Karen6099`
- Visitors can see your flight tracking data directly on your portfolio
- They can also click "View on Flightradar24" to visit your full profile

🎨 **Design**
- Matches your glassmorphic portfolio style
- Glassmorphic container with backdrop blur
- Gradient background matching your theme
- Fully responsive on all device sizes
- Dark mode compatible

### Files Modified:

1. **index.html**
   - Added new `<section id="flights">` after Skills
   - Added "Flights" link to navigation menu
   - Embedded iframe with Flightradar24 profile
   - Added button link to view full profile

2. **styles/style.css**
   - Added `.flights` section styling
   - Added `.flight-radar-container` styling
   - Added responsive breakpoints for mobile/tablet/desktop
   - Styled with glassmorphism effects and dark mode support

### Section Details:

**HTML Structure:**
```html
<section id="flights" class="flights">
    <div class="container">
        <h2>Flight Tracking</h2>
        <p>Follow my flights and travel adventures</p>
        <div class="flight-radar-container">
            <iframe 
                title="Flightradar24 Flight Tracker - Karen6099"
                src="https://my.flightradar24.com/Karen6099" 
                width="100%" 
                height="600"
                ...>
            </iframe>
            <p class="radar-link">
                <a href="https://my.flightradar24.com/Karen6099" target="_blank" class="btn btn-secondary">
                    View on Flightradar24 →
                </a>
            </p>
        </div>
    </div>
</section>
```

### Navigation:
The Flights section is now included in your navbar menu, allowing visitors to:
- Click "Flights" in the top navbar to scroll to the section
- View your live flight tracking data
- Click the button to visit your full Flightradar24 profile

### Responsive Behavior:

**Desktop (>768px):**
- 600px height iframe
- Full container width
- Glassmorphic styling

**Tablet (480px - 768px):**
- 400px height iframe
- Scaled padding

**Mobile (<480px):**
- 300px height iframe
- Reduced padding
- Optimized text sizes

### Dark Mode:
The Flight Radar section automatically adapts to dark mode:
- Background adjusts to dark theme colors
- Text colors update for visibility
- Glassmorphic effects maintained

### Customization:

**Change the Flightradar24 Profile:**
Edit the iframe `src` in `index.html` line ~134:
```html
<iframe src="https://my.flightradar24.com/YOUR_USERNAME">
```

**Change Height:**
Edit the iframe height in `index.html`:
```html
height="600"  <!-- Change to your preferred height -->
```

Or in `styles/style.css`:
```css
.flight-radar-container iframe {
    height: 600px;  /* Change here */
}
```

**Change Section Title/Description:**
Edit in `index.html` lines 128-129:
```html
<h2>Flight Tracking</h2>
<p>Follow my flights and travel adventures</p>
```

### Browser Support:
✅ Chrome/Edge  
✅ Firefox  
✅ Safari  
✅ Mobile browsers  
(Depends on Flightradar24 iframe compatibility)

### Notes:

⚠️ **Important**: Make sure your Flightradar24 profile URL is publicly accessible
- Visit https://my.flightradar24.com/Karen6099 to verify
- If private, visitors won't see the flight data

💡 **Tip**: The iframe will display your live flight tracking data, showing:
- Current flights
- Flight history
- Aircraft information
- Real-time position data

### Section Location:
```
Navbar → Hero → About → Projects → Skills → Flights → Contact → Footer
                                              ↑
                                            NEW!
```

---

**Your portfolio now features live Flight Radar 24 tracking!** ✈️✨
