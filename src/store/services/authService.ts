import API from '@/api/request/main';

export const login = async (data: { email: string, password: string }) => {
  const response = await API.post('/auth/login', data);
  if (!response.ok) {
    throw new Error('Failed to log in');
  }
  return response.json();
}

export const register = async (data: { email: string, password: string, name: string }) => {
  const response = await API.post('/auth/register', data);
  if (!response.ok) {
    throw new Error('Failed to register');
  }
  return response.json();
}

export const refreshToken = async (token: string) => {
  const response = await API.post('/auth/refresh-token', {}, { 'Authorization': `Bearer ${token}` });
  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }
  return response.json();
}
