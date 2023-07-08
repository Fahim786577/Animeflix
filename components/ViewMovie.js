import React, { useState } from 'react'
import { Video } from 'expo-av';
import { Feather, Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
//import { Icon } from 'react-native-elements';
import { StyleSheet, Text, View , ScrollView,TouchableOpacity} from 'react-native';
import AddtoList from './AddtoList';

const ViewMovie = ({ route, navigation }) =>{
    const video = React.useRef(null);
    const { videoId,videotitle,videoUrl, desc,videotags,vidpic } = route.params;
    //console.log(route.params)
    const listdata = { videoId,videotitle,videoUrl,vidpic }
    //console.log(listdata)    
    const [isTouched, setIsTouched] = useState([false, false, false]);
    const [status, setStatus] = useState({});

    const handleTouch = (index) => {
        const updatedTouched = [...isTouched];
        updatedTouched[index] = !updatedTouched[index];
        setIsTouched(updatedTouched);
      };
    //console.log(videoUrl) posterSource={require('../assets/VideoThumb/banner.png')}
    //console.log(desc)

    return (
        <>
            <ScrollView style = {styles.container}>
            <Video
                    ref={video}
                    source={{
                        uri: videoUrl
                    }}
                    isMuted={false}
                    useNativeControls={true}
                    shouldPlay={true}
                    style={{ height: 225, marginTop: 15 }}
                    resizeMode="contain"
                    usePoster={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <Text style={styles.title}>{videotitle}</Text>
                <View style={styles.moviesubdetails}>
                    <Text style={styles.movierating}>16+</Text>
                    <Text style={styles.moviereleaseyear}>Rating</Text>
                </View>

                <View style={styles.actionbutton}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.play} onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
                        <Ionicons name='ios-play' size={26} />
                        <Text style={styles.textbuttonplay}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.download}>
                        <Feather name='download' size={24} style={{ color: 'white', margin: 4 }} />
                        <Text style={styles.textbuttondownload}>Download</Text>
                    </TouchableOpacity>

                    <Text style={styles.moviedescription}>
                        {desc}  
                    </Text>
                </View>

                <View style = {styles.tags}>
                {
                        videotags.map((tag, i) => { 
                            return (
                                (
                                    <View style = {styles.tagwrapper} key={i}>
                                        <Text style = {styles.tag}>{tag}</Text>
                                        <View style = {styles.tagdot}/>
                                    </View>
                                )
                            )
                            
                        })
                    }
                    
                </View>

                <View style={styles.addlikeshare}>
                    <AddtoList data = {listdata}/>
                    {/* 
                        <TouchableOpacity style={styles.actionbutton} activeOpacity={0.5}>
                            <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                            <Text style = {styles.addlikeshareLabel}>My List</Text>
                        </TouchableOpacity>
                    */}

                    <TouchableOpacity activeOpacity={0.5} style={styles.actionbutton}>
                        <AntDesign name="like2" size={30} color="white" style={{ marginBottom: 7 }} />
                        <Text style = {styles.addlikeshareLabel}>Like</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style= {styles.actionbutton}>
                        <AntDesign name="sharealt" size={27} color="white" style={{ marginBottom: 7 }} />
                        <Text style = {styles.addlikeshareLabel}>Share</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                            activeOpacity={0.5}
                            style={[
                            styles.circularRect,
                            { borderColor: isTouched[0] ? '#4682B4' : 'transparent' },
                            ]}
                            onPress={() => handleTouch(0)}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>Episode 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[
                    styles.circularRect,
                    { borderColor: isTouched[1] ? '#4682B4' : 'transparent' },
                    ]}
                    onPress={() => handleTouch(1)}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Episode 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[
                    styles.circularRect,
                    { borderColor: isTouched[2] ? '#4682B4' : 'transparent' },
                    ]}
                    onPress={() => handleTouch(2)}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Episode 3</Text>
                </TouchableOpacity>
            </ScrollView>
        
        </>
    );
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
    title:{
        color: 'white',
        fontSize:24,
        margin:10
    } ,
    moviesubdetails:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: -17  
    
    } ,
    movierating:{
        backgroundColor:'#373737',
        padding:2,
        borderRadius:5,
        width:38,
        textAlign:'center',
        margin:15
    },
    moviereleaseyear:{
        color: '#a2a2a2',
        margin: 5
    },
    actionbutton:{
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },

    play:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'95%',
        height:32,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    },
    textbuttonplay:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:5
    },
    download:{
        flexDirection:'row',
        backgroundColor:'#262626',
        width:'95%',
        height:32,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center'
    },
    textbuttondownload:{
        fontSize:15,
        fontWeight:'700',
        color:'white',
        paddingLeft:5
    },
    moviedescription:{
        color:'white',
        width:'98%',
        marginLeft:10,
        margin:10,
        fontWeight:'100',
        lineHeight:20,
        marginTop:25
    },

    tags:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 3,
        marginRight: 0,
        alignItems:'center',
        flexWrap:'wrap',
        width:'99%'
    },
    tag:{
        color:'#fff'
    },
    tagwrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    tagdot:{
        margin:10,
        backgroundColor:'#000',
        height:2,
        width:2
    },
    addlikeshare:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        alignSelf:'center',
        width:'30%'
        
    },
    addlikeshareLabel:{
        color:'#fff',
        fontSize:15
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

    

});

export default ViewMovie;
