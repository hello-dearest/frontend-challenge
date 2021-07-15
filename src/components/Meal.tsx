import {
  Box,
  Icon,
  Center
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

import { Main } from "./Main";
import { Hero } from "./Hero";

type MealProps = {
  mealTitle: string
}

export const Meal = ({ mealTitle }: MealProps) => {
  return (
    <Box>
      <Hero title={mealTitle} />
      <Main>
        <Center>
          <Icon
            as={FaHeart}
            fill="orange.600"
            boxSize="10vw"
          />
        </Center>
      </Main>
    </Box>
  )
};