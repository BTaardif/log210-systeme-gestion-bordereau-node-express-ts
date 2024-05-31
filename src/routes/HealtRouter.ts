import { Router, Request, Response, NextFunction } from 'express';

export class HealtRouter {
  router: Router;
  
  /**
  * Initialize the Router
  */
  constructor() {
    this.router = Router();
    this.init();
  }
  /**
  * lister les Schedules
  */
  public ping(req: Request, res: Response, next: NextFunction) {
    res.status(200)
    .send({
      message: 'Success',
      status: res.status,
    });
  }
  
  
  /**
  * Take each handler, and attach to one of the Express.Router's
  * endpoints.
  */
  init() {
    
    /**
    * Take each handler, and attach to one of the Express.Router's
    * endpoints.
    * @api {get} /api/v3/healt/ping ping
    * @apiGroup Healt
    * @apiDescription Écho pour confirmer le fonctionnement du SGB.
    * @apiVersion 3.0.0
    *
    * @apiSuccess (200) Success
    */
    this.router.get('/ping', this.ping.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    
    
    
  }
}

// exporter its configured Express.Router
export const healtRouter = new HealtRouter();
healtRouter.init();
