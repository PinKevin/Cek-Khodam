function capitalizeEachWord(text) {
  const words = text.split(' ');

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const capitalizedText = capitalizedWords.join(' ');

  return capitalizedText;
}

export default capitalizeEachWord;
