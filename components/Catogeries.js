


import React from 'react';
import { Text, View, Image, Button,TouchableOpacity, StyleSheet} from 'react-native';



export default function Catogeries(props){

    const {data} = props

        return(
         <TouchableOpacity style={[styles.container, {backgroundColor:'pink'}]} onPress={()=>props.gotoList(props.data.id)} >
   
       <View style={[styles.card, {backgroundColor:'black'}] } />
         <Image style={styles.image} source={data.src} resizeMode='cover' />
 
         <Text style={styles.text}>{data.title}</Text>  
        </TouchableOpacity>
        );
    
}



const styles= StyleSheet.create({

  

  
    container:{
      width: '90%',
      height:'25%',
      alignSelf: 'center',
      marginTop:60,
     
         
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