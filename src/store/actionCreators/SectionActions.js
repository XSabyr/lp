export const SETSECTIONS = 'SETSECTIONS';
export const DELETESECTIONS = 'DELETESECTIONS';

export const setSections = (sections) => ({
  type: SETSECTIONS,
  payload: { sections },
});

export const deleteSections = () => ({
  type: DELETESECTIONS,
});
