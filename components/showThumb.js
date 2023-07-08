import React from 'react';
import { StyleSheet, Text, Image,TouchableOpacity ,FlatList} from 'react-native';


export default function ShowThumbnails({showList}) {
const renderShow = ({ item }) => {
    <TouchableOpacity style={styles.itemstyle}>
        <Image source={require(item.showUrl)} style={styles.showImage}/>
    </TouchableOpacity>
};

  return (
        <FlatList
            horizontal={true}
            data={showList}
            renderItem={renderShow}
            keyExtractor={item => item.id}
        />
  );
}

const styles = StyleSheet.create({
  

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
