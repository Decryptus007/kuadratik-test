import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../cartSlice";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  category: "testing",
  description: "A test product",
  image: "/test-image.jpg",
  rating: { rate: 4.5, count: 25 },
};

describe("cartSlice", () => {
  const initialState = { items: [] };

  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  describe("addToCart", () => {
    it("should add a new product to cart", () => {
      const action = addToCart(mockProduct);
      const result = cartReducer(initialState, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0]).toEqual({
        product: mockProduct,
        quantity: 1,
      });
    });

    it("should increase quantity when adding existing product", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, quantity: 1 }],
      };

      const action = addToCart(mockProduct);
      const result = cartReducer(stateWithItem, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].quantity).toBe(2);
    });
  });

  describe("removeFromCart", () => {
    it("should remove product from cart", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, quantity: 1 }],
      };

      const action = removeFromCart(mockProduct.id);
      const result = cartReducer(stateWithItem, action);

      expect(result.items).toHaveLength(0);
    });

    it("should not remove other products", () => {
      const anotherProduct = {
        ...mockProduct,
        id: 2,
        title: "Another Product",
      };
      const stateWithItems = {
        items: [
          { product: mockProduct, quantity: 1 },
          { product: anotherProduct, quantity: 1 },
        ],
      };

      const action = removeFromCart(mockProduct.id);
      const result = cartReducer(stateWithItems, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].product.id).toBe(anotherProduct.id);
    });
  });

  describe("updateQuantity", () => {
    it("should update product quantity", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, quantity: 1 }],
      };

      const action = updateQuantity({ id: mockProduct.id, quantity: 3 });
      const result = cartReducer(stateWithItem, action);

      expect(result.items[0].quantity).toBe(3);
    });

    it("should remove product when quantity is 0 or less", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, quantity: 2 }],
      };

      const action = updateQuantity({ id: mockProduct.id, quantity: 0 });
      const result = cartReducer(stateWithItem, action);

      expect(result.items).toHaveLength(0);
    });

    it("should not affect other products", () => {
      const anotherProduct = {
        ...mockProduct,
        id: 2,
        title: "Another Product",
      };
      const stateWithItems = {
        items: [
          { product: mockProduct, quantity: 1 },
          { product: anotherProduct, quantity: 1 },
        ],
      };

      const action = updateQuantity({ id: mockProduct.id, quantity: 3 });
      const result = cartReducer(stateWithItems, action);

      expect(result.items[0].quantity).toBe(3);
      expect(result.items[1].quantity).toBe(1);
    });
  });
});
