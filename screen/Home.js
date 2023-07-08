import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View , ScrollView,Image,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ShowMovieList from '../components/ShowMovieList';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../config'; 

const videoTitle = "The Café Terrace and Its Goddesses";
const videoLink = "https://firebasestorage.googleapis.com/v0/b/animeflix-5bd54.appspot.com/o/PopularThisSeason%2Fvideos%2FThe%20Caf%C3%A9%20Terrace%20and%20Its%20Goddesses%20-%20Official%20Trailer%20_%20English%20Sub.mp4?alt=media&token=c0f0905d-42b0-4c4c-bd5b-e605fb6a503a";
const videoDesc = "After inheriting his late grandmother’s failing café, Hayato sees it as a bother and plans to sell it for a quick buck. Until he discovers five beautiful girls staying there! When they beg him to keep the café open, Hayato reluctantly gives in. Can he manage the seaside shop while learning to live with these unruly women?";
const videoTags = ["Comedy","Ecchi","Romance","Harem"];
const vidpic = 'https://firebasestorage.googleapis.com/v0/b/animeflix-5bd54.appspot.com/o/PopularThisSeason%2FCaf%C3%A9Terrace.jpg?alt=media&token=1929c861-d798-4296-94c4-13de68b74a6a'

const Home = () =>{
  const [user, setUser] = useState(null);
  const db = firebase.firestore()
  const navigation = useNavigation();

  useEffect(() => {
		db.collection('users').doc(firebase.auth().currentUser.email).onSnapshot(doc => {
			if (doc.exists) {
				setUser(doc.data())
        //console.log(doc.data())
        //console.log(db.collection('users').doc(firebase.auth().currentUser.email).collection('list'))
        //console.log(user.list.some(item => item.id === '0'))
      }
		})

	}, [firebase.auth().currentUser])
 
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scroller}>
            <View style={styles.scrollWrapper}>
                <View style={styles.bigFrame}>
                    <Image source={require('../assets/list/PopularThisSeason/CaféTerrace.jpg')} style={styles.bannerPic}/>
                    <LinearGradient colors={['black',"transparent" ]} style={styles.header}>
                        <Header/>
                        
                        <View style={styles.catBtn}>
                            <TouchableOpacity onPress={() => {
                              navigation.navigate("MyList",{
                                myanimelist:user.list

                              })}}>
                              <Text style={styles.catText}>My List</Text>
                            </TouchableOpacity>
                            
                            
                            
                            <TouchableOpacity onPress={()=>{
                              navigation.navigate('Categories')
                            }}>
                              <Text style={styles.catText}>Categories</Text>
                            </TouchableOpacity>
                      </View>
                    </LinearGradient>  

                    <LinearGradient colors={['transparent','#0008',"black" ]} style={styles.bannerPlay}>
                        <View style={styles.gener}>
                          <Text style={styles.genreText}>Comedy</Text>
                          <Text style={styles.genreText}>Romance</Text>
                          <Text style={styles.genreText}>Ecchi</Text>
                          <Text style={styles.genreText}>Harem</Text>
                  
                        </View>
                        <View style={styles.BannerBox}>
                          {
                              user?.list.some(item => item.id === '2LSRorWgaw6ylQncIsiO') ? (
                  
                                <TouchableOpacity style={styles.bannerBtnSide} activeOpacity={0.5} onPress={() => {
                                  const dbRef =  db.collection('users').doc(firebase.auth().currentUser.email)
                                  const Maptoremove = {name:videoTitle,id:'2LSRorWgaw6ylQncIsiO',vidlink: videoLink,pic:vidpic}
                                  dbRef.update({
                                    list: firebase.firestore.FieldValue.arrayRemove(Maptoremove)
                                  })
                                }}>
                                  <Feather style = {{alignSelf:'center'}} name="check" size={24} color="#fff" />
                                  <Text style={styles.sideBtnText}>My List</Text>
                                </TouchableOpacity>
                                
                                
                            ) : (
                                  <TouchableOpacity style={styles.bannerBtnSide} activeOpacity={0.5} onPress={() => {
                                    const updateDBRef = db.collection('users').doc(firebase.auth().currentUser.email)
                                    const newMap = {name:videoTitle,id:'2LSRorWgaw6ylQncIsiO',vidlink: videoLink,pic:vidpic}

                                    updateDBRef.update({
                                      list: firebase.firestore.FieldValue.arrayUnion(newMap)
                                    })
                                  }}>
                                  <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                                  <Text style={styles.sideBtnText}>My List</Text>
                                  </TouchableOpacity>
                            )
                          }
                          

                          <TouchableOpacity style={styles.showPlay} onPress={() => {
                            navigation.navigate("ViewMovie",{
                              videotitle:videoTitle,
                              videoUrl: videoLink,
                              desc:videoDesc,
                              videotags:videoTags
                            })}}>
                            <Icon type='entypo' color={'black'} size={35} name={'controller-play'}/>
                            <Text style={styles.playBtn}>Play</Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.bannerBtnSide}>
                            <Icon type='feather' color={'white'} size={25} name={'info'}/>
                            <Text style={styles.sideBtnText}>Info</Text>
                          </TouchableOpacity>
                  
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.thumbFrame}>
                    <ShowMovieList showtitle={'Popular This Season'} collectionname={'Movies'}/>
                    <ShowMovieList showtitle={'Trending Now'} collectionname={'Trending'}/>
                    <ShowMovieList showtitle={'All Time Popular'} collectionname={'MyList'}/>
                    <ShowMovieList showtitle={'Recommended'} collectionname={'Recommended'}/>
                    
                </View>
                
            </View>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      );
}
/*
<TouchableOpacity>
                              <Text style={styles.catText}>Movies</Text>
                            </TouchableOpacity>
<View style={styles.thumbFrame}>
                    <ShowGrid title={'TV Shows'} showList={tvshows} />
                  <ShowGrid title={'Trending Now'} showList={tvshows} />
                  <ShowGrid title={'My List'} showList={tvshows} />
                  <ShowGrid title={'Recommended'} showList={tvshows} />
                </View>

                <TouchableOpacity style={styles.bannerBtnSide}>
                            <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                            <Text style={styles.sideBtnText}>My List</Text>
                          </TouchableOpacity>
                
<TouchableOpacity style={styles.bannerBtnSide} activeOpacity={0.5} onPress={() => {
  db.collection('users').doc(firebase.auth().currentUser.email).collection('list').doc("2LSRorWgaw6ylQncIsiO").delete()

  var userlist = user.list;
  list.splice(list.indexOf("2LSRorWgaw6ylQncIsiO"), 1);

  db.collection('users').doc(firebase.auth().currentUser.email).update({
    userlist,
  })
}}>


  <Feather name="check" size={24} color="#fff" />
  <Text style={styles.sideBtnText}>My List</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.bannerBtnSide} activeOpacity={0.5} onPress={() => {
                                    db.collection('users').doc(firebase.auth().currentUser.email).data('list').doc("2LSRorWgaw6ylQncIsiO").set({
                                      movieID: "2LSRorWgaw6ylQncIsiO",
                                      pic: videoLink
                                    });
                    
                                    var userlist = user.list;
                                    list.push("2LSRorWgaw6ylQncIsiO")
                    
                                    db.collection('users').doc(firebase.auth().currentUser.email).update({
                                      userlist,
                                    })
                                  }}>
                    
                    
                                  <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                                  <Text style={styles.sideBtnText}>My List</Text>
                                  </TouchableOpacity>                                

*/
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
      },
    
      bigFrame:{
        width:'98%',
        height:530,
        backgroundColor:'black',
        marginTop:30,
      },
      bannerPic:{
        width:'100%',
        height:'100%',
        resizeMode: 'stretch',
      },
    
      header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
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
        
      },
    
      headLogo:{
        paddingHorizontal:10,
      },

      catBtn:{
        flexDirection:'row',
    
        width:'80%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height:50,
        paddingTop:10,
    
      },
    
      catText:{
        flex:1,
        fontSize:18,
        color:'white',
        textAlign:'center',
      },

      bannerPlay:{
        position: 'absolute', //Here is the trick
          bottom: 0, //Here is the trick
          width:"100%",
          height:100,
          alignItems: 'center',
        justifyContent: 'center',
      },

      gener:{
        flexDirection:'row',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
      
        
        
      },
    
      BannerBox:{
        flexDirection:'row',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        
        
      },
    
      genreText:{
        flex:1,
        fontSize:15,
        color:'white',
        textAlign:'center',
      },
    
      bannerBtnSide:{
        flex:1
      },
    
      sideBtnText:{
        color:'white',
        textAlign:'center',
      },
    
      showPlay:{
    
        width:'30%',
        height:'90%',
        flexDirection:'row',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
    
      },
    
      playBtn:{
        fontWeight:'bold',
        fontSize:18,
      },
    
    
  });

  export default Home;