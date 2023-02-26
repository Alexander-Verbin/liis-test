import React from "react";
import style from "./Hotels.module.scss"
import {Hotel} from "./Hotel/Hotel";
import {useSelector} from "react-redux";
import {getHotels} from "../../store/hotels/hotelsSlice";
export const Hotels = () => {
	const Hotels = useSelector(getHotels)
  return(
		<div className={style.hotels}>
			{Hotels.length
				? Hotels.map(hotel => <Hotel hotel={hotel} key={hotel.hotelId}/>)
				: <p>Ничего не найденно</p>
			}
		</div>
	)
}