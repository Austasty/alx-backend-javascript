/* eslint-disable */
/* eslint-disable */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true;
      resolve(data);
    }, 1000);
  });
}
