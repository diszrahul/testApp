/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const companies = [
  {id: 1, name: 'Amazon', location: 'Seattle'},
  {id: 2, name: 'Apple', location: 'Cupertino'},
  {id: 3, name: 'Facebook', location: 'Menlo Park'},
  {id: 4, name: 'Google', location: 'Mountain View'},
  {id: 5, name: 'Leeroy', location: 'Sundsvall'},
  {id: 6, name: 'Tesla', location: 'Palo Alto'},
  {id: 7, name: 'Revolut', location: 'London'},
  {id: 8, name: 'Microsoft', location: 'Redmond'}
];

function showSomething(){
  alert('hi');
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <FlatList
                data={companies}
                showsVerticalScrollIndicator={false}
                initialNumToRender={1000}
                // getItemLayout
                keyExtractor={(item,index) => item.id.toString()}
                renderItem={({ item }) => (
                <View><TouchableOpacity onPress={this.showSomething.bind(this)}>
                  <Text>{item.name} Location {item.location} </Text>
                  </TouchableOpacity>
                  </View>
                )} 
        />
      </SafeAreaView>
    </>
  );
};

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

export default App;
