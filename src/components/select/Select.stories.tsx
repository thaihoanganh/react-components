import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Select from './Select';

export default {
    title: 'Select',
    component: Select,
} as Meta;

const options = [
    { value: 'value 1', label: 'option 1' },
    { value: 'value 2', label: 'Option 2' },
    { value: 'value 3', label: 'Option 3' },
    { value: 'value 4', label: 'Option 4' },
    { value: 'value 5', label: 'Option 5' },
];

export const Default = () => {
    return (
        <React.Fragment>
            <Select options={options} placeholder="select" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium
                incidunt optio sed expedita dicta esse at ratione nostrum veniam, sit eos eius fuga
                doloribus unde totam quis aliquid corporis!
            </p>
        </React.Fragment>
    );
};

export const Multi = () => {
    return (
        <React.Fragment>
            <Select options={options} placeholder="select" isMulti />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quia exercitationem!
                Eius quos quod aliquid amet ducimus commodi voluptas accusantium vero cupiditate
                veniam earum at modi illum praesentium, sunt quo!
            </p>
        </React.Fragment>
    );
};
