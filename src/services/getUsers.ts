import { IMockData } from '../types/users.type';

// this part is created to mock a server request
// when getUsers function is called with the mock data, it will resolve with a slight delay
export const getUsers = (data: IMockData) => {
  return new Promise<IMockData>((resolve) => {
    setTimeout(() => resolve(data), 100);

    // I would use axios with the below structure if it were a real API
    // axios
    //   .get(`${BASE_URL}/users)
    //   .then((res) => resolve(res.data))
    //   .catch((error) => reject(error));
  });
};
