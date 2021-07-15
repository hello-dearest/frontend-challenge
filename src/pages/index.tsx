import { useState } from 'react';

import { Welcome } from "../components/Welcome";
import { Meal } from "../components/Meal";
import { Container } from "../components/Container";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [meal, setMeal] = useState("");

  const handleVisibility = () => {
    if (meal.length > 0) {
      setIsVisible(!isVisible);
    }
  }
  const handleInputChange = (data: string) => {
    setMeal(data);
  }
  return (
    <Container height="100vh">
      {isVisible ?
        <Meal mealTitle={meal} /> :
        <Welcome handleVisibility={handleVisibility} handleInputChange={handleInputChange} />
      }
    </Container>
  )
};

export default Index;
