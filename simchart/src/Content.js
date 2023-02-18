import './Content.css';
import Dropdown from './Dropdown.js';

const Content = () => {

    return(
        <div className='content'>

            <button className='raw-data'>Raw Data</button>
            <button className='analyst-data'>Analyst Data</button>

            <div className='container-dates'>
                <div className='frist-date'></div>
                <div className='last-date'></div>
            </div>

            <div className='area-content'>
                <div className='dropdown-content'><Dropdown/></div>
            </div>

        </div>
    );
}

export default Content;
