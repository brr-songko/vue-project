// mixins.js
import axios from 'axios';

export default {
  methods: {
    async $api(url, method, data) {
      try {
        const response = await axios({ method, url, data });
        return response.data;
      } catch (e) {
        console.error('API 호출 에러:', e);
        return []; // 빈 배열 반환 또는 에러를 상위로 전파
      }
    },
  },
};