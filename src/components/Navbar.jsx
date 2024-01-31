import React, { useState } from 'react';
import { Layout, Dropdown, Button, Menu } from 'antd';
import { DownOutlined,FilterOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ sortedKey, applyFilter }) => {

    const [sortingOption, setSortingOption] = useState('default');
    const [filterOption, setFilterOption] = useState(null);

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
        { key: 'priceLowToHigh', label: 'Price: Low to High' },
        { key: 'priceHighToLow', label: 'Price: High to Low' },
        { key: 'ratingH', label: 'Rating: High to Low' },
        { key: 'ratingL', label: 'Rating: Low to High' },
    ];

    const filterMenuItems = [
        { key: 'ear', label: 'On-Ear Headphones' },
        { key: 'overEar', label: 'Over-Ear Headphones' },
        { key: 'waterproof', label: 'Waterproof Headphones' },
    ];

    const handleSorting = (key) => {
        setSortingOption(key);
        sortedKey(key);
    };

    const handleFilter = (key) => {
        setFilterOption(key);
        applyFilter(key);
    };

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

                <Dropdown overlay={<Menu onClick={({ key }) => handleFilter(key)}>
                    {filterMenuItems.map(item =>
                        <Menu.Item
                            key={item.key}>{item.label}
                        </Menu.Item>)}
                </Menu>}>
                    <Button type="primary" style={{ marginLeft: '10px' }}>
                        Filter <FilterOutlined />
                    </Button>
                </Dropdown>
            </div>
        </Header>
    );
};

export default Navbar;
