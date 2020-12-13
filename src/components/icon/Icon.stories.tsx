import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Icon, { IconProps } from 'components/icon/Icon';

export default {
    title: 'Icon',
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'home',
};
