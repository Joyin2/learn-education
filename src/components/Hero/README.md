# Hero Component

## Overview
An enhanced hero section component for the Learn Education website featuring stunning visuals, animations, and call-to-action elements built with Next.js, TypeScript, and CSS modules.

## Files
- `Hero.tsx` - Main component file
- `Hero.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports

## Features

### Visual Design
- **Gradient Background**: Dark-to-blue gradient (`#0f1419 → #1a2332 → #2b70fa`)
- **Animated Elements**: Floating background elements with subtle animations
- **Glassmorphism Effects**: Modern badge styling with backdrop blur
- **3D Image Effects**: Perspective transforms and hover animations

### Content Sections
1. **Trust Badge**: "Trusted by 1000+ Students" with glassmorphism styling
2. **Subtitle**: "Your Education Journey Begins Here"
3. **University Links**: Quick links to different country universities
4. **Main Title**: Large, prominent heading with golden accent
5. **Description**: Detailed paragraph about services
6. **Feature List**: 6 key service features with icons
7. **CTA Buttons**: Primary and secondary call-to-action buttons
8. **Hero Image**: Student celebration image with 3D effects
9. **Stats Badges**: Success rate and student placement statistics

### Interactive Elements
- **Hover Effects**: Image transforms and button animations
- **Responsive Design**: Adapts to all screen sizes
- **Smooth Transitions**: Professional animation timing
- **Accessibility**: Proper semantic HTML structure

## Technical Implementation

### Technologies Used
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **CSS Animations** for floating and pulse effects
- **Font Awesome** icons for feature list

### Animations
1. **Float Animation**: Subtle up-down movement for background elements
2. **Pulse Animation**: Scale and opacity changes for accent elements
3. **Hover Transforms**: 3D perspective effects on image
4. **Button Animations**: Lift effects with enhanced shadows

### Responsive Breakpoints
- **Desktop**: Full two-column layout
- **Tablet**: Stacked layout with adjusted typography
- **Mobile**: Single column with optimized button layout

## Usage

### Import
```typescript
import Hero from '@/components/Hero';
```

### Implementation
```typescript
export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
```

### Customization

#### Content Updates
Edit the content directly in `Hero.tsx`:

```typescript
// Update title
<h1 className={`${styles.heroTitle} ${styles.textWhite} ${styles.mb25}`}>
  Your Custom Title Here
</h1>

// Update features
<ul>
  <li><i className="fa-solid fa-check"></i> Your Feature Here</li>
  // Add more features
</ul>
```

#### Styling Changes
Modify styles in `Hero.module.css`:

```css
.enhancedHeroSection {
  background: your-custom-gradient;
  /* Other custom styles */
}
```

## Styling Architecture

### CSS Module Classes
- `.enhancedHeroSection` - Main hero container
- `.heroGradientOverlay` - Gradient overlay layer
- `.heroBgElements` - Animated background elements
- `.heroContent` - Content wrapper
- `.heroTitle` - Main heading styles
- `.btnPrimary` / `.btnSecondary` - CTA button styles
- `.heroImageContainer` - Image wrapper with effects

### Animation Classes
- `@keyframes float` - Floating animation for background elements
- `@keyframes pulse` - Pulsing animation for accent elements
- Hover effects for interactive elements

### Responsive Utilities
- `.colLg7` / `.colLg5` - Grid column classes
- `.dNone` / `.dLgBlock` - Display utilities
- Media queries for different screen sizes

## Performance Considerations

- **CSS Modules**: Scoped styles prevent conflicts
- **Optimized Animations**: Hardware-accelerated transforms
- **Responsive Images**: Proper image sizing and loading
- **Minimal DOM**: Efficient HTML structure

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS animations and transforms
- Backdrop-filter support for glassmorphism effects
- Responsive design for all device sizes

## Dependencies

- Font Awesome icons for feature list
- CSS modules for styling
- No external animation libraries required
