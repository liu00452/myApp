import React from 'react';
import { Text, View, Image,   Animated, StyleSheet, Dimensions,  ScrollView, TouchableOpacity,} from 'react-native';
// import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';
import ThirdRoute from './ThirdRoute';
import Cloth from '../images/cloth.png';
import Food from '../images/food.png';
import House from '../images/house.jpg';
import Travel from '../images/travel.jpg';

import Show from '../images/show1.png';
import Hire from '../images/hire.jpg';
import Ceremony from '../images/school.png';
import School from '../images/ceremony.png';

const { width } = Dimensions.get("window");

export default class Home extends React.Component{



      state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree:0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateXTabThree: new Animated.Value(width),
        translateY: -1000,

        ottwawalife:[
            {
                id: 0,
                title:'衣',
                src: Cloth,
            },
            {
                id: 1,
                title:'食',
                src: Food,
            },
            {
                id: 2,
                title:'住',
                src: House,
            },
            {
                id: 3,
                title:'行',
                src: Travel,
            },
            
        ],
    
        schoolLife:[
        {
            id: 0,
            title:'同学们的作品展出',
            src: Show, 
        },
        {
            id: 1,
            title:'企业招聘现场',
            src: Hire, 
        },
        {
            id: 2,
            title:'丰富多彩的校园活动',
            src: School, 
        },
        {
            id: 3,
            title:'期待已久的开学/毕业典礼',
            src: Ceremony, 
        },
    ]
    
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,

        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 10
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 10
                }).start()
            ]);
        } else if(active === 1){
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: width,
                    duration: 10
                }).start()
            ]);
        }
        else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: -width,
                    duration: 10
                }).start(),
                Animated.spring(translateXTabThree, {
                    toValue: 0,
                    duration: 10
                }).start()
            ]);
        }
    };
     
    render(){

        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
            translateY
        } = this.state;

        const mainLife = this.state.ottwawalife.map(card => < FirstRoute key={card.id} data={card} />)
        const acLife = this.state.schoolLife.map(card => < SecondRoute key={card.id} data={card} />)


        return (
        <View className='home' > 
          <View style={styles.header}>
            <Image source={require('../images/header.png')}
              resizeMode='cover'
              style={{width:380, height:150}}
              />
                <Text style={styles.sentence1}>Hello 小明,Welcome To Canada!</Text>
                <Text style={styles.sentence2}>让我们开启一场渥太华之旅, 你 准备好了吗？</Text>
            </View>

            <View style={styles.style1}>
            {/* <View style={styles.style1}>   */}
                 <Animated.View
                            style={{
                                position: "absolute",
                                width: "34%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#52915A",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />

                        <TouchableOpacity
                            style={styles.style4}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text style={{
                                    color: active === 0 ? "#e1efeb" : "#073829",
                                    fontWeight: active === 0 ? "900" : "300",
                                    fontSize: active === 0 ? 18 : 14,
                                }}>
                                渥太华生活
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.style4} 
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text style={{
                                    color: active === 1 ? "#e1efeb" : "#073829",
                                    fontWeight: active === 1 ? "900" : "300",
                                    fontSize: active === 1 ? 18 : 14,
                                }}>
                                校园生活
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.style4}
                            onLayout={event =>
                                this.setState({
                                    xTabThree: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 2 }, () =>
                                    this.handleSlide(xTabThree)
                                )
                            }
                        >
                            <Text style={{
                                    color: active === 2 ? "#e1efeb" : "#073829",
                                    fontWeight: active === 2 ? "900" : "300",
                                    fontSize: active === 2 ? 18 : 14,
                                }}>
                                相关专业推荐
                            </Text>
                        </TouchableOpacity>
                    </View>
        
                    <ScrollView ref={(ref) => this.ScrollView =ref} >
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height,
                                   
                                   
                                })
                            }
                        >
             
                       {mainLife}
    
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            {acLife}
                          
                        </Animated.View>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabThree
                                    },
                                    {
                                        translateY: -translateY*2
                                    }
                                ]
                            }}
                        >
                          <Text>hhhhhhhh</Text>
                          
                        </Animated.View>
                    </ScrollView>
             
            </View>

       
            );
    }
  
  }

  const styles= StyleSheet.create({

  

    header:{
    position:"absolute",
    left:0,
    top:0,
    },
    sentence1: {
    position:'absolute',
    fontSize:20,
    color:'white',
    fontWeight:'900',
    top:40,
  },
    sentence2:{
    position:'absolute',
    fontSize:12,
    color:'white',
    fontWeight:'500',
    top:90,
    },


    style1:{
        // flex:1,
        width: '90%',
         marginLeft:19,
      marginTop:140,
      flexDirection: "row",
      justifyContent: "space-between",
      height: 46,
      backgroundColor:'#e1efeb',
      shadowColor: "#073829",
      shadowOpacity: 0.8,
      shadowRadius: 3,
      shadowOffset: {
        height: 1,
        width: 1
      },
     
     
    },
//   style2:{
//       position:'absolute',
//   },
   
    style4:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#073829",
        borderRadius: 1,
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    }

});
