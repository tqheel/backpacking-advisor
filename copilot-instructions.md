# Copilot Instructions

## Project Overview

This is an interactive static website that serves as a comprehensive guide for Scouts and their parents to prepare for a backpacking trip scheduled for November 7-9, 2025, at Camp Reeves near Carthage, NC. The site provides trip details, preparation guides, and printable packing and meal planning checklists.

The site is hosted on GitHub Pages and is automatically deployed via GitHub Actions when changes are pushed to the `master` branch.

## Tech Stack

- **Framework**: Angular 20.x (standalone components)
- **Language**: TypeScript 5.8.x with strict mode enabled
- **UI Library**: Angular Material (Indigo-Pink theme)
- **Router**: Angular Router with direct component imports
- **Build Tool**: Angular CLI with @angular/build
- **Testing**: Jasmine + Karma
- **Deployment**: GitHub Pages via GitHub Actions
- **Node.js**: Version 20.x

## Project Structure

```
/
├── app/                          # Angular application (PRIMARY WORKING DIRECTORY)
│   ├── src/
│   │   ├── app/
│   │   │   ├── home/            # Home page component
│   │   │   ├── meal-prep/       # Meal preparation guide component
│   │   │   ├── gear-packing/    # Gear packing checklist component
│   │   │   ├── app.ts           # Root application component
│   │   │   ├── app.routes.ts    # Route definitions
│   │   │   └── app.config.ts    # Application configuration
│   │   ├── index.html           # Main HTML file
│   │   ├── main.ts              # Application entry point
│   │   └── styles.css           # Global styles
│   ├── public/                  # Static assets
│   ├── angular.json             # Angular CLI configuration
│   ├── package.json             # Dependencies and scripts
│   └── tsconfig.json            # TypeScript configuration
├── content/
│   └── outline.md               # Content outline for the site
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
└── copilot-instructions.md      # This file
```

## Development Workflow

### Important: Working Directory

**All Angular CLI commands must be run from the `app/` directory, not the root directory.**

### Initial Setup

```bash
cd app
npm install
```

### Development Server

```bash
cd app
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/` and will automatically reload when you modify source files.

### Building

For development build:
```bash
cd app
npm run build
```

For production build:
```bash
cd app
ng build --configuration production
```

Build artifacts are stored in `app/dist/app/` with the browser output in `app/dist/app/browser/`.

### Testing

Run unit tests:
```bash
cd app
npm test
# or
ng test
```

This runs tests using Karma and Jasmine. Tests are configured to run in watch mode by default.

### Code Generation

Generate new components, services, etc.:
```bash
cd app
ng generate component component-name
ng generate service service-name
```

Components are standalone by default (no NgModule required).

## Coding Standards

### TypeScript Configuration

- **Strict mode** is enabled - all code must adhere to strict TypeScript checks
- Use **single quotes** for strings (configured in .editorconfig)
- **Indentation**: 2 spaces (no tabs)
- **Line endings**: LF (Unix-style)
- **Trailing whitespace**: Must be trimmed
- **Final newline**: Required in all files

### Angular Conventions

- Use **standalone components** (no NgModules)
- Component selector prefix: `app-` (e.g., `app-home`, `app-meal-prep`)
- File naming: `component-name.component.ts`, `component-name.component.html`, `component-name.component.css`
- Class naming: PascalCase (e.g., `MealPrepComponent`)
- Use **strict template checking** (enabled in tsconfig.json)
- Prefer **reactive programming** with RxJS where appropriate

### Code Style

- **No implicit any** - all types must be explicit
- **No implicit returns** - functions must explicitly return values
- **No fallthrough** in switch statements
- Component files follow Angular style guide structure:
  1. Imports
  2. Component decorator
  3. Component class
  4. Public methods
  5. Private methods

### HTML Templates

- Use Angular template syntax for data binding
- Prefer structural directives (`*ngIf`, `*ngFor`) for conditional rendering
- Use Angular Material components for UI consistency

## Testing Guidelines

### Test Files

- Test files are named with `.spec.ts` suffix
- Each component should have corresponding `.spec.ts` file
- Tests are located alongside the component files

### Test Structure

```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Running Tests

- Always run tests after making changes
- Tests should pass before committing code
- Use `ng test --no-watch --code-coverage` for CI builds

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

### Deployment Workflow

1. GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered on push to `master`
2. Dependencies are installed: `npm ci` in `app/` directory
3. Production build: `npm run build -- --base-href /backpacking-advisor/`
4. Built files from `app/dist/app/browser/` are deployed to GitHub Pages
5. Site is live at: `https://tqheel.github.io/backpacking-advisor/`

### Base HREF

The site is deployed to a subdirectory on GitHub Pages, so all builds must include:
```bash
--base-href /backpacking-advisor/
```

This is automatically handled by the GitHub Actions workflow.

## Common Tasks

### Adding a New Page/Component

1. Navigate to app directory: `cd app`
2. Generate component: `ng generate component new-page`
3. Add route in `src/app/app.routes.ts`:
   ```typescript
   { path: 'new-page', component: NewPageComponent }
   ```
4. Add navigation link to appropriate component

### Adding Angular Material Components

1. Import the material module in your component:
   ```typescript
   import { MatButtonModule } from '@angular/material/button';
   
   @Component({
     imports: [MatButtonModule],
     // ...
   })
   ```

### Updating Dependencies

```bash
cd app
npm update
# or for Angular specifically
ng update @angular/cli @angular/core
```

### Debugging

1. Use Angular DevTools browser extension
2. Add breakpoints in browser DevTools
3. Use `console.log()` for quick debugging (remove before committing)
4. Check the browser console for errors

## Content Updates

Content outlines and guidelines are stored in `content/outline.md`. This file contains:
- Meal preparation instructions
- Gear packing lists
- Detailed guidance for Scouts

When updating component content, refer to this file for accurate information.

## Key Reminders

1. **Always work in the `app/` directory** for Angular commands
2. **Use standalone components** - no NgModule imports
3. **Follow strict TypeScript** - no implicit any or returns
4. **Test your changes** - run `npm test` before committing
5. **Build locally** - verify production build works: `ng build --configuration production`
6. **Respect the content** - this is for real Scouts; accuracy matters