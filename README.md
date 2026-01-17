# Nerix Technoserve - IT Infrastructure Services Website

A modern, responsive React website for Nerix Technoserve, an ISO 9001:2015 certified IT infrastructure services company based in Kolkata, West Bengal, India.

## 📋 Overview

This website showcases comprehensive IT infrastructure services including network management, security solutions, cloud services, and technical support. The site is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## 🏗️ Features

### Core Pages
- **Home Page** - Dynamic hero section with rotating images showcasing IT infrastructure, team, and cloud services
- **Services** - Detailed overview of all IT infrastructure management services
- **About Us** - Company information and background
- **Solutions** - Custom IT solutions for businesses
- **Contact** - Contact form and company information

### Key Components
- **Hero Section** - Auto-rotating background images with call-to-action buttons
- **Services Grid** - Interactive cards displaying 6 main service categories
- **Challenges Section** - Highlights common IT infrastructure challenges and solutions
- **Partners Section** - OEM partners and client logos
- **Footer** - Contact information, social links, and navigation

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing for SPA navigation

### UI Components
- **ShadCN UI** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful SVG icons
- **Recharts** - Data visualization and charts
- **Sonner** - Toast notifications

### State Management & Data
- **TanStack Query** - Server state management and data fetching
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and autoprefixing
- **Autoprefixer** - Automatic vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Mynerix
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🎨 Design & Styling

The website uses a modern, professional design with:
- **Color Scheme**: Primary blue theme with accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Responsive grid system that works on all devices
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile Devices** - Touch-friendly navigation and optimized layouts
- **Tablets** - Balanced layout between mobile and desktop
- **Desktop** - Full feature set with optimal spacing and typography

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. For production deployment, consider setting:

```bash
VITE_API_URL=your-api-endpoint
VITE_CONTACT_EMAIL=your-contact-email
```

### Build Configuration
- **Vite Config** (`vite.config.ts`) - Build settings and optimizations
- **Tailwind Config** (`tailwind.config.ts`) - Design tokens and theme
- **TypeScript Config** (`tsconfig.json`) - TypeScript compilation settings


## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with rotating images
│   ├── Services.tsx    # Services grid component
│   ├── Challenges.tsx  # Challenges and solutions
│   ├── Partners.tsx    # Partner and client logos
│   └── Footer.tsx      # Footer with contact info
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   ├── SolutionsPage.tsx
│   └── ContactPage.tsx
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🎯 Services Offered

The website showcases these main service categories:

1. **IT Infrastructure Management Services**
   - Complete management of servers, networks, and storage
   - 24/7 monitoring and support

2. **Information Security Management & Services**
   - Comprehensive security solutions
   - Protection from internal and external threats

3. **Facility Management & Outsourcing Services**
   - End-to-end facility management
   - Operational efficiency optimization

4. **Annual Maintenance Contract**
   - Comprehensive AMC packages
   - Hardware, software, and network maintenance

5. **Remote Management & Support**
   - Expert remote technical support
   - Round-the-clock availability

6. **IT Consulting Services**
   - Strategic IT consulting
   - Technology investment guidance

## 🔗 External Integrations

- **Social Media Links** - Facebook, Twitter, LinkedIn
- **Email Integration** - Contact form with email functionality
- **Logo API** - Dynamic logo loading for partners and clients
- **Map Integration** - Location-based services (can be added)

## 📊 Performance Features

- **Code Splitting** - Lazy loading of components
- **Image Optimization** - Optimized image loading and fallbacks
- **Bundle Optimization** - Tree shaking and minification
- **Caching Strategy** - Efficient caching for better performance


## 📞 Contact

For support and inquiries:
- **Email**: sukriti.patuli@gmail.com
- **Phone**: +91 7004179118
- **Location**: Kolkata, West Bengal, India

---

**Nerix Technoserve** - Your trusted partner for comprehensive IT infrastructure solutions.
