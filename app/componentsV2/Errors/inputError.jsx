import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { appColors } from "../../utils/appColors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const InputError = ({message}) =>{

  return (
    <View style={styles.container}>
    <MaterialIcons name="error"  style={styles.error} /><Text style={styles.error} >  {message}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    marginTop: 2,
    color:appColors.danger,
    fontSize: 17

  },

});

export default InputError
