import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function Inbox({ navigation }) {
  const [search, onChangeSearch] = React.useState('Search');

  let [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
  });

  /*const conversations = {[
    {
      "name": "Bang Zhu",
      "country": "ch",
      "last_sent": "2h"
    },
    {
      "name": "Kim Nguyen",
      "country": "au",
      "last_sent": "3d"
    },
    {
      "name": "Jon-Paul Smith",
      "country": "fr",
      "last_sent": "5d"
    },
    {
      "name": "Jane Smith",
      "country": "us",
      "last_sent": "11d"
    },
  ]};

  var mydata = JSON.parse(conversations);
  console.log(mydata[0].name);
  console.log(mydata[0].country);
  console.log(mydata[1].name);
  console.log(mydata[1].country);*/

  return (
    <View style={styles.container}>
      <LinearGradient
          // Background Linear Gradient
          colors={['#EFEDE1', '#E4E0C9']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '110%',
          }}
        />
        <View style={{flexDirection: 'row', marginVertical: 6, position: 'absolute', top: 50}}>
          <TextInput
            style={styles.search}
            onChangeText={text => onChangeSearch(text)}
            placeholder="Search"
          />
          <Icon.Button
          name="sort"
          backgroundColor='transparent'
          color= "#404040"
          size={30}
          onPress={() => Alert.alert('Sort by...')}
          />
        </View>
        <LinearGradient
        colors={['rgba(236,25,80,1)', 'rgba(221,63,101,1)']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 30, width: '90%', marginVertical: 10, marginTop: 90}}>
            <TouchableOpacity
           style={styles.register}
           onPress={() => navigation.push('Messages')}>
           <View>
              <Text style={styles.name}>Bang Zhu</Text>
              <Text style={styles.lastMessage}>Last message: 3h ago</Text>
            </View>
            </TouchableOpacity>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  search: {
    height: 36,
    width: 280,
    paddingLeft: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 50,
    paddingLeft: 20,
    marginRight: 20,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: '#404040'
  },
  name: {
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    fontWeight: '700'
  },
  lastMessage: {
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
  },
});