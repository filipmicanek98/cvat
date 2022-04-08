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
import satcen from '../../assets/satcen.png';

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
                <PictureWrapper src={satcen} />
            </Header>
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row justify='center' align='middle'>
                    <Card
                        style={{
                            padding: 40,
                            width: 850,
                            height: 500,
                            borderRadius: 15,
                            boxShadow: '0px 1px 3px rgba(0,1,1,0.1)',
                        }}
                    >
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col>
                                        <Row style={{ marginBottom: 15 }}>
                                            <Text style={{ fontSize: 24, color: 'blue' }}> Annotation Software </Text>
                                            <Text> Log in to your Annotation Software account</Text>
                                        </Row>

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
                                                        <Link to='/auth/password/reset'>Forgot your password?</Link>
                                                    </Text>
                                                </Col>
                                            </Row>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
                                span={12}
                            />
                        </Row>
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
                SatCen 2022 © All rights reserved |
                {' '}
                <a href='https://www.satcen.europa.eu/'> www.satcen.europa.eu</a>
            </Footer>
            <FooterDrawer />
        </Layout>
    );
}

export default withRouter(LoginPageComponent);
