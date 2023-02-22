import React from "react";
import style from "./Header.module.scss"
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/auth/authSlice";
import logout from "../../assets/svg/logout.svg"
export const Header:React.FC = () => {
	const dispatch = useDispatch()
  return(
		<header className={style.header}>
			<h1 className={style.header__logo}>Simple Hotel Check</h1>
			<div className={style.header__logout}>
				<button type={"button"} className={style.button} onClick={()=> dispatch(setAuth(false))}>
					<span className={style.button__text}>Выйти</span>
					<img src={logout} alt="выход" className={style.button__image}/>
				</button>
			</div>
		</header>
	)
}