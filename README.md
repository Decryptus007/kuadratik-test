# Kuadratik Test - E-commerce Product Listing

A modern, responsive e-commerce product listing application built with Next.js 15, featuring a comprehensive product catalog with filtering, sorting, and promotional banners.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Product Catalog**: Extensive product listing with images, prices, ratings, and reviews
- **Advanced Filtering**: Sidebar filters for easy product discovery
- **Sorting Options**: Multiple sorting options including price, rating, and popularity
- **Promotional Banners**: Dynamic promotional sections with special offers and discounts
- **Mobile-First**: Optimized mobile experience with collapsible sidebar and touch-friendly interface
- **Modern UI**: Clean, professional design using shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Key Dependencies

- **@radix-ui/\*** - Accessible UI primitives
- **@tanstack/react-query** - Data fetching and caching
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **class-variance-authority** - Component variant utilities

## 📁 Project Structure

```
kuadratik-test/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   └── providers.tsx            # Context providers
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── Header.tsx               # Site header
│   ├── Navigation.tsx           # Main navigation
│   ├── HeroBanner.tsx           # Hero section
│   ├── Sidebar.tsx              # Desktop filters
│   ├── MobileSidebar.tsx        # Mobile filters
│   ├── ProductCard.tsx          # Product display card
│   ├── SortBar.tsx              # Sorting controls
│   └── Footer.tsx               # Site footer
├── constants/                   # Application constants
│   └── data.ts                  # Product and promo data
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── assets/                  # Product images
│   └── favicon.ico              # Site favicon
└── types/                       # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   cd kuadratik-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Usage

### Navigation

- Use the header navigation to browse different product categories
- Access filters via the sidebar (desktop) or filter button (mobile)

### Product Discovery

- Browse products in the main grid layout
- Use sorting options to organize products by price, rating, or popularity
- Apply filters to narrow down product results

### Mobile Experience

- Tap the menu button to access mobile navigation
- Use the filter button to open mobile filter options
- Swipe through promotional banners

## 🎨 Customization

### Adding New Products

Edit `constants/data.ts` to add new products to the catalog:

```typescript
{
  id: 21,
  image: "/assets/new-product.png",
  title: "New Product Name",
  price: 99,
  rating: 4.5,
  reviews: 42,
  badge: "NEW"
}
```

### Styling

- Modify global styles in `app/globals.css`
- Customize Tailwind configuration in `tailwind.config.ts`
- Update component styles using Tailwind classes

### Components

- All UI components are located in the `components/` directory
- shadcn/ui components can be customized via their respective files in `components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- **Live Demo**: [View on Vercel](https://kuadratik-test.vercel.app/)
- **Documentation**: See inline code comments and component documentation
