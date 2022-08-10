import { Product } from "../../../types/product";
import { services } from "../../service/services";
import {NextFunction, Request, Response} from 'express';


export const controllerGetProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    let allProducts: Product[];
    await services.productServices().then((products)=> {allProducts = products} 
    );
    res.json(allProducts);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e)
  }
}