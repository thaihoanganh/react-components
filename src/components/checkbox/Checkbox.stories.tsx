import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from 'components/checkbox/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    style: {
        width: 200,
    },
    children: 'Button Content',
};
export const Disabled = Template.bind({});
Disabled.args = {
    style: {
        width: 200,
    },
    children: 'Button Content',
    disabled: true,
};
