import axios from 'axios';

// Configuración base para conectar con tu Django
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Dirección local de tu servidor Django
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor opcional (por si luego usas Tokens de autenticación)
api.interceptors.request.use((config) => {
    // Aquí podrías añadir el token de usuario más adelante
    return config;
});

export default api;