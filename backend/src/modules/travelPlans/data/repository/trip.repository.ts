import 'reflect-metadata';
import { ITripRepository } from "../../domain/repository/trip.repository";
import { inject, injectable } from 'inversify';
import { ITripDatasource } from '../../domain/datasource/trip.datasource';
import { TripModel } from '../../domain/model/tripModel.model';

@injectable()
export class TripRepositoryImpl implements ITripRepository{
    constructor(
        @inject('ITripDatasource')
        private datasource: ITripDatasource
    ){}

    async saveTrip(data: TripModel): Promise<boolean | null> {
        return await this.datasource.saveTrip(data);
    };

    async findtrip(name: string): Promise<TripModel[] | null> {
        return await this.datasource.findTrip(name);
    }
};