# New Zealand Universities Hero Component

## Overview
A specialized hero section component for the New Zealand Universities page featuring New Zealand-themed styling, animations, and call-to-action elements built with Next.js, TypeScript, and CSS modules.

## Files
- `NewZealandUniversitiesHero.tsx` - Main component file
- `NewZealandUniversitiesHero.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports
- `README.md` - Component documentation

## Features

### Visual Design
- **New Zealand Theme**: Dark blue and red color scheme inspired by the New Zealand flag
- **Dark Gradient Background**: Deep, sophisticated gradient with darker New Zealand flag colors
- **Floating Elements**: Animated background elements with enhanced opacity for dark theme
- **Star Pattern**: Subtle twinkling stars in darker red tones
- **Glass Morphism**: Modern frosted glass effects optimized for dark backgrounds

### Content Structure
- **Trust Badge**: "Trusted by 1000+ Students" with shield icon
- **Hierarchical Title**: 
  - Main: "New Zealand Universities"
  - Highlight: "8+ Partner Universities" (in red gradient)
  - Location: "Across New Zealand"
  - Education: "World-Class Education"
- **Call-to-Action Buttons**:
  - Primary: "Explore Universities" (red gradient)
  - Secondary: "Free Consultation" (glass morphism)

### Animations
- **Staggered Entrance**: Elements animate in sequence with fadeInUp
- **Floating Background**: Continuous floating animation for background elements
- **Twinkling Stars**: Subtle star animations
- **Hover Effects**: Transform and shadow effects on buttons

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Flexible Typography**: Clamp-based font sizing
- **Adaptive Layout**: Stacked buttons on mobile
- **Touch-Friendly**: Appropriate button sizes for mobile interaction

## Usage

### Basic Implementation
```tsx
import NewZealandUniversitiesHero from '@/components/NewZealandUniversitiesHero';

export default function NewZealandUniversitiesPage() {
  return (
    <div>
      <NewZealandUniversitiesHero />
      {/* Other page content */}
    </div>
  );
}
```

### Customization

#### Content Updates
Edit the content directly in `NewZealandUniversitiesHero.tsx`:

```typescript
// Update partner count
<span className={styles.titleHighlight}>8+ Partner Universities</span>

// Update trust badge
<span className={styles.trustText}>Trusted by 1000+ Students</span>
```

#### Styling Changes
Modify styles in `NewZealandUniversitiesHero.module.css`:

```css
.newZealandHeroSection {
  background: your-custom-gradient;
  /* Other custom styles */
}
```

## Dependencies
- React 18+
- Next.js 13+
- Font Awesome (for icons)
- CSS Modules support

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance
- Optimized animations using CSS transforms
- Efficient CSS modules for scoped styling
- Minimal JavaScript footprint
- Responsive images and assets

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Color Palette
- **Primary Blue**: #002244 (Darker New Zealand flag blue)
- **Accent Red**: #dc2626 (Enhanced red for dark theme)
- **Background**: Deep dark gradient (#0a0f1c to #002244)
- **Text**: White and light gray variants optimized for dark backgrounds
- **Glass Elements**: Semi-transparent black overlays with blue accents
- **Cards**: Dark gradient backgrounds (#1e293b to #334155)
- **Borders**: Subtle blue and red accent borders
