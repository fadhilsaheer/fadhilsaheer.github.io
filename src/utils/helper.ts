const allSocials = [
  'https://github.com/fadhilsaheer',
  'https://twitter.com/fadhilsaheer',
  'https://dev.to/fadhilsaheer',
  'https://instagram.com/fadhilsaheer',
  'https://medium.com/@fadhilsaheer',
  'https://discord.com/users/733166402567012363',
  'https://t.me/fadhilsaheer',
];

export const getRandomLink = () => {
  return allSocials[Math.floor(Math.random() * allSocials.length)];
};

export const getAge = () => {
  // Copied from `https://javatpoint.com/calculate-age-using-javascript`
  const dob = new Date('08/23/2006');
  return Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);
};
