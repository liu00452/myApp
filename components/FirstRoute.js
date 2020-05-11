import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';



export default function FirstRoute(props){

    const {data} = props

        return(
         <View className="card" style={[ styles.container, { backgroundColor: 'none' } ]}>

         <Image style={styles.image} source={data.src} resizeMode='cover' />

         <View style={styles.circle}>
         <Text style={styles.text}>{data.title}</Text>  
         </View>  

        </View>
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
    right:10,
    bottom:10,
    fontSize: 25,
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