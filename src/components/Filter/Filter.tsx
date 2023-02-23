import React from "react";
import style from "./Filter.module.scss"
import {Button, DatePicker, Form, Input, InputNumber, Space} from "antd";
import dayjs from 'dayjs'

export type FormValuesType = {
	location: string
	date: any
	days: number
}

export const Filter:React.FC = () => {

	const dateFormat = 'DD.MM.YYYY'
	const Search = (values:FormValuesType) => {

	}
  return(
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
						colon={false}>
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
						<DatePicker style={{width:'100%'}} format={dateFormat}/>
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
						initialValue={1}>
						<InputNumber controls={false} style={{width:'100%'}} />
					</Form.Item>
				</Space>
				<Space direction="vertical"
							 style={{
								 width: '100%',
							 }}>
					<Form.Item>
						<div className={'btn'}>
							<Button block htmlType="submit">Найти</Button>
						</div>
					</Form.Item>
				</Space>
			</Form>
		</div>
	)
}