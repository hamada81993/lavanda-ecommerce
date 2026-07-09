import api from"../services/axios"




export const getCategoryProducts = async (categoryId) => {
  const response = await api.post(`/category/${categoryId}`);
console.log(response);

  return response.data;
};
