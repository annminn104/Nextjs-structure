import axios, { AxiosInstance } from 'axios';

/**
 * Create Axios Instance
 */
const Axios: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_DOMAIN}/${process.env.NEXT_PUBLIC_API_PREFIX}`,
  headers: {
    'content-type': 'application/json',
  },
});

export { Axios };
