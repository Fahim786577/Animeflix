import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements'

const Downloads = () =>{
  return (
    <View style={styles.container}>
     
      <ScrollView style={styles.scroller}>
        <View style={styles.scrollWrapper}>
          <View style={styles.header}>
            <View style={styles.headContent}>
              <View style={styles.TextHolder}>
                  <Text style={styles.headerText}>Downloads</Text>
                  
              </View>
              <View style={styles.headBtnHolder}>
                  <TouchableOpacity activeOpacity={0.5}>
                      <Image
                        style={styles.avatar} 
                        resizeMode='contain' 
                        source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
                  </TouchableOpacity>
                  <Icon type='feather'  color={'white'} size={25} name={'search'} style={styles.headLogo}/>
              </View>
            </View>
          </View>

          <View style={styles.downloadFrame}>
            <View style={styles.downloadHolder}>
              
              <TouchableOpacity>
                <View style={styles.downloadImage}>
                      <Image source={require('../assets/list/Recommended/Naruto.jpg')} style={styles.showImage}/>
                </View>
              </TouchableOpacity>

              <View style={styles.downloadData}>
                <Text style={styles.showHead}>Naruto</Text>
                <Text style={styles.showEpi}>150 episodes</Text>
              </View>
            </View>

            <View style={styles.downloadHolder}>
              <TouchableOpacity>
                <View style={styles.downloadImage}>
                      <Image source={require('../assets/list/Recommended/AOT_Final2.jpg')} style={styles.showImage}/>
                </View>
              </TouchableOpacity>
              
                <View style={styles.downloadData}>
                  <Text style={styles.showHead}>Attack On Titan Final Season part 2</Text>
                  <Text style={styles.showEpi}>12 episodes</Text>
                </View>
              
            </View>
            
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroller:{
    width:'99%',
    backgroundColor:'black',
  },

  scrollWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  header:{
   
    
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    height:50,
    
    
  },

  headContent:{
    flexDirection:'row',
  },

  TextHolder:{
    alignSelf:'flex-start',
    paddingLeft:20,
   flex:1,
   
  },

  headerText:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
  },

  headBtnHolder:{
  
    flexDirection:'row-reverse',
  
    flex:1,
    alignItems: 'center',
    
  },

  headLogo:{
    paddingHorizontal:10,
  },

  downloadFrame:{
  
    height:500,
    width:'100%',
    alignItems: 'center',
    marginTop:10,
    paddingTop:10,
    
  },

  downloadHolder:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    
    marginTop:15,
  },

  downloadImage:{
    height:150,
    width:110,
    borderRadius:8,
    overflow:'hidden',
    
  },

  downloadData:{
    width:'75%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft:20,
 
  },
  showHead:{
    color:'white',
    fontSize:23,
    marginVertical:10,
    fontWeight:'bold',
  },

  showEpi:{
    color:'grey',
    fontSize:18,    
  },

  showImage:{
    width:'100%',
    height:'100%',
    
  },
  avatar:{
    width:40,
    height:30,
    borderRadius:20
  }

});

  export default Downloads;