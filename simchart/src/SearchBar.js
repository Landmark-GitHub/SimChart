import { FaSistrix } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = () => {
    return (
      <form className="searchBar">
        <input type="text" className="areaSearch" placeholder="#..Search Here" />
        <button className="searchButton">
          <FaSistrix />
        </button>
        <div className="lineSear">
        </div>
      </form>
    );
  };
  export default SearchBar;