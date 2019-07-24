import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';


export default function App() {
  return (
  <View style={styles.container}>
  <Text style={styles.header}>Hello everyone!</Text>
  
    <View style={styles.middle}>
      <Image
          source={{uri: 'https://pbs.twimg.com/profile_images/611991486586982400/NJzvusbj.jpg'}}
          style={{width: 200, height: 200}}
/>
<View style={styles.button} >
<Button title='This Button Does Nothing'
color="grey" 
accessibilityLabel="Learn more about this grey button"
/>
</View>
</View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:'bisque',

    },
    header: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'grey',
      textAlign:'center',
      justifyContent:'flex-start',
      top:50,
    },
    middle: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
     
    },
    button: {
      width:200,
      top:5,
      //paddingHorizontal:50,
      borderColor:'grey',
      borderWidth: 5,
      
    },
   
});
