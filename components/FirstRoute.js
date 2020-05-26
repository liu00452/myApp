import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';



export default function FirstRoute(props){

    const {data} = props

        return(
         <TouchableOpacity style={[ styles.container, { backgroundColor: 'none' } ]} onPress={()=>{props.goToDetail(data)}}>

         <Image style={styles.image} source={data.src} resizeMode='cover' />

         <View style={styles.circle}>
         <Text style={styles.text}>{data.title}</Text>  
         </View>  

        </TouchableOpacity >
        );
    
}









const styles= StyleSheet.create({

  container:{
    marginTop:30,
    borderRadius:20,
    shadowColor: "#073829",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },

    
  },

  image:{
    width:335, 
    height:150,
    borderRadius:10,
    overflow: "hidden",    
  },

  text:{
    position:'absolute',
    right:4,
    bottom:15,
    fontSize: 18,
    fontWeight:'bold',
    color:'#073829',
  },
   circle:{
    position:'absolute',
    right:-4,
    bottom:-4,
    width:50,
    height:50,
    backgroundColor:'#e1efeb',
    borderRadius:50
   }

});
