import { AnnonceForm } from "../../componentsV2/forms";
import { appColors } from "../../utils/appColors";
import CustomInput from "../../components/CustomInput";
import { scale } from "react-native-size-matters";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { name_validation } from "../../utils/inputValidation";

import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GsTextInput } from "../../componentsV2/inputs/textInput";

import { View,Text,StyleSheet,Button,TouchableOpacity} from "react-native";
import { Background } from "@react-navigation/elements";
import { Entypo } from '@expo/vector-icons'; 
import {FormProvider,useForm } from 'react-hook-form';
import { gsName } from "../../utils/inputValidation";
import { SimpleInput } from "../../componentsV2/inputs/textInput";
import { InputTextIcon } from "../../componentsV2/inputs/textInput";
import GsSwitch from "../../componentsV2/inputs/switch";

import { gsSwith } from "../../utils/inputValidation";


const GsCreateAnnonce = (props) =>{

  // export default function App() {
  //   const isOn = useSharedValue(false);
  
  //   const handlePress = () => {
  //     isOn.value = !isOn.value;
  //   };
  
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Switch value={isOn} onPress={handlePress} style={styles.switch} />
  //       <View style={styles.buttonContainer}>
  //         <Button onPress={handlePress} title="Click me" />
  //       </View>
  //     </SafeAreaView>
  //   );
  // }
  const methods = useForm();

  
  
  const onSubmit =  methods.handleSubmit( (data) => {

      console.log(data);

  })


    return (

<FormProvider  {...methods}>




  
 
  <View style={{marginTop: 50}}>
  <InputTextIcon  {...gsName}
  />

  </View>



<Button
          style={{backgroundColor:"black",color:"white"}}
          title="Button"
          onPress={onSubmit}
        />
        <GsSwitch name="billy"  choix={{on: "boujour", off: "bonsoir" }} {...gsSwith} />
</FormProvider>

    )
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop:20,
//       padding: 20,
//     },
//   });
  

export default GsCreateAnnonce;




