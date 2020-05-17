import createExposition from './createExposition';

const allProducts = () => {
  const moreButton = document.getElementById('showAll');




  const showAll = () => {
    createExposition(19839);
    moreButton.classList.add('button--hidden');
  };

  moreButton.addEventListener('click', showAll);
};

export default allProducts;
