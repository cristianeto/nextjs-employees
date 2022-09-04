import http from './http.service';

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export default fetcher;
