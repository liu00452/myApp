import React from 'react';
import { Text, View, TouchableOpacity,TextInput,Image, Animated,StyleSheet,Dimensions, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";




const { width, height } = Dimensions.get("window");

export default class Message extends React.Component{

    state = {
        name:'',
        show:false,
        offset: new Animated.Value(0),
        translateY: -1000,
    }
    
    // recoginze = async ()=>{
    //     // Here is the demoe
    //     let result = await LocalBarcodeRecognizer.decode(imageBase64.replace("data:image/jpeg;base64,",""),{codeTypes:['ean13','qr']});
    //     alert(result);
    //   }


      showQRCode = () => {
     
        this.setState({ show: true});
     
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
     

    render(){      
    
        const { navigation } = this.props;

      

        return (
            <View>
                 <LinearGradient style={{ alignItems:'center'}} 
                         colors={['#faf4de', '#b7c4a1']} start={[0.4, 0]} end={[0.3, 1]}>

            <View  style={{
                zIndex: this.state.show ? -1 : 1,
                opacity: this.state.show ? 0.3: 1,
                position:'relative',
                top:80,
                width:width,

                }}>


                <TextInput
                style={styles.input}
                placeholder="How to call you"
                placeholderTextColor='#778956'
                onChangeText={name => {
                    this.setState({name});
                }}
                value={this.state.name}
                />

      <View style={styles.button}>
        <View style={styles.click}> 
                <TouchableOpacity
                onPress={() => navigation.navigate("Chat",{name:this.state.name})}>
                
                <Text style={styles.text}>Chat</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.click}>
                <TouchableOpacity onPress={() =>this.showQRCode()}>
                
                <Text style={styles.text}>WeChat</Text>
                </TouchableOpacity>
        </View>
    </View>
       
        <Image source={require('../images/chatting.png')}  resizeMode="contain" style={[styles.image, {top:100, position:'relative'}]}></Image>
   
                </View>

                


                <Animated.View
                  style={[styles.modalBox, {
                  transform: [{
                  translateY: this.state.offset.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, 0]
                }),
              }]
                        }]}>

                <TouchableOpacity  style={{alignItems:'flex-end', margin:20}}  onPress={() =>this.defaultHide()} >
                  <Ionicons name="md-close-circle" size={28} color="#faf4de" />
                </TouchableOpacity>

                 <View style={{ margin:45,
                                          shadowColor: "#778956",
                                          shadowOpacity: 0.3,
                                          shadowRadius: 6,
                                          shadowOffset: {
                                            height: 10,
                                            width: 10
                                          },   }}>
                
                
                 <Image source={require('../images/qr.jpeg')}  resizeMode="cover" style={styles.image}></Image>
            
                 </View>

                 <Text style={{fontSize:20, fontWeight:'900', alignSelf:'center', marginTop:30, color:'#faf4de'}}>微信号：2551175757</Text>
                

                 </Animated.View> 
                
                 </LinearGradient>
        
            </View>
            );
    }

   
  }



  const styles = StyleSheet.create({

  
    modalBox: {
      width: width,
      backgroundColor: '#b7c4a1',
      position: 'relative',
      height: '100%',
      top:-240,
      zIndex: 0,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    image:{
        width: 280, 
        height:280,
        alignSelf:'center',
        shadowColor: "#778956",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: {
          height: 10,
          width: 10
        },   
    },
    input:{
        width: width-18,
        height: 35, 
        alignSelf:'center',
        borderRadius: 5,
        borderBottomWidth:1.5,
        borderBottomColor:'#778956',
        color: '#faf4de',
      
    },
    button:{
       flexDirection:'row',
       justifyContent:'space-around',
       marginTop:30,
    },
    click:{
        backgroundColor:'#778956',
        padding:10,
        paddingHorizontal:50,
        borderRadius:6,
        shadowColor: "#72775c",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 0,
        width: 0
            },  
    },
    text:{
        fontSize:15,
        color:'#faf4de'
    }
})