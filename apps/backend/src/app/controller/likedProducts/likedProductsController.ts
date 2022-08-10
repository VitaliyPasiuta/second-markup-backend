import {NextFunction, Request, Response} from 'express';
import { services } from '../../service/services';

export const controllerGetLiked = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const likedProducts = await services.likedServicesGet();
    res.json(likedProducts);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e)
  }
};

export const controllerAddLiked = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    await services.likedServicesAdd(req.params.id); 
    res.sendStatus(200);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e);
  }
};

export const controllerDeleteLiked =  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    await services.likedServicesDelete(req.params.id);
    res.sendStatus(200);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e);
  }
}
