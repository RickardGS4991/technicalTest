import 'reflect-metadata';
import { Request, Response } from "express";
import { IStationController } from "./base/station.controller";
import { inject, injectable } from 'inversify';
import { IStationRepository } from '../../domain/repository/station.repository';

@injectable()
export class StationControllerImpl implements IStationController{
    constructor(
        @inject('IStationRepository')
        private repository: IStationRepository
    ){}
    async findStation(req: Request, res: Response): Promise<void> {
        try {
            const name = req.query.name ? String(req.query.name) : '';

            const finding = await this.repository.findStation(name);

        finding === null ? 
            res.status(404).json({ message: "No stations found" }) : res.status(200).json(finding);
        
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
    };
}