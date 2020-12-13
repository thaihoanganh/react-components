import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from 'components/button/Buton';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    children: 'Button Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button Outlined',
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    children: 'Button Text',
    variant: 'text',
};
