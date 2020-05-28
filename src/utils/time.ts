export const formatDateTimeMetadata = (dateTime) => {
  return new Date(dateTime * 1000).toLocaleString('en-US');
};
