import express, { Application }  from 'express';
import morgan   from 'morgan';
import {UrlBinder}  from './routers';



export const App : Application           = express();


// middleware
App.use('/static',express.static(process.env.STATIC_DIR || global.rootPath+'public'));
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(morgan('tiny'));

UrlBinder(App);







