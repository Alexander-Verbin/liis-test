import React from "react";
import style from  "./Favorites.module.scss"
import {useSelector} from "react-redux";
import {getFavorites} from "../../store/favorites/favoritesSlice";
import {Favorite} from "./Favorite/Favorite";
export const Favorites = () => {
	const fav = useSelector(getFavorites)
  return(
		<div className={style.wrapper}>
			<p className={style.title}>Избранное</p>
			<div className={style.content}>
				{fav.length
					? fav.map(hotel => <Favorite favorites={hotel} key={hotel.hotelId}/>)
					: <p>Пока нет избранного</p>
				}
			</div>
		</div>
	)
}