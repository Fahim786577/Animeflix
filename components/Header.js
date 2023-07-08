import React from 'react';
import { StyleSheet, View,Image,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Header = ({login})=>{
  const navigation = useNavigation();
  
    return(
        <View style={styles.headContent}>
            <View style={styles.logoHolder}>
                <Image source={require('../assets/Logo_Short.png')} style={{width:50,height:50}}/>
            </View>
            <View style={styles.headBtnHolder}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    style={styles.avatar} 
                    resizeMode='contain' 
                    source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Search")
                }}>
                    <Icon type='feather'  color={'white'} size={25} name={'search'} style={styles.headLogo}/>
                </TouchableOpacity>      
            </View>
        </View>
    );
}
//<Icon type='entypo' color={'white'} size={25} name={'user'} style={styles.headLogo}/>

const styles = StyleSheet.create({
    headContent:{
        flexDirection:'row',
      },
    
      logoHolder:{
        alignSelf:'flex-start',
        paddingLeft:20,
       flex:1,
       
      },
    
      headBtnHolder:{
        flexDirection:'row-reverse',
        flex:1,
        alignItems: 'center',
        marginLeft:10
        
      },
    
      headLogo:{
        paddingHorizontal:20,
      },
      avatar:{
        width:40,
        height:30,
        borderRadius:20
      }
});

export default Header;
