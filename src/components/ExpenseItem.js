import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faCirclePlus);
library.add(faCircleMinus);

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button onClick={event=> increaseAllocation(props.name)} style={styles.button}>
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: 'Green', fontSize: '24' }} />
                </button>
            </td>
            <td>
                <button onClick={event=> decreaseAllocation(props.name)}  style={styles.button}>
                    <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'Red', fontSize: '24' }} />
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

const styles = {
    button: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      border: 'none',
      cursor: 'pointer',
    },
    icon: {
      color: 'white',
      fontSize: '24px',
    }
  };

export default ExpenseItem;
