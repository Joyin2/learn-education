# WhyChooseUSA Component

## Overview
The WhyChooseUSA component is a feature section specifically designed for the USA Universities page. It explains the benefits of studying in the United States and highlights key advantages through an engaging visual layout with the USA flag SVG image.

## Features

### Visual Design
- **USA-themed gradient**: Blue and red gradient background reflecting American flag colors
- **Animated background elements**: Floating shapes with patriotic color gradients
- **Two-column layout**: Content on the left, image on the right (responsive)
- **Interactive animations**: Scroll-triggered animations for enhanced user experience

### Content Structure
- **Section title**: "Why choose USA?" with blue and red gradient typography
- **Descriptive text**: Comprehensive explanation of USA education benefits
- **Feature cards**: Three key advantages with icons and descriptions
- **USA flag image**: Visual representation from Supabase storage
- **Floating statistics**: "4,000+ Universities" stat card

### Key Features Highlighted
1. **Prestigious Universities**: Access to world-renowned institutions
2. **Cutting-edge Research Opportunities**: Participation in groundbreaking research
3. **Cultural Diversity and Vibrant Campus Life**: Multicultural environment

## Usage

### Basic Implementation
```tsx
import WhyChooseUSA from '@/components/WhyChooseUSA';

export default function USAUniversitiesPage() {
  return (
    <div>
      <USAUniversitiesHero />
      <WhyChooseUSA />
      <Footer />
    </div>
  );
}
```

### Page Integration
The component is designed to be placed after the USAUniversitiesHero component on the USA Universities page, providing detailed information about studying in the USA.

## Styling Architecture

### CSS Module Classes
- `.whyChooseUSASection` - Main section container with patriotic gradient
- `.backgroundElements` - Container for animated background shapes
- `.contentWrapper` - Grid layout wrapper for responsive design
- `.leftContent` - Text content and features container
- `.rightContent` - Image and statistics container
- `.featuresGrid` - Feature cards layout
- `.featureItem` - Individual feature card styling
- `.imageContainer` - USA flag image wrapper with effects

### Color Scheme
- **Primary gradient**: Dark slate with patriotic accents
- **Feature cards**: Semi-transparent with blue borders on hover
- **Text colors**: White and light gray for readability
- **Accent colors**: Blue (`#1e3a8a`) and Red (`#dc2626`) throughout

### Responsive Design
- **Mobile-first approach**: Optimized for mobile devices
- **Grid layout**: Single column on mobile, two columns on desktop
- **Breakpoint at 1024px**: Layout switches to side-by-side design
- **Flexible typography**: Scales appropriately across screen sizes

## Interactive Features

### Scroll Animations
- **Intersection Observer**: Triggers animations when section comes into view
- **Staggered animations**: Feature cards animate with delays
- **Smooth transitions**: CSS transitions for hover effects

### Hover Effects
- **Feature cards**: Lift and glow effects on hover
- **Image scaling**: USA flag image scales slightly on hover
- **Icon gradients**: Feature icons have patriotic gradient backgrounds

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Descriptive alt text for the USA flag image
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: Proper focus indicators
- **Color contrast**: High contrast text for readability

## Performance Considerations
- **CSS Modules**: Scoped styling prevents conflicts
- **Lazy loading**: Image is loaded lazily for better performance
- **Optimized animations**: GPU-accelerated transforms
- **Intersection Observer**: Efficient scroll-based animations

## Content Details

### Main Description
"Studying in the USA offers unparalleled access to world-renowned universities, cutting-edge research facilities, and diverse academic programs. The US higher education system is celebrated for its flexibility, allowing students to explore various subjects before selecting a major. With over 4,000 colleges and universities, students can find the perfect match for their academic interests, career goals, and personal preferences."

### Feature Icons
- **University**: `fa-solid fa-university`
- **Research**: `fa-solid fa-flask`
- **Diversity**: `fa-solid fa-users`

## Customization

### Content Updates
To modify the content, edit the JSX in `WhyChooseUSA.tsx`:
- Update feature descriptions
- Modify statistics
- Change section description

### Styling Changes
Modify `WhyChooseUSA.module.css` for visual updates:
- Adjust gradient colors
- Modify animation timing
- Update typography scales
- Change card styling

### Image Source
The USA flag image is loaded from Supabase storage:
```
https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//usa.svg
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
- Graceful degradation for older browsers

## Dependencies
- React hooks (useState, useEffect)
- Intersection Observer API
- Font Awesome icons for feature cards
- CSS Modules for scoped styling

## Related Components
- **USAUniversitiesHero**: Hero section for USA universities page
- **WhyChooseUK**: Similar component for UK universities
- **Footer**: Page footer component
