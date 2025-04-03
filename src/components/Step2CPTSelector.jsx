import React from 'react';

const Step2CPTSelector = ({
  selectedCodes,
  toggleCodeSelection,
  detectedProcedures,
  commonBodyParts,
  xrayBodyPart,
  setXrayBodyPart,
  xrayViews,
  setXrayViews,
  xrayViewOptions,
  mriBodyPart,
  setMriBodyPart,
  mriContrast,
  setMriContrast,
  handleContinue
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Review Suggested CPT Codes</h2>

      <div className="space-y-4">
        {selectedCodes.map((code) => (
          <label key={code.code} className="flex items-start p-4 border rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <input
              type="checkbox"
              checked={true}
              onChange={() => toggleCodeSelection(code)}
              className="mr-4 mt-1"
            />
            <div>
              <span className="font-semibold text-gray-800">{code.code}</span>
              <div className="text-gray-700">{code.description}</div>
            </div>
          </label>
        ))}
      </div>

      {detectedProcedures.xray && (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-700 mb-4">X-ray Details</h3>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Body Part X-rayed</p>
            <div className="flex flex-wrap gap-2">
              {commonBodyParts.xray.map(part => (
                <button
                  key={part.id}
                  className={`px-4 py-2 rounded border ${xrayBodyPart === part.id ? 'bg-primary text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setXrayBodyPart(part.id)}
                >
                  {part.label}
                </button>
              ))}
            </div>
          </div>

          {xrayBodyPart === 'chest' && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Number of Views</p>
              <div className="flex flex-wrap gap-2">
                {xrayViewOptions.map(view => (
                  <button
                    key={view.id}
                    className={`px-4 py-2 rounded border ${xrayViews === view.id ? 'bg-primary text-white' : 'bg-white text-gray-800'}`}
                    onClick={() => setXrayViews(view.id)}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {detectedProcedures.mri && (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-700 mb-4">MRI Details</h3>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Body Part Scanned</p>
            <div className="flex flex-wrap gap-2">
              {commonBodyParts.mri.map(part => (
                <button
                  key={part.id}
                  className={`px-4 py-2 rounded border ${mriBodyPart === part.id ? 'bg-primary text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setMriBodyPart(part.id)}
                >
                  {part.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Contrast Used?</p>
            <div className="flex gap-3">
              {['without', 'with', 'both'].map(type => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded border ${mriContrast === type ? 'bg-primary text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setMriContrast(type)}
                >
                  {type === 'without' && 'Without Contrast'}
                  {type === 'with' && 'With Contrast'}
                  {type === 'both' && 'Both'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        className="w-full py-3 mt-6 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        onClick={handleContinue}
        disabled={selectedCodes.length === 0}
      >
        Continue to Patient Info
      </button>
    </div>
  );
};

export default Step2CPTSelector;
