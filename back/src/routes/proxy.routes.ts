import {Router} from 'express';
import * as appController from './app.controllers'

const router = Router();

router.post('/login', appController.logIn);

router.get('/logout', appController.logOut);

router.get('/pub/*', appController.pub);

router.get('/api/*', appController.api);

router.post('/save/:id', appController.saveData);

router.get('/save/:id', appController.getData);

export default router;