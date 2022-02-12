import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LandingPageButton from '../components/landingPageButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const get_help="Get Help";
const offer_help="Offer Help";
const quick_links="Quick Links";

export default class landingPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.flag} source={require('../assets/india_flag.png')} />
                <View style={styles.placeholder}>
                    <Text style={styles.header}>SERVICES</Text>
                    <TouchableOpacity>
                        <LandingPageButton buttonText={get_help}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LandingPageButton buttonText={offer_help}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LandingPageButton buttonText={quick_links}/>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
                </View>
                <Text style={styles.footer1}>stay HOME , stay SAFE </Text>
                <Text style={styles.footer2}>wear MASK</Text>
                <Text style={styles.footer3}>Maintain <Text style={styles.spacing} >SOCIAL-DISTANCING</Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flag: {
        height:hp('20%'),
        width:wp('60%'),
        position:'absolute',
        top:40,
    },
    container: {
        flex: 1,
        backgroundColor: '#03a9f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        backgroundColor: '#1c32ad',
        width:wp('80%'),
        height:hp('40%'),
        marginTop:40,  
        borderRadius:20,
        paddingBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingTop:10,
        paddingBottom:15,
        color: '#fff',
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer1: {
        paddingTop:25,
        color: '#fff',
        justifyContent: 'center',
        fontSize:15,
        position: 'absolute',
        bottom: 100,
        letterSpacing:2,
    },
    footer2:{
            paddingTop:25,
            color: '#fff',
            justifyContent: 'center',
            fontSize:15,
            position: 'absolute',
            bottom: 70,
            letterSpacing:2,
    },
    footer3: {
        paddingTop:25,
        color: '#fff',
        justifyContent: 'center',
        fontSize:15,position: 'absolute',
        bottom: 40,
        letterSpacing:2,
    },
    spacing: {
        letterSpacing:4,
    }
});
