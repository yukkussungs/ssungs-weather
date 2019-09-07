import React from "react";
import { View, Text, StyleSheet,StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName : "cloud-outline",
        gradient:["#D7D2CC","#304352"],
        title:"흐림",
        subTitle:"날씨가 흐리네요.. 이럴때는 기분좋은 음악을 들으면 어때요 ㅎㅎ",
    },
    Mist: {
        iconName : "weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개...",
        subTitle:"전방 주의!! 안개가 많이끼니 걸어다니면서 스마트폰 하지 마세요!",
    },
    Dust: {
        iconName : "weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"황사...ㅠㅠ",
        subTitle:"콜록!콜록! 황사때문에 목이아프니 마스크!!",
    },
    Haze: {
        iconName : "weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개...",
        subTitle:"전방 주의!! 안개가 많이끼니 걸어다니면서 스마트폰 하지 마세요!",
    },
    Atmosphere: {
        iconName : "weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"??",
        subTitle:"??",
    },
    Sunny: {
        iconName : "weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"맑음",
        subTitle:"날씨가 맑네요 ㅎㅎ 당신 마음처럼 ㅋㅋ",
    },
    Snow: {
        iconName : "weather-snowy",
        gradient:["#4DA0B0","#D39D38"],
        title:"눈!!",
        subTitle:"Do you wanna build the snow man~~...okay byeee..",
    },
    Rain: {
        iconName : "weather-rainy",
        gradient:["#4DA0B0","#D39D38"],
        title:"비내림",
        subTitle:"비가 내리네요...오늘은 파전에 막걸리? ㄲ?",
    },
    Drizzle: {
        iconName : "weather-rainy",
        gradient:["#4DA0B0","#D39D38"],
        title:"이슬비",
        subTitle:"오늘은 여우가 시집가나보네요... 하...나는 언제가냐...",
    },
    Thunderstorm: {
        iconName : "weather-lightning-rainy",
        gradient:["#373B44","#4286f4"],
        title:"천둥번개!!",
        subTitle:"지금 천둥번개가 치니 우산!! 꼭 준비하세요!",
    },
}

export default function Weather({temp,condition}) {
    return( 
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle="light-content"/>
              <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        size={86} 
                        name={weatherOptions[condition].iconName} 
                        color="white"
                    />
                    <Text style={styles.text}>{temp}º</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.Title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.SubTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:36,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Title:{
        fontSize:54,
        color:"white",
        fontWeight:"300",
        marginBottom:10,
    },
    SubTitle:{
        fontSize:20,
        fontWeight:"600",
        color:"white"
    },
    textContainer : {
        alignItems : "center"
    }
})