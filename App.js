import React from 'react';
import {Alert} from  "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "abd4e9374075987c1f09f64ab797ad26";

export default class extends React.Component {
  state = {
    isLoading:true,
  };
  getWeather = async(lat,lon) => {
    const { data:{main:{temp},weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    );

    this.setState({ 
      isLoading : false ,
      condition:weather[0].main, 
      temp : temp
    });
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords : {latitude,longitude} } = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      this.getWeather(latitude,longitude);
    }
    catch(error){
      Alert.alert("Can't find you.","So sad");
    }
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading , temp, condition } = this.state;

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}