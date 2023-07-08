import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,Dimensions} from 'react-native';
import { AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import {firebase} from '../config'; 
import { useNavigation } from '@react-navigation/native';


const Search = () => {
  const navigation = useNavigation();
  const db = firebase.firestore()

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);


  
  
  useEffect(() => {
    db.collection('Trending').onSnapshot(snapshot => {
        setResults(snapshot.docs.map((doc) => doc.data()))
    })
   
    
    setResults2(results);
}, [])

  useEffect(() => {
      const fetchData = async () => {
        try {
          const MoviesSnapshot = await db.collection('Movies').get();
          const AlltimePopularSnapshot = await db.collection('MyList').get();
          const TrendingSnapshot = await db.collection('Trending').get();
          const RecommendedSnapshot = await db.collection('Recommended').get();

          const MoviesData = MoviesSnapshot.docs.map((doc) => doc.data());
          const AlltimePopularData = AlltimePopularSnapshot.docs.map((doc) => doc.data());
          const TrendingData = TrendingSnapshot.docs.map((doc) => doc.data());
          const RecommendedData = RecommendedSnapshot.docs.map((doc) => doc.data());
          const newData = [...MoviesData, ...AlltimePopularData,...TrendingData,...RecommendedData];
          
          newData.forEach(item => {
            item.name = item.name.toLowerCase();
          });
          setResults(newData);

          if (results != undefined) {
            const finalResults = results.filter(result => {
                return result.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            })

            setResults2(finalResults);
        }
          
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
      //console.log(results2)
      //console.log(results2.length)
    }, [search]);

  return (
    <View style = {styles.container}>
       {/*Header*/}
       <View style = {{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
						 
            <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    style={styles.avatar} 
                    resizeMode='contain' 
                    source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
            </TouchableOpacity> 
				</View>
        
        <View style={styles.searchboxwrapper}>
            <View style={styles.searchbox}>
                <MaterialIcons name="search" size={30} color="#B1B1B1" style={{ margin: 10 }} />
                <TextInput style = {{fontSize:16,color:'#fff'}} value={search} onChangeText={(text) => setSearch(text)} placeholderTextColor="#7f7f7f" placeholder="Search for a show, movie, genre etc." />
                <TouchableOpacity activeOpacity={0.5}>
                    <MaterialCommunityIcons name="microphone" size={30} color="#b1b1b1" style={{ margin: 10, }} />
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView style={{flex:1}}>
        {
              results2 && (
                  <>
                      <Text style={styles.topresultstext}>Top Searches</Text>
                      <View style={styles.resultwrapper}>
                          {results2.map((movie, item) => {
                              return (
                                  <TouchableOpacity activeOpacity={0.5} key={item}>
                                      <View style={{paddingRight:3,paddingTop:10}}>
                                          <Image style = {styles.poster} resizeMode='cover' source={{ uri: movie.pic }} />
                                      </View>
                                  </TouchableOpacity>
                              )
                          })}
                      </View>
                  </>
              )
          }
          </ScrollView>
        
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  avatar:{
    width:40,
    height:30,
    borderRadius:20
  },
  searchboxwrapper:{
    width:'100%',
    justifyContent:'center',
    marginTop:5
  },

  searchbox:{
    width:'100%',
    height:50,
    backgroundColor:'#333333',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    margin:20,
    marginLeft:5
  },
  topresultstext:{
    color:'#fff',
    fontSize:28,
    margin:20,
    marginTop:10,
    marginLeft:25,
    fontWeight:600
  },
  resultwrapper:{
    flexDirection:'row',
    flexWrap:'wrap',
    padding:10,
    justifyContent:'center'
  },
  poster:{
    width:Math.round((Dimensions.get('window').width * 29.5) / 100),
    height:200

  }
});
