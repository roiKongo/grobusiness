
import { SelectList } from 'react-native-dropdown-select-list'
import findInputError from "../../utils/findInputError";
import isFormInvalid from "../../utils/isFormInvalid";
import { useState } from "react";
import InputError from "../Errors/inputError";
import { View, TextInput, Button,Text,SafeAreaView ,StyleSheet} from 'react-native';
import {useFormContext,Controller} from  "react-hook-form"
import inputLayout from "./layout";
import { appColors } from "../../utils/appColors";
import { scale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";


const GsSelect  = ({name,data,rules,placeholder,...props}) => {


    const {
        setValue,
        control,
        formState: { errors },
    } = useFormContext();
    const inputError = findInputError(errors, props.name)
      const isInvalid = isFormInvalid(inputError);


      const [selected, setSelected] = useState("");


    //   inputRef={field.ref}
    //   options={props.options}
    //   className={isInvalid ? props.className+"   is-invalid": props.className}
    //   placeholder={props.placeholder}
    //   value={props.options.find((c)=> c.value === field.value)}
    //   onChange={(val) => {field.onChange(val.value); props.onChange(val)}}
    //   components={animatedComponents} 
return  (<View>
       <Controller
                 control={control}
                 rules={rules}
                 {...props}
                 name={name}
              
                 render={({field,value,name,ref}) =>(
                
                 <SelectList 
                 name={field.name}
                 placeholder={placeholder}
                 
                 setSelected={(val) => setSelected(val)}
                 onSelect={()=>{field.onChange(selected)}}
                 data={data} 
                 boxStyles={[{borderRadius: 25}]}
                 dropdownStyles={{backgroundColor: appColors.lightGray,'alignContent'}}
                 
                 
               
                 save="key"
             />

                 )}
                />

     </View>)



}

export default GsSelect;