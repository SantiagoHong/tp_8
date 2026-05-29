import ProvinceRepository from '../repositories/province.repository.js'

export default class ProvinceService {

  getAllAsync = async () => {
    const repo = new ProvinceRepository();
    const returnArray = await repo.GetAllAsync();
    return returnArray;
  }


  async getByIdAsync(id) {
    const repo = new ProvinceRepository();
    const returnObject = await repo.GetByIdAsync(id);
    return returnObject;
  }

  async createAsync(entity) {
    const repo = new ProvinceRepository();
    const error = await repo.CreateAsync(entity);
    return error;
  }

  async updateAsync(entity) {
    const repo = new ProvinceRepository();
    const error = await repo.UpdateAsync(entity);
    return error;
  }

  async deleteByIdAsync(id) {
    const repo = new ProvinceRepository();
    const error = await repo.DeleteByIdAsync(id);
    return error;
  }
}
