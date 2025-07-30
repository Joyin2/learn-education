# Components Directory

## Overview
This directory contains all reusable UI components for the Learn Education website. Each component is organized in its own folder with all related files co-located for better maintainability and scalability.

## Folder Structure

```
src/components/
├── Navbar/
│   ├── index.ts              # Export file for clean imports
│   ├── Navbar.tsx            # Main component file
│   └── Navbar.module.css     # Component-specific styles
├── Hero/
│   ├── index.ts              # Export file for clean imports
│   ├── Hero.tsx              # Main component file
│   └── Hero.module.css       # Component-specific styles
└── README.md                 # This documentation file
```

## Component Organization Principles

### 1. **Self-Contained Components**
Each component folder contains all files related to that component:
- Main component file (`.tsx`)
- CSS module file (`.module.css`)
- Index file for clean exports (`.ts`)
- Future: Tests, stories, types, etc.

### 2. **Clean Import Paths**
Using index files allows for clean imports:
```typescript
// Clean import (recommended)
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Instead of verbose paths
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
```

### 3. **CSS Modules for Styling**
Each component uses CSS modules for scoped styling:
- Prevents CSS conflicts
- Co-located with component logic
- Better maintainability

---

# Navigation Bar Component

## Overview
A professional, responsive navigation bar component built with Next.js, TypeScript, and CSS modules.

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
- **Tailwind CSS** for styling
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

The navbar is automatically included in the layout and appears on all pages. It's already integrated into the `src/app/layout.tsx` file.

### Customization

To modify navigation items, edit the `navigationItems` array in `src/components/Navbar.tsx`:

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

The component uses Tailwind CSS classes and custom CSS for Font Awesome icons. Additional styles are defined in `src/app/globals.css`.

### Key CSS Classes
- `.navbar-container` - Main navbar wrapper
- `.fa-solid` - Font Awesome solid icons
- Custom hover and transition effects

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Dependencies

- Next.js Image component for optimized logo loading
- Font Awesome fonts (included in `/public/assets/fonts/`)
- Tailwind CSS for styling
