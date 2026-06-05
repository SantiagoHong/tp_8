import ProvinceRepository from '../repositories/province.repository.js'

export default class ProvinceService {

  getAllAsync = async () => {
    const repo = new ProvinceRepository();
    const returnArray = await repo.getAllAsync();
    return returnArray;
  }


  async getByIdAsync(id) {
    const repo = new ProvinceRepository();
    const returnObject = await repo.getByIdAsync(id);
    return returnObject;
  }

  async createAsync(entity) {
    const repo = new ProvinceRepository();
    const error = await repo.createAsync(entity);
    return error;
  }

  async updateAsync(entity) {
    const repo = new ProvinceRepository();
    
    if (!entity.name) {
      return { status: 400, message: 'Falta información: el campo name es requerido.' };
    }

    const existe = await repo.getByIdAsync(entity.id);
    if (existe == null) {
      return { status: 404, message: 'Provincia no encontrada.' };
    }
    
    const error = await repo.updateAsync(entity);
    return error;
  }

  async deleteByIdAsync(id) {
    const repo = new ProvinceRepository();
    const error = await repo.deleteByIdAsync(id);
    return error;
  }
}
