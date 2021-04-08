import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat';
import { Header } from 'react-native/Libraries/NewAppScreen';
import strings from '../../constants/lang';

class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hii Raushan',
          createdAt: new Date(Date.UTC(2021, 3, 8, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
        
         
      <GiftedChat
      
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
        
      />
      
      
    );
  }
}
export default Chat;