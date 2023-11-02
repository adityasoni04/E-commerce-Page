import React, { useState } from 'react';
import { Layout, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;


const Navbar = ({ sortedKey }) => {

    const [sortingOption, setSortingOption] = useState('default');

    const welcomeStyle = {
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#FF5733',
    };

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
    };
    const menuItems = [
        { key: 'az', label: 'a-z' },
        { key: 'za', label: 'z-a' },
        { key: 'priceLowToHigh', label: 'Price Low to High' },
        { key: 'ratingH', label: 'Rating High to Low' },
        { key: 'ratingL', label: 'Rating Low to High' },
    ];


    const handleSorting = (key) => {
        setSortingOption(key);
        sortedKey(key)
    };
   // console.log(sortingOption)

    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={welcomeStyle}>Welcome !</div>
            <div style={buttonContainerStyle}>
                <Dropdown overlay={<Menu onClick={({ key }) => handleSorting(key)}>
                    {menuItems.map(item =>
                        <Menu.Item
                            key={item.key}>{item.label}
                        </Menu.Item>)}
                </Menu>}>
                    <Button type="primary">
                        Sort by <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        </Header>
    );
};

export default Navbar;
