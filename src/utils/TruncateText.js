
function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
  
    const truncatedText = text.substring(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' '); // Find the last space
  
    return lastSpaceIndex !== -1
      ? truncatedText.substring(0, lastSpaceIndex) + '...'
      : truncatedText + '...';
};

export default truncateText;
