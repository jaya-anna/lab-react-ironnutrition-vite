import { Card, Col, Button } from "antd";

const FoodBox = ( {foodsState, setFoodsState} ) => {
  console.log()
    const handleDelete = name => {
      const filteredFood = foodsState.filter(item => item.name !== name)
      setFoodsState(filteredFood)
    }

    return ( 

    foodsState.map(({ name, calories, image, servings }) => {
      return(
        <Col>
          <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings} </b> kcal
            </p>
            <Button onClick={() => {handleDelete(name)}} type="primary"> Delete </Button>
          </Card>
        </Col>
      )
    })
    )
  }
  
  export default FoodBox;