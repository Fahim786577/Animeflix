import React, { useEffect,useState } from 'react';
import { Feather} from '@expo/vector-icons';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {firebase} from '../config'

const AddtoList = ({data}) =>{

  //const { videoId,videotitle,videoUrl,vidpic } = data;
  //console.log(data);
  const [user, setUser] = useState(null);
  const db = firebase.firestore()
  //console.log(data['videotitle'])

  useEffect(() => {
		db.collection('users').doc(firebase.auth().currentUser.email).onSnapshot(doc => {
			if (doc.exists) {
				setUser(doc.data())
      }
		})

	}, [firebase.auth().currentUser])
    
    return (
            <>
                {
                        user?.list.some(item => item.id === data['videoId']) ? (

                        <TouchableOpacity style={styles.actionbutton} activeOpacity={0.5} onPress={() => {
                            const dbRef =  db.collection('users').doc(firebase.auth().currentUser.email)
                            const Maptoremove = {name:data['videotitle'], id:data['videoId'], vidlink:data['videoUrl'], pic:data['vidpic']}
                            dbRef.update({
                            list: firebase.firestore.FieldValue.arrayRemove(Maptoremove)
                            })
                        }}>
                            <Feather name="check" size={24} color="#fff" />
                            <Text style = {styles.addlikeshareLabel}>My List</Text>
                        </TouchableOpacity>
                        
                        
                    ) : (
                            <TouchableOpacity style={styles.actionbutton} activeOpacity={0.5} onPress={() => {
                            const updateDBRef = db.collection('users').doc(firebase.auth().currentUser.email)
                            const newMap = {name:data['videotitle'], id:data['videoId'], vidlink:data['videoUrl'], pic:data['vidpic']}

                            updateDBRef.update({
                                list: firebase.firestore.FieldValue.arrayUnion(newMap)
                            })
                            }}>
                            <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                            <Text style = {styles.addlikeshareLabel}>My List</Text>
                            </TouchableOpacity>
                    )
                }
            
            </>
    );

}

const styles = StyleSheet.create({
    bannerBtnSide:{
        flex:1
      },

    sideBtnText:{
    color:'white',
    textAlign:'center',
    },  
    addlikeshareLabel:{
        color:'#fff',
        fontSize:15
    },

    actionbutton:{
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },
});

export default AddtoList;