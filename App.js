/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './store';

function showSomething(){
  alert('hi');
}

// onChangeText=(text)=>{
//    debugger
  
// }

// function filter(){
//   let newData = Object.assign([], companies);
//     newData = newData.filter((item) => {
//       console.log(item);
//       // return item.name.indexOf(text.toLowerCase()) > -1;
//     });
//     companies=Object.assign([], newData);
// }

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchString:'',
      companies : [
        {id: 1, name: 'Amazon', location: 'Seattle'},
        {id: 2, name: 'Apple', location: 'Cupertino'},
        {id: 3, name: 'Facebook', location: 'Menlo Park'},
        {id: 4, name: 'Google', location: 'Mountain View'},
        {id: 5, name: 'Leeroy', location: 'Sundsvall'},
        {id: 6, name: 'Tesla', location: 'Palo Alto'},
        {id: 7, name: 'Revolut', location: 'London'},
        {id: 8, name: 'Microsoft', location: 'Redmond'}
      ],
    }
  }

  render(){
  return (
    <Provider store={store}>
      <SafeAreaView>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text)=>{
        this.setState({
          searchString:text,
        },function(){
          let newData = Object.assign([], this.state.companies);
          newData = newData.filter((item) => {
            return item.name.indexOf(text) > -1;
          });
          this.setState({
            companies:newData,
          });
        });
      }}
      value={this.state.searchString}/>
      <FlatList
                data={this.state.companies}
                showsVerticalScrollIndicator={false}
                initialNumToRender={1000}
                // getItemLayout
                keyExtractor={(item,index) => item.id.toString()}
                renderItem={({ item }) => (
                <View><TouchableOpacity onPress={()=>{this.showSomething()}}>
                  <Text>{item.name} Location {item.location} </Text>
                  </TouchableOpacity>
                  </View>
                )} 
        />
      </SafeAreaView>
      </Provider>
  );
                }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
