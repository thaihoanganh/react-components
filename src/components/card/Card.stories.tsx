import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from 'components/card/Card';

export default {
    title: 'Card',
    component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    style: {
        width: 200,
    },
    title: 'Title Card',
    children: 'Button Content',
};

export const CardImage = Template.bind({});
CardImage.args = {
    style: {
        width: 200,
    },
    title: 'Title Card',
    image: 'https://picsum.photos/200/300?grayscale',
    children: 'Button Content',
};
