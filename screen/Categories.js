import React from 'react';
import { View, Text, FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const categories =  ['Action', 'Adventure', 'Drama','Shonen','Romance','Martial Arts','Supernatural','Slice of Life','Harem','Isekai'];

const Categories = ({navigation}) =>{

      const renderCategoryItem = ({item}) =>{
        return (
            <TouchableOpacity style = {styles.circularRect}>
                <Text style={{ color: '#fff', fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
        )
      }

      return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: '#fff', fontSize: 30 }}>Categories</Text>
            </View>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
          />

        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={24} color="#000" />
        </TouchableOpacity>

        </View>
      );

}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10
      },
      circularRect: {
        width: '95%', 
        height: 90, 
        borderRadius: 10, 
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderWidth: 2, 
        borderColor: 'transparent',
        marginTop:8
      },

      floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.3, // For iOS shadow
        shadowRadius: 3, // For iOS shadow
      },
  });