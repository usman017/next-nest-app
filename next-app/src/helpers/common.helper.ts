import Cookies from 'js-cookie';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const getApisUrl = (uri: string) => {
  return `${API_BASE_URL}${uri}`;
};

export const removeCookies = (key: string) => {
  Cookies.remove(key);
};
