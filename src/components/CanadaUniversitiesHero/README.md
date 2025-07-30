# CanadaUniversitiesHero Component

## Overview
The `CanadaUniversitiesHero` component serves as the main hero section for the Canada Universities page. It features a Canadian-themed design with red and white colors, comprehensive statistics, key highlights, and call-to-action elements designed to engage prospective students interested in studying in Canada.

## Features

### Visual Design
- **Canadian-themed gradient background**: Red and white accents reflecting the Canadian flag
- **Animated background shapes**: Floating geometric elements with Canadian colors
- **Two-column layout**: Content on left, flag and stats on right
- **Smooth animations**: Staggered slide-in animations for different content sections
- **Glass-morphism effects**: Modern frosted glass styling throughout
- **Responsive design**: Adapts from two-column to single-column on mobile

### Content Sections
1. **Breadcrumb Navigation**: Home > Universities > Canada
2. **Hero Title**: "Study in Canada - Your Gateway to Excellence"
3. **Hero Description**: Comprehensive overview of Canadian education benefits
4. **Key Highlights**: Four main advantages with icons
5. **CTA Buttons**: Primary and secondary call-to-action buttons
6. **Canadian Flag**: Large flag image with overlay effects
7. **Statistics Grid**: Four key statistics about Canadian education
8. **Info Bar**: Important information about applications and requirements

### Key Highlights
1. **World-Class Education System**: Maple leaf icon
2. **High Quality of Life**: Heart icon
3. **Post-Study Work Permits**: Passport icon
4. **Pathway to Permanent Residency**: Globe Americas icon

### Statistics Displayed
1. **50+**: Partner Universities
2. **200+**: Programs Available
3. **15,000+**: International Students
4. **95%**: Success Rate

## Usage

### Component Import
```tsx
import CanadaUniversitiesHero from '@/components/CanadaUniversitiesHero';
```

### Page Integration
```tsx
export default function CanadaUniversitiesPage() {
  return (
    <div>
      <CanadaUniversitiesHero />
      {/* Other components */}
      <Footer />
    </div>
  );
}
```

### Page Integration
The component is designed to be the first section on the Canada Universities page, providing an engaging introduction to Canadian education opportunities.

## Styling Architecture

### CSS Module Classes
- `.heroSection` - Main hero container with Canadian-themed gradient
- `.heroContent` - Two-column grid layout for main content
- `.leftContent` - Text content, highlights, and CTA buttons
- `.rightContent` - Flag image and statistics grid
- `.highlightsGrid` - Grid layout for key advantages
- `.statsGrid` - Statistics cards with icons and numbers
- `.infoBar` - Bottom information bar with key details
- `.floatingElements` - Animated floating icons

### Color Scheme
- **Primary**: Canadian red (#dc2626) and white (#ffffff)
- **Background**: Dark slate gradients (#0f172a, #1e293b)
- **Text**: Light slate (#f1f5f9, #cbd5e1, #94a3b8)
- **Accents**: Red highlights for icons and interactive elements

### Layout Structure
- **Desktop**: Two-column layout (content + flag/stats)
- **Tablet**: Single column with reordered content
- **Mobile**: Fully stacked layout with optimized spacing

## Data Structure

### Statistics Array
```tsx
{
  number: string,    // Statistic number (e.g., "50+")
  label: string,     // Statistic description
  icon: string       // Font Awesome icon class
}
```

### Highlights Array
```tsx
{
  icon: string,  // Font Awesome icon class
  text: string   // Highlight description
}
```

## Interactive Elements

### Call-to-Action Buttons
- **Explore Universities**: Primary red gradient button
- **Watch Video**: Secondary transparent button with play icon
- Both buttons feature hover animations and Canadian red accents

### Hover Effects
- **Highlight items**: Slide right with red background on hover
- **Stat cards**: Lift up with enhanced border on hover
- **Flag image**: Scale effect on hover
- **Buttons**: Scale and shadow effects with color transitions

## Information Bar Details

### Key Information Displayed
- **Application Deadline**: Rolling Admissions
- **Intake Seasons**: Fall, Winter, Summer
- **Tuition Range**: CAD $15,000 - $35,000
- **Language Requirements**: IELTS 6.0+ / TOEFL 80+

### Visual Treatment
- Grid layout with icons and labels
- Glass-morphism background
- Canadian red accent icons

## Background Elements

### Animated Shapes
- Three floating circular shapes with Canadian colors
- Continuous rotation and floating animation
- Semi-transparent overlay for depth

### Floating Icons
- Maple leaf, graduation cap, and university icons
- Gentle floating animation
- Positioned strategically around the hero

## Responsive Behavior

### Desktop (1024px+)
- Two-column layout with content on left, flag/stats on right
- Full-width info bar at bottom
- Horizontal highlights grid

### Tablet (768px - 1023px)
- Single column layout
- Flag and stats appear above main content
- Maintained spacing and animations

### Mobile (< 768px)
- Stacked single-column layout
- Reduced font sizes and padding
- Vertical highlights layout
- Full-width buttons

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Descriptive alt text for Canadian flag image
- **Keyboard navigation**: Focusable buttons and interactive elements
- **Color contrast**: High contrast text for readability
- **Screen reader friendly**: Proper ARIA labels and semantic markup
- **Focus indicators**: Clear focus states for all interactive elements

## Performance Optimizations
- **CSS animations**: Hardware-accelerated transforms
- **Efficient layouts**: CSS Grid and Flexbox for optimal performance
- **Optimized images**: Canadian flag from Supabase storage
- **Lightweight icons**: Font Awesome icons for scalability

## Customization

### Content Updates
To modify the content, edit the arrays and text in `CanadaUniversitiesHero.tsx`:
- Update statistics and highlights
- Modify hero title and description
- Change CTA button text and links
- Update info bar details

### Styling Modifications
- Edit Canadian color scheme in CSS module
- Adjust layout and spacing
- Modify animation timings and effects
- Update responsive breakpoints

### Adding New Statistics
To add more statistics, extend the `stats` array:
```tsx
{
  number: '100%',
  label: 'New Statistic',
  icon: 'fa-solid fa-new-icon'
}
```

### Adding New Highlights
To add more highlights, extend the `highlights` array:
```tsx
{
  icon: 'fa-solid fa-new-icon',
  text: 'New Highlight Description'
}
```

## Dependencies
- **React**: Hooks for state management and effects
- **CSS Modules**: Scoped styling
- **Font Awesome**: Icons for UI elements and statistics
- **Next.js**: Framework features and optimizations

## Integration Notes
- Component automatically handles animations on mount
- Responsive design works seamlessly across all devices
- Canadian theme colors maintain brand consistency
- Ready for integration with university listing and application systems
- Flag image loads from Supabase storage for optimal performance

## Future Enhancements
- Video modal integration for "Watch Video" button
- Dynamic statistics from API
- Interactive map of Canadian provinces
- University search integration
- Application form integration
