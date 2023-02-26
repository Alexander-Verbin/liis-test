import React from "react";
import style from "./Hotels.module.scss"
import {Hotel} from "./Hotel/Hotel";
import {useSelector} from "react-redux";
import {getFilterCheckIn} from "../../store/filter/filterSlice";
import {Preloader} from "../../common/Preloader/Preloader";
import {getHotels} from "../../store/hotels/hotelsSlice";
export const Hotels = () => {
	const date = useSelector(getFilterCheckIn)
	const Hotels = useSelector(getHotels)
	const HotelItem = Hotels.map(hotel => <Hotel key={hotel.hotelId}/>)
  return(
		<div className={style.hotels}>
			{date
				? HotelItem
				: <Preloader/>
			}
		</div>
	)
}