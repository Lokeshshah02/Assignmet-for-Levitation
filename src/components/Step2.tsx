import React, { useState } from 'react';

interface Step2Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    setFiles(fileList);
  };

  const handleUpload = () => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prevData) => ({ ...prevData, files: fileArray }));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Multi-File Upload</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">File Upload:</label>
        <input
          type="file"
          multiple
          accept=".png, .pdf"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload
        </button>
      </div>
      <div className="mb-4">
        <p>Status: {formData.geolocationStatus}</p>
      </div>
    </div>
  );
};

export default Step2;
