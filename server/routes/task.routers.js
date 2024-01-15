import { Router } from 'express';
import{getTasks, getTask, createTask, updateTask, deleteTask, getHorarios, getHorario, createHorario, updateHorario, deleteHorario, getMoviles, getMovil, createMovil, updateMovil, deleteMovil} from '../controllers/task.controllers.js'

const router = Router();

//secuencias

router.get('/secuencias', getTasks)

router.get('/secuencia/:id', getTask)

router.post('/secuencia', createTask)

router.put('/secuencia/:id', updateTask)

router.delete('/secuencia/:id', deleteTask)

//horarios

router.get('/horarios', getHorarios)

router.get('/horario/:id', getHorario)

router.post('/horario', createHorario)

router.put('/horario/:id', updateHorario)

router.delete('/horario/:id', deleteHorario)

//moviles

router.get('/moviles', getMoviles)

router.get('/movil/:id', getMovil)

router.post('/movil', createMovil)

router.put('/movil/:id', updateMovil)

router.delete('/movil/:id', deleteMovil)


export default router;
