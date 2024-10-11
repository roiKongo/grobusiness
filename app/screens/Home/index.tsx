
import Container from '../../components/Container';
import TitleComp from '../../components/TitleComp';
import SearchBox from '../../components/SearchBox';
import ReduxWrapper from '../../utils/ReduxWrapper';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../../utils/appColors';


import React, { useState, useEffect } from 'react';
import {
	Button,
	Image,
	View,
	StyleSheet,
	ActivityIndicator,
	SafeAreaView,
	Text,
	FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Ionicons from '@expo/vector-icons/Ionicons';

const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
	const dirInfo = await FileSystem.getInfoAsync(imgDir);
	if (!dirInfo.exists) {
		await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
	}
};

import UploadImage from '../../componentsV2/images/upload';






const Home = (props) =>{


  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<any[]>([]);


  const saveImage = async (uri: string) => {
    await ensureDirExists();
    const filename = new Date().getTime() + '.jpeg';
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImages([...images, dest]);
  };



    // Load images on startup
    useEffect(() => {
      loadImages();
    }, []);
  
    // Load images from file system
    const loadImages = async () => {
      await ensureDirExists();
      const files = await FileSystem.readDirectoryAsync(imgDir);
      if (files.length > 0) {
        setImages(files.map((f) => imgDir + f));
      }
    };
  
    // Select image from library or camera
    const selectImage = async (useLibrary: boolean) => {
      let result;
      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.75
      };
  
      if (useLibrary) {
        result = await ImagePicker.launchImageLibraryAsync(options);
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync(options);
      }
  
      // Save image if not cancelled
      if (!result.canceled) {
        saveImage(result.assets[0].uri);
      }
    };
  





    const uploadImage = async (uri: string) => {
      setUploading(true);
    
      // await FileSystem.uploadAsync('http://192.168.1.52:8888/upload.php', uri, {
      //   httpMethod: 'POST',
      //   uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      //   fieldName: 'file'
      // });
    
      setUploading(false);
    };
    
    // Delete image from file system
    const deleteImage = async (uri: string) => {
      await FileSystem.deleteAsync(uri);
      setImages(images.filter((i) => i !== uri));
    };
    
    const renderItem = ({ item }: { item: any }) => {
      const filename = item.split('/').pop();
      return (
        <View style={{ flexDirection: 'row', margin: 1, alignItems: 'center', gap: 5 }}>
          <Image style={{ width: 80, height: 80 }} source={{ uri: item }} />
          <Text style={{ flex: 1 }}>{filename}</Text>
          <Ionicons.Button name="cloud-upload" onPress={() => uploadImage(item)} />
          <Ionicons.Button name="trash" onPress={() => deleteImage(item)} />
        </View>
      );
    };














  
 
      




    return (
       <UploadImage/>
    )
}


export default ReduxWrapper(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
