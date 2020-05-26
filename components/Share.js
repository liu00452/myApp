import React from 'react';
import { Text, View ,ScrollView,StyleSheet,Image, Button,TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import mock from '../constants/Mock';
// import { Button} from 'react-native-elements';




export default class Share extends React.Component{

    state={
        video:[], 
        id:'',   
    }

    componentDidMount() {

        const videos = mock.filter(category => {
            if(category.video != null){
             id = category.id;
             return category
            }
        });
      
        this.setState({ video: videos, id:id });
      }

    render(){

        const video = this.state.video
        const { navigation } = this.props;


        return (

        <View  style={{backgroundColor:'#e6e1cf', flex:1}}>
            <View style={styles.header}>
               <View style={styles.headers}></View>
            </View>
            <Text style={styles.sentence}>Share our lives!</Text>

            <ScrollView 
             showsVerticalScrollIndicator={false}
             style={{marginTop:-200}}>

            <View style={styles.card}>
              {
                  video.map((category) => (
                  <View style={styles.video}>
                    <Video
                    source={category.video}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls

                    style={{ width: 350, height: 200 }}
                   />
<View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20,marginLeft:10}}>
                 <Text>{category.title}</Text>

                 <TouchableOpacity style={styles.button}
                 key={category.id}
                 onPress={() => navigation.navigate("Detail",{category})}
                 
                 >
                  <Text style={{fontSize:15,alignSelf:'center', color:'#fff'}}>Check Major</Text>
                  <Image source={require('../images/check.png')}
                   resizeMode='cover'
                   style={{width:20, height:20, alignSelf:'center'}}
                     />
                </TouchableOpacity>  
</View>

                 </View>
                  ))
              }  
             
             </View>
            </ScrollView>

        </View>
            );
    }
 
  }



  const styles= StyleSheet.create({

  
    header:{
        opacity:0.3,
        width:300,
        height:300,
        borderRadius:500/2,
        backgroundColor:'#4f956e',
        position:'relative',
        left:-60,
        top:-80,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 2
        },
    },

    headers:{
        opacity:0.5,
        width:400,
        height:400,
        borderRadius:500/2,
        backgroundColor:'#4f956e',
        position:'relative',
        left:180,
        top:420,
        shadowColor: "grey",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: -2
        },
    },
    
    sentence:{
    color:'#257431',
    position:'absolute',
    fontSize:30,
    fontWeight:'900',
    top:60,
    left:12,
    },

    card:{
        flex:1,
        alignSelf:'center',
        marginTop:10,
        position:'relative',
    },

    video:{
       marginVertical:20,
       backgroundColor:'#faf4de',
       borderBottomEndRadius:10,
       borderBottomLeftRadius:10,
       shadowColor: "grey",
       shadowOpacity: 0.8,
       shadowRadius: 3,
       shadowOffset: {
         height: 1,
         width: 0
       },
    },
    button:{
        fontSize:20,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#257431',
        borderRadius:10,
        alignSelf:'center',
        width:'40%', 
        height:'150%', 
        marginRight:10,
    }

})