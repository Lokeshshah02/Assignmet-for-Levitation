import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

interface Step3Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step3: React.FC<Step3Props> = ({ formData, setFormData }) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const names = data.map((user: any) => user.name);
        setOptions(names);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleDropdownChange = (selectedOptions: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedOptions,
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Multi-Field Select Dropdown</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Select Options:</label>
        <Dropdown
          options={options}
          selectedOptions={formData.selectedOptions}
          onChange={handleDropdownChange}
        />
      </div>
    </div>
  );
};

export default Step3;
