import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    phoneNumber: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    },
    files: [],
    geolocationStatus: 'Not captured',
    selectedOptions: [],
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
  };

  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} />}

        <div className="mt-4">
          <span className={step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}></span>
          <span className={step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}></span>
          <span className={step === 3 ? 'bg-blue-500' : 'bg-gray-300'}></span>
        </div>

        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          )}
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
