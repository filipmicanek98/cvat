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
import LoginForm, { LoginData } from './login-form';

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
                            <Col style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} span={12}><Text>picture</Text></Col>

                        </Row>
                    </Card>
                </Row>
            </Content>
            <FooterDrawer />
        </Layout>
    );
}

export default withRouter(LoginPageComponent);
