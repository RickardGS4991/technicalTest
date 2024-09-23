import 'reflect-metadata';
import { ITripDatasource } from '../../domain/datasource/trip.datasource';
import { injectable } from 'inversify';
import { TripModel } from '../../domain/model/tripModel.model';
import FirebaseGlobal from '../../../../core/database/databaseconnection';
import filterTrip from './mapper/trip.mapper';

@injectable()
export class TripDatasourceImpl implements ITripDatasource{
    async saveTrip(data: TripModel): Promise<boolean | null> {
        const db = FirebaseGlobal.getFirestore();

        const tripRef = db.collection('travelPlans').doc();

        const tripSaved = await tripRef.set(data);

        return true;
    };

    async findTrip(name: string): Promise<TripModel[] | null> {
        const db = FirebaseGlobal.getFirestore();

        const tripRef = db.collection('travelPlans');
        let queries: FirebaseFirestore.Query = tripRef;

        queries.where('name', '==', name);
        queries = queries.limit(10);

        const snapshot = await queries.get();

        if(snapshot.empty){
            return null;
        }

        let tripPlans: TripModel[] = snapshot.docs.map((doc) => {
            return filterTrip.transform(doc.data()); 
        });

        return tripPlans;

    }
}