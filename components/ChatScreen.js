import React, { Component } from 'react'
import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {GiftedChat} from "react-native-gifted-chat"
import Fire from "../components/Fire"

export default class ChatScreen extends Component {

    // state = {
    //     messages: [],
    //   }
    
    //   componentDidMount() {
    //     this.setState({
    //       messages: [
    //         {
    //           _id: 1,
    //           text: 'Hello developer',
    //           createdAt: new Date(),
    //           user: {
    //             _id: 2,
    //             name: 'React Native',
    //             avatar: 'https://placeimg.com/140/140/any',
    //           },
    //         },
    //       ],
    //     })
    //   }
    
    //   onSend(messages = []) {
    //     this.setState(previousState => ({
    //       messages: GiftedChat.append(previousState.messages, messages),
    //     }))
    //   }
    
    //   render() {
    //     return (
    //       <GiftedChat
    //         messages={this.state.messages}
    //         onSend={messages => this.onSend(messages)}
    //         user={{
    //           _id: 1,
    //         }}
    //       />
    //     )
    //   }








    state = {
       messages:[],
    }

    get user(){

        return{
            _id: Fire.uid,
            // name: this.props.route.params.name,
        };
    }
    

    componentDidMount(){
        Fire.get(message =>
            this.setState(previous =>({
                messages: GiftedChat.append(previous.messages, message)
            }))
            )
    }

    componentWillUnmount(){
        Fire.off()
    }

    render() {
       const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>

       if(Platform.OS ==="android"){
           return(
               <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
               {chat}
               </KeyboardAvoidingView>
           );
       }

       return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }
}
