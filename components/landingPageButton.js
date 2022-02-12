import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    // button background
    container: {
        marginTop:20,
        width:wp('60%'),
        height:hp('8%'),  
        borderRadius:50,        
        backgroundColor: '#f44336',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 6,
    },
    button: {
        flex: 1,
        color: '#fff',
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
      },
  });

export default  LandingPageButton=(props)=>{
    
        return (
            <View style={styles.container}>
              <Text style={styles.button}>{props.buttonText}</Text>
            </View>
          );
        
};
