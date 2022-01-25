import express from 'express';

import connectionRedis from '../config/redis';

// ---- Controllers
import ToDoController from '../controllers/ToDoController';

// ---- Interfaces
import IToDo from '../interfaces/to_doInterface';

const app = express();

const redis = new connectionRedis();

app.get('/to-do/:id', async (req, res) => {
    const idToDo = req.params.id;
    const idUser = parseInt(String(req.query.idUser));

    if (idToDo === null)
        return res
            .status(404)
            .json({ status: 'error', message: 'id post to-do is null' });

    const valueRedis = await redis.getValue(idToDo);

    if (valueRedis !== null) return res.status(200).json(valueRedis);

    const to_do = new ToDoController();
    const response = await to_do.getToDo(idToDo, idUser);

    if (response !== null) {
        await redis.setValue(idToDo, response);
        return res.status(200).json(response);
    }
    
    return res.status(401).json({
        status: 'error',
        message: 'user not can read this post',
    });
});

app.post('/to-do', async (req, res) => {
    const to_do = new ToDoController();
    const response: IToDo = await to_do.publicToDo(req.body);

    if (response._id !== '') return res.status(200).json(response);

    return res.sendStatus(401).json({
        status: 'error',
        message: 'to-do can\'t be craeted',
    });
});

app.put('/to-do/:id', async (req, res) => {
    const idToDo = req.params.id;
    const idUser = parseInt(String(req.query.idUser));
    const { title, subtitle, text, color } = req.body;

    const to_do = new ToDoController();
    const response = await to_do.updateToDo(
        idToDo,
        idUser,
        title,
        subtitle,
        text,
        color
    );

    const to_doUpdated = await to_do.getToDo(idToDo, idUser);

    if (response)
        return res.status(200).json({
            status: 'success',
            message: to_doUpdated,
        });
    return res.status(401).json({
        status: 'error',
        message: 'user can\'t update this post',
    });
});

app.delete('/to-do/:id', async (req, res) => {
    const idToDo = req.params.id;
    const idUser = parseInt(String(req.query.idUser));

    //Remover usuário, baseado no id do to-do, e verificar se ele é o dono do to-do
    const to_do = new ToDoController();
    const response = await to_do.deleteToDo(idToDo, idUser);

    if (response)
        return res.status(200).json({
            status: 'success',
            message: '',
        });
    return res.status(401).json({
        status: 'error',
        message: 'user can\'t delete this post',
    });
});

export default app;
