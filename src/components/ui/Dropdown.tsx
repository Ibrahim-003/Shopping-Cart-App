import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  selectedOptionClassName?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  defaultValue = "",
  placeholder = "Seleccionar",
  onChange,
  className = "",
  dropdownClassName = "",
  optionClassName = "",
  selectedOptionClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Inicializar la opción seleccionada
  useEffect(() => {
    if (defaultValue) {
      const option = options.find((opt) => opt.value === defaultValue);
      if (option) {
        setSelectedOption(option);
      }
    }
  }, [defaultValue, options]);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className={`custom-dropdown-container ${className}`} ref={dropdownRef}>
      <div
        className={`custom-dropdown-selected ${selectedOptionClassName}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className='dropdown-arrow'>
          <FaAngleDown
            className={`text-lg transition-all duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />{" "}
        </span>
      </div>

      {isOpen && (
        <div className={`custom-dropdown-options ${dropdownClassName}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-dropdown-option ${optionClassName} ${
                option.disabled ? "option-disabled" : ""
              } ${
                selectedOption?.value === option.value ? "option-selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
