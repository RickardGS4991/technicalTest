import { Request, Response } from "express";

export interface IStationController {
    findStation(req: Request, res: Response): Promise<void>;
}