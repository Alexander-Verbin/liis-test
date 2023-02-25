import React from "react";
import img from "../../assets/svg/preloader.svg"
import style from "./Preloader.module.scss"

export const Preloader:React.FC = () => {
  return(
		<div className={style.wrapper}>
			<img src={img} alt="fetching" className={style.img}/>
		</div>
	)
}