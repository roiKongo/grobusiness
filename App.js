
import * as React from 'react';
import { View, Text,Button } from "react-native";


 import { Provider } from "react-redux";

// import Counters from "./app/features/counter/counter";
 
 import { store,persistor } from "./app/redux/store";
 import { loginUser } from "./app/redux/reducers/slices/authSlice";
 import { PersistGate } from "redux-persist/integration/react";
 import { useDispatch } from "react-redux";
 import { useSelector } from "react-redux";
 
 const  LoginScreen = () =>{

    const dispatch = useDispatch();

    const handSubmit =(e)=>{


        dispatch(loginUser({username: "patric",password: "parigo"}));


        
        
    
    }
    
    const user = useSelector((state)=> state.auth.user);

    if(user)
    {
        alert("je suis deja la");
    }

    return (   <View style={{marginTop: 80,marginBottom: 80,marginLeft: 8 ,marginRight: 8}}>
        <Text>BON JE COMMENCE A ZERO</Text>
        <Button title="send data" onPress={handSubmit}/>
    </View>)
    
 }

const App = () => {
   
//const dispatch = useDispatch();
 
   
  
     return (

        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                     <LoginScreen/>
               </PersistGate>
        </Provider>

    );
  };
  
  export default App;
  
  
    //     <Provider store={store}>
    //      <PersistGate loading={null} persistor={persistor}>


        
{/* 
</PersistGate>



</Provider> */}