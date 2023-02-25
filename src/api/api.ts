import axios from "axios";

export const fetchHotels = (cityName:string,checkIn:string,checkOut:string) => {
	return(
		axios(`http://engine.hotellook.com/api/v2/cache.json?location=${cityName}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`))
}