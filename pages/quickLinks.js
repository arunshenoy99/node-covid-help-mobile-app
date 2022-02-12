import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LandingPageButton from '../components/landingPageButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class quickLinksHome extends React.Component{
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
    
});
