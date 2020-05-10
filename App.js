import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Major from './components/Major'
import Message from './components/Message'
import Share from './components/Share'
import { ScreenContainer } from 'react-native-screens';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab1.png')}
              resizeMode='contain'
              style={{width:25, height:25}}
              />
            )
          }}/>
          <Tab.Screen name="Major" component={Major} options={{
            tabBarLabel:'专业',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab2.png')}
              resizeMode='contain'
              style={{width:25, height:25}}
              />
            )
          }}/>
          <Tab.Screen name="Message" component={Message} options={{
            tabBarLabel:'消息',
            tabBarIcon:({tintColor}) => (
              <Image source={require('./images/tab3.png')}
              resizeMode='contain'
              style={{width:28, height:28}}
              />
            )
          }}/>
          <Tab.Screen name="Share" component={Share} options={{
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