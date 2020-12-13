import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from './Radio';

export default {
    title: 'Radio',
    component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Radio',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Radio Disabled',
    disabled: true,
};
