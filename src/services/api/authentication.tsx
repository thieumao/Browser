import apiClient from '@services/base/apiClient';

export const login = async (phone: string, password: string) => {
  phone = phone || '';
  password = password || '';

  const params = {
    mobilePhone: phone,
    password: password
  };

  return new apiClient('').postURLEncode('/api/user/login', params);
}
