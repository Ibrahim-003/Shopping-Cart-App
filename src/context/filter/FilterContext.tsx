import { createContext } from "react";
import { ProductAPI } from "../types/types";

type FilterContextType = {
  products: ProductAPI[];
  listCategories: string[];
  sort: string | null;
  handleListCategories: (newCategory: string) => void;
  handleSort: (value: string) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
