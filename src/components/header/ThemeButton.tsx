import { FaMoon, FaSun } from "react-icons/fa";

import { useDarkTheme } from "../../hooks/useTheme";

export default function ThemeButton() {
  const { dark, setDark } = useDarkTheme();
  return (
    <button
      className='bg-stone-50 dark:bg-background p-[10px] inset-ring inset-ring-stone-300 rounded-full dark:inset-ring-white/20 hover:bg-stone-100 dark:hover:bg-white/20'
      onClick={() => setDark(!dark)}
    >
      {dark ? (
        <FaSun className='text-lg dark:text-white' />
      ) : (
        <FaMoon className='text-background-dark text-lg' />
      )}
    </button>
  );
}
