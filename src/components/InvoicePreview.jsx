import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const InvoicePreview = ({
  selectedCodes,
  patientInfo,
  onEdit,
  onReset,
  invoiceId
}) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Invoice-${invoiceId}`
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mt-8 space-y-6 print:bg-white print:shadow-none">
      <div ref={componentRef}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medical Invoice</h1>
            <p className="text-gray-600 mt-1">Invoice #: INV-{invoiceId}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Date: {new Date(patientInfo.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-2">Patient Info</h2>
          <p><span className="font-medium">Name:</span> {patientInfo.name}</p>
          <p><span className="font-medium">DOB:</span> {patientInfo.dob ? new Date(patientInfo.dob).toLocaleDateString() : 'Not provided'}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-2">Services Rendered</h2>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-2 px-4 text-sm font-medium text-gray-600">CPT Code</th>
                <th className="py-2 px-4 text-sm font-medium text-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedCodes.map((code, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-2 px-4 font-medium text-gray-900">{code.code}</td>
                  <td className="py-2 px-4 text-gray-700">{code.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center pt-6 gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>

      <div className="flex justify-between pt-6 print:hidden">
        <button
          onClick={onReset}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          Start Over
        </button>
        <button
          onClick={onEdit}
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
        >
          Edit Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoicePreview;
