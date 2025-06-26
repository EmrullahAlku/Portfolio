# Replit.md

## Overview

This is a modern portfolio website built with Nuxt 3 and Vue for Emrullah Alku. The application showcases software development and design skills through an interactive interface featuring innovative navigation animations. The site includes a unique inverted half-circle navigation that expands into a circular menu with icons, smooth transitions, and comprehensive portfolio sections.

## System Architecture

### Frontend Architecture
- **Framework**: Nuxt 3 with Vue 3 and TypeScript
- **Routing**: Nuxt file-based routing system
- **Styling**: Custom CSS with CSS variables for theming
- **UI Components**: Custom Vue components with Heroicons and Simple Icons
- **Animations**: CSS animations and transitions
- **State Management**: Vue Composition API with built-in reactivity
- **Build Tool**: Vite (built into Nuxt 3)

### Design System
- **Theme**: Light/Dark mode support with CSS variables
- **Icons**: Heroicons for UI, Simple Icons for brand logos
- **Typography**: Inter font family with responsive sizing
- **Colors**: Custom color palette with gradient accents
- **Layout**: CSS Grid and Flexbox for responsive design

### Development Environment
- **Package Manager**: npm
- **Development Server**: Nuxt dev server with HMR
- **Runtime**: Node.js 20
- **Deployment Platform**: Replit with autoscale deployment target

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication with username/password
- **Drizzle Integration**: Type-safe database operations with Zod validation
- **Schema Location**: Shared between client and server for type consistency

### Storage Layer (`server/storage.ts`)
- **Interface Design**: `IStorage` interface for database operations
- **Memory Implementation**: `MemStorage` class for development/testing
- **CRUD Operations**: User management with async/await patterns
- **Future PostgreSQL**: Ready for database integration when needed

### Frontend Pages
- **Home**: Main landing page with portfolio overview
- **Education**: Academic background and certifications
- **Repositories**: GitHub projects showcase
- **About**: Personal information and interests
- **Contact**: Contact form and social media links

### UI Component System
- **Design System**: Custom theme with light/dark mode support
- **Component Library**: Complete set of reusable UI components
- **Animation Library**: Motion components for enhanced user experience
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Data Flow

### Request Flow
1. Client requests are handled by Vite dev server in development
2. API routes are prefixed with `/api` and handled by Express
3. Storage layer abstracts database operations through interfaces
4. Responses are logged with timing and payload information

### State Management
1. TanStack Query manages server state and caching
2. Local state handled by React hooks and context
3. Theme state persisted in localStorage
4. Form state managed by React Hook Form with Zod validation

### Build Process
1. Vite builds the client application to `dist/public`
2. esbuild bundles the server code to `dist/index.js`
3. Production serves static files from the built client
4. Database migrations handled by Drizzle Kit

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Validation**: Zod for runtime type checking

### UI and Styling
- **Component Library**: Complete Radix UI component set
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth interactions

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and introspection
- **Development**: tsx for TypeScript execution, various Replit plugins

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts both server and client in development
- **Port**: Application runs on port 5000 with Vite HMR
- **Database**: Uses environment variable `DATABASE_URL` for connection
- **Hot Reload**: Full HMR support for both client and server code

### Production Deployment
- **Build Process**: `npm run build` creates optimized bundles
- **Server**: Express serves static files and API routes
- **Deployment**: Replit autoscale with external port 80
- **Environment**: Production environment variables required

### Database Migration
- **Command**: `npm run db:push` applies schema changes
- **Configuration**: Drizzle config uses PostgreSQL dialect
- **Schema Location**: Centralized in `shared/schema.ts`

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.