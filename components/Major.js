import React from 'react';
import { Button, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity,Animated, Dimensions, TextInput, Alert} from 'react-native';
import mock from '../constants/Mock'
import Detail from './Detail'
import * as Icon from '@expo/vector-icons'


const { width, height } = Dimensions.get("window");


export default class Major extends React.Component{


    
    state={
        subCatogery:[],
        active:"All",
        catogery:{},

        searchFocus: new Animated.Value(0.6),
        searchString: ""
    }

    componentDidMount() {
      
        this.setState({ subCatogery: mock });
      }

    handleTab = tab => {
        // const { catogeries } = this.state;
      if(tab == 'All'){
        const subCatogery = mock;
        this.setState({ active: tab, subCatogery: subCatogery });

       }else{
        const filtered = mock.filter(category =>
            category.tags.includes(tab)
          );
      
          this.setState({ active: tab, subCatogery: filtered });
       }

      
      };

    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
    
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => this.handleTab(tab)}
            style={[styles.tab, isActive ? styles.active : null]}
          >
            <Text size={16} medium gray={!isActive} secondary={isActive}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      };

      onItemClickHandler = (category) =>{

        this.props.navigation.push("Detail",{category});
        this.setState({category: category});
        // this.props.navigator.push({id: category.id});
    
      }
    
      handleSearchFocus(status) {
        Animated.timing(this.state.searchFocus, {
          toValue: status ? 0.8 : 0.6, 
          duration: 150 
        }).start();
      }

      handleSearch = () =>{

        const value = this.state.searchString;
        const subCatogery = mock.filter(item => item.tags.includes(value) || item.title.includes(value))

        if(subCatogery.length !== 0){

          this.setState({subCatogery:subCatogery}) 
       
        }else {
          const subCatogery = mock;
          this.setState({ subCatogery: subCatogery });
          Alert.alert("So sorry, there is no result! You can try to input key word and search again! ")
  
         }
       
      }


      renderSearch() {

        const { searchString, searchFocus } = this.state;
        const isEditing = searchFocus && searchString;
        // const filteredItem = this.

        return (
          <View style={{flexDirection:'row',justifyContent:'space-between', margin:5}}>
            <TextInput
              placeholder="Search"
              placeholderTextColor='grey'
              onFocus={() => this.handleSearchFocus(true)}
              onBlur={() => this.handleSearchFocus(false)}
              onChangeText={text => this.setState({ searchString: text })}
              value={searchString} 
              returnKeyType="search"
              onSubmitEditing={this.handleSearch}            
            />
            {/* <Feather name={isEditing ? null : "search"} size={22} color="grey" /> */}

            
          <TouchableOpacity
              onPress={() => isEditing ? this.setState({ searchString: null }) : null}
           >
            <Icon.FontAwesome
              name={isEditing ? "close" : "search"}
              color='grey'
              size={18}
                        />
           </TouchableOpacity> 
           
             </View>
        );
        
      }
    

    render(){
        // const catogeryList = this.state.catogeries.map(card => < Categories key={card.id} data={card} gotoList={this.gotoList} />)
        
        const { navigation } = this.props;
        const subCatogery = this.state.subCatogery;
        const tabs = ["All","Business", "Media", "Computer","Health","Tourism"];
    
        return(            

        <View style={{flex:1, backgroundColor:"#4f956e"}}>
            <View style={styles.header}>

            <Text style={styles.sentence}>Our school's programs</Text>

            <View style={styles.search}>
            {this.renderSearch()}           
            </View>

            <View style={styles.background}>
               <View style={styles.headers}></View>
            </View>
            
           </View>




        <View style={styles.container}>
            <View 
            style={styles.tabs}>
               {tabs.map(tab => this.renderTab(tab))}
            </View>


            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ paddingVertical:  -30}}
             >
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
            {subCatogery.map(category => (
              <TouchableOpacity
                data={category}
                key={category.id}
                onPress={() => this.onItemClickHandler(category)}
                // onPress={() => navigation.navigate("Detail",{category})}
              >
             <View style={[styles.card, {backgroundColor:'#faf4de'}] } >

             <Image  style={styles.image} source={category.src} resizeMode='contain' />
          
             <Text style={styles.textLine2}>{category.title}</Text>  
             <Text style={styles.textLine1}>{category.year}</Text> 
 

             </View>
              </TouchableOpacity>

            ))}
          </View>
        </ScrollView>
        </View>
        </View>
        )
    }
}





const styles= StyleSheet.create({

  
 background:{
        opacity:0.3,
        width:100,
        height:100,
        borderRadius:500/2,
        backgroundColor:'#ebf4ee',
        position:'relative',
        left:-20,
        top:-30,
        shadowColor: "#073829",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 2
        },
    },
    headers:{
      opacity:0.5,
      width:200,
      height:200,
      borderRadius:500/2,
      backgroundColor:'#ebf4ee',
      position:'relative',
      left:260,
      top:50,
      shadowColor: "#073829",
      shadowOpacity: 1,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: -2
      },
  },

    header:{
    position:"absolute",
    left:0,
    top:0,
    right:0,
    },
    catogery:{
        marginTop:120,
        height:'100%',
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#ebf4ee',
        shadowColor: "#073829",
        borderRadius:15,
         shadowOpacity: 0.3,
         shadowRadius: 3,
         shadowOffset: {
        height: 0,
        width: 0,  
      },
    },
    sentence:{
    position:'absolute',
    fontSize:20,
    color:'#e6e1cf',
    fontWeight:'900',
    top:95,
    left:width*0.05,
    },


    tab: {
        marginRight: 32,
        paddingBottom: 16
      },
      active: {
        borderBottomColor: '#073829',
        borderBottomWidth: 3,
      },
      tabs: {
        flexDirection:'row',
        borderBottomColor: "#C5CCD6",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 16,
        marginHorizontal: 20,
      },

     
      container:{
        width:'100%',
        flex:1,
        alignSelf: 'center',
        marginTop:140,
        borderColor: "#e6e1cf",
        borderRadius:30,
        borderBottomEndRadius:0,
        borderBottomLeftRadius:0,
        backgroundColor:'#e6e1cf',
        },

        card:{
         borderRadius:5,
         width:160,
         height:140,
         marginLeft:10,
         marginRight:10,
         marginTop:50,
         shadowColor: "grey",
         shadowOpacity: 0.5,
         shadowRadius: 5,
         shadowOffset: {
           height: 7,
           width: 5
         },

        },
        textLine1:{
            position:'absolute',
            fontSize:13,
            fontWeight:'200',
            textAlign:'left',
            bottom:18,
            left:8,
        },
        textLine2:{
            position:'relative',
            fontSize:18,
            textAlign:'left',
            bottom:25,
            left: 8,
            color:'#52915A',
            fontWeight:'700',

        },
        image:{
            position:'relative',
            top:-30,
            right:-50,
            width:60,
            height:60,
            alignSelf:'center',
            // borderWidth:1

        },
      
       search:{
        position:'relative',
        top:45,
        width:width*1.8/2, 
        height:28,
        zIndex:1,
        alignSelf:'center',
        borderRadius:20,
        backgroundColor:'#e6e1cf',
        shadowColor: "grey",
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
          height: 6,
          width: 0
        },
       }

        
    
})