export const cptCodes = {
  visits: [
    { code: '99213', description: 'Office visit, established patient, level 3' },
    { code: '99214', description: 'Office visit, established patient, level 4' },
    { code: '99203', description: 'Office visit, new patient, level 3' }
  ],
  xrays: [
    { code: '71045', description: 'X-ray of chest, single view', bodyPart: 'chest', views: 'single' },
    { code: '71046', description: 'X-ray of chest, 2 views', bodyPart: 'chest', views: 'two' },
    { code: '71047', description: 'X-ray of chest, 3 views', bodyPart: 'chest', views: 'three' },
    { code: '71048', description: 'X-ray of chest, 4+ views', bodyPart: 'chest', views: 'four or more' },
    { code: '73030', description: 'X-ray of shoulder, complete', bodyPart: 'shoulder' },
    { code: '73560', description: 'X-ray of knee, 1-2 views', bodyPart: 'knee', views: 'one to two' },
    { code: '73562', description: 'X-ray of knee, 3 views', bodyPart: 'knee', views: 'three' },
    { code: '73564', description: 'X-ray of knee, 4+ views', bodyPart: 'knee', views: 'four or more' }
  ],
  mri: [
    { code: '70551', description: 'MRI of brain without contrast', bodyPart: 'brain', contrast: 'without' },
    { code: '70552', description: 'MRI of brain with contrast', bodyPart: 'brain', contrast: 'with' },
    { code: '70553', description: 'MRI of brain without & with contrast', bodyPart: 'brain', contrast: 'both' },
    { code: '73721', description: 'MRI of lower extremity joint without contrast', bodyPart: 'knee', contrast: 'without' },
    { code: '73722', description: 'MRI of lower extremity joint with contrast', bodyPart: 'knee', contrast: 'with' },
    { code: '73723', description: 'MRI of lower extremity joint without & with contrast', bodyPart: 'knee', contrast: 'both' }
  ],
  biopsies: [
    { code: '11102', description: 'Tangential biopsy of skin, single lesion' }
  ]
};

export const commonBodyParts = {
  xray: [
    { id: 'chest', label: 'Chest' },
    { id: 'shoulder', label: 'Shoulder' },
    { id: 'knee', label: 'Knee' },
    { id: 'spine', label: 'Spine' },
    { id: 'hand', label: 'Hand' },
    { id: 'foot', label: 'Foot' }
  ],
  mri: [
    { id: 'brain', label: 'Brain/Head' },
    { id: 'cervical spine', label: 'Cervical Spine (Neck)' },
    { id: 'lumbar spine', label: 'Lumbar Spine (Lower back)' },
    { id: 'shoulder', label: 'Shoulder' },
    { id: 'knee', label: 'Knee' }
  ]
};

export const xrayViewOptions = [
  { id: 'single', label: 'Single view' },
  { id: 'two', label: '2 views' },
  { id: 'three', label: '3 views' },
  { id: 'four or more', label: '4+ views' }
];
