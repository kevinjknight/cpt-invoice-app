import React, { useState, useEffect } from 'react';
import Step1Description from './components/Step1Description';
import Step2CPTSelector from './components/Step2CPTSelector';
import Step3PatientInfo from './components/Step3PatientInfo';
import InvoicePreview from './components/InvoicePreview';

import { cptCodes, commonBodyParts, xrayViewOptions } from './constants/cptCodes';
import { analyzeDescription, determineMRIBodyPart, determineXrayBodyPart, determineXrayViews } from './utils/analyzeText';
import { getCPTFromGPT } from './utils/aiSuggestCodes';

const App = () => {
  const [step, setStep] = useState(1);
  const [description, setDescription] = useState('');
  const [suggestedCodes, setSuggestedCodes] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);
  const [invoiceId] = useState(Math.floor(Math.random() * 10000));

  const [detectedProcedures, setDetectedProcedures] = useState({
    mri: false,
    xray: false,
    ctscan: false,
    biopsy: false,
    ultrasound: false,
    lab: false
  });

  const [patientInfo, setPatientInfo] = useState({
    name: '',
    dob: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [mriBodyPart, setMriBodyPart] = useState('');
  const [mriContrast, setMriContrast] = useState('without');
  const [xrayBodyPart, setXrayBodyPart] = useState('');
  const [xrayViews, setXrayViews] = useState('');

  useEffect(() => {
    if (description) {
      const procedures = analyzeDescription(description);
      setDetectedProcedures(procedures);

      if (procedures.mri) setMriBodyPart(determineMRIBodyPart(description));
      if (procedures.xray) {
        setXrayBodyPart(determineXrayBodyPart(description));
        setXrayViews(determineXrayViews(description));
      }
    }
  }, [description]);

  useEffect(() => {
    updateProcedureCodes();
  }, [mriContrast, mriBodyPart, xrayBodyPart, xrayViews]);

  const updateProcedureCodes = () => {
    let codes = suggestedCodes.filter(
      code => !code.description.toLowerCase().includes('mri') && !code.description.toLowerCase().includes('x-ray')
    );

    if (detectedProcedures.mri && mriBodyPart) {
      const mri = cptCodes.mri.find(c => c.bodyPart === mriBodyPart && c.contrast === mriContrast);
      if (mri) codes.push(mri);
    }

    if (detectedProcedures.xray && xrayBodyPart) {
      const xray = cptCodes.xrays.find(c =>
        xrayBodyPart === 'chest'
          ? c.bodyPart === xrayBodyPart && (xrayViews ? c.views === xrayViews : c.views === 'two')
          : c.bodyPart === xrayBodyPart
      );
      if (xray) codes.push(xray);
    }

    setSelectedCodes(codes);
  };

  const handleDescriptionSubmit = async () => {
    const aiCodes = await getCPTFromGPT(description);
    setSuggestedCodes(aiCodes);
    setSelectedCodes(aiCodes);
    setStep(2);
  };

  const resetApp = () => {
    setStep(1);
    setDescription('');
    setSuggestedCodes([]);
    setSelectedCodes([]);
    setInvoiceGenerated(false);
    setPatientInfo({
      name: '',
      dob: '',
      date: new Date().toISOString().split('T')[0]
    });
    setMriContrast('without');
    setMriBodyPart('');
    setXrayBodyPart('');
    setXrayViews('');
    setDetectedProcedures({
      mri: false,
      xray: false,
      ctscan: false,
      biopsy: false,
      ultrasound: false,
      lab: false
    });
  };

  return (
    <>
      {step === 1 && (
        <Step1Description
          description={description}
          setDescription={setDescription}
          handleContinue={handleDescriptionSubmit}
        />
      )}
      {step === 2 && (
        <Step2CPTSelector
          selectedCodes={selectedCodes}
          toggleCodeSelection={(code) => {
            setSelectedCodes(prev =>
              prev.some(c => c.code === code.code)
                ? prev.filter(c => c.code !== code.code)
                : [...prev, code]
            );
          }}
          detectedProcedures={detectedProcedures}
          commonBodyParts={commonBodyParts}
  xrayBodyPart={xrayBodyPart}
  setXrayBodyPart={setXrayBodyPart}
  xrayViews={xrayViews}
  setXrayViews={setXrayViews}
  xrayViewOptions={xrayViewOptions}
  mriBodyPart={mriBodyPart}
  setMriBodyPart={setMriBodyPart}
  mriContrast={mriContrast}
  setMriContrast={setMriContrast}
  handleContinue={() => setStep(3)} 
/>
