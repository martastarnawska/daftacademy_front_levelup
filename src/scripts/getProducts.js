const getProducts = async (categoryId) => {
  const products = await fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=${categoryId}&limit=8&store=US`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "4c3eeae118msh7ea5ab583c41ab7p11329bjsn123ed7465871"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw Error(resp.statusText)
      }
      return response
    })
    .then(response => response.json())
    .then(response => response.products)
    .catch(err => {
      console.log(err)
    });
  return products
};

export default getProducts;
