
import * as React from 'react';
import { View, Text,Button } from "react-native";


 import { Provider } from "react-redux";

// import Counters from "./app/features/counter/counter";
 
 import { store,persistor } from "./app/redux/store";
 import { loginUser } from "./app/redux/reducers/slices/authSlice";
 import { PersistGate } from "redux-persist/integration/react";
 import { useDispatch } from "react-redux";
 import { useSelector } from "react-redux";
 

const App = () => {
   
   
  
     return (

        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                     <View>
                         <Text>Je suis ici</Text>
                     </View>
               </PersistGate>
        </Provider>

    );
  };
  
  export default App;
  
