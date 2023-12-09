import React from 'react';

interface Step1Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, [name]: value },
    }));
  };

  return (
    <div className='w-full h-full'>
      <h2 className="text-xl font-semibold mb-4">Step 1: Basic Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Address Line 1:</label>
        <input
          type="text"
          name="line1"
          value={formData.address.line1}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Address Line 2:</label>
        <input
          type="text"
          name="line2"
          value={formData.address.line2}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">City:</label>
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">State:</label>
        <input
          type="text"
          name="state"
          value={formData.address.state}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.address.pincode}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Country:</label>
        <input
          type="text"
          name="country"
          value={formData.address.country}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default Step1;
