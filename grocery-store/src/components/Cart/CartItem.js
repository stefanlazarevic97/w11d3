import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementItem, decrementItem, setItemCount } from '../../store/cart';

function CartItem({ item }) {
    const [count, setCount] = useState(item.count);
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    function handleRemove() {
        dispatch(removeItem(item.id));
    };

    function handleIncrement() {
        dispatch(incrementItem(item.id));
    }

    function handleDecrement() {
        if (count > 1) dispatch(decrementItem(item.id));
    }

    function handleSetCount() {
        dispatch(setItemCount(item.id, count));
    }

    function handleChange(e) {
        setCount(parseInt(e.target.value));
    }

    return (
        <li className="cart-item">
        <div className="cart-item-header">{item.name}</div>
        <div className="cart-item-menu">
            <input
                type="number"
                value={count}
                onBlur={handleSetCount}
                onChange={handleChange}
            />
            <button
                className="cart-item-button"
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className="cart-item-button"
                onClick={handleDecrement}
            >
                -
            </button>
            <button
                className="cart-item-button"
                onClick={handleRemove}
            >
                Remove
            </button>
        </div>
        </li>
    );
}

export default CartItem;