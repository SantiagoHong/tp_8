export default class ProvinceService {
  async getAllAsync() {
    return [];
  }

  async getByIdAsync(id) {
    return { id };
  }

  async createAsync(data) {
    return data;
  }

  async updateAsync(id, data) {
    return { id, ...data };
  }

  async deleteAsync(id) {
    return true;
  }
}
