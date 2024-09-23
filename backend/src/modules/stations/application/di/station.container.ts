import { Container } from 'inversify';
import 'reflect-metadata';
import { IStationController } from '../controller/base/station.controller';
import { StationControllerImpl } from '../controller/station.controller';
import { IStationRepository } from '../../domain/repository/station.repository';
import { StationRepositoryImpl } from '../../data/repository/station.repository';
import { IStationDatasource } from '../../domain/datasource/station.datasource';
import { StationDatasourceImpl } from '../../data/datasource/station.datasource';

const stationContainer = new Container();

stationContainer.bind<IStationController>('IStationController').to(StationControllerImpl);
stationContainer.bind<IStationRepository>('IStationRepository').to(StationRepositoryImpl);
stationContainer.bind<IStationDatasource>('IStationDatasource').to(StationDatasourceImpl);

export { stationContainer };