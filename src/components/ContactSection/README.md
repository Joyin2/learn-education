# ContactSection Component

## Overview
A comprehensive contact page component for the Learn Education website featuring a contact form, office information, and call-to-action sections.

## Files
- `ContactSection.tsx` - Main component file
- `ContactSection.module.css` - Component-specific styles
- `index.ts` - Export file for clean imports
- `README.md` - This documentation file

## Dependencies
- `@/styles/icons/contact-icons.css` - Font Awesome icons for contact functionality

## Features

### Contact Form
- **Form Fields**: Name, Email, Phone, Subject, Message
- **Validation**: Required field validation
- **Submission States**: Loading, success, and error states
- **Responsive Design**: Grid layout that adapts to mobile

### Contact Information
- **London Office**: Full address and contact details
- **Email Contact**: Direct email link
- **Phone Contact**: Clickable phone number
- **Social Media**: Links to all social platforms

### Our Offices Section
- **London, UK**: Complete office details
- **Sylhet, Bangladesh**: Complete office details
- **Interactive Cards**: Hover effects and smooth transitions

### Call-to-Action
- **Prominent CTA**: "Start Your Global Education Journey Today!"
- **Connect Button**: Direct phone link for immediate contact

## Design Features

### Visual Design
- **Gradient Background**: Animated gradient with particle effects
- **Glass Morphism**: Backdrop blur effects on cards
- **Smooth Animations**: Entrance animations and hover effects
- **Professional Color Scheme**: Consistent with brand colors

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Proper layout for tablet screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Breakpoints**: 480px, 640px, 768px, 1024px

### Accessibility
- **Semantic HTML**: Proper form labels and structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators

## Technical Implementation

### Technologies Used
- **React 19** with hooks (useState)
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **Font Awesome** icons (component-specific)

### Form Handling
- **Controlled Components**: React state management
- **Form Validation**: Built-in HTML5 validation
- **Submission Simulation**: Mock API call with loading states
- **Error Handling**: User-friendly error messages

### Icon Management
- **Separate Icon File**: `@/styles/icons/contact-icons.css`
- **Component Scoped**: Icons only loaded when this component is used
- **Optimized Loading**: Only necessary icons included
- **Reusable**: Can be shared with other contact-related components

## Usage

### Import
```typescript
import ContactSection from '@/components/ContactSection';
```

### Implementation
```typescript
export default function ContactPage() {
  return (
    <div>
      <ContactSection />
      <Footer />
    </div>
  );
}
```

## Customization

### Contact Information
Update the contact details in the component:
- Office addresses
- Phone numbers
- Email addresses
- Social media links

### Form Fields
Modify the form structure in the `formData` state and corresponding JSX.

### Styling
- Main styles: `ContactSection.module.css`
- Icons: `@/styles/icons/contact-icons.css`
- Follow CSS Modules naming conventions for component styles
- Use shared icon files for Font Awesome icons

## Performance Considerations

- **Lazy Loading**: Component can be lazy loaded if needed
- **Icon Optimization**: Only necessary icons are loaded
- **CSS Scoping**: Prevents style conflicts
- **Animation Performance**: GPU-accelerated animations

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Responsive**: Works on all screen sizes
- **Progressive Enhancement**: Graceful degradation for older browsers

## SEO Optimization

- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Included in page component
- **Structured Data**: Contact information properly marked up
- **Accessibility**: Screen reader friendly
