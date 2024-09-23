import 'reflect-metadata';
import { Request, Response } from "express";
import { ITripController } from "./base/trip.controller";
import { inject, injectable } from 'inversify';
import { ITripRepository } from '../../domain/repository/trip.repository';

@injectable()
export class TripControllerImpl implements ITripController{
    constructor(
        @inject('ITripRepository')
        private repository: ITripRepository
    ){}
    async createTrip(req: Request, res: Response): Promise<void> {
        try {
            const infoUser = req.body;

        if(!infoUser){
            res.status(400).send({message: "error"});
            return;
        };

        const loading = await this.repository.saveTrip(infoUser);

        loading !== true ? res.status(204).send({message: "error"}) : res.status(201).send({message: "Correct"});
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async showTrips(req: Request, res: Response): Promise<void> {
        try {
            const nameTrip = req.query.name ? String(req.query.name) : '';
            console.log(nameTrip);

            const finding = await this.repository.findtrip(nameTrip);

            finding !== null ? res.status(201).json(finding): res.status(204).json({Message: 'Not finding'});

        } catch (error) {
            res.status(500).json(error);
        }
    }
}