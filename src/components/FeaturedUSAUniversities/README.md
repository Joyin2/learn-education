# FeaturedUSAUniversities Component

## Overview
The FeaturedUSAUniversities component showcases six prestigious American universities with detailed information, images, and statistics. It's designed specifically for the USA Universities page to help students explore partner institutions.

## Features

### Visual Design
- **Patriotic color scheme**: Blue and red gradients throughout the design
- **University cards**: Individual cards for each university with hover effects
- **Responsive grid**: Adapts from 3 columns on desktop to 1 column on mobile
- **Animated backgrounds**: Floating patriotic shapes with smooth animations

### University Information
Each university card displays:
- **University image**: High-quality photos from Supabase storage
- **Colored badges**: Different badge colors for university categories
- **Location**: State and country information
- **Statistics**: Courses, ranking, international students, tuition
- **Learn More button**: Redirects to contact page for inquiries

### Featured Universities
1. **Harvard University** (Elite - Gold badge)
2. **Yale University** (Featured - Blue badge)
3. **Stanford University** (Top Rated - Red badge)
4. **Columbia University** (Prestigious - Purple badge)
5. **University of Chicago** (Research - Green badge)
6. **MIT** (Innovation - Orange badge)

## Usage

### Basic Implementation
```tsx
import FeaturedUSAUniversities from '@/components/FeaturedUSAUniversities';

export default function USAUniversitiesPage() {
  return (
    <div>
      <USAUniversitiesHero />
      <WhyChooseUSA />
      <FeaturedUSAUniversities />
      <Footer />
    </div>
  );
}
```

### Page Integration
The component is designed to be placed after the WhyChooseUSA component on the USA Universities page, providing detailed university options for prospective students.

## Styling Architecture

### CSS Module Classes
- `.featuredSection` - Main section container with patriotic gradient
- `.universitiesGrid` - Responsive grid layout for university cards
- `.universityCard` - Individual university card styling with hover effects
- `.universityBadge` - Colored badges for university categories
- `.universityImage` - Image container with overlay and zoom effects
- `.universityContent` - Text content and statistics container
- `.universityStats` - Statistics layout with icons
- `.learnMoreBtn` - Call-to-action button styling

### Badge Colors
- **Gold**: Elite universities (Harvard)
- **Blue**: Featured universities (Yale)
- **Red**: Top rated universities (Stanford)
- **Purple**: Prestigious universities (Columbia)
- **Green**: Research universities (Chicago)
- **Orange**: Innovation universities (MIT)

### Responsive Design
- **Desktop (1200px+)**: 3 columns grid layout
- **Tablet (768px-1199px)**: 2 columns grid layout
- **Mobile (< 768px)**: Single column layout
- **Card sizing**: Minimum 380px width, maximum responsive

## Interactive Features

### Hover Effects
- **Card elevation**: Cards lift up on hover with enhanced shadows
- **Image zoom**: University images scale slightly on hover
- **Button animations**: Learn More buttons have icon slide effects
- **Border glow**: Cards get blue border glow on hover

### Scroll Animations
- **Intersection Observer**: Triggers animations when section comes into view
- **Staggered entrance**: Cards animate in with sequential delays
- **Smooth transitions**: CSS transitions for all interactive elements

## University Data Structure

### University Object
```tsx
{
  id: string,
  name: string,
  shortName?: string, // For MIT display
  badge: string,
  badgeColor: string,
  location: string,
  courses: string,
  ranking: string,
  students: string,
  tuition: string,
  image: string
}
```

### Statistics Icons
- **Courses**: `fa-solid fa-book`
- **Ranking**: `fa-solid fa-trophy`
- **Students**: `fa-solid fa-users`
- **Tuition**: `fa-solid fa-dollar-sign`
- **Location**: `fa-solid fa-map-marker-alt`

## Image Sources
All university images are hosted on Supabase storage:
- **Harvard**: `harvard.jpg`
- **Yale**: `yale-university-landscape-universities-schools-159490.jpeg`
- **Stanford**: `stanford.jpeg`
- **Columbia**: `columbia.jpg`
- **Chicago**: `chicago.jpeg`
- **MIT**: `mit.jpg`

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Descriptive alt text for all university images
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: Proper focus indicators for buttons
- **Color contrast**: High contrast text for readability
- **Screen reader friendly**: Proper ARIA labels and structure

## Performance Considerations
- **Lazy loading**: All images use lazy loading for better performance
- **CSS Modules**: Scoped styling prevents conflicts
- **Optimized animations**: GPU-accelerated transforms
- **Intersection Observer**: Efficient scroll-based animations
- **Responsive images**: Images adapt to container sizes

## Customization

### Adding New Universities
To add more universities, extend the `universities` array in the component:
```tsx
{
  id: 'new-university',
  name: 'New University',
  badge: 'Excellence',
  badgeColor: 'blue',
  location: 'State, USA',
  courses: 'XXX+ Courses',
  ranking: 'World Ranking: Top XX',
  students: 'International Students: X,XXX+',
  tuition: 'Starting from $XX,XXX/year',
  image: 'image-url'
}
```

### Styling Changes
Modify `FeaturedUSAUniversities.module.css` for visual updates:
- Adjust grid layout and spacing
- Modify card styling and hover effects
- Update badge colors and gradients
- Change animation timing and effects

### Content Updates
Update university information by modifying the data in the component:
- Change statistics and rankings
- Update tuition fees
- Modify course counts
- Update student numbers

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
- Graceful degradation for older browsers

## Dependencies
- React hooks (useState, useEffect)
- Intersection Observer API
- Font Awesome icons for statistics
- CSS Modules for scoped styling
- Supabase storage for university images

## Related Components
- **USAUniversitiesHero**: Hero section for USA universities page
- **WhyChooseUSA**: Benefits section for studying in USA
- **Footer**: Page footer component
- **UKUniversitiesHero**: Similar component for UK universities
