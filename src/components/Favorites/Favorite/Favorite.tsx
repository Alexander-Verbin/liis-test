import React from "react";
import style from "./Favorite.module.scss"
import {useSelector} from "react-redux";
import {getFilterCheckIn, getFilterDays} from "../../../store/filter/filterSlice";
import btn from "../../../assets/svg/delFav.svg"
import {initialStateHotelsType} from "../../../store/hotels/hotelsSlice";

type Props = {
	favorites: initialStateHotelsType
}
export const Favorite = ({favorites}:Props) => {
	const date = useSelector(getFilterCheckIn)
	const days = useSelector(getFilterDays)
  return(
		<div className={style.wrapper}>
			<div className={style.block}>
				<div className={style.info}>
					<p className={style.title}>{favorites.hotelName}</p>
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
				</div>
				<div className={style.button}>
					<button type={"button"} className={style.button__btn}>
						<img src={btn} alt="btn"/>
					</button>
				</div>
			</div>
			<div className={style.block}>
				<div className={style.stars}>Звёзды: {favorites.stars}</div>
				<div className={style.price}>
					<p className={style.price__text}>Price:</p>
					<p className={style.price__current}>{Math.round(favorites.priceFrom)}&#8381;</p>
				</div>
			</div>
		</div>
	)
}