import React from "react";
import style from "./Content.module.scss"
import one from "../../assets/images/content1.png"
import two from "../../assets/images/content2.png"
import three from "../../assets/images/content3.png"
import {useSelector} from "react-redux";
import {getFilterCheckIn, getFilterCityName} from "../../store/filter/filterSlice";
import arrow from "../../assets/svg/breadcrumb.svg"
import {Hotels} from "../Hotels/Hotels";
export const Content:React.FC = () => {
	const city = useSelector(getFilterCityName)
	const date = useSelector(getFilterCheckIn)
  return(
		<div className={style.content}>
			<div className={style.top}>
				<div className={style.breadcrumbs}>
					<p className={style.breadcrumbs__text}>Отели</p>
					<img src={arrow} alt="arrow"/>
					<p className={style.breadcrumbs__text}>{city}</p>
				</div>
				<div className={style.date}>
					{!date
						? <p className={style.date__text}>Дата засенения не выбрана</p>
						: <p className={style.date__text}>{date}</p>
					}
				</div>
			</div>
			<div className={style.main}>
				<div className={style.main__images}>
						<img src={one} alt="some" className={style.main__image}/>
						<img src={two} alt="some"  className={style.main__image}/>
						<img src={three} alt="some"  className={style.main__image}/>
						<img src={one} alt="some"  className={style.main__image}/>
				</div>
			</div>
			<div className={style.main__hotels}>
				<Hotels/>
			</div>
		</div>
	)
}