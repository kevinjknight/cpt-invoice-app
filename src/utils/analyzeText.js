export const analyzeDescription = (text) => {
  const lower = text.toLowerCase();

  return {
    mri: /(mri|magnetic resonance)/.test(lower),
    xray: /(x-ray|xray|radiograph|film)/.test(lower),
    ctscan: /(ct scan|cat scan)/.test(lower),
    biopsy: /biopsy/.test(lower),
    ultrasound: /(ultrasound|sonogram)/.test(lower),
    lab: /(blood test|lab|labs)/.test(lower)
  };
};

export const determineMRIBodyPart = (text) => {
  const lower = text.toLowerCase();

  if (/brain|head/.test(lower)) return 'brain';
  if (/knee/.test(lower)) return 'knee';
  if (/shoulder/.test(lower)) return 'shoulder';
  if (/neck|cervical spine/.test(lower)) return 'cervical spine';
  if (/lower back|lumbar spine/.test(lower)) return 'lumbar spine';

  return '';
};

export const determineXrayBodyPart = (text) => {
  const lower = text.toLowerCase();

  if (/chest|lung/.test(lower)) return 'chest';
  if (/knee/.test(lower)) return 'knee';
  if (/shoulder/.test(lower)) return 'shoulder';
  if (/hand/.test(lower)) return 'hand';
  if (/foot/.test(lower)) return 'foot';
  if (/spine|back/.test(lower)) return 'spine';

  return '';
};

export const determineXrayViews = (text) => {
  const lower = text.toLowerCase();

  if (/single view|1 view/.test(lower)) return 'single';
  if (/2 views|two views/.test(lower)) return 'two';
  if (/3 views|three views/.test(lower)) return 'three';
  if (/4 views|four views|complete/.test(lower)) return 'four or more';

  return '';
};
