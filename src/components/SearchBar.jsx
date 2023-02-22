import { useState } from "react";
import { Input } from "antd";


function SearchBar({ setFoodsState, foods}) {
  const [query, setQuery] = useState("");

const handleChange = (event) => {
    setQuery(event.target.value)
    setFoodsState(()=> {
        if(event.target.value ==="") {
            return foods
        }else {
            return foods.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
        }
    })
}


  return (
    <div>
      <label>
        Search
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter search query"
        />
      </label>
    </div>
  );
}

export default SearchBar;
