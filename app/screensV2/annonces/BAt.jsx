import { AnnonceForm } from "../../componentsV2/forms";
import { View,SafeAreaView,Text ,StyleSheet} from "react-native";
import { scale } from "react-native-size-matters";
import { appColors } from "../../utils/appColors";
import UploadImage from "../../componentsV2/images/upload";

import { SelectList } from 'react-native-dropdown-select-list'

 //import {SelectDropdown, DropdownData} from "expo-select-dropdown";
 import { useState } from "react";


const GsCreateAnnonce = (props) =>{

  // const [selected, setSelected] = useState(DropdownData);  
  // const [data] = useState(DropdownData([  
  //      {key: "1", value: "Toothbrush"}, 
  //      {key: "2", value: "Laptop"}, 
  //      {key: "3", value: "Sunglasses"},  
  //    {key: "4", value: "Baseball"}, 
  //    {key: "5", value: "Scissors"}, 
  //    {key: "6", value: "Bicycle"},  
  //    {key: "7", value: "Camera"}, 
  //    {key: "8", value: "Umbrella"}, 
  //    {key: "9", value: "Backpack"},  
  //    {key: "10", value: "Water bottle"}  
  // ]));
    
  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  

    return (

          <SafeAreaView style={styles.container}>
             <View style={styles.centerH}>

                 <Text style={styles.title}>Creez votre annonce</Text>
             </View>
             {/* <SelectDropdown  
		      data={data}  
              placeholder={"Select option"}  
              selected={selected}  
              setSelected={setSelected}  
              searchOptions={{cursorColor: "#007bff"}}  
              searchBoxStyles={{borderColor: "#007bff"}}  
              dropdownStyles={{borderColor: "#007bff"}}  
          />   */}

       
         
         <View  style={styles.centerH}>
               <View style={styles.card}>
             
      
             </View>

         </View>
         <UploadImage/>       
            
         <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        boxStyles={{borderRadius: 25,backgroundColor: appColors.white}} //override default styles
        dropdownStyles={{backgroundColor: appColors.lightGray}}
        
      
        save="value"
    />
          </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: appColors.lightGray,
      height: "100%",
    
    
    },
    box: {
      width: 50,
      height: 50,
      backgroundColor:"#000"
    },
    title:{
      fontSize:26,
      fontWeight: "bold",
      marginTop: scale(50),
      color: appColors.primary,
  
    },
    centerH:{
     flexDirection: "row",
     justifyContent: "center"
    },
    card:{
      width: "90%",
      borderRadius: 8,
      borderColor: "#fff",
      minHeight:  100,
      borderWidth: 1,
      borderStyle: "solid",
      opacity: 0.6,
      backgroundColor: "#fff",
      elevation: 8,
      shadowColor:  "#000"
      
      

    }
});
  

  

export default GsCreateAnnonce;


