import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => setCount(count + 1);

    return (
        <button onClick={handleCount}>{count}</button>
    );
}

export default Counter;