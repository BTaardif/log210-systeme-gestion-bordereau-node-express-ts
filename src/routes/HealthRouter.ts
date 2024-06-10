import { Router, Request, Response, NextFunction } from 'express';

export class HealthRouter {
  router: Router;
  
  /**
  * Initialize the Router
  */
  constructor() {
    this.router = Router();
    this.init();
  }

  public ping(req: Request, res: Response, next: NextFunction) {
    res.status(200)
    .send({
      message: 'Success',
      status: res.status,
    });
  }

  init() {
    
    /**
    * @api {get} /api/v3/health/ping ping
    * @apiGroup Health
    * @apiDescription Écho pour confirmer le fonctionnement du SGB.
    * @apiVersion 3.0.0
    *
    * @apiSuccess (200) Success
    */
    this.router.get('/ping', this.ping.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }
}

// exporter its configured Express.Router
export const healthRouter = new HealthRouter();
healthRouter.init();
