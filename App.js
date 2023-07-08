import React from 'react';
import { StyleSheet} from 'react-native';
import { AntDesign, MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import Home from './screen/Home';
import Login from './screen/Login';
import CreateAccount from './screen/CreateAccount';
import ComingSoon from './screen/ComingSoon';
import Downloads from './screen/Downloads';
import ViewMovie from './components/ViewMovie';
import Categories from './screen/Categories';
import Search from './screen/Search';
import MyList from './screen/MyList';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomStackScreen(){
    return (
            <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#5B5B5B",
              tabBarStyle: [
                { 
                  backgroundColor: '#141414',
                  borderTopWidth: 0,
                  elevation: 0, 
                  display: "flex",
                  height: 60,
                  paddingBottom: 10,

                },
              
              ],
              
            }}
      >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} style={{ marginBottom: -10 }} />
          }} />
          <Tab.Screen name="Coming Soon" component={ComingSoon} options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} style={{ marginBottom: -10 }} />
          }} />
          <Tab.Screen name="Downloads" component={Downloads} options={{
            tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} style={{ marginBottom: -10 }} />
          }} />
        </Tab.Navigator>
    );
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreateAccount' screenOptions={{headerShown: false}}>
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
                    gestureEnabled: true,
                    animationEnabled: true,
                    gestureDirection: "horizontal",
                  }} />
                  
          <Stack.Screen name="Login" component={Login} options={{
                  gestureEnabled: true,
                  animationEnabled: true,
                  gestureDirection: "horizontal",
                }} />
          
          <Stack.Screen name="BottomStackScreen" component={BottomStackScreen} />
          <Stack.Screen name="ViewMovie" component={ViewMovie} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="MyList" component={MyList} />

                  
    </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
