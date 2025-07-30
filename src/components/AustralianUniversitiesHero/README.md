# Australian Universities Hero Component

## Overview
A specialized hero section component for the Australian Universities page featuring Australian-themed styling, animations, and call-to-action elements built with Next.js, TypeScript, and CSS modules.

## Files
- `AustralianUniversitiesHero.tsx` - Main component file
- `AustralianUniversitiesHero.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports
- `README.md` - Component documentation

## Features

### Visual Design
- **Australian-themed Gradient**: Blue and red gradient representing Australian flag colors
- **Animated Background Elements**: Floating circles with Australian color scheme
- **Australian Stars Pattern**: Twinkling red star elements for visual appeal
- **Glassmorphism Effects**: Modern badge styling with backdrop blur
- **Responsive Design**: Adapts to all screen sizes

### Content Structure
- **Trust Badge**: "Trusted by 1000+ Students" with graduation cap icon
- **Multi-line Title**: 
  - "Australian Universities"
  - "20+ Partner Universities" (highlighted in red)
  - "Across Australia"
  - "World-Class Education"
- **Call-to-Action Buttons**: 
  - Primary: "Explore Universities" (red gradient)
  - Secondary: "Free Consultation" (glass effect)

### Interactive Elements
- **Hover Effects**: Button transforms and enhanced shadows
- **Smooth Animations**: Staggered fade-in animations for content
- **Floating Background**: Subtle movement animations
- **Responsive Layout**: Mobile-optimized button stacking

## Technical Implementation

### Technologies Used
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **CSS Animations** for floating and fade effects
- **Font Awesome** icons for buttons

### Animations
1. **Float Animation**: Subtle up-down movement for background elements
2. **Fade In Up**: Staggered entrance animations for content
3. **Twinkle Animation**: Star elements with scale and opacity changes
4. **Hover Transforms**: Button lift effects with enhanced shadows

### Color Scheme
- **Primary**: Australian blue (#1e3a8a)
- **Accent**: Australian red (#dc2626, #b91c1c)
- **Background**: Dark gradient with blue and red highlights
- **Text**: White and light gray for contrast

## Usage

### Import
```typescript
import AustralianUniversitiesHero from '@/components/AustralianUniversitiesHero';
```

### Implementation
```typescript
export default function AustralianUniversitiesPage() {
  return (
    <div>
      <AustralianUniversitiesHero />
      {/* Other page content */}
    </div>
  );
}
```

### Customization

#### Content Updates
Edit the content directly in `AustralianUniversitiesHero.tsx`:

```typescript
// Update partner count
<span className={styles.titleHighlight}>20+ Partner Universities</span>

// Update trust badge
<span className={styles.trustText}>Trusted by 1000+ Students</span>
```

#### Styling Changes
Modify styles in `AustralianUniversitiesHero.module.css`:

```css
.australianHeroSection {
  background: your-custom-gradient;
  /* Other custom styles */
}
```

## Styling Architecture

### CSS Module Classes
- `.australianHeroSection` - Main hero container with Australian gradient
- `.heroBgElements` - Animated background elements container
- `.heroGradientOverlay` - Gradient overlay layer
- `.australianStarsPattern` - Australian star decorations
- `.heroContent` - Main content wrapper
- `.heroTitle` - Title container with multiple spans
- `.ctaContainer` - Button container with flex layout

### Animation Classes
- `@keyframes float` - Floating animation for background elements
- `@keyframes fadeInUp` - Entrance animation for content
- `@keyframes twinkle` - Star twinkling animation
- Hover effects for interactive elements

### Responsive Utilities
- Mobile-first responsive design
- Flexible typography with `clamp()` functions
- Adaptive button layouts for different screen sizes

## Performance Considerations
- **CSS Modules**: Scoped styles prevent conflicts
- **Optimized Animations**: Hardware-accelerated transforms
- **Responsive Images**: Scalable vector icons
- **Minimal Dependencies**: Pure CSS animations

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy
- **Color Contrast**: High contrast text on background
- **Focus States**: Keyboard navigation support
- **Screen Reader**: Descriptive alt text and labels

## Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS Features**: Backdrop-filter, CSS Grid, Flexbox
- **Fallbacks**: Graceful degradation for older browsers

## Related Components
- **EuropeanUniversitiesHero**: Sister component for European universities
- **USAUniversitiesHero**: Sister component for USA universities
- **Hero**: Main homepage hero component
- **Navbar**: Navigation component with universities dropdown
