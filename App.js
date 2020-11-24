import React,{useState, useEffect} from 'react';
import Loading from "./components/Loading";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios"
import {API_KEY} from './components/Api'
import Weather from "./components/Weather";

const App = () => {

  const [isLoading, setIsLoading] =useState(true)
  const [temp, setTemp] = useState('')

  useEffect(()=>{
    getLocation()
  },[])

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      setIsLoading(false);
    } catch(error) {
      Alert.alert("위치를 알수 없습니다.", "이런...")
    }
  }

  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setIsLoading(false)
    setTemp(data.main.temp)
    console.log(data)
  }

  return (
       isLoading ? <Loading/> : <Weather temp={Math.round(temp)}/>
  );
}

export default App;
