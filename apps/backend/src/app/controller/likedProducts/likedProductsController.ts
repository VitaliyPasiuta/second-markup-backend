import {NextFunction, Request, Response} from 'express';
import { services } from '../../service/services';

export const controllerGetLiked = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    // await services.likedServicesAdd('62e97aee35e5caa5ebeb0cf0'); // --- add liked products
    // 2baf95bb8cf824dc5884e2c
    await services.likedServicesDelete('62baf95bb8cf824dc5884e2c');
    const likedProducts = await services.likedServices();
    res.json(likedProducts);
    next();
  }
  catch(e){
    res.sendStatus(500) && next(e)
  }
};
