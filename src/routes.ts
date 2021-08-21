import { Router } from 'express';
import { Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => { //ðßð
    return res.json('get');
});
routes.post('/', (req: Request, res: Response) => {
    return res.json('post');
});

export default routes;