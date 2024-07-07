const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api'
});

const getCategory=()=>axiosClient.get('/categories?populate=*');
const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>{
    return resp.data.data
});

const getCategoryList=()=>axiosClient.get('/categories?populate=*').then(resp=>{
    return resp.data.data
});
const getProductList=()=>axiosClient.get('/products?populate=*').then(resp=>{
    return resp.data.data
});

const getProductsByCategory = (category) => {
    return axiosClient.get(`/products?filters[categories][name][$in]=${category}&populate=*`)
        .then(resp => {
            return resp.data.data;
        })
        .catch(error => {
            console.error("Error fetching products by category:", error);
            throw error;
        });
};
const registerUser=(username,email,password)=>axiosClient.post('/auth/local/register',{
    username:username,
    email:email,
    password:password
});
const SignIn=(email,password)=>axiosClient.post('/auth/local',{
    identifier:email,
    password:password
});

const addToCart=(data,jwt)=>axiosClient.post('/user-carts',data,{
    headers:{
        Authorization:'Bearer '+jwt
    }
})

const getCartItems=(userId,jwt)=>axiosClient.get(`/user-carts?filters[userid][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`,
{
    headers:{
        Authorization:'Bearer '+jwt
    }
}).then(resp=>{
    const data=resp.data.data;
    const cartItemsList=data.map((item,index)=>(
        {
            name:item.attributes.products?.data.attributes.name,
            quantity:item.attributes.quantity,
            amount:item.attributes.amount,
            image: item.attributes.products?.data.attributes.images.data[0].attributes.formats.large.url,
            actualPrice: item.attributes.products?.data.attributes.mrp,
            id:item.id

        }
    ))

    return cartItemsList
})
.catch(error => {
    console.error("Error fetching products by cart items:", error);
    throw error;
});
const deleteCartItem=(id,jwt)=>axiosClient.delete('/user-carts/'+id,
{
    headers:{
        Authorization:'Bearer '+jwt
    }
})


// const getProductsByCategory = async (category) => {
//     try {
//         // Encode the category name
//         const encodedCategory = encodeURIComponent(category);
        
//         // Make the API call with the encoded category name
//         const response = await axiosClient.get(`/products?filters[categories][name[$in]=${encodedCategory}&populate=*`);
        
//         // Return the data from the response
//         return response.data;
//     } catch (error) {
//         // Handle errors (e.g., logging, error messages)
//         throw error;
//     }
// };


export default{
    getCategory,
    getSliders,
    getCategoryList,
    getProductList,
    getProductsByCategory,
    registerUser,
    SignIn,
    addToCart,
    getCartItems,
    deleteCartItem
    
}