// Copyright (C) 2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import { EyeFilled } from '@ant-design/icons';

export interface LoginData {
    username: string;
    password: string;
}

interface Props {
    fetching: boolean;
    onSubmit(loginData: LoginData): void;
}

function LoginFormComponent(props: Props): JSX.Element {
    const { fetching, onSubmit } = props;
    return (
        <Form layout='vertical' onFinish={onSubmit} className='login-form'>
            <Form.Item
                hasFeedback
                requiredMark='optional'
                name='username'
                label='Username'
                rules={[
                    {
                        required: true,
                        message: 'Please specify a username',
                    },
                ]}
            >
                <Input autoComplete='username' style={{ height: 40, borderRadius: 4 }} placeholder='Placeholder' />
            </Form.Item>

            <Form.Item
                hasFeedback
                requiredMark='optional'
                label='Password'
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Please specify a password',
                    },
                ]}
            >
                <Input
                    autoComplete='current-password'
                    suffix={<EyeFilled style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                    style={{ height: 40, borderRadius: 4 }}
                    placeholder='Placeholder'
                    type='password'
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary'
                    loading={fetching}
                    disabled={fetching}
                    style={{
                        width: '100%',
                        borderRadius: 4,
                        marginTop: 10,
                        height: 40,
                        fontWeight: 'bold',
                    }}
                    htmlType='submit'
                    className='login-form-button'
                >
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}

export default React.memo(LoginFormComponent);
