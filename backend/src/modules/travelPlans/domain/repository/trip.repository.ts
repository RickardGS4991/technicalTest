import { TripModel } from "../model/tripModel.model";

export interface ITripRepository {
    saveTrip(data: TripModel):Promise<boolean | null>;
    findtrip(name: string): Promise<TripModel[] | null>;
}