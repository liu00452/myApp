import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';



export default function SecondRoute(props){

    const {data} = props

        return(
         <TouchableOpacity  style={[ styles.container, { backgroundColor: '#fff' } ]} onPress={()=>{props.goDetail(data)}}>

         <Image style={styles.image} source={data.src} resizeMode='cover' />

        
         <Text style={styles.text}>{data.title}</Text>  
      

        </TouchableOpacity>
        );
    }


    const styles= StyleSheet.create({

        container:{
            height:190,
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
          marginTop:10,
          marginLeft:5,
          fontSize: 18,
          fontWeight:'400',
          color:'#073829',
        },
   
      
      });
      