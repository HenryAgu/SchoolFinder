// stylesheet
import "./style/SearchPage.css";

// components
import SearchNav from './components/SearchNav'
import SearchBox from "./components/SearchBox";
import SearchDetail from "./components/SearchDetail";

const SearchPage = () => {
  return (
    <main className="search_page">
      <SearchNav/>
      <SearchBox/>
      <SearchDetail/>
    </main>
  )
}

export default SearchPage