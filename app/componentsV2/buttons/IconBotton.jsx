import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { IconInCircle } from "../cards/index";
const IconButton = ({ onPress,...props}) => (
    <TouchableOpacity  onPress={onPress}>
      <IconInCircle {...props}/>
    </TouchableOpacity>
  );


  export default IconButton;

