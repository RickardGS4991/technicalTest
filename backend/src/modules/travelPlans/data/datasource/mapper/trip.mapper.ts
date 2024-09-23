import { Mapper } from "../../../../../core/arch/mapper";
import { TripModel } from "../../../domain/model/tripModel.model";
import { format } from 'date-fns';


class TripMapper extends Mapper<FirebaseFirestore.DocumentData, TripModel>{
    transform(value: FirebaseFirestore.DocumentData): TripModel {
        let orderCreatedAt: Date;

        if(value.date?.seconds){
            orderCreatedAt = new Date(value.date.seconds*1000);
        } else {
            orderCreatedAt = new Date(value.date);
        }

        return {
            name: value.name,
            date: orderCreatedAt,
            stations: (value.stations).map( (item: any) => ({
              locationX: item.locationX,
              localtionY: item.locationY, 
              id: item.id,
              name: item.name,
              idURL: item.idURL,
              standardName: item.standardName 
            }))
        }
    }
}

const filterTrip = new TripMapper();
export default filterTrip;