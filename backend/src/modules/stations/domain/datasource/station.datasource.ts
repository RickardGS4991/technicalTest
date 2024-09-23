import { StationModel } from "../model/stationModel.model";

export interface IStationDatasource {
    findStation(name: string): Promise<StationModel[] | null>;
}