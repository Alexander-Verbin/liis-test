import React from "react";
import style from "./Login.module.scss"
import {Back} from "../../common/Back/Back";

export const Login:React.FC = () => {
	return(
		<>
		<Back/>
		<div className={style.content}>
			<div className={style.content__blur}></div>
			<div className={style.content__form}>
				<p className={style.content__title}>Simple Hotel Check</p>
			</div>
		</div>
		</>
	)
}