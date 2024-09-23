import 'reflect-metadata';
import { Request, Response, Router } from 'express';
import { tripContainer } from '../di/trip.container';
import { ITripController } from '../controller/base/trip.controller';

const tripRouter: Router = Router();

const tripController = tripContainer.get<ITripController>('ITripController');

tripRouter.post('/api/trip',
    (req: Request, res: Response) => {
        tripController.createTrip(req, res);
    }
);

tripRouter.get(
    '/api/get-trips',
    (req: Request, res:Response) => {
        tripController.showTrips(req, res);
    }
);

export { tripRouter };