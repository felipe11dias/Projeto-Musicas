import { Router } from 'express';
import SongController from './app/controllers/SongController';
import PlaylistController from './app/controllers/PlaylistController';

/*          Controllers         */
import UserController from './app/controllers/UserController';
/*          END Controllers     */


const routes = new Router();

/* Fazer rotas */

// Usuários rotas
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.get('/users', UserController.getAll);
routes.get('/users/:id', UserController.getById);

// Playlists rotas
routes.post('/playlists', PlaylistController.store);
routes.put('/playlists/:id', PlaylistController.update);
routes.get('/playlists', PlaylistController.getAll);
routes.get('/playlists/:id', PlaylistController.getById);

// Músicas rotas
routes.post('/songs', SongController.store);
routes.put('/songs/:id', SongController.update);
routes.get('/songs', SongController.getAll);
routes.get('/songs/:id', SongController.getById);

export default routes;