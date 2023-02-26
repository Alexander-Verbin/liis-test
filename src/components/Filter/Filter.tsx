import React from "react";
import style from "./Filter.module.scss"
import {Button, DatePicker, Form, Input, InputNumber, Space} from "antd";
import dayjs from 'dayjs'
import {useDispatch, useSelector} from "react-redux";
import {getFilterCityName, getFilterDays, setFilterData} from "../../store/filter/filterSlice";
import {fetchHotels} from "../../api/api";
import {initialStateHotelsType, setHotels} from "../../store/hotels/hotelsSlice";

export type FormValuesType = {
	location: string
	date: any
	days: number
}

export const Filter: React.FC = () => {
	const setInitialCity = useSelector(getFilterCityName)
	const dateFormat = 'DD.MM.YYYY'
	const setInitialDays = useSelector(getFilterDays)
	const dispatch = useDispatch()
	const Search = async (values: FormValuesType) => {
		const cityName = String(values.location)
		const checkIn = String(values.date.get('year') + "-" + (values.date.get('month') > 10 ? values.date.get('month') : "0" + values.date.get('month')) + "-" + (values.date.get('date') > 10 ? values.date.get('date') : "0" + values.date.get('date')))
		const checkOutDate = values.date.add(values.days, "days")
		const days = Number(values.days)
		const checkOut = String(checkOutDate.get('year') + "-" + String(checkOutDate.get('month') > 10 ? checkOutDate.get('month') : "0" + checkOutDate.get('month')) + "-" + String(checkOutDate.get('date') > 10 ? checkOutDate.get('date') : "0" + checkOutDate.get('date')))
		dispatch(setFilterData({cityName, checkIn, checkOut,days}))
		await fetchHotels(cityName, checkIn, checkOut).then(data => {
			const hotels = data.data.map(({ hotelName, hotelId, stars, priceFrom }:initialStateHotelsType) => ({
					hotelName,
					hotelId,
					stars,
					priceFrom,
			}))
			dispatch(setHotels(hotels))
		})
	}
	return (
		<div className={style.wrapper}>
			<Form
				name={'filter'}
				autoComplete="off"
				layout="vertical"
				onFinish={Search}
			>
				<Space direction="vertical"
							 style={{
								 width: '100%',
							 }}>
					<Form.Item
						label={'Локация'}
						name={'location'}
						colon={false}
						initialValue={setInitialCity}>
						<Input/>
					</Form.Item></Space>
				<Space direction="vertical"
							 style={{
								 width: '100%',
							 }}>
					<Form.Item
						label={'Дата заселения'}
						name={'date'}
						colon={false}
						initialValue={dayjs()}>
						<DatePicker style={{width: '100%'}} format={dateFormat}/>
					</Form.Item>
				</Space>
				<Space direction="vertical"
							 style={{
								 width: '100%',
							 }}>
					<Form.Item
						label={'Количество дней'}
						name={'days'}
						colon={false}
						initialValue={setInitialDays}>
						<InputNumber controls={false} style={{width: '100%'}}/>
					</Form.Item>
				</Space>
				<Space direction="vertical"
							 style={{
								 width: '100%',
							 }}>
					<Form.Item>
						<div className={'btn'}>
							<Button type={'text'} block htmlType="submit">Найти</Button>
						</div>
					</Form.Item>
				</Space>
			</Form>
		</div>
	)
}