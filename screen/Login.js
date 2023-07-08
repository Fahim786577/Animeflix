import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../config';

const Login = () =>{
  const auth = firebase.auth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
  
    console.log('Email:', email);
    console.log('Password:', password);
    setLoading(true);
    if (!email || !password) {
      console.log('All fields are mandatory')
      setPassword("");
      setEmail("");
      setLoading(false);
  }

      auth.signInWithEmailAndPassword(email, password).then(authUser => {
          navigation.replace("BottomStackScreen");
          setPassword('');
          setEmail("");
          //console.log(authUser)
          setLoading(false);
      }).catch(err => {
          setLoading(false);
          alert(err)
      })
    
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
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
              placeholder="Email"
              placeholderTextColor="#a9a9a9"
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
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
            
            <View style={styles.accountStatusContainer}>
              <Text style={styles.accountStatusText}>
                Dont'/t have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <Text style={styles.signUpText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
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
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 64,
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: 'rgba(16,81,145,0.8)',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    borderRadius: 50,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor:'#e50914', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff'
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
  signUpText: {
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
});


  export default Login;