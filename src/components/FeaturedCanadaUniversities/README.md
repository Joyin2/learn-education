# FeaturedCanadaUniversities Component

## Overview
The `FeaturedCanadaUniversities` component showcases top Canadian universities with detailed information about programs, rankings, international student populations, and tuition fees. It features a Canadian-themed design with red and white color accents, smooth animations, and responsive card layouts.

## Features

### Visual Design
- **Canadian-themed gradient background**: Red and white accents reflecting the Canadian flag
- **Responsive grid layout**: Auto-fit grid that adapts to different screen sizes
- **Interactive university cards**: Hover effects with image zoom and shadow animations
- **Smooth animations**: Staggered slide-in animations using Intersection Observer
- **Glass-morphism effects**: Modern frosted glass appearance with backdrop blur

### University Information
Each university card displays:
- **University name and badge**: Categorized badges (Top Ranked, Research, Historic, etc.)
- **Location**: City and province information
- **Program count**: Number of available programs
- **World ranking**: International ranking position
- **International students**: Number of international students
- **Tuition fees**: Starting tuition costs in CAD
- **High-quality images**: University campus photos from Supabase storage

### Interactive Elements
- **Learn More buttons**: Direct links to contact page for inquiries
- **Hover animations**: Card lift effects and image scaling
- **Responsive design**: Optimized for desktop, tablet, and mobile devices

## Usage

### Basic Implementation
```tsx
import FeaturedCanadaUniversities from '@/components/FeaturedCanadaUniversities';

export default function CanadaUniversitiesPage() {
  return (
    <div>
      <CanadaUniversitiesHero />
      <WhyChooseCanada />
      <FeaturedCanadaUniversities />
      <Footer />
    </div>
  );
}
```

### Page Integration
The component is designed to be placed after the WhyChooseCanada component on the Canada Universities page, providing detailed university options for prospective students.

## Styling Architecture

### CSS Module Classes
- `.featuredSection` - Main section container with Canadian-themed gradient
- `.universitiesGrid` - Responsive grid layout for university cards
- `.universityCard` - Individual university card styling with hover effects
- `.universityBadge` - Colored badges for university categories
- `.universityImage` - Image container with overlay and zoom effects
- `.universityContent` - Text content and statistics container
- `.universityStats` - Statistics layout with icons
- `.learnMoreBtn` - Call-to-action button styling

### Color Scheme
- **Primary**: Canadian red (#dc2626) and white (#ffffff)
- **Background**: Dark gradient (#1e293b to #0f172a)
- **Text**: Light gray (#f1f5f9) for headings, medium gray (#cbd5e1) for content
- **Accents**: Various colors for university badges (gold, blue, red, green, purple, orange)

### Responsive Breakpoints
- **Desktop**: 3-column grid (1400px+ containers)
- **Tablet**: 2-column grid (768px - 1399px)
- **Mobile**: Single column (below 768px)

## University Data Structure

### Featured Universities
1. **University of Toronto** - Top Ranked (Gold badge)
2. **University of British Columbia** - Research (Blue badge)
3. **McGill University** - Historic (Red badge)
4. **University of Alberta** - Research (Green badge)
5. **University of Waterloo** - Innovation (Purple badge)
6. **McMaster University** - Medical (Orange badge)

### Data Format
```tsx
{
  id: 'university-id',
  name: 'University Name',
  badge: 'Category',
  badgeColor: 'color-class',
  location: 'City, Province',
  courses: 'XXX+ Programs',
  ranking: 'World Ranking: Top XX',
  students: 'International Students: XX,XXX+',
  tuition: 'Starting from CAD XX,XXX/year',
  image: 'image-url'
}
```

## Performance Considerations
- **Intersection Observer**: Efficient scroll-based animations
- **Lazy loading**: Images load only when needed
- **CSS Modules**: Scoped styling prevents conflicts
- **Optimized animations**: GPU-accelerated transforms
- **Responsive images**: Proper sizing for different devices

## Customization

### Adding New Universities
To add more universities, extend the `universities` array in the component:
```tsx
{
  id: 'new-university',
  name: 'New University',
  badge: 'Excellence',
  badgeColor: 'excellence',
  location: 'City, Province',
  courses: 'XXX+ Programs',
  ranking: 'World Ranking: Top XX',
  students: 'International Students: X,XXX+',
  tuition: 'Starting from CAD XX,XXX/year',
  image: 'image-url'
}
```

### Badge Colors
Available badge color classes:
- `gold` - Golden gradient for top-tier universities
- `blue` - Blue gradient for research-focused institutions
- `red` - Red gradient for historic universities
- `green` - Green gradient for research universities
- `purple` - Purple gradient for innovation-focused institutions
- `orange` - Orange gradient for medical/specialized universities

## Dependencies
- **React**: Hooks for state management and effects
- **CSS Modules**: Scoped styling
- **Font Awesome**: Icons for statistics and UI elements
- **Next.js**: Framework features and optimizations
- **Intersection Observer API**: Scroll-based animations

## Related Components
- **CanadaUniversitiesHero**: Hero section for Canada universities page
- **WhyChooseCanada**: Benefits section for studying in Canada
- **PartnerCanadaUniversities**: Partner universities listing component
- **Footer**: Page footer component

## Accessibility
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Descriptive image alt attributes
- **Keyboard navigation**: Focusable interactive elements
- **Color contrast**: WCAG compliant color combinations
- **Screen reader friendly**: Proper ARIA labels and descriptions
