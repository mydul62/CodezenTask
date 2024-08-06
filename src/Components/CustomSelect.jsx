import { useRef, useState } from "react";
import "./KZUISelect.css";

const CustomSelect = ({
  isClearable,
  // isSearchable = false,
  isDisabled = false,
  options,
  // value = null,
  placeholder,
  isGrouped = false,
  isMulti,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler,
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(isMulti ? [] : "");
  const inputRef = useRef(null)
console.log(selectedOptions);
 

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    // if (isSearchable && onSearchHandler) {
    //   onSearchHandler(value);
    // }
  };
  const handleOptionSelect = (option) => {
    if (isMulti) {
      setSelectedOptions((prev) => [...prev, option.value]);
    } else {
      setSelectedOptions(option.value);
    }
    if (onChangeHandler) {
      onChangeHandler(isMulti ? [...selectedOptions, option.value] : option.value);
    }
  };
  const handleClearAll = () => {
    setSelectedOptions(isMulti ? [] : "");
    setQuery("");
    inputRef.current.focus();
  };

  const filteredOptions = options?.filter((option) =>
    option?.value.toLowerCase().includes(query?.toLowerCase().trim()) && !selectedOptions.includes(option.value.toLowerCase())
  );

  return (
    <div className="kzui-select_container">
      <div className="kzui-card_content">
      {
      selectedOptions?.length ? 
      <div>
     {
     isMulti? <ul className="kzui-selectedValue_display">
     {
     selectedOptions?.map((selectVal,i)=>(
     <li key={i}>
    <h4> {selectVal}</h4>
    {
    isClearable &&  <span
    onMouseDown={(e)=>e.preventDefault()}
    onClick={()=>setSelectedOptions(selectedOptions.filter((option) =>(option!==selectVal)))}
    ><svg
    height={15}
    width={15}
    fill="red"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="cross"><g><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"></path><path d="M22.71 9.29a1 1 0 0 0-1.42 0L16 14.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l5.3-5.29a1 1 0 0 0 0-1.42Z"></path></g></svg></span>
    }
     </li>
     
     ))
     }
     </ul>:
    <div  className="kzui-selectedValue_display">
     <h4 > {selectedOptions} </h4>
     {
    isClearable &&  <span
    onMouseDown={(e)=>e.preventDefault()}
    onClick={()=>setSelectedOptions("")}
    ><svg
    height={15}
    width={15}
    fill="red"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="cross"><g><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"></path><path d="M22.71 9.29a1 1 0 0 0-1.42 0L16 14.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l5.3-5.29a1 1 0 0 0 0-1.42Z"></path></g></svg></span>
    }
    </div>
     }
      <div className="kzui-clearAll">
      {
      (isMulti && isClearable) && <p 
      onClick={handleClearAll}
      className="">Clear All</p>
      }
      </div>
      </div>
      :null
      }
        <div className="kzui-card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              fill="#2e6630"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </div>
          <div className="kzui-select_feild">
            <input
              type="text"
              ref={inputRef}
              disabled={isDisabled}
              value={query}
              onChange={handleInputChange}
              placeholder={placeholder}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
            />
            <button onClick={()=>{
            query && setSelectedOptions(isMulti?[...selectedOptions,query]:query)
            }} className="kzui-button">+Add</button>
          </div>
          {/* options */}
        </div>
        {open && (
          <div className="kzui-options">
            <ul>
              {filteredOptions?.length? filteredOptions?.map((option, i) => (
                <li 
                onMouseDown={(e)=>e.preventDefault()}
                onClick={() => handleOptionSelect(option)}
                key={i}>{option.value}</li>
              )):
              (
              <p>No options available</p>
              )
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
