GOLOME Fashion Website
A modern, responsive fashion e-commerce website built with React, TypeScript, and cutting-edge web technologies. GOLOME features a minimalist black and white design with orange accent colors, showcasing luxury handbags and fashion items.

🎨 Design Features
Minimalist Aesthetic: Clean black and white design with strategic orange (#FF6F00) accents
Animated Logo: Custom GOLOME logo with GSAP animations using Montez font
Interactive Elements: Smooth hover effects, transitions, and micro-interactions
Responsive Design: Fully optimized for mobile, tablet, and desktop devices
Modern Typography: Professional font combinations for enhanced readability
🚀 Technologies Used
Frontend
React 18 - Modern React with hooks and functional components
TypeScript - Type-safe development
Vite - Fast build tool and development server
Tailwind CSS - Utility-first CSS framework
Framer Motion - Advanced animations and transitions
GSAP - High-performance animations for logo
Wouter - Lightweight client-side routing
UI Components
Shadcn/UI - Beautiful, accessible component library
Radix UI - Headless UI primitives
Lucide React - Clean, customizable icons
State Management & Data
TanStack Query - Server state management
Zustand - Lightweight state management
React Hook Form - Performant form handling
Zod - TypeScript-first schema validation
Backend & Database
Express.js - Node.js web framework
Drizzle ORM - TypeScript ORM
PostgreSQL - Robust relational database
Session Management - Secure user authentication
🏗️ Project Structure
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Shadcn UI components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── BagsSection.tsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript definitions
├── server/                # Backend application
│   ├── index.ts          # Express server setup
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data layer
├── shared/               # Shared types and schemas
└── components.json       # Shadcn UI configuration
✨ Key Features
🎯 User Experience
Hero Slider: Dynamic image carousel showcasing featured collections
Search Functionality: Debounced search with live results
Product Showcase: Interactive bag collection with hover effects
Navigation: Intuitive header navigation with mobile-responsive menu
Newsletter Signup: Integrated subscription form
🎨 Visual Elements
Rotating Stars: Subtle background animations
Parallax Effects: Smooth scrolling animations
Hover Interactions: Product names appear on hover
Color Transitions: Smooth color changes throughout the interface
Loading States: Elegant loading animations
📱 Responsive Features
Mobile-First Design: Optimized for all screen sizes
Touch-Friendly: Enhanced mobile interactions
Adaptive Navigation: Collapsible menu for smaller screens
Flexible Layouts: Grid systems that adapt to different viewports
🛠️ Getting Started
Prerequisites
Node.js 18+
npm or yarn package manager
PostgreSQL database (optional)
Installation
Clone the repository

git clone <repository-url>
cd golome-fashion-website
Install dependencies

npm install
Set up environment variables

cp .env.example .env
# Configure your environment variables
Start the development server

npm run dev
Open your browser Navigate to http://localhost:5000

📦 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint
npm run type-check - Run TypeScript checks
🎨 Customization
Color Scheme
The primary color scheme uses:

Primary: #FF6F00 (Orange)
Background: #FFFFFF (White)
Text: #000000 (Black)
Accent: Various shades of gray
Fonts
Logo: Montez (cursive)
Body: Poppins (sans-serif)
Headings: Caveat, Dancing Script
Animation Settings
Hover transitions: 300ms
GSAP animations: Customizable timing
Framer Motion: Smooth page transitions
🔧 Configuration
Tailwind CSS
Custom configuration in tailwind.config.ts includes:

Custom color palette
Animation utilities
Responsive breakpoints
Component-specific styles
Shadcn/UI
Components are configured in components.json with:

Custom theme colors
Typography settings
Border radius preferences
📈 Performance Optimizations
Code Splitting: Automatic route-based splitting
Image Optimization: Responsive images with proper loading
Bundle Optimization: Tree-shaking and minimization
Caching Strategies: Efficient API response caching
Lazy Loading: Components and images load on demand
🚀 Deployment
The application is optimized for deployment on:

Replit Deployments (recommended)
Vercel
Netlify
Custom VPS/Cloud providers
Build for Production
npm run build
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Design inspiration from modern fashion e-commerce sites
Shadcn/UI for the beautiful component library
Framer Motion for smooth animations
The React and TypeScript communities
GOLOME - Where fashion meets technology. Experience luxury shopping with modern web design