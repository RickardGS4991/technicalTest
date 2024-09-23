import { Request, Response } from "express";

export interface ITripController {
    createTrip(req: Request, res: Response): Promise<void>;
    showTrips(req: Request, res: Response): Promise<void>;
}