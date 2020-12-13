import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Alert, { AlertProps } from 'components/alert/Alert';

export default {
    title: 'Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    closable: true,
    children: 'Alert',
};
