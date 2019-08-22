import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-5565e.firebaseio.com/'
});

export default instance;
