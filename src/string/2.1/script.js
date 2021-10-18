export const toMachineName = (name, separator) =>
  name
    .replace(/[.,]/g, '')
    .replace(/^\d+/, '')
    .trim()
    .replace(/[\s]/g, separator)
    .toLowerCase();
