import React from 'react';

const Step1Description = ({ description, setDescription, handleContinue }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Build an Invoice</h1>
      <p className="text-gray-700 mb-6">Describe the visit in simple terms, like you'd text a friend.</p>
      <textarea
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="e.g. I saw my doctor for knee pain. They ordered an x-ray."
      />
      <button
        onClick={handleContinue}
        className="mt-6 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Step1Description;
