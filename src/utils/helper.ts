const allSocials = [
  'https://github.com/fadhilsaheer',
  'https://dev.to/fadhilsaheer',
  'https://twitter.com/fadhilsaheer',
  'https://medium.com/@fadhilsaheer',
  '',
];

export const getRandomLink = () => {
  return allSocials[Math.floor(Math.random() * allSocials.length)];
};

export const getAge = () => {
  // Copied from `https://javatpoint.com/calculate-age-using-javascript`
  const dob = new Date('08/23/2006');
  return Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);
};
