import React from "react";
import style from "./Hotel.module.scss"
import icon from "../../../assets/svg/icon.svg"
import fav from "../../../assets/svg/addfav.svg"
import {useDispatch, useSelector} from "react-redux";
import {getFilterCheckIn, getFilterDays} from "../../../store/filter/filterSlice";
import {initialStateHotelsType} from "../../../store/hotels/hotelsSlice";
import {setFavorites} from "../../../store/favorites/favoritesSlice";

type Props = {
	hotel: initialStateHotelsType
}
export const Hotel = ({hotel}:Props) => {
	const date = useSelector(getFilterCheckIn)
	const days = useSelector(getFilterDays)
	const dispatch = useDispatch()
	const addFav = ({hotel}:Props) =>{
		 dispatch(setFavorites([hotel]))
	}
	return (
		<div className={style.wrapper}>
			<div className={style.right}>
				<img className={style.img} src={icon} alt="icon"/>
				<div className={style.info}>
					<p className={style.info__name}>{hotel.hotelName}</p>
					<div className={style.info__info}>
						<p className={style.info__text}>{date}</p>
						<p className={style.info__text}>{days}
							<span>
								{(days === 1)
									? "День"
									: (days <= 4)
									? "Дня"
									: (days > 4)
									? "Дней"
									: ""
								}
							</span>
						</p>
					</div>
					<div className={style.info__stars}>
						Звёзды: {hotel.stars}
					</div>
				</div>
			</div>
			<div className={"left"}>
				<div className={style.fav}>
					<button type={"button"} onClick={()=>addFav({hotel})}  className={style.fav__btn}>
						<img src={fav} alt="fav"/>
					</button>
				</div>
				<div className={style.price}>
					<p className={style.price__text}>Price:</p>
					<p className={style.price__current}>{Math.round(hotel.priceFrom)}&#8381;</p>
				</div>
			</div>
		</div>
	)
}