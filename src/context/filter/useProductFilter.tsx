import { useMemo, useContext } from "react";
import { FilterContext } from "./FilterContext";

export function useProductFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useProductFilter must be used within a FilterProvider");
  }

  const { products, listCategories, sort, handleListCategories, handleSort } =
    context;

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const byCategory =
        listCategories.length === 0 ||
        listCategories.includes(product.category);

      return byCategory;
    });

    if (sort) {
      filtered = [...filtered].sort((a, b) => {
        switch (sort) {
          case "rating-asc":
            return a.rating - b.rating;
          case "rating-desc":
            return b.rating - a.rating;
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [products, listCategories, sort]);

  return {
    filteredProducts,
    categories,
    handleListCategories,
    listCategories,
    handleSort,
  };
}
