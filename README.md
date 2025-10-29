## 📝Angular Signal-Based Todo Application
A modern, high-performance task management application built with Angular v20.3.3 and leveraging the new Signals feature for dynamic, in-memory state management. This application demonstrates component modularity, powerful list manipulation, and reliable user feedback.

🔗 ## Live Application
The application is deployed and hosted on Vercel:

Live Demo: https://todoapp-tau-wine.vercel.app/list

## ✨Features
In-Memory State: All task data is managed in the browser's memory using Angular Signals. Data persists only for the current session and will reset upon page reload.

Signal-Based State: Utilizes Angular Signals for reactive and efficient state management.

Full CRUD Operations: Seamlessly Create, Read, Update, and Delete tasks. Status changes are handled via the Edit Modal.

Search and Filter: Filter by Status (All, Open, Completed) and Search by Title/Description.

Advanced List Control:

Sorting: Sort the list by various fields (Creation Date - default, Title, Status, Start Date).

Pagination: Paginates the filtered results with a user-configurable page size and a sliding window control.

User Feedback: Includes Toast Notifications for status messages.

Validation: User-friendly form validation that provides immediate error feedback upon submission.

Routing: Uses the Angular Router to manage the primary list view (/list) and route navigation logic.


## 🛠️Technology Stack
Framework: Angular v20.3.3 (Standalone Components)

State Management: Angular Signals

Forms: Angular Reactive Forms

Deployment: Vercel (using GitHub Actions for CI)

Persistence: In-Memory (data resets on reload)


## 🚀Getting Started
Installation
Clone the repository:

Bash

git clone https://github.com/eKICH/todo-app.git
cd todo-app
Install dependencies:

Bash

npm install
Run the application in development mode:

Bash

ng serve
Open your browser and navigate to http://localhost:4200/.


## ⚙️CI/CD (Continuous Integration / Continuous Deployment)
The repository utilizes a CI pipeline via GitHub Actions (.github/workflows/ci.yml). This automates the build process, runs unit tests, and prepares the optimized artifacts, which are then automatically deployed to Vercel upon push to the main branch.
