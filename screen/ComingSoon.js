import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import { Icon } from 'react-native-elements'
import ComingShows from '../components/ComingShows';
import {firebase} from '../config';


const ComingSoon = () =>{
  const [comingsoonshows, setComingsoonshows] = useState([]);
  const movieRef = firebase.firestore().collection('Comingsoon');

  useEffect (() => {
    const fetchData = async () => {
        try {
                movieRef
                .onSnapshot(
                querySnapshot => {
                    const users = []
                    querySnapshot.forEach((doc) => {
                        const {description,name,pic,rel} = doc.data()
                        users.push({
                            id:doc.id,
                            description,
                            name,
                            pic,
                            rel,
                            
                        })
                    })
                    
                    setComingsoonshows(users);
                    //console.log(data);
                }
            )
        } catch (error) {
            console.log(error); 
        }
        
    }

    fetchData()
},[]);


  const renderSoon = ({ item }) => {
        return (
          <ComingShows
              showImage={item.pic} 
              showName={item.name}
              showRel={item.rel}
              showBio={item.description}
              
              />
        );
  };

    return (
            <View style={styles.container}>
            <View style={styles.scrollWrapper}>
              <View style={styles.header}>
                <View style={styles.headContent}>
                  <View style={styles.textHolder}>
                    <Text style={styles.headerText}>Coming Soon</Text>
                  </View>
                  <View style={styles.headBtnHolder}>
                      {/*<Icon type='entypo' color={'white'} size={25} name={'user'} style={styles.headLogo}/>*/}
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

                  <FlatList
                    data={comingsoonshows}
                    renderItem={renderSoon}
                    keyExtractor={item => item.id}
                  />
            </View>
          </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollWrapper: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop:30
  },
  headContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHolder: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff'
  },
  headBtnHolder: {
    flexDirection: 'row-reverse',
    justifyContent:'space-evenly',
    width:'30%'

  },
  showContainer: {
    marginBottom: 20,
  },
  showImage: {
    width: 200,
    height: 200,
  },
  showName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  showRel: {
    fontSize: 16,
    marginBottom: 10,
  },
  showBio: {
    fontSize: 14,
  },
  avatar:{
    width:40,
    height:30,
    borderRadius:20
  }
});

  export default ComingSoon;
