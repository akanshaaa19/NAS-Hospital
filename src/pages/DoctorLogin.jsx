import React, { useState } from 'react';
import { Layout } from '../components/ui/Layout';

const Doctorform = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center ">
      <div className="shadow-md rounded-lg p-8 w-6/12 h-6/12 bg-white">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h1 className="text-2xl font-semibold mb-4 text-center">Personal Information</h1>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 border focus:ring focus:ring-indigo-200 px-3 py-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 border focus:ring focus:ring-indigo-200 px-3 py-2"
                  placeholder="John Doe"
                />
              </div>
              <button type="button" onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-600 text-black font-semibold py-2 px-4 rounded-full">
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Step 2: Contact Information</h1>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 border focus:ring focus:ring-indigo-200 px-3 py-2"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 px-4 rounded-full">
                  Previous
                </button>
                <button type="button" onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-600 text-black font-semibold py-2 px-4 rounded-full">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Step 3: Additional Information</h1>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 border focus:ring focus:ring-indigo-200 px-3 py-2"
                  placeholder="123 Main St"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 px-4 rounded-full">
                  Previous
                </button>
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-black font-semibold py-2 px-4 rounded-full">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className='banner' >
       <img src="https://drtop.in/public/carausel3_1.webp" className='h-full'/>
      </div>
    </div>
    </Layout>
  );
};

export default Doctorform;