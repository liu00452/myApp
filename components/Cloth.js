import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView,TouchableOpacity, FlatList,Dimensions, Animated,Easing} from 'react-native';
import theme from '../constants/Theme'
import { Ionicons } from '@expo/vector-icons'; 
import { BlurView } from 'expo-blur';


const { width, height } = Dimensions.get("window");

export default class Cloth extends React.Component{
  
                state={
                        showItems:[],
                        item:[],
                        malls:[],
                        show:false,
                        // transparentIsClick: true ,
                        // modalBoxHeight: 300,
                        offset: new Animated.Value(0),
                        translateY: -1000,

                
        }
       

        componentDidMount() {
      
                this.setState({ malls: theme });

                const product = theme.filter(item => item.title == this.props.route.params.item.title )
                this.setState({showItems:product})
              }

renderGallery =(mall) => {

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={mall.image}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="cover"
            style={{ width: width, height: height / 2.8}}
          />
        )}
      />
    );
  } ;
  


    
  showIntroduction = (mall) => {
     
   this.setState({ show: true, item: mall});

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
        
        const mall = this.state.item;
        const showItems = this.state.showItems;
        
        return(
              <View>

           <ScrollView  style={{
                   zIndex: this.state.show ? -1 : 1,
                   opacity: this.state.show ? 0.3: 1,
                   backgroundColor:'#e6e1cf',

                   }}>

           {showItems.map(mall => (
                    
                     <View  data={mall}  key={mall.id} style={styles.card}>
                        <ScrollView 
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                        scrollEventThrottle={200}
                        pagingEnabled
                        >
                        {this.renderGallery(mall)}
                        </ScrollView> 
                       <View style={{marginVertical:15}}>
                        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">{mall.instruction}</Text>
        
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                        <Text style={{color:'black', fontWeight:'800'}}>{mall.storeName}</Text>
                        <TouchableOpacity   onPress={() =>this.showIntroduction(mall)} >
        
                        <View style={styles.button}>
                        <BlurView intensity={5}>
                         <Text style={{color:'#faf4de', fontWeight:'700', padding:5}}>  View More </Text> 
                         </BlurView> 
                         </View>
        
                        </TouchableOpacity>
                        </View>
        
                        </View>
        
                   </View>

               
                                   
                ))}
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
                <Text style={{fontSize:25, fontWeight:'600', color:'#faf4de'}}>{mall.storeName}</Text>
                <TouchableOpacity   onPress={() =>this.defaultHide(mall)} >
                  <Ionicons name="md-close-circle" size={28} color="#faf4de" />
                </TouchableOpacity>
                </View>
                  <Text style={{fontSize:14, fontWeight:'300', color:'#faf4de', textAlign:'justify' }}>{mall.instruction}</Text>
               {/* <View>
                       {image.map(index => <Image source={index} key={index}/>)}
               </View> */}

                  </View>


                  <View style={styles.background}>
               <View style={styles.headers}></View>
                </View>

                 </Animated.ScrollView> 

                

                 </View>       
           
        )

}
        
}




const styles = StyleSheet.create({

  
        modalBox: {
          width: width,
          backgroundColor: '#4f956e',
          position: 'absolute',
          height: '70%',
          bottom:0,
          zIndex: 0,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
        },
        text:{
            color:'#073829',
          fontWeight:'300',
          fontSize:14,
          lineHeight:28,
          paddingBottom:20,
        },
        card:{
                marginBottom:25,
                backgroundColor:'#faf4de',
                shadowColor: "grey",
                shadowOpacity: 0.3,
                shadowRadius: 2,
                shadowOffset: {
                  height: 3,
                  width: 0
                },
                borderBottomEndRadius:10,
                borderBottomLeftRadius:10,
        },
        button:{
                backgroundColor:'#257431',
                borderRadius:20,
                alignItems:'center',
                shadowColor: "grey",
                shadowOpacity: 0.6,
                shadowRadius: 1,
                shadowOffset: {
                  height: 3,
                  width: 1
                },
        },
        headers:{
                opacity:0.1,
                width:180,
                height:180,
                borderRadius:500/2,
                backgroundColor:'#ebf4ee',
                position:'relative',
                left:220,
                top:10,
                shadowColor: "#073829",
                shadowOpacity: 0.6,
                shadowRadius: 1,
                shadowOffset: {
                  height: 1,
                  width: -2
                },
            },
       
            
 })
      
