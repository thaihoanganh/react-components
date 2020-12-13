import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import List from './List';
import ListItem from './ListItem';

export default {
    title: 'List',
    component: List,
} as Meta;

export const Default = () => {
    return (
        <List>
            <ListItem>List Item 1</ListItem>
            <ListItem>List Item 2</ListItem>
            <ListItem>List Item 3</ListItem>
            <ListItem>List Item 4</ListItem>
            <ListItem>List Item 5</ListItem>
        </List>
    );
};
