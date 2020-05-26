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
import All from './components/All'
import Cloth from './components/Cloth'
import Detail from './components/Detail'
import ChatScreen from './components/ChatScreen'




// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MajorStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ShareStack = createStackNavigator();
const MessageStack = createStackNavigator();


function HomeStackScreen() {

  
  return (
    <HomeStack.Navigator
    >
     <HomeStack.Screen name="返回" component={Home} options={{headerShown:false}}/>           
     <HomeStack.Screen name="Cloth" component={Cloth} />
     <HomeStack.Screen name="All" component={All} />
    </HomeStack.Navigator>
   );
 }

 function ShareStackScreen() {

  
  return (
    <ShareStack.Navigator
    >
     <ShareStack.Screen name="返回" component={Share} options={{headerShown:false}}/>           
     <ShareStack.Screen name="Detail" component={Detail} 
      options={{
        headerStyle: { backgroundColor: "#4f956e"},
        headerTintColor: '#e6e1cf',
        }}
     />
    </ShareStack.Navigator>
   );
 }


 function MessageStackScreen() {

  
  return (
    <MessageStack.Navigator
    >
     <MessageStack.Screen name="返回" component={Message} options={{headerShown:false}}/>           
     <MessageStack.Screen name="Chat" component={ChatScreen} />
    </MessageStack.Navigator>
   );
 }


function MajorStackScreen() {

 return (
   <MajorStack.Navigator
   >
    <MajorStack.Screen name="专业" component={Major} options={{headerShown:false}}/>           
    <MajorStack.Screen name="Detail" component={Detail} 
    options={({ route }) => ({ title: route.params.category.title })}
    />
  

   </MajorStack.Navigator>
  );
}


// export const Splash = () =>(
//   <ScreenContainer>
//     <Text>Loading...</Text>
//   </ScreenContainer>
// )


export default class App extends React.Component { 



        

  render(){


    
    return (
  

      <NavigationContainer >
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
          <Tab.Screen name="Home" component={HomeStackScreen} options={{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab1.png')}
              resizeMode='contain'
              style={{width:25, height:25}}
              />
            )
          }}/>
          <Tab.Screen name="Major" component={MajorStackScreen} options={{
            tabBarLabel:'专业',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab2.png')}
              resizeMode='contain'
              style={{width:25, height:25}}
              />
            )
          }}/>
          <Tab.Screen name="Message" component={MessageStackScreen} options={{
            tabBarLabel:'消息',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab3.png')}
              resizeMode='contain'
              style={{width:28, height:28}}
              />
            )
          }}/>
          <Tab.Screen name="Share" component={ShareStackScreen} options={{
            tabBarLabel:'分享',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab4.png')}
              resizeMode='contain'
              style={{width:28, height:28}}
              />
            )
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
  
    );
  }
  
}
















