import React from 'react';

import ThemeProvider from 'components/theme/ThemeProvider';
import Button from 'components/button/Buton';
import Icon from 'components/icon';
import Card from 'components/card/Card';
import Carousel from 'components/carousel/Carousel';
import { Tabs, Tab } from 'components/tabs';
import Tag from 'components/tag';
import { List, ListItem } from 'components/list';
import { Accordion } from 'components/accordion';
import { Breadcrumb, BreadcrumbItem } from 'components/breadcrumb';
import { Layout, LayoutSidebar, LayoutHeader, LayoutContent } from 'components/layout';
import { Menu, MenuItem, SubMenu } from 'components/menu';
import { Modal } from 'components/modal';
import Drawer from 'components/drawer/Drawer';
import Alert from 'components/alert/Alert';
import Checkbox from 'components/checkbox/Checkbox';
import Radio from 'components/radio/Radio';
import { Select } from 'components/select';
import { Notification } from 'components/notification';

import './index.css';

const Content = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div style={{ padding: 20 }}>
            <Button onClick={() => setOpen(!isOpen)}>Open Notification</Button>
            {isOpen && <Notification />}
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <Layout>
                <LayoutSidebar>
                    <Menu style={{ marginTop: 57 }}>
                        <SubMenu title="Data Display" icon={<Icon>home</Icon>}>
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
