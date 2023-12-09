import React from 'react';

interface DropdownProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selectedOptions: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOptions, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    onChange(selectedValues);
  };

  return (
    <select
      multiple
      value={selectedOptions}
      onChange={handleSelectChange}
      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
