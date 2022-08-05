export const getYearDiffFromDate = (date: string) => {
  // Copied from `https://javatpoint.com/calculate-age-using-javascript`
  const dateTime = new Date(date);
  return Math.abs(
    new Date(Date.now() - dateTime.getTime()).getUTCFullYear() - 1970
  );
};
