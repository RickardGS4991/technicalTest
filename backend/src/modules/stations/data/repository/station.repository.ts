import 'reflect-metadata';
import { StationModel } from "../../domain/model/stationModel.model";
import { IStationRepository } from "../../domain/repository/station.repository";
import { inject, injectable } from 'inversify';
import { IStationDatasource } from '../../domain/datasource/station.datasource';

@injectable()
export class StationRepositoryImpl implements IStationRepository{
    constructor(
        @inject('IStationDatasource')
        private datasource: IStationDatasource
    ){}
    async findStation(name: string): Promise<StationModel[] | null> {
        return await this.datasource.findStation(name);
    }
}