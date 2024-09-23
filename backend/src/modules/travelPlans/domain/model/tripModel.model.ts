import { StationModel } from "./stationModel.model";

export interface TripModel {
    name:string;
    stations?: StationModel[];
    date?: Date;
}