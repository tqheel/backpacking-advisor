# Copilot Instructions

This project contains an Angular application in the `app/` subdirectory. All Angular CLI commands (e.g., `ng build`, `ng serve`) must be run from the `app/` directory.

To build the site for production:
1. Navigate to the `app/` directory.
2. Run `ng build --configuration production` to generate the static files in `app/dist/`.
3. The built site can then be deployed to GitHub Pages from the `app/dist/` directory.

Remember: The working directory for Angular development and building is `app/`, not the root directory.