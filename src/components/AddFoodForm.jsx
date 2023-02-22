import { useState } from "react";
import { Input, Divider } from "antd";
import {v4 as uuidv4} from 'uuid'

function AddFoodForm({ setFoodsState }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, image, calories, servings, id: uuidv4() });
    
    setFoodsState((prevFoodList) => {
      return [...prevFoodList, { name, image, calories, servings, id: uuidv4() }];
    });
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  };


  return (
    <form onSubmit={handleSubmit}>
    <Divider> Add Food Entry</Divider>
      <label>Name
        <Input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
      </label>

     
      <label>
        Image
        <Input
          value={image}
          type="text"
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Calories
        <Input
          value={calories}
          type="number"
          onChange={(event) => setCalories(event.target.value)}
        />
      </label>
      <label>
        Servings
        <Input
          value={servings}
          type="number"
          onChange={(event) => setServings(event.target.value)}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;