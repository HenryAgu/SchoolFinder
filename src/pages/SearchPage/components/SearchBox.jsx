// stylesheet
import "../style/SearchBox.css";

// images
import GoogleMap from "../images/GoogleMap.svg";

const SearchBox = () => {
  return (
    <div className="search_box">
      <div className="inner_search">
        <img src={GoogleMap} alt="image" />
        <input type="text" placeholder="Nigeria" />
      </div>
      <button>Find School</button>
    </div>
  );
};

export default SearchBox;
