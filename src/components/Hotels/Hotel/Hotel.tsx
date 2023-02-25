import React from "react";
import style from "./Hotel.module.scss"
import icon from "../../../assets/svg/icon.svg"
import fav from "../../../assets/svg/addfav.svg"
import {useSelector} from "react-redux";
import {getHotelData} from "../../../store/hotel/hotelSlice";
import {getFilterCheckIn, getFilterDays} from "../../../store/filter/filterSlice";

export const Hotel: React.FC = () => {
	const data = useSelector(getHotelData)
	const date = useSelector(getFilterCheckIn)
	const days = useSelector(getFilterDays)
	return (
		<div className={style.wrapper}>
			<div className={style.right}>
				<img className={style.img} src={icon} alt="icon"/>
				<div className={style.info}>
					<p className={style.info__name}>{data.hotelName}</p>
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
						stars
					</div>
				</div>
			</div>
			<div className={"left"}>
				<div className={style.fav}>
					<button type={"button"} className={style.fav__btn}>
						<img src={fav} alt="fav"/>
					</button>
				</div>
				<div className={style.price}>
					<p className={style.price__text}>Price:</p>
					<p className={style.price__current}>{Math.round(data.priceFrom)}&#8381;</p>
				</div>
			</div>
		</div>
	)
}