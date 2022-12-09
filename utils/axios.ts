import axios, { AxiosInstance } from 'axios';

/* Creating an instance of axios with the baseURL and headers. */
const Axios: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_PREFIX}`,
  headers: {
    'Content-type': 'application/json',
  },
});

export { Axios };
