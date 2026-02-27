import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm interceptor cho request
api.interceptors.request.use(
    (config) => {
        // Có thể thêm token vào header ở đây
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Thêm interceptor cho response
api.interceptors.response.use(
    (response) => {
        // Trả về dữ liệu response trực tiếp (tùy chọn)
        return response.data;
    },
    (error) => {
        // Xử lý lỗi toàn cục tại đây (ví dụ: token hết hạn)
        if (error.response?.status === 401) {
            // Xử lý logout hoặc refresh token
            console.error('Unauthorized, logging out...');
        }
        return Promise.reject(error);
    }
);

export default api;
