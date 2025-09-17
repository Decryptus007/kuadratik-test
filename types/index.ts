/**
 * FilterButton Component Props
 *
 * Defines the properties for the FilterButton component used in filter clearing actions.
 */
export interface FilterButtonProps {
  /** The text label to display on the filter button */
  label: string;
  /** Optional click handler for the filter button */
  onClick?: () => void;
}

/**
 * SortBar Component Props
 *
 * Defines the properties for the SortBar component that handles product sorting and active filter display.
 */
export interface SortBarProps {
  /** Total number of products to display */
  totalProducts: number;
  /** Function to open/close the mobile sidebar */
  setMobileSidebarOpen: (open: boolean) => void;
  /** Current search query string */
  searchQuery?: string;
  /** Currently selected product category */
  selectedCategory?: string | null;
  /** Price range as a tuple [min, max] */
  priceRange?: [number, number];
  /** Array of selected brand names */
  selectedBrands?: string[];
  /** Array of selected tag names */
  selectedTags?: string[];
  /** Current sort order ('asc', 'desc', or empty for default) */
  sortBy?: string;
  /** Callback function when sort order changes */
  onSortChange?: (value: string) => void;
  /** Callback function to clear search query */
  onClearSearch?: () => void;
  /** Callback function to clear selected category */
  onClearCategory?: () => void;
  /** Callback function to clear price range filter */
  onClearPriceRange?: () => void;
  /** Callback function to clear a specific brand filter */
  onClearBrand?: (brand: string) => void;
  /** Callback function to clear a specific tag filter */
  onClearTag?: (tag: string) => void;
  /** Callback function to clear all active filters */
  onClearAllFilters?: () => void;
}

/**
 * Sidebar Component Props
 *
 * Defines the properties for the Sidebar component that handles product filtering options.
 */
export interface SidebarProps {
  /** Array of available product categories */
  categories?: string[];
  /** Currently selected category */
  selectedCategory?: string | null;
  /** Callback function when category selection changes */
  onCategoryChange?: (category: string | null) => void;
  /** Current price range as a tuple [min, max] */
  priceRange?: [number, number];
  /** Callback function when price range changes */
  onPriceRangeChange?: (range: [number, number]) => void;
  /** Array of selected brand names */
  selectedBrands?: string[];
  /** Callback function when brand selection changes */
  onBrandsChange?: (brands: string[]) => void;
  /** Array of selected tag names */
  selectedTags?: string[];
  /** Callback function when tag selection changes */
  onTagsChange?: (tags: string[]) => void;
}

/**
 * Product Interface
 *
 * Defines the structure of a product object from the API.
 */
export interface Product {
  /** Unique identifier for the product */
  id: number;
  /** Product title/name */
  title: string;
  /** Product price */
  price: number;
  /** Product description */
  description: string;
  /** Product category */
  category: string;
  /** Product image URL */
  image: string;
  /** Product rating information */
  rating: {
    /** Average rating value */
    rate: number;
    /** Number of ratings */
    count: number;
  };
}

/**
 * API Response Types
 *
 * Type definitions for API responses.
 */
export type ProductsResponse = Product[];
export type CategoriesResponse = string[];
