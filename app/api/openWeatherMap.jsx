import axios from 'axios';

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=3f8cc095a9a3a81c3bd0b86bc7f2d02f&units=metric"

export default {
	getTemp(location){
		let encodedLocation = encodeURIComponent(location)
		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

		return axios.get(requestUrl).then(function(res){ 
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message)
			}	else {
				return res.data.main.temp
			}
		}, function (res) {
			throw new Error(res.data.message)
		})
	}
}

