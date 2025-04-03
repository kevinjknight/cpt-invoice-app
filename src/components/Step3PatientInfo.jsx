import React from 'react';

const Step3PatientInfo = ({ patientInfo, setPatientInfo, onBack, onGenerate }) => {
  const handleChange = (field, value) => {
    setPatientInfo({ ...patientInfo, [field]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Patient Name</label>
          <input
            type="text"
            value={patientInfo.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            value={patientInfo.dob}
            onChange={(e) => handleChange('dob', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Service Date</label>
          <input
            type="date"
            value={patientInfo.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={onGenerate}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          disabled={!patientInfo.name}
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
};

export default Step3PatientInfo;
