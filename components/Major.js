import React from 'react';
import { Text, View, Image,   Animated, StyleSheet, Dimensions,  ScrollView, TouchableOpacity,} from 'react-native';
import Categories from './Catogeries';
import Cloth from '../images/cloth.png';
import Food from '../images/food.png';
import House from '../images/house.jpg';
import Travel from '../images/travel.jpg';
import { createStackNavigator} from '@react-navigation/stack';


export default class Major extends React.Component{

    state={
        catogery:[
            {
                id: 0,
                title:'全部',
                src: Cloth,
            },
            {
                id: 1,
                title:'商科',
                src: Food,
            },
            {
                id: 2,
                title:'电子',
                src: House,
            },
            {
                id: 3,
                title:'艺术',
                src: Travel,
            },
            {
                id: 4,
                title:'媒体',
                src: Cloth,
            },
            {
                id: 5,
                title:'语言',
                src: Food,
            },
            {
                id: 6,
                title:'计算机',
                src: House,
            },
            {
                id: 7,
                title:'厨师',
                src: Travel,
            },
        ]
    }

    render(){
        const catogeryList = this.state.catogery.map(card => < Categories key={card.id} data={card}  />)
        
  

        return(

            

            <View>
          <View style={styles.header}>
            <Image source={require('../images/header.png')}
              resizeMode='cover'
              style={{width:380, height:150}}
              />
        
            </View>

            <View className='catogery'>
                <View>
                    {catogeryList}
                </View>
            </View>
            </View>
        )
    }
}



const styles= StyleSheet.create({

  

    header:{
    position:"absolute",
    left:0,
    top:0,
    },
    
})