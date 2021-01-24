import 'dotenv/config.js';
import express, { json } from 'express';
import UserController from './app/controller/UserController';
import BullBoard from "bull-board";
import Queue from './app/lib/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queues.bull));

const app = express();
app.use(express.json());

app.post('/users', UserController.store);

//Para o Bull-board
app.use('/admin/queues', BullBoard.UI);

app.listen(8080, () => {
    console.log(`Servidor rodando na porta = ${process.env.PORT}`);
});

//Obs: No app.listen não funcionou "process.env.PORT", tive que 
//colocar a porta "na mão" (8080).