import getProducts from "./getProducts";

const createElement = (imageUrl, collectionName, size) => {
  const collection = `
  <img class="stall__picture" src="https://${imageUrl}"  height=${size} alt="">
  <div class="stall__description"> 
      <p class="stall__title">${collectionName}</p>
      <a href="#">Shop now</a>       
  </div>
  `
  return collection;
}

const createCollections = async () => {
  const stalls = document.getElementsByClassName('collection');
  const collectionsList = await getProducts(6993, 4);
  const sizes = [630, 310, 310, 310];

  collectionsList.map((item, index) => {
    const newOne = createElement(item.imageUrl, item.name, sizes[index]);
    stalls[index].insertAdjacentHTML('beforeend', newOne);
  })

};

export default createCollections;
