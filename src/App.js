import { Products } from './components/products';
import contents from './content';
import Navbar from './components/Navbar';
import { useState } from 'react';

export default function App() {
    const [sKey, setSKey] = useState("");

    const sortedKey = (data) => {
        setSKey(data);
    };

    const sortFunction = (a, b) => {
        if (sKey === "az") {
            return a.name.localeCompare(b.name);
        }
        else if (sKey === "za") {
            return b.price - a.price;
        } else if (sKey === "priceLowToHigh") {
            return a.price - b.price;
        } else if (sKey === "ratingH") {
            return b.rating - a.rating;
        } else if (sKey === "ratingL") {
            return a.rating - b.rating;
        }
        return 0;
    };

    const sortedContents = [...contents].sort(sortFunction);

    return (
        <div>
            <Navbar sortedKey={sortedKey} />
            <div className='App'>
                {sortedContents.map((content) => (
                    <Products
                        key={content.id}
                        image={content.image}
                        name={content.name}
                        price={content.price}
                        totalSales={content.totalSales}
                        timeLeft={content.timeLeft}
                        rating={content.rating}
                    />
                ))}
            </div>
        </div>
    );
}
