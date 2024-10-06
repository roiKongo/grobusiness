
import axios from "axios"

const url ="http://authenticate.com/login";
export const authenticateUser = async (username,password) =>{

    try {

    
    //  const  response  = await axios.post(url,{username,password});
      const  response={
        data:{username:"parigo",email:"bonjoour"}
      };


    

        return response.data;
        
    } catch (error) {

        throw  new Error(error.response.data.message) || 'An error occuredd during login';
        
    }
}