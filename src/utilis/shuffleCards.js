const shuffle = (array) => {
    
  return array.sort(() => Math.random() - 0.5).slice(7);
};
export default shuffle