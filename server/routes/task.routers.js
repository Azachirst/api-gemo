import { Router } from 'express';
import{getTasks, getTask, createTask, updateTask, deleteTask, getMoviles, getMovil, createMovil, updateMovil, deleteMovil} from '../controllers/task.controllers.js'

const router = Router();

//secuencias

router.get('/secuencias', getTasks)

router.get('/secuencia/:id', getTask)

router.post('/secuencia', createTask)

router.put('/secuencia/:id', updateTask)

router.delete('/secuencia/:id', deleteTask)

//moviles

router.get('/moviles', getMoviles)

router.get('/movil/:id', getMovil)

router.post('/movil', createMovil)

router.put('/movil/:id', updateMovil)

router.delete('/movil/:id', deleteMovil)


export default router;
