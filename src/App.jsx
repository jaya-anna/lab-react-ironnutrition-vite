import { useState } from "react";
import "./App.css";
import { Row, Divider, Button} from "antd";
import foods from "./foods.json";
import AddFoodForm from "../src/components/AddFoodForm";
import FoodBox from "../src/components/FoodBox";
import SearchBar from "../src/components/SearchBar"

function App() {

  const [foodsState, setFoodsState] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm setFoodsState={setFoodsState} />
      <Button> Hide Form / Add New Food </Button>

      <Divider>Search</Divider>

      <SearchBar 
      foods={foods} 
      setFoodsState={setFoodsState} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodBox 
        foodsState={foodsState} 
        setFoodsState={setFoodsState} />
      </Row>
    </div>
  );
}

export default App;
