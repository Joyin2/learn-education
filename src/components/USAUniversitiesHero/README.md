# USAUniversitiesHero Component

## Overview
The USAUniversitiesHero component is a hero section specifically designed for the USA Universities page. It follows the same design pattern and structure as the UKUniversitiesHero component but with USA-specific content and styling.

## Features

### Visual Design
- **USA-themed gradient**: Blue and red gradient background reflecting American flag colors
- **Stars and Stripes pattern**: Subtle American flag-inspired background pattern
- **Animated background elements**: Floating circles with alternating blue and red accent colors
- **Responsive typography**: Scalable text that adapts to different screen sizes

### Content Structure
- **Trust badge**: "Trusted by 1000+ Students" with graduation cap icon
- **Main heading**: Multi-line title with gradient text effects
  - "USA Universities"
  - "50+ Partner Universities" 
  - "Across United States"
  - "World-Class Education"
- **Call-to-action buttons**: Two prominent buttons for user engagement

### Interactive Elements
- **Explore Universities button**: Links to universities section on the page
- **Free Consultation button**: Redirects to contact page for inquiries
- **Hover animations**: Button hover effects with icon translations
- **Responsive behavior**: Adapts layout for mobile and desktop

## Usage

### Basic Implementation
```tsx
import USAUniversitiesHero from '@/components/USAUniversitiesHero';

export default function USAUniversitiesPage() {
  return (
    <div>
      <USAUniversitiesHero />
      {/* Other page components */}
    </div>
  );
}
```

### Page Integration
The component is designed to be the first component on the USA Universities page, similar to how UKUniversitiesHero is used on the UK Universities page.

## Styling Architecture

### CSS Module Classes
- `.usaHeroSection` - Main hero container with USA-themed gradient
- `.heroBgElements` - Container for animated background elements
- `.heroGradientOverlay` - Gradient overlay layer
- `.starsStripesPattern` - American flag-inspired background pattern
- `.container` - Content wrapper with responsive layout
- `.heroContent` - Main content container
- `.heroTitle` - Title styling with gradient text effects
- `.ctaContainer` - Button container with responsive layout
- `.primaryBtn` / `.secondaryBtn` - CTA button styles with USA colors

### Color Scheme
- **Primary gradient**: Multi-color American flag theme (`#0f1419` → `#1e3a8a` → `#dc2626` → `#1e3a8a` → `#0f1419`)
- **Accent colors**: Blue (`#1e3a8a`) and Red (`#dc2626`) alternating throughout design
- **Text colors**: White and light gray for readability with blue/red gradient highlights
- **Background elements**: Alternating blue and red semi-transparent floating elements

### Responsive Design
- **Mobile-first approach**: Optimized for mobile devices
- **Breakpoint at 640px**: Button layout changes from vertical to horizontal
- **Breakpoint at 768px**: Typography scaling for medium screens
- **Breakpoint at 1024px**: Full desktop layout with larger typography

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **ARIA labels**: Screen reader friendly
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: Proper focus indicators
- **Color contrast**: High contrast text for readability

## Performance Considerations
- **CSS Modules**: Scoped styling prevents conflicts
- **Optimized animations**: GPU-accelerated transforms
- **Minimal dependencies**: Only uses Font Awesome icons
- **Responsive images**: Background patterns are SVG-based

## Customization

### Content Updates
To modify the content, edit the JSX in `USAUniversitiesHero.tsx`:
- Update partner university count
- Modify location text
- Change trust badge content

### Styling Changes
Modify `USAUniversitiesHero.module.css` for visual updates:
- Adjust gradient colors
- Modify animation timing
- Update typography scales
- Change button styling

### Background Pattern
The stars and stripes pattern can be customized by modifying the SVG in the `.starsStripesPattern` class.

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
- Graceful degradation for older browsers

## Dependencies
- Font Awesome icons for button icons
- CSS Modules for scoped styling
- Next.js for component structure

## Related Components
- **UKUniversitiesHero**: Sister component for UK universities
- **Hero**: Main homepage hero component
- **Navbar**: Navigation component with universities dropdown
- **Footer**: Page footer component
