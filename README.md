# Kuadratik - Modern E-commerce Platform

A modern, high-performance e-commerce platform built with Next.js 15, featuring advanced product discovery, optimized images, and a polished user experience.

## 🚀 Features

- **High Performance**: Optimized with Next.js 15 Image optimization, lazy loading, and modern bundling
- **SEO Optimized**: Comprehensive metadata with Open Graph, Twitter Cards, and social sharing optimization
- **Product Discovery**: Advanced filtering, sorting, and search capabilities
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean interface using shadcn/ui components with Tailwind CSS
- **TypeScript**: Full type safety with comprehensive interfaces and types
- **State Management**: Redux Toolkit for predictable state management
- **API Integration**: External product API integration with optimized loading
- **Accessibility**: Built with accessible components from Radix UI

## 🛠️ Tech Stack

### Core Framework & Runtime

- **Next.js 15** - React framework with App Router and modern features
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript with comprehensive type definitions

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, consistent icon library

### State Management & Data

- **Redux Toolkit** - Modern Redux with simplified setup
- **React Redux** - Official React bindings for Redux

### Development & Tooling

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Autoprefixer
- **Tailwind Config** - Custom Tailwind configuration

## 📁 Project Structure

```
kuadratik/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Main marketplace page
│   ├── not-found.tsx            # 404 error page
│   └── providers.tsx            # Context and Redux providers
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (optimized)
│   │   ├── button.tsx           # Button component
│   │   ├── skeleton.tsx         # Loading skeleton
│   │   ├── select.tsx           # Dropdown select
│   │   ├── dialog.tsx           # Modal dialogs
│   │   ├── sheet.tsx            # Slide-out panels
│   │   ├── checkbox.tsx         # Checkboxes with Radix
│   │   ├── label.tsx            # Form labels
│   │   ├── radio-group.tsx      # Radio button groups
│   │   ├── input.tsx            # Text inputs
│   │   ├── carousel.tsx         # Image carousels
│   │   ├── dropdown-menu.tsx    # Dropdown menus
│   │   └── toast.tsx            # Toast notifications
│   ├── Header.tsx               # Site header with search
│   ├── Navigation.tsx           # Main navigation menu
│   ├── HeroBanner.tsx           # Promotional banner carousel
│   ├── Sidebar.tsx              # Product filters sidebar
│   ├── MobileSidebar.tsx        # Mobile filter overlay
│   ├── ProductCard.tsx          # Product display card
│   ├── ProductDetailsModal.tsx  # Product detail view
│   ├── SortBar.tsx              # Sorting controls
│   ├── CartSidebar.tsx          # Shopping cart sidebar
│   ├── SaveSidebar.tsx          # Saved items sidebar
│   ├── FilterButton.tsx         # Mobile filter toggle
│   └── EmptyState.tsx           # Empty state components
├── constants/                   # Application constants
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile device detection
│   └── use-toast.ts             # Toast notification logic
├── lib/                         # Core utilities and services
│   ├── apiSlice.ts              # Redux API slice with RTK
│   ├── cartSlice.ts             # Cart state management
│   ├── saveSlice.ts             # Saved items state management
│   ├── store.ts                 # Redux store configuration
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── assets/                  # Product and promotional images
│   └── favicon.ico              # Site favicon
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Centralized type exports
└── styles/                      # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   cd kuadratik
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **View the application**

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Production build with optimizations
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm test` - Run unit tests with Jest
- `npm run test:watch` - Run tests in watch mode

## 🎨 Architecture & Optimizations

### Image Optimization

- **Next.js Image Optimization** - Automatic format conversion and responsive sizing
- **External Image Support** - Configured for external APIs (e.g., Fake Store API)
- **Modern Formats** - AVIF and WebP support with fallbacks

### Performance Features

- **Bundle Optimization** - Tree-shaking and optimized imports for Lucide icons
- **Lazy Loading** - Components and images load on demand
- **Caching** - Redux state persistence for cart and saved items
- **Static Generation** - Pre-rendered pages for better SEO

### SEO & Social Sharing

- **Meta Tags** - Comprehensive page metadata with Open Graph and Twitter Card support
- **Social Images** - Optimized OG images for better social media sharing
- **Search Optimization** - Proper robots directives and indexing instructions
- **Performance SEO** - Next.js optimization for better search rankings

### Code Organization

- **Modular Architecture** - Clean separation of concerns
- **Type Safety** - Comprehensive TypeScript interfaces and types
- **Reusable Components** - shadcn/ui component library for consistency

## 📱 Usage

### Product Discovery

- Browse products in an elegant grid layout
- Use advanced filtering (category, brand, price range, tags)
- Sort by price, rating, popularity, or other criteria
- Search functionality in the header

### Shopping Experience

- Add items to cart with persistent storage
- Save items for later viewing
- Responsive filters that adapt to screen size
- Product detail modals with rich information

### Mobile Experience

- Touch-optimized interface
- Slide-out navigation and filters
- Responsive carousels and images
- Optimized for all device sizes

## 🧪 Testing

This project uses **Jest** and **React Testing Library** for unit testing. The setup includes:

### Testing Framework

- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **Jest DOM** - Custom matchers for DOM testing
- **jsdom** - DOM implementation for Node.js

### Configuration Files

- `jest.config.js` - Jest configuration with Next.js integration
- `jest.setup.js` - Global test setup (imports jest-dom)

### Writing Tests

Create test files alongside your components using the pattern:

```typescript
// components/MyComponent.test.tsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Project Structure for Tests

```
├── lib/
│   └── __tests__/
│       ├── cartSlice.test.ts    # Redux cart slice tests
│       └── saveSlice.test.ts    # Redux save slice tests
```

### Best Practices

- Use `describe` blocks to group related tests
- Use descriptive test names that explain what behavior is being tested
- Prefer `.test.tsx` extension for React component tests
- Use `__tests__` directories for utility function tests
- Mock external dependencies as needed
- Use `screen` queries from React Testing Library for accessibility-focused testing

### Example Component Test

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./ui/button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
# Add other environment variables as needed
```

### Customization

- **Components**: Modify shadcn/ui components in `components/ui/`
- **Styling**: Update `app/globals.css` and Tailwind configuration
- **API**: Configure API endpoints in `lib/apiSlice.ts`
- **State**: Modify Redux slices in `lib/` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- **Live Demo**: [Deployed on Vercel](https://kuadratik.vercel.app/)
- **APIs Used**: [Fake Store API](https://fakestoreapi.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
