import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { stationRouter } from './modules/stations/application/route/station.route';
import { tripRouter } from './modules/travelPlans/application/route/trip.route';

const server = express();

let PORT = process.env.PORT || 4000;

server.set('port', PORT);

const corsOptions = {
  origin: process.env.URL_FRONT,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(cors(corsOptions));

server.use(express.json({ limit: process.env.LIMIT_SIZE }));
server.use(bodyParser.urlencoded({ extended: true }));

server.use(stationRouter);
server.use(tripRouter);

export default server;