import axios from 'axios';

const api = axios.create({
  baserUrl: 'http://localhost:3333',
});

export default api;
