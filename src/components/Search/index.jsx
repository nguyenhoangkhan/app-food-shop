import { useState, useEffect, useRef, memo } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
import { Items } from "../../assets/fake-data/data";
import SearchItem from "../SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  useEffect(() => {
    if (searchInput) {
      const items = Items.filter((item) =>
        item.name.toUpperCase().includes(searchInput.toUpperCase())
      );
      setResult(items);
    } else if (!searchInput) {
      setResult([]);
    }
  }, [searchInput]);
  const handleInput = (input) => {
    setSearchInput(input);
  };
  const handleHideResult = () => {
    setShowResults(false);
  };
  const inputRef = useRef();
  return (
    <div>
      <TippyHeadless
        onClickOutside={handleHideResult}
        visible={showResults && result.length > 1}
        interactive
        placement={"top-start"}
        render={(attrs) => (
          <div className={styles.searchResult} tabIndex="-1" {...attrs}>
            <ul>
              {result.map((item, idx) => (
                <li key={idx}>
                  <SearchItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        )}
      >
        <div className={styles.inputBox}>
          <SearchIcon className={styles.searchIcon} />
          <input
            value={searchInput}
            ref={inputRef}
            onFocus={() => setShowResults(true)}
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInput(e.target.value)}
          ></input>
          {searchInput ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => {
                setSearchInput("");
                inputRef.current.focus();
              }}
            />
          ) : null}
        </div>
      </TippyHeadless>
    </div>
  );
};
export default memo(Search);
