import React from 'react';

import ThemeProvider from 'components/theme/ThemeProvider';
import Button from 'components/button';
import Icon from 'components/icon';
import Card from 'components/card';
import Carousel from 'components/carousel';
import { Tabs, Tab } from 'components/tabs';
import Tag from 'components/tag';
import { List, ListItem } from 'components/list';
import { Accordion } from 'components/accordion';
import { Breadcrumb, BreadcrumbItem } from 'components/breadcrumb';
import { Layout, LayoutSidebar, LayoutHeader, LayoutContent } from 'components/layout';
import { Menu, MenuItem, SubMenu } from 'components/menu';
import { Modal } from 'components/modal';
import Drawer from 'components/drawer/Drawer';

import './index.css';

const Content = () => {
    const [isOpenModal, setOpenModal] = React.useState(false);
    const [isOpenDrawer, setOpenDrawer] = React.useState(false);

    return (
        <div style={{ padding: 20 }}>
            <Button style={{ marginRight: 8 }} onClick={() => setOpenModal(true)}>
                Open Modal
            </Button>
            <Button style={{ marginRight: 8 }} onClick={() => setOpenDrawer(true)}>
                Open Drawer
            </Button>

            <Modal
                title="Modal title"
                isOpen={isOpenModal}
                onCancel={() => setOpenModal(false)}
                onOk={() => setOpenModal(false)}
                closable
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia exercitationem
                fuga minus, aliquid quam assumenda repudiandae at nobis obcaecati quaerat eaque
                dolor maxime dolore nihil provident cum sunt blanditiis.
            </Modal>

            <Drawer isOpen={isOpenDrawer} width={500} onClose={() => setOpenDrawer(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat,
                deserunt perferendis facere eveniet consequuntur nesciunt ducimus recusandae ad enim
                alias repellendus quaerat aliquid! Fuga, sint. Quibusdam delectus sunt animi!
            </Drawer>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <Layout>
                <LayoutSidebar>
                    <Menu style={{ marginTop: 57 }}>
                        <MenuItem path="menu-item-1" icon={<Icon>home</Icon>}>
                            Menu Item 1
                        </MenuItem>
                        <MenuItem path="menu-item-2" icon={<Icon>home</Icon>}>
                            Menu Item 2
                        </MenuItem>
                        <MenuItem path="menu-item-3" icon={<Icon>home</Icon>}>
                            Menu Item 3
                        </MenuItem>
                        <SubMenu title="SubMenu 1" icon={<Icon>home</Icon>}>
                            <MenuItem path="submenu-item-1" icon={<Icon>home</Icon>}>
                                SubMenu Item 1
                            </MenuItem>
                            <MenuItem path="submenu-item-2" icon={<Icon>home</Icon>}>
                                SubMenu Item 2
                            </MenuItem>
                        </SubMenu>
                        <MenuItem path="menu-item-4" icon={<Icon>home</Icon>}>
                            Menu Item 4
                        </MenuItem>
                        <MenuItem path="menu-item-5" icon={<Icon>home</Icon>}>
                            Menu Item 5
                        </MenuItem>
                    </Menu>
                </LayoutSidebar>

                <Layout>
                    <LayoutHeader></LayoutHeader>
                    <LayoutContent>
                        <Content />
                    </LayoutContent>
                </Layout>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
