import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity,Button, StatusBar} from 'react-native';



export default class Detail extends React.Component{

        // return {
        //   title: navigation.getParam('Title', 'Default Title'),
          //Default Title of ActionBar
        //   headerStyle: {
          

            // backgroundColor: navigation.getParam('BackgroundColor', '#ED2525'),
            //Background color of ActionBar
        //   },
        //   headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
          //Text color of ActionBar
        // };

render(){
    const { navigation } = this.props;

    return(           
        <View style={{flex:1, backgroundColor:'#e6e1cf'}}>
 
         <View style={styles.header}>
             <Text style={styles.line1}>{this.props.route.params.category.title}</Text>
             <Text style={styles.line2}>{this.props.route.params.category.EnglishName}</Text>
             <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
             <Text style={styles.line3}>{this.props.route.params.category.school}</Text> 
             <View>
             <Text style={styles.line4}>{this.props.route.params.category.year}</Text>
             <Text style={styles.line5}>{this.props.route.params.category.open}</Text>
             </View>
            </View>
        </View>

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'#e6e1cf'}}>
        
         <View >
      
          <View style={[styles.card, {backgroundColor:'#faf4de'}] } >
          <View style={styles.text}>
              <Text style={styles.textTitle}>OVERVIEW</Text>
          </View>
              <Text style={{margin:20, lineHeight:23, textAlign:'justify'}}>{this.props.route.params.category.courses}</Text>
          </View>
          <View style={[styles.card, {backgroundColor:'#faf4de'}] } > 
          <View style={styles.text}>
              <Text style={styles.textTitle}>SUCCESS FACTORS</Text>
         </View>
              <Text style={{margin:20, lineHeight:23, textAlign:'justify'}}>{this.props.route.params.category.requires}</Text>
          </View>
          {/* <View>
              <Text>校友分享</Text>
          </View> */}
 <View style={styles.button}>

        <TouchableOpacity key={this.props.route.params.category.id} onPress={() => navigation.navigate("Chat")}>
          <Text style={styles.textTitle}>MESSAGE</Text> 
          </TouchableOpacity>
          <Image source={require('../images/chat.png')}
              resizeMode='cover'
              style={{width:30, height:32}}
              />
 </View>         
      </View>
  
        </ScrollView>
        </View> 
    )
}
}



const styles= StyleSheet.create({

 
    header:{
        borderBottomWidth:1, 
        borderColor:'#6f6048',
        margin:10,
        paddingVertical:20, 
    },
    line1:{
        color:'#6f6048' ,
        fontSize:18, 
        fontWeight:'bold',
    },
    line2:{
        color:'#257431' ,
        fontSize:15, 
        fontWeight:'200',
        marginTop:3,
    },
    line3:{
        color:'#6f6048' ,
        fontSize:15, 
        fontWeight:'500',
    //    position:'absolute',
    },
    line4:{
        color:'#6f6048' ,
        fontSize:13, 
        fontWeight:'300',
        marginBottom:8
    },
    line5:{
        color:'#6f6048' ,
        fontSize:13, 
        fontWeight:'300',
        marginBottom:-5
    },
    
    card:{
        borderRadius:20,
        alignSelf:'center',
        width:'90%',
        // height:200,
        marginTop:50,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 0,
          width: 0
        },
    },
    text:{
        backgroundColor:'#257431',
        borderRadius:10,
        marginTop:-10,
        width:'60%',
        color:'#fff',
        shadowColor:'#6f6048',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 0
        },
    },
    textTitle:{
        alignSelf:'flex-start',
        fontSize:20,
        fontWeight:'300',
        color:'#fff',
        padding:5,
    },
    button:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#257431',
        borderRadius:10,
        alignSelf:'center',
        width:'90%',
        marginVertical:40,
    }

})