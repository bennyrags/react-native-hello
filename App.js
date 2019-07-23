import React from 'react';
import { StyleSheet, Text, Image, View, h1 } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello everyone!</Text>
      <Image
          source={{uri: 'https://pbs.twimg.com/profile_images/611991486586982400/NJzvusbj.jpg'}}
          style={{width: 200, height: 200}}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'bisque',
    },
});
