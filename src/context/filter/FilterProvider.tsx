import { ReactNode, useState } from "react";
import { ProductAPI } from "../../types/types";
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({
  children,
  products,
}: {
  children: ReactNode;
  products: ProductAPI[];
}) => {
  const [listCategories, setListCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<string | null>(null);

  const handleListCategories = (newCategory: string) => {
    setListCategories((prev) => {
      const isIncludes = prev.includes(newCategory);
      const newList = isIncludes
        ? prev.filter((item) => item !== newCategory)
        : [...prev, newCategory];
      return newList;
    });
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  return (
    <FilterContext.Provider
      value={{
        products,
        listCategories,
        sort,
        handleListCategories,
        handleSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
