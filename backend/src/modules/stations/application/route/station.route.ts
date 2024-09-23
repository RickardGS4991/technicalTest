import 'reflect-metadata';
import { Request, Response, Router } from 'express';
import { stationContainer } from '../di/station.container';
import { IStationController } from '../controller/base/station.controller';

const stationRouter: Router = Router();

const stationController = stationContainer.get<IStationController>('IStationController');

stationRouter.get('/api/stations',
    async (req: Request, res: Response) => {
        stationController.findStation(req,res);
    }
);

export { stationRouter };