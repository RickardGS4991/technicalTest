import 'reflect-metadata';
import { Container } from 'inversify';
import { ITripController } from '../controller/base/trip.controller';
import { TripControllerImpl } from '../controller/trip.controller';
import { ITripRepository } from '../../domain/repository/trip.repository';
import { TripRepositoryImpl } from '../../data/repository/trip.repository';
import { ITripDatasource } from '../../domain/datasource/trip.datasource';
import { TripDatasourceImpl } from '../../data/datasource/trip.datasource';

const tripContainer = new Container();

tripContainer.bind<ITripController>('ITripController').to(TripControllerImpl);
tripContainer.bind<ITripRepository>('ITripRepository').to(TripRepositoryImpl);
tripContainer.bind<ITripDatasource>('ITripDatasource').to(TripDatasourceImpl);

export { tripContainer };