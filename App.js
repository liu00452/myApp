import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Major from './components/Major'
import Message from './components/Message'
import Share from './components/Share'
import SchoolLife from './components/SchoolLife'
import Cloth from './components/Cloth'
import Detail from './components/Detail'
import ChatScreen from './components/ChatScreen'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();







// export const Splash = () =>(
//   <ScreenContainer>
//     <Text>Loading...</Text>
//   </ScreenContainer>
// )

function TabBar(){
  return(
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#073829',
      activeBackgroundColor: '#d4f4d2',
      tabStyle:{
        marginRight:20,
         marginLeft:20,
        borderRadius:50,
        },
    }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel:'Home',
          tabBarIcon:({tintColor}) => (
            <Image source={require('./images/tab1.png')}
            resizeMode='contain'
            style={{width:25, height:25}}
            />
          )
        }}/>
        <Tab.Screen name="Major" component={Major} options={{
          tabBarLabel:'Major',
          tabBarIcon:({tintColor}) => (
            <Image source={require('./images/tab2.png')}
            resizeMode='contain'
            style={{width:25, height:25}}
            />
          )
        }}/>
        <Tab.Screen name="Message" component={Message} options={{
          tabBarLabel:'Message',
          tabBarIcon:({tintColor}) => (
            <Image source={require('./images/tab3.png')}
            resizeMode='contain'
            style={{width:28, height:28}}
            />
          )
        }}/>
        <Tab.Screen name="Share" component={Share} options={{
          tabBarLabel:'Share',
          tabBarIcon:({tintColor}) => (
            <Image source={require('./images/tab4.png')}
            resizeMode='contain'
            style={{width:28, height:28}}
            />
          )
        }}/>
      </Tab.Navigator>
  )
 
}


export default class App extends React.Component { 



        

  render(){


    
    return (
  

      <NavigationContainer >
       
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabBar} options={{headerShown:false}}/>

        <Stack.Screen name="Chat" component={ChatScreen} 
        options={{headerBackTitle: 'back',
        headerStyle: { backgroundColor: "#4f956e"},
        headerTintColor: '#e6e1cf',
        headerBackTitleStyle: {fontSize:14, fontWeight:'300'},
        title:'Chatting'
        }}/>

        <Stack.Screen name="Detail" component={Detail} 
        options={({ route }) => ({ title: route.params.category.title,  
        headerStyle: { backgroundColor: "#4f956e"},
        headerTintColor: '#e6e1cf',
        headerBackTitle: null,
        headerBackTitleStyle: {fontSize:14, fontWeight:'300'} 
      }) }/>

        <Stack.Screen name="Cloth" component={Cloth} 
        options={
          ({ route }) => ({ title: route.params.item.title,  
           headerStyle: { backgroundColor: "#4f956e"},
           headerTintColor: '#e6e1cf', 
           headerBackTitle: null,
           headerBackTitleStyle: {fontSize:14, fontWeight:'300'}}) 
          }/>
          
        <Stack.Screen name="SchoolLife" component={SchoolLife} 
        options={
          ({ route }) => ({ title: route.params.item.title,  
           headerStyle: { backgroundColor: "#4f956e"},
           headerTintColor: '#e6e1cf',
           headerBackTitle: null,
           headerBackTitleStyle: {fontSize:14, fontWeight:'300'}
           })}/>

        </Stack.Navigator>
      </NavigationContainer>
  
    );
  }
  
}