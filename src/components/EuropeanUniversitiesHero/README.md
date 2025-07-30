# European Universities Hero Component

## Overview
A specialized hero section component for the European Universities page featuring European-themed styling, animations, and call-to-action elements built with Next.js, TypeScript, and CSS modules.

## Files
- `EuropeanUniversitiesHero.tsx` - Main component file
- `EuropeanUniversitiesHero.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports
- `README.md` - Component documentation

## Features

### Visual Design
- **European-themed Gradient**: Professional blue gradient representing European unity
- **Animated Background Elements**: Floating circles with blue color scheme
- **European Stars Pattern**: Twinkling blue star elements for visual appeal
- **Glassmorphism Effects**: Modern badge styling with backdrop blur
- **Responsive Design**: Adapts to all screen sizes

### Content Structure
- **Trust Badge**: "Trusted by 1000+ Students" with graduation cap icon
- **Multi-line Title**:
  - "European Universities"
  - "25+ Partner Universities" (highlighted in blue)
  - "Across Europe"
  - "World-Class Education"
- **Call-to-Action Buttons**:
  - Primary: "Explore Universities" (blue gradient)
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
- **Primary**: European blue (#1e3a8a, #3b82f6)
- **Accent**: Light blue (#60a5fa, #2563eb)
- **Background**: Dark gradient with blue highlights
- **Text**: White and light gray for contrast

## Usage

### Import
```typescript
import EuropeanUniversitiesHero from '@/components/EuropeanUniversitiesHero';
```

### Implementation
```typescript
export default function EuropeanUniversitiesPage() {
  return (
    <div>
      <EuropeanUniversitiesHero />
      {/* Other page content */}
    </div>
  );
}
```

### Customization

#### Content Updates
Edit the content directly in `EuropeanUniversitiesHero.tsx`:

```typescript
// Update partner count
<span className={styles.titleHighlight}>25+ Partner Universities</span>

// Update trust badge
<span className={styles.trustText}>Trusted by 1000+ Students</span>
```

#### Styling Changes
Modify styles in `EuropeanUniversitiesHero.module.css`:

```css
.europeanHeroSection {
  background: your-custom-gradient;
  /* Other custom styles */
}
```

## Styling Architecture

### CSS Module Classes
- `.europeanHeroSection` - Main hero container with European gradient
- `.heroBgElements` - Animated background elements container
- `.heroGradientOverlay` - Gradient overlay layer
- `.europeanStarsPattern` - European star decorations
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
- **USAUniversitiesHero**: Sister component for USA universities
- **UKUniversitiesHero**: Sister component for UK universities
- **Hero**: Main homepage hero component
- **Navbar**: Navigation component with universities dropdown
