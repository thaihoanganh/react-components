import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Carousel, { CarouselProps } from 'components/carousel/Carousel';

export default {
    title: 'Carousel',
    component: Carousel,
} as Meta;

export const Default: React.FC = () => (
    <Carousel autoplay={true}>
        <img src="https://picsum.photos/200/300?grayscale" alt="" />
        <img src="https://picsum.photos/200/301?grayscale" alt="" />
        <img src="https://picsum.photos/200/302?grayscale" alt="" />
    </Carousel>
);
