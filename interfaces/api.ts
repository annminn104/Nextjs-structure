export interface IHttpResponse<T> {
  success: boolean;
  message: string;
  messages: Array<string>;
  code: string;
  url: string;
  data: T;
  totalItems: number;
}
