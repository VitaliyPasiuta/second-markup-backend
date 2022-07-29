import { services } from "../../service/services";

export const controlerGetProducts = async (req, res, next) => {
  try{
    let allProducts;
    await services.productServices().then((products)=> {allProducts = products} 
    );
    const allProductsJSON = JSON.stringify(allProducts);
    res.json(allProductsJSON);
    next();
  }
  catch(e){
    console.log('Error: ', e);
    res.sendStatus(500) && next(e)
  }
}

function getProducts() { // mock data
  return ({
    price: 43
  })
}