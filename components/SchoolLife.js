import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";
import mock from '../constants/Mock'


import {
        Text,
        View,
        Dimensions,
        Image,
        StyleSheet,
        ScrollView,
        TouchableOpacity,
        Animated,
        Easing,
      } from "react-native";


const { width, height } = Dimensions.get("window");

export default class SchoolLife extends React.Component{

        state={
                product:{},
                activity:[],
                item:[],
                offset: new Animated.Value(0),
                translateY: -1000,
                show:false,
        }

        showIntroduction = (item) => {
     
          this.setState({ show: true, product: item});
             
                 Animated.timing(
                   this.state.offset,
                   {
                     easing: Easing.linear,
                     duration: 300,
                     toValue: 1
                   }
                 ).start()
               }
                 
             
             
               defaultHide = () => {
                 Animated.timing(
                   this.state.offset,
                   {
                     easing: Easing.linear,
                     duration: 300,
                     toValue: 0
                   }
                 ).start()
              
                 setTimeout(
                   () => this.setState({ show: false }),
                   300
                 )
               }

componentDidMount = () =>{
        // this.setState({ activity: schoolLife });

        const items = mock.filter(item => item.activity == this.props.route.params.item.title )
        this.setState({item:items});

}    

renderImage = (item) => {
    const img = item.image

    return (

            <View style={{
                shadowColor: "grey",
                shadowOpacity: 0.8,
                shadowRadius: 3,
                shadowOffset: {
                  height: 5,
                  width: 4
                },
            }}>
      <TouchableOpacity
        key={item.id}
        onPress={() =>this.showIntroduction(item)}
      >
     
        <Image
          source={{uri:`${img}`}}
          resizeMode="cover"
          style={{
                width: item.id%4 == 0 || item.id%4 ==  3? 180 : 130,
                height: item.id%4 == 0 || item.id%4 ==  3? 180 : 200,
                marginTop: item.id%4 == 0 || item.id%4 ==  3? 10 : 0, 
                marginHorizontal:12,
                borderRadius: 4,
                marginBottom:10,
          }}
          
        />
      
      </TouchableOpacity>

      </View>
    );

  }


  render(){

        const category = this.state.product;

        const items = this.state.item;

        const { navigation } = this.props;


     return(
             <View>

        <ScrollView style={{backgroundColor:'#e6e1cf',
        zIndex: this.state.show ? -1 : 1,
        opacity: this.state.show ? 0.3: 1,
        backgroundColor:'#e6e1cf',
}}>  
      <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', flex:1}}>
     
        {items.map((item) => (
                    
                <View  data={item}  key={item.activity} >                      
                       {this.renderImage(item)}
               </View>
        ))}
       
     </View>  
     </ScrollView>  


     <Animated.ScrollView
                   style={[styles.modalBox, {
                  transform: [{
                  translateY: this.state.offset.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, 0]
                }),
              }]
                        }]}>
                   

                <View style={{margin:30}}>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:30, alignItems:'flex-end'}}>
                <Text style={{fontSize:25, fontWeight:'600', color:'#faf4de'}}>{category.activity}</Text>
                <TouchableOpacity   
                onPress={() =>this.defaultHide(category)} >
                  <Ionicons name="md-close-circle" size={28} color="#faf4de" />
                </TouchableOpacity>
                </View>
                  <Text style={{fontSize:14, fontWeight:'300', color:'#faf4de', textAlign:'justify'}}>{category.instruction}</Text>

                  </View>



                  <View style={styles.footer}>
         <LinearGradient style={{ alignItems:'center', borderRadius:8}} 
                         colors={['#faf4de', '#bec6b1']} start={[0.5, 0.8]} end={[0.2, 0.5]}>

            <TouchableOpacity  
            onPress={() => navigation.navigate("Detail",{category})}>

              <Text style={{fontSize:18, color:"#245043", marginVertical:6, fontWeight:'700',}}>
                View Major Details
              </Text>
            </TouchableOpacity>
            </LinearGradient>

          </View>
   
  

                  <View >
               <View style={styles.headers}></View>
                </View>

                 </Animated.ScrollView> 

                

     </View>       
        );
  }

 
}


const styles = StyleSheet.create({

  
        modalBox: {
        //   position: 'absolute',
          width: width,
          backgroundColor: '#4f956e',
          position: 'absolute',
          height: '70%',
          bottom:0,
          zIndex: 0,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
        },
       
        headers:{
                opacity:0.1,
                width:180,
                height:180,
                borderRadius:500/2,
                backgroundColor:'#ebf4ee',
                position:'relative',
                left:240,
                top:0,
                shadowColor: "#073829",
                shadowOpacity: 0.6,
                shadowRadius: 1,
                shadowOffset: {
                  height: 1,
                  width: -2
                },
            },
       
            footer: {
                position: 'absolute',
                bottom: 40,
                left:30,
                right:30,
                overflow: "visible",
                shadowColor: "grey",
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowOffset: {
                  height: 4,
                  width: 2
                },
                // borderWidth:3
              }    
 })
      


