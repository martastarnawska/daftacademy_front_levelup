import allProducts from './allProducts';
import setCurrentYear from './setCurrentYear';
import scrollToTop from './scrollToTop';
import createExposition from './createExposition';

const onStart = () => {
  createExposition();
  scrollToTop();
  allProducts();
  setCurrentYear();
}

export default onStart;
