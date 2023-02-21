import React from "react";
import style from "./Login.module.scss"
import {Back} from "../../common/Back/Back";
import {Form,Input,Button} from "antd";

export const Login:React.FC = () => {
	return(
		<>
		<Back/>
		<div className={style.content}>
			<div className={style.content__blur}></div>
			<div className={style.content__form}>
				<p className={style.content__title}>Simple Hotel Check</p>
				<Form
				name={'auth'}
				autoComplete="off"
				layout={'vertical'}>
					<Form.Item
					label={'Логин'}
					name={'login'}
					colon={false}
					rules={[
						{
							type: 'email',
							message: 'Не правильный формат',
						},
					]}>
						<Input/>
					</Form.Item>
					<Form.Item
						label={'Пароль'}
						name={'password'}
						colon={false}
						rules={[
							{
								message: 'Не верный пароль',
							},
						]}>
						<Input.Password/>
					</Form.Item>
					<Form.Item>
						<Button>Войти</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
		</>
	)
}