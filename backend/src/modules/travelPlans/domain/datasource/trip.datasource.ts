import { TripModel } from "../model/tripModel.model";

export interface ITripDatasource {
    saveTrip(data: TripModel): Promise<boolean | null>
    findTrip(name: string): Promise<TripModel[] | null>;
}