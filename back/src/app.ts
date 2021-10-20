import express from 'express';
import session from 'express-session'
import morgan from 'morgan';
import cors from 'cors'

import routes from './routes/proxy.routes';
import User from './models/User';
import {authenticateUser} from './routes/app.routes.middleware'

const app = express();

//This is for log the request
app.use(morgan('dev'));
//All the servers can send request to this server
app.use(cors());
//This is for read the json data.
app.use(express.json());
//Manage the session
app.use(session({ secret: 'test_secret', saveUninitialized: true, resave: true }));
//Can understand the post data from forms.
app.use(express.urlencoded({extended: false}));

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}

app.use('/pub/proxy/*', authenticateUser);
app.use('/api/proxy/*', authenticateUser);

//Using the routs of the app
app.use(routes);

export default app;