import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Icon } from 'react-native-elements'


export default function ComingShows({showImage,showName,showRel,showBio}) {
  return (
        <View style={styles.content}>
            <View style={styles.showHolder}>
                <View style={styles.imgHodler}>
                <Image source={{uri:showImage}} style={{width:'100%',height:450,}}/>
                </View>
                
                <View style={styles.showTool}>
                <View style={styles.toolHolder}>
                    <Text style={styles.showName}>{showName}</Text>
                </View>
                
                </View>
                <Text style={styles.releaseDate}>{showRel}</Text>
                <Text style={styles.aboutShow}>{showBio}</Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({

    headBtnHolder:{
  
        flexDirection:'row-reverse',
      
        flex:1,
        alignItems: 'center',
        
      },
    
      headLogo:{
        paddingHorizontal:10,
      },


    content:{
        marginTop:30,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
      },
    
      showHolder:{
        width:'97%',
        alignItems: 'center',
        justifyContent: 'center',
        
    
      },
    
      imgHodler:{
        width:'100%'
      },
    
      showTool:{
        flexDirection:'row',
        
        width:'100%',
        paddingVertical:0,
        marginTop:20,
        
      },
    
      toolHolder:{
        width:'75%',
        padding:10,
        paddingVertical:0,
      },
    
      toolHolder2:{
        width:'25%',
        padding:10,
        paddingVertical:0,
      },
    
      showName:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        flexDirection:'row',
      },
    
    
      releaseDate:{
        color:'grey',
        fontSize:15,
        width:'95%',
        marginVertical:10,
      },
    
      aboutShow:{
        color:'grey',
        fontSize:18,
        width:'95%',
      },




});