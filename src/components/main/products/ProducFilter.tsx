import { useProductFilter } from "../../../context/filter/useProductFilter";
import Dropdown from "../../ui/Dropdown";
import { capitalizeCategory } from "../../../utils/utils";

export default function ProductFilter() {
  const { categories, listCategories, handleListCategories, handleSort } =
    useProductFilter();

  const sortOptions = [
    { value: "default", label: "Sort Products", disabled: true },
    { value: "rating-desc", label: "Highest Rating" },
    { value: "rating-asc", label: "Lowest Rating" },
    { value: "price-desc", label: "Highest Price" },
    { value: "price-asc", label: "Lowest Price" },
  ];

  return (
    <nav className='md:sticky md:top-[94px] py-6 px-4 border border-border dark:border-border-dark rounded flex flex-col gap-4'>
      <div className='w-full px-2 py-2 flex flex-col gap-3 overflow-auto'>
        <h2 className='text-lg text-left text-indigo-400 font-semibold'>
          Categories
        </h2>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-sm text-left ${
              listCategories.includes(category)
                ? "bg-primary text-white"
                : "hover:bg-muted dark:hover:bg-white/20 transition-colors duration-300"
            }`}
            onClick={() => handleListCategories(category)}
          >
            {capitalizeCategory(category)}
          </button>
        ))}
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h2 className='text-lg text-left text-indigo-400 font-semibold'>
          Sort By
        </h2>
        <Dropdown
          options={sortOptions}
          onChange={handleSort}
          placeholder='Sort Products'
          className=''
          dropdownClassName='my-dropdown-list'
          optionClassName='my-dropdown-item'
          selectedOptionClassName=''
        />
      </div>
    </nav>
  );
}
