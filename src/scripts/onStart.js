import allProducts from './allProducts';
import setCurrentYear from './setCurrentYear';
import scrollToTop from './scrollToTop';
import createExposition from './createExposition';
import createSliderItems from './createSliderItems';

const onStart = () => {
  createExposition(4209);
  createSliderItems()
  scrollToTop();
  allProducts();
  setCurrentYear();
}

export default onStart;
