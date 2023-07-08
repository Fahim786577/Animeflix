import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import ViewMovie from './ViewMovie';

export default function ShowGrid({title,showList}) {
  const navigation = useNavigation();

  const renderShow = ({ item }) => {
    
    return (
      <TouchableOpacity style={styles.itemstyle} onPress={() => {
        
        navigation.navigate("ViewMovie",{
          videoId:item.id,
          videotitle:item.name,
          videoUrl: item.video,
          desc:item.description,
          videotags:item.tags,
          vidpic:item.pic
        })}}>
          <Image source={{uri:item.pic}} style={styles.showImage}/>
      </TouchableOpacity>
    );
};

  return (
    <View style={styles.genreGrid}>
        <Text style={styles.generHead}>{title}</Text>
        <View style={styles.genreShows}>
            <FlatList
                horizontal={true}
                data={showList}
                renderItem={renderShow}
                keyExtractor={item => item.id}
            />
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
    genreGrid:{
        width:'95%',
        marginVertical:8,
      },
    
      generHead:{
        fontSize:22,
        color:'white',
        paddingHorizontal:10,
        fontWeight:'bold',
      },

      itemstyle:{
        width:110,
        height:150,
        borderRadius:8,
        overflow:'hidden',
        margin:10,
      },
    
      showImage:{
        width:'100%',
        height:'100%',
        
      },


});
