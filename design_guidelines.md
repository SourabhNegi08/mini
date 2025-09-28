# Design Guidelines - Social Connection Platform

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Meetup and Bumble BFF's clean, approachable interfaces that encourage social connections without overwhelming users.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: #FF6B6B (warm coral) - 7 62% 69%
- Secondary: #4ECDC4 (calming teal) - 174 60% 64%
- Background: #FAFAFA (soft white) - 0 0% 98%
- Text: #2C3E50 (friendly dark) - 210 29% 24%
- Accent: #FFE66D (cheerful yellow) - 48 100% 71%
- Success: #51CF66 (gentle green) - 134 59% 56%

**Dark Mode:**
- Primary: #FF8A8A (lighter coral) - 0 100% 76%
- Secondary: #6EEEE6 (lighter teal) - 174 80% 74%
- Background: #1A1A1A (dark gray) - 0 0% 10%
- Surface: #2D2D2D (card background) - 0 0% 18%
- Text: #FFFFFF (white) - 0 0% 100%
- Text Secondary: #B0B0B0 (muted) - 0 0% 69%

### Typography
- **Primary Font**: Poppins (headings, buttons, emphasis)
- **Secondary Font**: Inter (body text, descriptions)
- **Sizes**: Text-sm to text-3xl range
- **Weights**: Regular (400), medium (500), semibold (600), bold (700)

### Layout System
**Spacing Primitives**: Focus on Tailwind units of 2, 4, 6, and 8 (0.5rem, 1rem, 1.5rem, 2rem)
- Standard padding: p-4, p-6
- Component spacing: gap-4, gap-6
- Section margins: mb-6, mb-8
- Container max-width: max-w-6xl

### Component Library

**Cards**: Rounded corners (rounded-lg), subtle shadows, clean borders
**Buttons**: 
- Primary: Coral background with white text
- Secondary: Teal background
- Outline: Transparent background with colored border
- All buttons: rounded-lg, medium padding

**Navigation**: 
- Clean header with logo and user avatar
- Bottom navigation for mobile
- Sidebar for desktop dashboard

**Map Integration**: 
- Interactive map component showing events and user locations
- Floating action buttons for map controls
- Event markers with coral/teal color coding

**Event Cards**:
- Image thumbnail, title, date/time, location
- Participant count and join button
- Clean typography hierarchy

**User Profiles**:
- Avatar, name, interests as tags
- Bio section with readable typography
- Connection/message buttons

### Images
**Hero Image**: Large hero section on landing page featuring diverse groups of people socializing in various settings (coffee shops, parks, events). Warm, inviting photography with coral/teal color grading.

**Event Images**: Placeholder images for various activities (hiking, coffee meetups, book clubs, sports) with consistent warm color treatment.

**Profile Avatars**: Circular user profile images with coral/teal border accents.

**Empty States**: Friendly illustrations in the brand color palette for empty event lists, no friends yet, etc.

### Animations
**Minimal Approach**: 
- Subtle hover effects on cards and buttons
- Smooth transitions for navigation
- Gentle fade-ins for content loading
- Map marker animations for new events

### Mobile-First Responsive Design
- Card-based layout that stacks beautifully on mobile
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for event browsing
- Optimized map controls for touch interaction

### Accessibility & Inclusive Design
- High contrast ratios for all text
- Clear focus indicators
- Screen reader friendly labels
- Consistent dark mode throughout
- Welcoming, non-intimidating visual language that reduces social anxiety

This design system creates a warm, approachable platform that encourages real-world connections while maintaining a clean, modern aesthetic that builds trust and reduces the intimidation factor often associated with social platforms.