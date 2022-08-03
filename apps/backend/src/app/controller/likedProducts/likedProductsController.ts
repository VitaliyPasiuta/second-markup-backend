import {NextFunction, Request, Response} from 'express';
import { services } from '../../service/services';

export const controllerGetLiked = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    // await services.likedServicesAdd('62baf95b0b0cdd25546f5890');
    const likedProducts = await services.likedServices();
    res.json(likedProducts);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e)
  }
};
