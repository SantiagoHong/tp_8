import { Router } from 'express';
import ProvinceService from '../services/province-service.js';
const router = Router();
const svc = new ProvinceService();

router.get('', async (req, res) => {
  let respuesta;
  const returnArray = await svc.getAllAsync();
  if (returnArray != null) {
    respuesta = res.status(200).json(returnArray);
  } else {
    respuesta = res.status(500).send('Error interno.');
  }
  return respuesta;
});

router.get('/:id', async (req, res) => {
  let respuesta;
  const returnObject = await svc.getByIdAsync(req.params.id);
  if (returnObject != null) {
    respuesta = res.status(200).json(returnObject);
  } else {
    respuesta = res.status(404).send('Error, no existe esa provincia.');
  }
  return respuesta;
})

router.post('', async (req, res) => {
  let respuesta;
  const error = await svc.createAsync(req.body);
  if (error == null) {
    respuesta = res.status(201).json();
  } else {
    respuesta = res.status(400).send(error);
  }
  return respuesta;
});

router.put('', async (req, res) => {
  let respuesta;
  const error = await svc.updateAsync(req.body);
  if (error == null) {
    respuesta = res.status(201).json();
  } else {
    respuesta = res.status(400).send(error);
    respuesta = res.status(404).send(error);
  }
  return respuesta;
});
router.delete('/:id', async (req, res) => {
  let respuesta;
  const error = await svc.deleteByIdAsync(req.params.id);
  if (error == null) {
    respuesta = res.status(200).json();
  } else {
    respuesta = res.status(404).send(error);
  }
  return respuesta;
})

export default router;
