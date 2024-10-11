/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View,Button,Image,FlatList,TouchableOpacity,SafeAreaView,StatusBar,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes'; 
import {publicRoutes} from './publicRoutes'; 
import {appColors} from '../utils/appColors';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
GestureHandlerRootView
import IconButton from '../componentsV2/buttons/IconBotton';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import Modal from '../modal-manager';
import RoundedBotton from '../componentsV2/buttons/roundBotton';
import categories from '../datas/categories';
import gsLayout from '../utils/layout';

const image = require("./../../assets/paypal.png");

import { BaseBottomModalContainer,BaseCenterModalContainer } from '../modal-manager/components';



export default function TabNavigationStack({isAuth,navigation}) {
   const [routes, setRoutes] = React.useState(RoutesList/*   [...publicRoutes,...RoutesList ] */ )


   const {t,i18n} = useTranslation();

   const lang = i18n.language;
   const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{lang == "fr" ? item.titre : item.title}</Text>
  </TouchableOpacity>
);

  const [selectedId, setSelectedId] = React.useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? appColors.primary : appColors.lightGray;
    const color = item.id === selectedId ? 'white' : appColors.primary;
    const goNext = () => {
         setSelectedId(item.id);
         Modal.hide();
         navigation.navigate("CreateAnnonce",{
          category: item.id
         });

    }

    return (
      <Item
        item={item}
        onPress={goNext}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  const  modalHide  = ()=>{
        Modal.hide();

  }
  const showCenteredModal = () => {
    Modal.show({
      children: (
        <BaseBottomModalContainer style={{ height: 400, backgroundColor: 'white' }}>
          <GestureHandlerRootView>
                      <IconButton 
                        onPress={modalHide}
                        circleSize={scale(40)}
                        bgColor ={appColors.white}
                        borderColor={appColors.white}
                        icons={<Ionicons name="close-sharp" size={scale(26)} color={appColors.primary} style={{fontWeight: "bold"}}/>}

                      />

                    
                    <SafeAreaView style={styles.container}>
                      <Text style={[gsLayout.h1,{color: appColors.primary,fontWeight: "bold",textAlign: "center"}]}>{t("choixcategorie")}</Text>
                      
                      <Text style={[gsLayout.h3,{color: appColors.primary,fontWeight: "bold",textAlign: "center"}]}>{t("createannoncefree")}</Text>
                        <FlatList
                                data={categories}
                                renderItem={renderItem}
                                numColumns={3}
                                keyExtractor={item => item.id}
                                extraData={selectedId}
                              />

                          


                        <View style={{marginTop: 8}}>            
                          
                    

                          <RoundedBotton 
                          height={40}
                          color={appColors.facebook}
                            children={

                              <Text style={{textAlign: "center",fontSize: 20,color: appColors.white}}>{t("becomepro")}</Text>
                            }
                            radius={30}
                          />

                  
                        </View>
                          


                      </SafeAreaView>


              

                    
                    
          </GestureHandlerRootView>
         </BaseBottomModalContainer>
       ),
       dismissable: true,
       position: 'bottom',
       
     });
  };
  
  return (
    <>
      <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: {position:"absolute",backgroundColor:appColors.primary,borderTopColor:appColors.white,minHeight:scale(53)},

        
      }}
        tabBarOptions={{
           
          activeTintColor: appColors.white,
          inactiveTintColor: appColors.inactive,
          
        }}>
        { routes?.map((route, key) => {
          const {name, component, options} = route;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
   
      
      </Tab.Navigator>
           <View style={{paddingHorizontal: 8,width:"100%",bottom:80,right:10,position:"absolute",width:"53"}}>
           <IconButton 
              onPress={showCenteredModal}
              circleSize={scale(67)}
              bgColor ={appColors.primary}
              borderColor={appColors.lightGray}
              icons={<Ionicons name="megaphone-outline" size={scale(35)} color={appColors.white} />}

             />
           </View>



     
           </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 8,
    marginVertical: 2,
    height: 80,
    justifyContent: "center",
    textAlign: "center",
    width:100,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 900
  },
});


// import React, {useState} from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({item, onPress, backgroundColor, textColor}) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
//     <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState();

//   const renderItem = ({item}) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;






// import React, {useState} from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({item, onPress, backgroundColor, textColor}) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
//     <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState();

//   const renderItem = ({item}) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;