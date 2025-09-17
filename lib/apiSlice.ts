import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductsResponse, CategoriesResponse } from "@/types";

// Re-export types for backward compatibility
export type { Product, ProductsResponse, CategoriesResponse };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, { sort?: string }>({
      query: (params) => {
        const queryParams = params?.sort ? `?sort=${params.sort}` : "";
        return `/products${queryParams}`;
      },
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = apiSlice;
