import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import style from './style.module.css';
import logo from './logo.jpg';

export const AuthPage: FC = () => {

    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string|number>('');

    const submitHeandler = () => {
        if(login != '' && pass != ''){
        }else{
            message.error('Не все поля заполнены');
        }
    }

    return (
        <Row justify="center" align="middle" className={style.authMain}>
            <Col  lg={6} className={style.authWrapper}>
                <Row justify="center">
                    <Col className={style.logo}>
                        <img src={logo} alt="logo" height="100px" className={style.logo}></img>
                    </Col>
                </Row>
                <Form layout="vertical">
                    <Form.Item
                        label="E-mail"
                        tooltip={{ title: 'Введите почту', icon: <MailOutlined /> }}
                    >
                        <Input placeholder="Введите почту" value={login} onChange={e => setLogin(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Пароль">
                        <Input placeholder="Введите пароль" value={pass} onChange={e => setPass(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button  block onClick={submitHeandler}>Войти</Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}