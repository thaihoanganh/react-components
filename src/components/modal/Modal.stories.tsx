import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';
import Button from '../button/Buton';

export default {
    title: 'Modal',
    component: Modal,
} as Meta;

export const Default = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                title="Modal title"
                closable
                maskClosable
                onCancel={() => setOpen(false)}
                onOk={() => setOpen(false)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex architecto neque
                nesciunt earum a repellat alias ea animi accusantium expedita distinctio nihil velit
                tempore praesentium, laborum voluptatibus. Commodi, laborum.
            </Modal>
        </React.Fragment>
    );
};
