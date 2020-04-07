import axios from 'axios';
const URL = 'https://node-red-nxdup.mybluemix.net/visitor';

class User {
  async getProfile () {
    const responseData = await axios({
      method: 'post',
      url: URL
    });
    return responseData.data;
  }
}

export default new User();
