import { StationModel } from "../model/stationModel.model";

export interface IStationRepository{
    findStation(name: string): Promise<StationModel[] | null>;
}