# TigerDuckling Agency - Creative Web Design Agency

## Overview

This is a modern full-stack web application for a creative digital agency called "TigerDuckling Agency." The application features a sophisticated tech-themed design with animated elements and serves as both a portfolio showcase and client contact platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Build Tool**: Vite for development and production builds

### Design System
- **Theme**: Dark, tech-focused design with cyan/teal accent colors
- **Typography**: Inter font family for UI, JetBrains Mono for code
- **Icons**: Font Awesome 6.5.0
- **Color Palette**: 
  - Primary: Cyber cyan (#00FFFF)
  - Accent: Electric blue (#00B4DB)
  - Background: Pure black with dark slate variations
  - CSS variables for consistent theming

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Animated landing area with flowing blob animations
3. **Services Section**: Grid layout showcasing agency capabilities
4. **Portfolio Section**: Featured projects with case studies
5. **About Section**: Company values and statistics
6. **Contact Section**: Form for client inquiries with validation
7. **Footer**: Links and company information

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: PostgreSQL database storage using Drizzle ORM
3. **Database Layer**: Neon Database connection with pooling
4. **Route Registration**: Centralized API route management
5. **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Client inquiry storage with timestamps (firstName, lastName, email, company, projectType, message, createdAt)
- **Database**: PostgreSQL with Neon Database hosting
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact forms are validated client-side with Zod
3. **API Communication**: TanStack Query manages server requests
4. **Server Processing**: Express routes handle API requests
5. **Database Operations**: Drizzle ORM with PostgreSQL for data persistence
6. **Data Storage**: Contact submissions stored permanently in Neon Database
7. **Response Handling**: Success/error states displayed via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **drizzle-orm**: Type-safe ORM
- **@radix-ui/***: Headless UI primitives

### Development Dependencies
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

### Design Dependencies
- **shadcn/ui**: Pre-built component library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle handles schema changes
4. **Asset Optimization**: Vite optimizes static assets

### Environment Configuration
- **Development**: Hot module reloading with Vite dev server
- **Production**: Bundled server serving static files
- **Database**: PostgreSQL connection via environment variable
- **Session Storage**: Database-backed sessions for scalability

### Replit Integration
- **Development Banner**: Replit dev environment detection
- **Cartographer Plugin**: Replit-specific development features
- **Runtime Error Overlay**: Enhanced error reporting in development

The application follows modern web development best practices with a clear separation of concerns, type safety throughout the stack, and a responsive design that works across all devices. The tech-focused aesthetic with smooth animations creates an engaging user experience that reflects the agency's technical expertise.