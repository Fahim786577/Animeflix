import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Dimensions, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../config';

const CreateAccount = () =>{
  const auth = firebase.auth();
  const db = firebase.firestore()

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleCreateAccount = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    setLoading(true);
    if (!email || !password || !name) {
      console.log('All fields are mandatory')
      setName("");
      setPassword("");
      setEmail("");
      setLoading(false);
  }
  auth.createUserWithEmailAndPassword(email, password).then(authUser => {
    db.collection('users').doc(email).set({
        name,
        email,
        list: [],
    }).then(() => {
        setName("");
        setPassword('');
        setEmail("");
        setLoading(false);
        setIsVisible(true);
    })
    }).catch(err => {
        alert(err)
        setName("");
        setPassword("");
        setEmail("");
        setLoading(false);
    })
    
  };

        

  return (
    <ImageBackground
      source={require('../assets/background3.jpg')}
      style={styles.container}
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.logo,{color: '#e50914'}]}>A</Text>
              <Text style={[styles.logo,{color: '#D5D6DC'}]}>nimeflix</Text>
            </View>
            <View style={{width:'100%',marginTop:50}}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#a9a9a9"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#a9a9a9"
                  keyboardType='email-address'
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor="#a9a9a9"
                      secureTextEntry={!passwordVisible}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity style = {styles.iconContainer} onPress={()=>{setPasswordVisible(!passwordVisible)}}>
                      <Ionicons
                        name={passwordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color="#a9a9a9"
                      />
                    </TouchableOpacity>
              </View>
                <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
                  <Text style={styles.createAccountButtonText}>Create Account</Text>
                </TouchableOpacity>
                
                <View style={styles.accountStatusContainer}>
                    <Text style={styles.accountStatusText}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                      <Text style={styles.signInText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                {isVisible && (
                  <View style={styles.createaccountstatus}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Account was successfully created.</Text>
                  </View>
                )}
            </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    height: Dimensions.get("window").height
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 64,
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: 'rgba(38,38,38,0.9)',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    borderRadius: 50,
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    backgroundColor:'#e50914', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 16,
  },
  createAccountButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    
  },
  accountStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  accountStatusText: {
    fontSize: 16,
    color: '#fff',
  },
  signInText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top:12
  },
  createaccountstatus :{
    height: 45,
    width: '100%',
    backgroundColor: 'rgba(38,38,38,0.9)',
    marginBottom: 16,
    color: '#fff',
    justifyContent:'center',
    alignItems:'center',
  }
});

  export default CreateAccount;