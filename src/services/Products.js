import axios from 'axios';
const URL = 'https://node-red-nxdup.mybluemix.net/productos';

class User {
  async getProducts (category, page) {
    const responseData = await axios({
      method: 'get',
      url: `${URL}/${category}/${page}`
    });
    return responseData.data;
  }
}

export default new User();
