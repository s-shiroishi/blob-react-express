import express, { Request, Response } from 'express';

const app: express.Express = express();

app.get('/', (req: Request , res: Response) => res.status(200).send('test'));

app.listen(4614, () => console.log('サーバー起動中'));