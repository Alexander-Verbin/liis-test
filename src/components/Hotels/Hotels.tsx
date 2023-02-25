import React from "react";
import style from "./Hotels.module.scss"
import {Hotel} from "./Hotel/Hotel";
import {useSelector} from "react-redux";
import {getFilterCheckIn} from "../../store/filter/filterSlice";
import {Preloader} from "../../common/Preloader/Preloader";
import {getHotelData} from "../../store/hotel/hotelSlice";
export const Hotels = () => {
	const date = useSelector(getFilterCheckIn)
	const Hotels = useSelector(getHotelData)
	//const HotelItem = hotels.map(hotel => <Hotel/>)
  return(
		<div className={style.hotels}>
			{date
				? <Hotel/>
				: <Preloader/>
			}
		</div>
	)
}