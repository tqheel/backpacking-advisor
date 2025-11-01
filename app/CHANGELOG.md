# Changelog

## [1.0.1] - 2025-11-01

### Added
- No-refrigeration requirement added as key principle in meal planning
- Emphasized shelf-stable food requirement throughout meal prep content

### Changed
- Updated Introduction section to include "No Refrigeration" as key principle
- Enhanced hot meals description to explicitly state foods are shelf-stable
- Added ice cube emoji (🧊) to reinforce no-refrigeration message

### Files Modified
- `content/outline.md`: Added no-refrigeration principle and hot meals note
- `src/app/meal-prep/meal-prep.component.html`: Added no-refrigeration requirement

---

## [1.0.0] - 2025-11-01

### Added
- Installed Angular Material, CDK, and animations for UI components
- Created home component with enhanced card-based interface
- Created meal-prep component with vertical stepper walkthrough for meal preparation
- Created gear-packing component with vertical stepper walkthrough for gear and packing
- Added comprehensive content from outline.md to both components
- Added routing for home, meal-prep, and gear-packing pages
- Installed @angular/animations package to resolve build errors
- Added engaging emoji icons throughout all components for visual appeal
- Enhanced home page with prominent borders, shadows, and gradient backgrounds
- Added feature lists and action buttons to home page cards
- Added color-coded image placeholders with gradients for each topic
- Implemented responsive design for mobile and desktop views

### Content Updates
- **Meal Prep Component:**
  - Updated hot meals section to include 2 breakfasts (Saturday freeze-dried, Sunday oatmeal)
  - Added detail about Troop-provided Jet Boil stoves
  - Enhanced mess kit section with note about sharing meals requiring bowl/plate
  - Added complete trail food section with snacks and lunch options
  - Added cleanup, hygiene, and Leave No Trace section
  - Added comprehensive emoji icons for each section

- **Gear Packing Component:**
  - Added complete "Big Three" section (backpack, shelter, sleep system)
  - Added detailed clothing section with "No Cotton" rule and layering system
  - Added complete clothing list (hiking and packed items)
  - Added "10 Essentials" section with all items
  - Added kitchen and personal items sections
  - Added "How to Pack" section with waterproofing and weight distribution
  - Added comprehensive emoji icons for each section

- **Outline Content:**
  - Updated outline.md to reflect 2 breakfast requirement
  - Added note about sharing meals requiring coordination
  - Synchronized outline with web content changes

### Changed
- Replaced Angular boilerplate with Scout-themed home interface
- Updated home component with gradient backgrounds and enhanced card styling
- Enhanced card hover effects with scale and shadow transitions
- Improved typography with text shadows and better spacing
- Added MatButtonModule to home component imports
- Updated meal prep and gear packing components with complete content from outline

### Styled
- Home page: Gradient background, prominent 3px borders, multi-layered shadows
- Cards: Enhanced hover effects with translateY and scale transforms
- Typography: Added text shadows, improved font sizing and hierarchy
- Color scheme: Professional blue/purple gradients with Scout fleur-de-lis symbols
- Responsive: Mobile-friendly layout with breakpoints

### Files Modified
- `package.json`: Added @angular/animations dependency
- `src/app/app.config.ts`: Added Material animations provider
- `src/app/home/home.component.html`: Enhanced with images, feature lists, and buttons
- `src/app/home/home.component.css`: Added extensive styling with gradients and shadows
- `src/app/home/home.component.ts`: Added MatButtonModule import
- `src/app/meal-prep/meal-prep.component.html`: Added complete content with emojis
- `src/app/gear-packing/gear-packing.component.html`: Added complete content with emojis
- `content/outline.md`: Updated with 2 breakfast requirement and sharing notes
- `CHANGELOG.md`: Updated with comprehensive change history