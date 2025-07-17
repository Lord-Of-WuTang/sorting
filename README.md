# Sorting Visualizer

A stunning cyberpunk-themed bubble sort visualization built with HTML, CSS, and JavaScript. Watch as colorful bars dance through the sorting algorithm with smooth animations and futuristic visual effects.

## ✨ Features

- **Cyberpunk Aesthetic**: Dark gradient background with neon cyan and magenta accents
- **Animated Grid Background**: Moving grid pattern creates depth and motion
- **Real-time Sorting Animation**: Visual representation of bubble sort algorithm
- **Interactive Elements**: 
  - Hoverable bars with glow effects
  - Animated buttons with sweep effects
  - Particle system for ambient atmosphere
- **Responsive Design**: Adapts to different screen sizes
- **Color-coded States**:
  - 🔵 **Blue**: Default unsorted elements
  - 🟣 **Magenta**: Elements being compared
  - 🟡 **Yellow**: Elements being swapped
  - 🟢 **Green**: Sorted elements
- **Visual Effects**:
  - Glassmorphism container with backdrop blur
  - Animated border glow
  - Pulsing animations
  - Celebration animation on completion

## 🚀 How to Use

1. **Open the HTML file** in any modern web browser
2. **Generate Array**: Click to create a new random array of bars
3. **Sort Array**: Click to start the bubble sort animation
4. **Watch the Magic**: Observe as elements are compared, swapped, and sorted with visual feedback

## 🎮 Controls

- **Generate Array**: Creates a new randomized array (30 bars on mobile, 50 on desktop)
- **Sort Array**: Starts the bubble sort algorithm with animations
- **Hover Effects**: Hover over bars to see glow effects
- **Responsive**: Works on both desktop and mobile devices

## 🔧 Technical Details

### Algorithm
- **Bubble Sort**: O(n²) time complexity sorting algorithm
- **Animation Speed**: 50ms for comparisons, 100ms for swaps
- **Adaptive Size**: Array size adjusts based on screen width

### Technologies Used
- **HTML5**: Structure and semantic markup
- **CSS3**: 
  - Flexbox for layout
  - CSS Grid animations
  - Keyframe animations
  - Glassmorphism effects
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - Async/await for animation timing
  - DOM manipulation
  - Event listeners
  - Particle system

### Visual States
```css
.array-bar          /* Default blue bars */
.array-bar.comparing /* Magenta during comparison */
.array-bar.swapping  /* Yellow during swap */
.array-bar.sorted    /* Green when sorted */
```

## 🎨 Customization

### Modify Colors
Update the CSS custom properties or gradient values:
```css
/* Primary theme color */
color: #00ffff;  /* Cyan */

/* Comparison state */
background: linear-gradient(180deg, #ff00ff, #ff0080);

/* Sorted state */
background: linear-gradient(180deg, #00ff00, #008000);
```

### Adjust Animation Speed
Change the sleep duration in the JavaScript:
```javascript
await sleep(50);  // Comparison speed
await sleep(100); // Swap speed
```

### Array Size
Modify the array size generation:
```javascript
const arraySize = window.innerWidth < 900 ? 30 : 50;
```

## 🌟 Visual Effects Breakdown

1. **Animated Grid Background**: Moving cyberpunk-style grid pattern
2. **Glassmorphism Container**: Semi-transparent container with backdrop blur
3. **Animated Border**: Glowing gradient border that pulses
4. **Particle System**: Falling cyan particles for atmosphere
5. **Interactive Buttons**: Sweep animation and hover effects
6. **Bar Animations**: Smooth height transitions, glow effects, and state changes

## 📱 Responsive Features

- **Mobile Optimization**: Smaller array size and stacked button layout
- **Adaptive Sizing**: Container and bars adjust to screen width
- **Touch Friendly**: Buttons sized appropriately for touch interfaces

## 🎯 Educational Value

Perfect for:
- **Learning sorting algorithms** with visual feedback
- **Understanding bubble sort** step-by-step process
- **Web development education** showcasing CSS animations and JavaScript
- **Computer science demonstrations** in classrooms

## 🔮 Future Enhancements

Potential improvements you could add:
- Multiple sorting algorithms (Quick Sort, Merge Sort, etc.)
- Speed controls for animation
- Step-by-step mode
- Sound effects
- Algorithm complexity information
- Performance metrics display

## 🎪 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📄 License

This project is open source and available under the MIT License.

---

*Built by MOKA! with ❤️ and lots of neon lights* 🌈
