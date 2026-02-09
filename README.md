# LMS Frontend

A React-based frontend for a Learning Management System (LMS) that serves both students and teachers. The app provides authentication, course search and detail pages, student financial-aid flows, and teacher session/course management views. It is built with Vite for fast development and uses a clean, layered architecture to keep UI, domain logic, and data access responsibilities separated.

## Features

- **Authentication & onboarding**: Signup (multi-step), login, email verification, and password reset flows.
- **Role-based experiences**: Dedicated routes and screens for student and teacher roles.
- **Course discovery**: Search and course detail views for browsing courses.
- **Financial aid**: Student financial-aid results and teacher financial-aid management for courses.
- **Teacher workflows**: Course detail management and session views with assignments/exams.

## Tech Stack

- **React 18** with **React Router** for SPA routing.
- **Vite** for local development and production builds.
- **Tailwind CSS** for utility-first styling.
- **MDB React UI Kit** for prebuilt UI components.
- **Axios** for HTTP requests.
- **React Icons** for iconography.

## Architecture Overview

This project follows a clean, layered architecture inspired by Clean Architecture principles:

```
src/
  Core/           # Cross-cutting concerns (auth, constants, failures, utilities)
  Data/           # API data sources, repositories, response models
  Domain/         # Use cases and entities (business logic)
  presentation/   # React views and UI components
```

### Layers and Responsibilities

- **Core**: Shared utilities, app constants (routes, API endpoints), security helpers, and failure classes.
- **Domain**: Use cases orchestrate business logic and interact with repositories (e.g., login, course search, financial-aid flows).
- **Data**: Data sources call the backend APIs and transform responses into models. Repositories act as a single source of truth for data access.
- **Presentation**: React views and components for teacher, student, and common flows.

This structure keeps UI components decoupled from data access logic and makes it easier to test or replace backends.

## API Integration

The backend base URL is defined in `src/Core/constants/ServerAPIs.js` as:

```
const SERVER = "http://127.0.0.1:8000";
```

Update this value to point to your backend environment (dev/staging/prod). Most API endpoints are centralized in this file to avoid hardcoding URLs across the app.

## Authentication & Session Storage

After a successful login, the app stores the auth token and user metadata in `sessionStorage`. Subsequent API requests attach the token to the `Authorization` header via the request helpers in `src/Core/security/sendRequest.js`.

## Routing

Routes are defined in `src/Core/constants/Routs.js` and wired in `src/App.jsx`. This includes shared routes (login, signup, search) and role-specific routes for student and teacher views.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or another compatible package manager)

### Install

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will be available at the URL printed by Vite (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview a production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure (Detailed)

```
src/
  App.jsx                      # Main router and route definitions
  main.jsx                     # App entry point

  Core/
    constants/                 # Routes and API endpoints
    contexts/                  # Auth context provider
    security/                  # Auth helpers + request utilities
    Failure/                   # Failure/exception models
    components/                # Shared UI components

  Domain/
    Entities/                  # Domain entities
    UseCases/                  # Business logic per feature

  Data/
    DataSource/API/            # Axios API calls
    Models/                    # Response models
    Repositories/              # Data access abstraction

  presentation/
    common/                    # Shared views (auth, search, splash)
    students/                  # Student-specific views
    teachers/                  # Teacher-specific views
```

## Conventions & Patterns

- **Repository Pattern**: Domain use cases interact with data through repositories rather than directly calling APIs.
- **Model Mapping**: API responses are wrapped in model classes to keep a consistent shape and encapsulate formatting.
- **Failure Objects**: API failures are modeled as specific failure classes for predictable error handling.

## Environment & Configuration Notes

- Update the API base URL in `ServerAPIs.js` when pointing to a different backend.
- Authentication relies on `sessionStorage`; clearing session storage will log the user out.

---

If you need new routes, API integrations, or role-specific views, follow the existing Data → Domain → Presentation flow to keep the layering consistent.
