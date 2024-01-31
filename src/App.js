import { Products } from './components/products';
import contents from './content';
import Navbar from './components/Navbar';
import { useState } from 'react';

export default function App() {
    const [sKey, setSKey] = useState("");
    const [filterOption, setFilterOption] = useState(null);

    const sortedKey = (data) => {
        setSKey(data);
    };

    const applyFilter = (filter) => {
        setFilterOption(filter);
    };

    const sortFunction = (a, b) => {
        if (sKey === "az") {
            return a.name.localeCompare(b.name);
        } else if (sKey === "za") {
            return b.name.localeCompare(a.name);
        } else if (sKey === "priceLowToHigh") {
            return a.price - b.price;
        }else if (sKey === "priceHighToLow") {
            return b.price - a.price;
        } else if (sKey === "ratingH") {
            return b.rating - a.rating;
        } else if (sKey === "ratingL") {
            return a.rating - b.rating;
        }
        return 0;
    };

    const filterFunction = (content) => {
        if (!filterOption) {
            return true;
        }

        if (filterOption === 'ear') {
            return content.feature === 'On-Ear';
        } else if (filterOption === 'overEar') {
            return content.feature === 'Over-Ear';
        } else if (filterOption === 'waterproof') {
            return content.feature === 'Waterproof';
        }

        return false;
    };

    const sortedAndFilteredContents = [...contents].filter(filterFunction).sort(sortFunction);

    return (
        <div>
            <Navbar sortedKey={sortedKey} applyFilter={applyFilter} />
            <div className='App'>
                {sortedAndFilteredContents.map((content) => (
                    <Products
                        key={content.id}
                        image={content.image}
                        name={content.name}
                        price={content.price}
                        totalSales={content.totalSales}
                        rating={content.rating}
                        feature={content.feature}
                    />
                ))}
            </div>
        </div>
    );
}
