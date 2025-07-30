# Navbar Component

## Overview
A professional, responsive navigation bar component for the Learn Education website built with Next.js, TypeScript, and CSS modules.

## Files
- `Navbar.tsx` - Main component file
- `Navbar.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports

## Features

### Design
- **Background Color**: #2b70fa (professional blue)
- **Logo**: Displays the company logo from `/public/assets/logo.png`
- **Responsive Design**: Adapts to desktop and mobile devices
- **Sticky Navigation**: Fixed at the top of the page with scroll effects

### Navigation Items
1. **Home** - Links to `/`
2. **About** - Links to `/about`
3. **Universities** - Dropdown menu with country options
4. **Services** - Links to `/services`
5. **FAQ** - Links to `/faq`
6. **Contact** - Links to `/contact`
7. **Phone Number** - Clickable phone link with icon: "+44 7540 258059"
8. **Free Consultation Button** - Call-to-action button with arrow icon

### Universities Dropdown
The Universities menu includes links to:
- UK (`/universities/uk`)
- USA (`/universities/usa`)
- Ireland (`/universities/ireland`)
- Canada (`/universities/canada`)
- Europe (`/european-universities`)
- Australia (`/australian-universities`)
- New Zealand (`/new-zealand-universities`)

### Mobile Features
- **Hamburger Menu**: Collapsible mobile navigation
- **Touch-Friendly**: Optimized for mobile interaction
- **Responsive Dropdown**: Mobile-optimized university selection

## Technical Implementation

### Technologies Used
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **Font Awesome** icons for UI elements

### Accessibility Features
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling
- **Semantic HTML**: Proper HTML structure

### Icons Used
- `fa-bars` - Mobile menu hamburger
- `fa-times` - Mobile menu close
- `fa-chevron-down` - Dropdown indicator
- `fa-phone` - Phone icon
- `fa-arrow-right` - Call-to-action arrow

## Usage

### Import
```typescript
import Navbar from '@/components/Navbar';
```

### Implementation
The navbar is automatically included in the layout and appears on all pages. It's integrated into the `src/app/layout.tsx` file.

### Customization

To modify navigation items, edit the `navigationItems` array in `Navbar.tsx`:

```typescript
const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add or modify items here
];
```

To modify university options, edit the `universities` array:

```typescript
const universities = [
  { name: 'UK', href: '/universities/uk' },
  // Add or modify countries here
];
```

## Styling

The component uses CSS modules for scoped styling. All styles are defined in `Navbar.module.css`.

### Key CSS Classes
- `.navbarContainer` - Main navbar wrapper
- `.desktopNav` - Desktop navigation container
- `.mobileMenu` - Mobile menu container
- `.dropdownMenu` - Universities dropdown
- `.consultationButton` - CTA button styling

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Dependencies

- Next.js Image component for optimized logo loading
- Font Awesome fonts (included in `/public/assets/fonts/`)
- CSS modules for styling
