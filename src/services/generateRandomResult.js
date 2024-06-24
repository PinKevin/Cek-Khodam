import khodamArray from './khodamArray';

const stringToHashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const generateRandomNumber = (input) => {
  const hashCode = stringToHashCode(input);

  const randomNumber = Math.abs(hashCode % 12) + 1;

  return randomNumber;
};

const generateKhodam = (input) => {
  const randomNumber = generateRandomNumber(input);

  const khodam = khodamArray.find((item) => item.id === randomNumber);

  return khodam;
};

export default generateKhodam;
