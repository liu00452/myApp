import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity,FlatList, Dimensions} from 'react-native';
import Categories from './Catogeries';
import Cloth from '../images/cloth.png';
import Food from '../images/food.png';
import House from '../images/house.jpg';
import Travel from '../images/travel.jpg';
import mock from '../constants/Mock'

// import  mock  from "../constants/Mock";
// import  theme  from "../constants";


import { createStackNavigator} from '@react-navigation/stack';




export default class Major extends React.Component{



    state={
        subCatogery:[],
        active:"商科",
    }

    componentDidMount() {
      
        this.setState({ subCatogery: mock });
      }
    
    // gotoList = (id) =>{
    //     if(id == 0){
    //         this.props.navigation.navigate('所有专业');
    //     }else if(id == 1){
    //         this.props.navigation.navigate('计算机');
    //     }
    //     else if(id == 2){
    //         this.props.navigation.navigate('商科');
    //     }
    //     else if(id == 3){
    //          this.props.navigation.navigate('艺术');
    //     }
    //     else if(id == 4){
    //         this.props.navigation.navigate('媒体');
    //    }
    //    else if(id == 5){
    //          this.props.navigation.navigate('西厨');  
    //   }else{
    //          this.props.navigation.navigate('管理');
    //   }      
    
    // }

    handleTab = tab => {
        // const { catogeries } = this.state;
        const filtered = mock.filter(category =>
          category.tags.includes(tab)
        );
    
        this.setState({ active: tab, subCatogery: filtered });
      };

    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            onPress={() => this.handleTab(tab)}
            style={[styles.tab, isActive ? styles.active : null]}
          >
            <Text size={16} medium gray={!isActive} secondary={isActive}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      }
    

    render(){
        // const catogeryList = this.state.catogeries.map(card => < Categories key={card.id} data={card} gotoList={this.gotoList} />)
        
        const { navigation } = this.props;
        const subCatogery = this.state.subCatogery;
       
        const tabs = ["商科", "工科", "文学","健康","理科"];
    

        return(

            

        <View>
            <View style={styles.header}>
             <Image source={require('../images/header.png')}
              resizeMode='cover'
              style={{width:380, height:150}}
              />
              <Text style={styles.sentence}>快来看看你最喜欢哪个学院呢</Text>
            </View>

       <View style={styles.tabs}>
           {tabs.map(tab => this.renderTab(tab))}
       </View>


       <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical:  32 }}
        >
          <View >
            {subCatogery.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Detail")}
              >
                <View style={[styles.card, {backgroundColor:'black'}] } />
         <Image style={styles.image} source={category.src} resizeMode='cover' />
 
         <Text style={styles.text}>{category.title}</Text>  
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>



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
    catogery:{
        marginTop:120,
        height:'100%',
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#ebf4ee',
        shadowColor: "#073829",
        borderRadius:15,
         shadowOpacity: 0.3,
         shadowRadius: 3,
         shadowOffset: {
        height: 0,
        width: 0,  
      },
    },
    sentence:{
    position:'absolute',
    fontSize:20,
    color:'white',
    fontWeight:'900',
    top:40,
    },


    tab: {
        marginRight: 32,
        paddingBottom: 16
      },
      active: {
        borderBottomColor: 'blue',
        borderBottomWidth: 3
      },
      tabs: {
        flexDirection:'row',
        borderBottomColor: "blue",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 16,
        marginHorizontal: 32
      },



      image:{
        position:'relative',
        top:-30,
        alignSelf:'flex-end',
        width:'50%', 
        height:'50%',
      },
    
      text:{
        fontSize: 13,
        fontWeight:'bold',
        color:'#fff',
      },
      card:{
        position:'absolute',
        width:'100%', 
        height: '100%',
        borderRadius:10,
        zIndex:-1,
      }
    
})