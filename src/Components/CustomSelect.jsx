import { useState } from "react";
import "./KZUISelect.css";

const CustomSelect = ({
  isClearable = false,
  isSearchable = false,
  isDisabled = false,
  options,
  value = null,
  placeholder = "Select...",
  isGrouped = false,
  isMulti = false,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler,
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([])

  const filteredOptions = options?.filter((option) =>
    option?.value.toLowerCase().includes(query?.toLowerCase().trim()) && !selectedOptions.includes(option)
  );

  return (
    <div className="kzui-select_container">
      <div className="kzui-card_content">
      {
      JSON.stringify(selectedOptions)
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
              disabled={isDisabled}
              value={query}
              onChange={(e) => setQuery(e.target.value.trimStart())}
              placeholder={placeholder}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
            />
            <button className="kzui-button">+Add</button>
          </div>
          {/* options */}
        </div>
        {open && (
          <div className="kzui-options">
            <ul>
              {filteredOptions?.length? filteredOptions?.map((option, i) => (
                <li 
                onMouseDown={(e)=>e.preventDefault()}
                onClick={() => {
                  setOpen(false);
                  setSelectedOptions((prev) => [...prev, option.value]);
                }}
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
