import React from "react";
import style from "./Back.module.scss";
import back from "../../assets/images/back.png";

export const Back:React.FC = () => {
	return(
		<>
			<div className={style.background}>
				<img className={style.background__image} src={back} alt={"background"}/>
			</div>
		</>
	)
}