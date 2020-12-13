import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Drawer, { DrawerProps } from 'components/drawer/Drawer';
import Button from 'components/button/Buton';

export default {
    title: 'Drawer',
    component: Drawer,
} as Meta;

export const Top = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer
                isOpen={isOpen}
                placement="top"
                title="Drawer title"
                onClose={() => setOpen(false)}
                maskClosable
                closable
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque reiciendis
                dolorem earum, odio ipsum consectetur. Sed aperiam minima omnis est similique libero
                debitis necessitatibus illum neque, totam, dicta id?
            </Drawer>
        </React.Fragment>
    );
};

export const Right = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                title="Drawer title"
                onClose={() => setOpen(false)}
                maskClosable
                closable
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque reiciendis
                dolorem earum, odio ipsum consectetur. Sed aperiam minima omnis est similique libero
                debitis necessitatibus illum neque, totam, dicta id?
            </Drawer>
        </React.Fragment>
    );
};

export const Bottom = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer
                isOpen={isOpen}
                placement="bottom"
                title="Drawer title"
                onClose={() => setOpen(false)}
                maskClosable
                closable
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque reiciendis
                dolorem earum, odio ipsum consectetur. Sed aperiam minima omnis est similique libero
                debitis necessitatibus illum neque, totam, dicta id?
            </Drawer>
        </React.Fragment>
    );
};

export const Left = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                title="Drawer title"
                onClose={() => setOpen(false)}
                maskClosable
                closable
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque reiciendis
                dolorem earum, odio ipsum consectetur. Sed aperiam minima omnis est similique libero
                debitis necessitatibus illum neque, totam, dicta id?
            </Drawer>
        </React.Fragment>
    );
};
