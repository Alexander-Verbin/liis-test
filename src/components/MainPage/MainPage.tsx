import React from "react";
import {Header} from "../Header/Header";
import style from "./MainPage.module.scss"
import {Filter} from "../Filter/Filter";

export const MainPage:React.FC = () => {
  return(
		<div className={style.wrapper}>
			<Header/>
			<div className={style.content}>
				<div className={style.content__left}>
					<Filter/>
				</div>
			</div>
		</div>
	)
}