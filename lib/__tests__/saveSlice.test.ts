import saveReducer, {
  addToSave,
  removeFromSave,
  clearSave,
} from "../saveSlice";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  category: "testing",
  description: "A test product",
  image: "/test-image.jpg",
  rating: { rate: 4.5, count: 25 },
};

describe("saveSlice", () => {
  const initialState = { items: [] };

  it("should return the initial state", () => {
    expect(saveReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  describe("addToSave", () => {
    it("should add a new product to saved items", () => {
      const action = addToSave(mockProduct);
      const result = saveReducer(initialState, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0]).toEqual({
        product: mockProduct,
        savedAt: expect.any(String),
      });
    });

    it("should not add duplicate products", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, savedAt: new Date().toISOString() }],
      };

      const action = addToSave(mockProduct);
      const result = saveReducer(stateWithItem, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].product.id).toBe(mockProduct.id);
    });

    it("should add different products", () => {
      const anotherProduct = {
        ...mockProduct,
        id: 2,
        title: "Another Product",
      };
      const stateWithItem = {
        items: [{ product: mockProduct, savedAt: new Date().toISOString() }],
      };

      const action = addToSave(anotherProduct);
      const result = saveReducer(stateWithItem, action);

      expect(result.items).toHaveLength(2);
      expect(result.items.map((item) => item.product.id)).toEqual([
        mockProduct.id,
        anotherProduct.id,
      ]);
    });
  });

  describe("removeFromSave", () => {
    it("should remove product from saved items", () => {
      const stateWithItem = {
        items: [{ product: mockProduct, savedAt: new Date().toISOString() }],
      };

      const action = removeFromSave(mockProduct.id);
      const result = saveReducer(stateWithItem, action);

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
          { product: mockProduct, savedAt: new Date().toISOString() },
          { product: anotherProduct, savedAt: new Date().toISOString() },
        ],
      };

      const action = removeFromSave(mockProduct.id);
      const result = saveReducer(stateWithItems, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].product.id).toBe(anotherProduct.id);
    });
  });

  describe("clearSave", () => {
    it("should clear all saved items", () => {
      const stateWithItems = {
        items: [
          { product: mockProduct, savedAt: new Date().toISOString() },
          {
            product: { ...mockProduct, id: 2 },
            savedAt: new Date().toISOString(),
          },
        ],
      };

      const action = clearSave();
      const result = saveReducer(stateWithItems, action);

      expect(result.items).toHaveLength(0);
    });

    it("should work on empty state", () => {
      const action = clearSave();
      const result = saveReducer(initialState, action);

      expect(result.items).toHaveLength(0);
    });
  });
});
