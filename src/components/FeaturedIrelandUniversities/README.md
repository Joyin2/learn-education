# FeaturedIrelandUniversities Component

## Overview
The `FeaturedIrelandUniversities` component showcases six premier Irish universities with detailed information cards, designed specifically for the Ireland Universities page. It provides prospective students with comprehensive university details including rankings, courses, international student numbers, and tuition fees.

## Features

### Visual Design
- **Irish-themed gradient background**: Green and orange accents reflecting the Irish flag
- **Glass-morphism cards**: Modern frosted glass effect with backdrop blur
- **Smooth animations**: Staggered slide-in animations for university cards
- **Hover effects**: Interactive card transformations and image scaling
- **Responsive grid layout**: Adapts from 3 columns to single column on mobile

### University Information
Each university card displays:
- **University image**: High-quality photos from Supabase storage
- **Colored badges**: Different badge colors for university categories
- **Location**: Irish city information
- **Statistics**: Courses, ranking, international students, tuition in Euros
- **Learn More button**: Call-to-action with hover animations

### Featured Universities
1. **Trinity College Dublin** (Elite - Gold badge)
2. **University College Dublin** (Research - Blue badge)
3. **University College Cork** (Innovation - Orange badge)
4. **NUI Galway** (Popular - Green badge)
5. **University of Limerick** (Top Rated - Red badge)
6. **Maynooth University** (Friendly - Purple badge)

## Usage

### Component Import
```tsx
import FeaturedIrelandUniversities from '@/components/FeaturedIrelandUniversities';
```

### Page Integration
```tsx
export default function IrelandUniversitiesPage() {
  return (
    <div>
      <IrelandUniversitiesHero />
      <WhyChooseIreland />
      <FeaturedIrelandUniversities />
      <Footer />
    </div>
  );
}
```

### Page Integration
The component is designed to be placed after the WhyChooseIreland component on the Ireland Universities page, providing detailed university options for prospective students.

## Styling Architecture

### CSS Module Classes
- `.featuredSection` - Main section container with Irish-themed gradient
- `.universitiesGrid` - Responsive grid layout for university cards
- `.universityCard` - Individual university card styling with hover effects
- `.universityBadge` - Colored badges for university categories
- `.universityImage` - Image container with overlay and zoom effects
- `.universityContent` - Text content and statistics container
- `.universityStats` - Statistics layout with icons
- `.learnMoreBtn` - Call-to-action button styling

### Color Scheme
- **Primary**: Irish green (#22c55e) and orange (#f97316)
- **Background**: Dark slate gradients (#0f172a, #1e293b)
- **Text**: Light slate (#f1f5f9, #cbd5e1)
- **Accents**: Various badge colors for university categories

### Badge Colors
- **Elite**: Gold gradient (#fbbf24 to #f59e0b)
- **Research**: Blue gradient (#3b82f6 to #1d4ed8)
- **Innovation**: Orange gradient (#f97316 to #ea580c)
- **Popular**: Green gradient (#22c55e to #16a34a)
- **Top Rated**: Red gradient (#ef4444 to #dc2626)
- **Friendly**: Purple gradient (#8b5cf6 to #7c3aed)

## Data Structure

### University Object
```tsx
{
  id: string,
  name: string,
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
- **Tuition**: `fa-solid fa-euro-sign`
- **Location**: `fa-solid fa-map-marker-alt`

## Image Sources
All university images are hosted on Supabase storage:
- **Trinity College Dublin**: `Trinity%20College%20Dublin.jpeg`
- **University College Dublin**: `University%20College%20Dublin.jpeg`
- **University College Cork**: `University%20College%20Cork.jpeg`
- **NUI Galway**: `NUI%20Galway%20.jpeg`
- **University of Limerick**: `University%20of%20Limerick.jpeg`
- **Maynooth University**: `Maynooth%20University.avif`

## Responsive Behavior

### Desktop (1200px+)
- 3-column grid layout
- Full-size cards with detailed information
- Hover animations and transformations

### Tablet (768px - 1199px)
- 2-column grid layout
- Slightly smaller cards
- Maintained hover effects

### Mobile (< 768px)
- Single column layout
- Stacked cards with full width
- Optimized padding and typography
- Reduced image height for better mobile viewing

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Descriptive alt text for all university images
- **Keyboard navigation**: Focusable buttons and interactive elements
- **Color contrast**: High contrast text for readability
- **Screen reader friendly**: Proper ARIA labels and semantic markup

## Performance Optimizations
- **Lazy loading**: Images load only when needed
- **CSS animations**: Hardware-accelerated transforms
- **Optimized images**: WebP/AVIF formats from Supabase
- **Efficient grid**: CSS Grid for optimal layout performance

## Customization

### Content Updates
To modify the content, edit the `universities` array in `FeaturedIrelandUniversities.tsx`:
- Update university information
- Modify statistics and rankings
- Change badge labels and colors
- Update image URLs

### Styling Modifications
- Edit badge colors in the CSS module
- Adjust grid layout and spacing
- Modify animation timings and effects
- Update color scheme and gradients

### Adding New Universities
To add more universities, extend the `universities` array in the component:
```tsx
{
  id: 'new-university',
  name: 'New University',
  badge: 'Excellence',
  badgeColor: 'excellence',
  location: 'City, Ireland',
  courses: 'XXX+ Courses',
  ranking: 'World Ranking: Top XX',
  students: 'International Students: X,XXX+',
  tuition: 'Starting from €XX,XXX/year',
  image: 'image-url'
}
```

## Dependencies
- **React**: Hooks for state management and effects
- **CSS Modules**: Scoped styling
- **Font Awesome**: Icons for statistics and UI elements
- **Next.js**: Framework features and optimizations
