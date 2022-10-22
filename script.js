import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<=5000"]

  }
};


export default function () {
  const res = http.get('https://flipkart.com');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}