import 'reflect-metadata';
import { IStationDatasource } from "../../domain/datasource/station.datasource";
import { injectable } from 'inversify';
import { StationModel } from '../../domain/model/stationModel.model';
const stations = require('../../../../../stations.json');

@injectable()
export class StationDatasourceImpl implements IStationDatasource{
    async findStation(name: string): Promise<StationModel[] | null> {
        const filteredStations = stations.station.filter((station: StationModel) =>
            station.name.toLowerCase().includes(name.toLowerCase())
        );

        return filteredStations.length > 0 ? filteredStations : null;
    }
}