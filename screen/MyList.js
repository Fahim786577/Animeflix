import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const MyList = ({route,navigation}) =>{
    const list = route.params.myanimelist;
    console.log(list)
    console.log(list.length)
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.scrollWrapper}>
                    {/*Header */}
                    <View style={styles.header}>
                        <View style={styles.headContent}>

                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableOpacity>

                            <View style={styles.TextHolder}>
                                <Text style={styles.headerText}>My List</Text>
                            </View>
                            <View style={styles.headBtnHolder}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Image
                                        style={styles.avatar} 
                                        resizeMode='contain' 
                                        source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>{/*Header End */}

                    <View style = {styles.holder}>
                        {
                            list.length == 0 ? (
                                <Text>Empty List</Text>
                            ) : (
                                list.map((movie,item) =>{
                                    return (
                                        <View key={item} style={{flexDirection:'row',marginTop:30}}>
                                            <TouchableOpacity activeOpacity={0.5} >
                                                <View style={styles.downloadImage}>
                                                    <Image resizeMode='cover' source={{ uri: movie.pic }} style={styles.showImage}/>
                                                </View>
                                            </TouchableOpacity>

                                            <View style={{marginLeft:8,flexShrink:1}}>
                                                <Text numberOfLines={5}  style={styles.showHead} >{movie.name}</Text>
                                            </View>
                                        </View>
                                    )
                                
                                })
                            )
                        }
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
    movieScroll:{
        paddingLeft:10,
        margin:30,
        marginLeft:10,
        flexWrap:'wrap',
        flexDirection:'row',
        width:'100%'
    },
    moviePoster:{
        width:200,
        height:200,
        borderRadius:10
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
        alignItems:'center'
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

      avatar:{
        width:40,
        height:30,
        borderRadius:20
      },
      showImage:{
        width:'100%',
        height:'100%',
        
      },
      downloadImage:{
        height:180,
        width:140,
        borderRadius:8,
        overflow:'hidden',
        
      },
      holder:{
        width:'90%',
        alignSelf:'flex-start',
        marginTop:15,
      },
      
      showHead:{
        flex:1,
        color:'white',
        fontSize:20,
        marginVertical:10,
        fontWeight:'bold',
        textAlign:'center',
      },
      showEpi:{
        color:'grey',
        fontSize:18,    
      },
    
});

export default MyList;