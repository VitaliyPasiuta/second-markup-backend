import { NextFunction, Request, Response } from 'express';
import { services } from '../../service/services';

export const controllerGetCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const cart = await services.cartServicesGet();
    res.json(cart);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e)
  }
};

export const controllerAddCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    await services.cartServicesAdd(req.params.id); 
    res.json({"status": 200});
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e);
  }
};

export const controllerDeleteCart =  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    await services.cartServicesDelete(req.params.id);
    res.json({"status": 200});
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e);
  }
}
