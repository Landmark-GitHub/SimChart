import { useState } from 'react';
import './Dropdown.css';
import { FaAngleDown } from "react-icons/fa";


const Dropdown = () => {

    const [dropdown , setDropdown] = useState(null);
    const options = ['options1','options2','options3','options4'];

    // const handleChange = (event) => {
    //     setDropdown(event.target.value);
    // };

    return(
        <div className="dropdown">
            <button className='btnDropdown' onClick={() => setDropdown(null)}>
            {dropdown || 'Select an option'}
            <FaAngleDown size={15} style={{float: 'right' , backgroundColor: 'transparent'}} />
            </button>
            {dropdown ? null : (
            <ul className="options">
                {options.map((option, index) => (
                <li
                    key={index}
                    onClick={() => setDropdown(option)}
                >
                    {option}
                </li>
                ))}
            </ul>
            )}
      </div>
    );
}

export default Dropdown;