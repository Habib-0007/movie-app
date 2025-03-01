import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DropdownProps } from "../types/types";

const Dropdown = ({ placeholder, options, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="relative w-full md:w-auto min-w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 bg-gray-200 rounded-lg px-4 flex items-center gap-4 justify-between hover:bg-gray-300 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-black">{selected || placeholder}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-black transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-gray-200 rounded-lg shadow-lg py-2 z-10">
          <div className="max-h-48 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSelected(option.label);
                  setIsOpen(false);
                  onChange?.(option.value);
                }}
                className="w-full px-4 py-2 text-left text-black hover:bg-gray-300 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
