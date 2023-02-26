import React from "react";
import style from "./Login.module.scss"
import {Back} from "../../common/Back/Back";
import {Form, Space, Input, Button} from "antd";
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/auth/authSlice";


export const Login: React.FC = () => {
	const dispatch = useDispatch();

	const onLogin = () => {
		dispatch(setAuth(true));
	}

	return (
		<>
			<Back/>
			<div className={style.content}>
				<div className={style.content__blur}></div>
				<div className={style.content__form}>
					<p className={style.content__title}>Simple Hotel Check</p>
					<Form
						name={'auth'}
						autoComplete="off"
						layout="vertical"
						onFinish={onLogin}
					>
						<Space direction="vertical"
									 style={{
										 width: '100%',
									 }}>
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
							</Form.Item></Space>
						<Space direction="vertical"
									 style={{
										 width: '100%',
									 }}>
							<Form.Item
								label={'Пароль'}
								name={'password'}
								colon={false}
								rules={[
									{min: 8, message: 'Не менее 8 символов'},
									{
										pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:"\\/?>.<,-]+$/i),
										message: 'Не правильный формат'
									}
								]}>
								<Input.Password/>
							</Form.Item>
						</Space>
						<Space direction="vertical"
									 style={{
										 width: '100%',
									 }}>
							<Form.Item>
								<div className={'btn'}>
									<Button type={'text'} block htmlType="submit">Войти</Button>
								</div>
							</Form.Item>
						</Space>
					</Form>
				</div>
			</div>
		</>
	)
}