// Copyright (C) 2022 Intel Corporation
//
// SPDX-License-Identifier: MIT
import React, { ComponentProps } from 'react';
import { Image } from 'antd';
import { CompositionImage, ImageProps } from 'antd/lib/image';

export type Picture = ComponentProps<CompositionImage<ImageProps>>;

const PictureWrapper:React.FC<Picture> = ({ ...props }): React.ReactElement => (
    <Image preview={false} {...props} />
);

export default PictureWrapper;
