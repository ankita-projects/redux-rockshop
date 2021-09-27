import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getProducts = async()=>{
    console.log("get prodcut ");
    const response = await axios.get(baseUrl+'/products');
    return response.data;
};

export const getCart = async(productId)=>{
    const response = await axios.get(`${baseUrl}/${productId}`);
    return response.data;
};

const productServices = { getProducts, getCart };

export default productServices;