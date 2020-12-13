import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Accordion, { AccordionProps } from 'components/accordion/Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    title: 'AccordionProps',
    showArrow: true,
    children: (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis voluptas
            obcaecati necessitatibus consequatur temporibus tempore odit, modi optio consequuntur
            rem assumenda dignissimos distinctio ducimus repellat, eius velit dolorem repellendus?
        </div>
    ),
};
