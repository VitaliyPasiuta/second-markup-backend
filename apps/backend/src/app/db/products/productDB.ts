import productsData from '../../../../mock/products.json';

export const productDB = async () => {
  try{
    return await getData();
  }
  catch(e){
    throw new Error(`productDB: ${e}`);
  }
}


const data = [
  {data: 1,
  price: 41,
  title: "String"
  },
  {data: 2,
    price: 52,
    title: "String - 2"
    },
]

async function getData(){
  return productsData;
}