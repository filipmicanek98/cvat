// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd/lib/grid';
import Layout from 'antd/lib/layout';
import FooterDrawer from 'components/login-page/intel-footer-drawer';
import { Card } from 'antd';
import { Footer, Header } from 'antd/lib/layout/layout';
import PictureWrapper from 'pictureWrapper';
import LoginForm, { LoginData } from './login-form';
import satcen from '../../assets/login-page-satcen.png';
import croas from '../../assets/login-page-croas.png';
import disclaimer from '../../assets/login-page-eu-disclaimer.png';

interface LoginPageComponentProps {
    fetching: boolean;
    renderResetPassword: boolean;
    onLogin: (username: string, password: string) => void;
}

function LoginPageComponent(props: LoginPageComponentProps & RouteComponentProps): JSX.Element {
    const { Content } = Layout;

    const { fetching, onLogin, renderResetPassword } = props;

    return (
        <Layout>
            <Header style={{ backgroundColor: 'white' }}>
                <PictureWrapper src={satcen} style={{ height: 45, paddingLeft: 200 }} />
            </Header>
            <Content className='background' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row justify='center' align='middle'>
                    <Card
                        style={{
                            padding: 10,
                            width: 600,
                            height: 630,
                            borderRadius: 15,
                            boxShadow: '0px 1px 3px rgba(0,1,1,0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Col
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: 570,
                                width: 450,
                            }}
                        >
                            <PictureWrapper src={croas} style={{ height: 200, marginBottom: 30 }} />

                            <LoginForm
                                fetching={fetching}
                                onSubmit={(loginData: LoginData): void => {
                                    onLogin(loginData.username, loginData.password);
                                }}
                            />

                            {renderResetPassword && (
                                <Row justify='start' align='top'>
                                    <Col>
                                        <Text strong>
                                            <Link to='/auth/password/reset' style={{ color: '#1a3765' }}>
                                                Forgot password?
                                            </Link>
                                        </Text>
                                    </Col>
                                </Row>
                            )}
                            <PictureWrapper src={disclaimer} style={{ paddingTop: 40 }} />
                        </Col>
                    </Card>
                </Row>
            </Content>
            <Footer
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
            >
                SatCen 2022 © All rights reserved | <a href='https://www.satcen.europa.eu/'> www.satcen.europa.eu</a>
            </Footer>
            <FooterDrawer />
        </Layout>
    );
}

export default withRouter(LoginPageComponent);
