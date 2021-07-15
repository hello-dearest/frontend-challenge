import {
  chakra, FormControl, FormLabel, Input, Box, Button, Flex, Center, Text
} from "@chakra-ui/react";


type MealProps = {
  handleVisibility: () => void
  handleInputChange: (data: string) => void
}

export const Welcome = ({ handleVisibility, handleInputChange }: MealProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    mt="30vh"
    width="100%"
    px="10px"
  >
    <Box
      maxWidth="40rem"
      width="100%"
      bgColor="white"
      py="4%"
      px="2%"
      borderColor="gray.200"
      borderWidth="1px"
      borderRadius="md"
    >
      <Center mb="25px">
        <Text fontSize="3xl" color="orange.700" as="u">Menu Review</Text>
      </Center>
      <chakra.form
        display="grid"
        gridGap={10}
      >
        <FormControl id="city" isRequired>
          <FormLabel>What is your favourite meal?</FormLabel>
          <Input
            colorScheme="orange"
            size="md"
            mt="5px"
            focusBorderColor="orange.400"
            placeholder="Rice, Chicken ..."
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </FormControl>
        <Center>
          <Button colorScheme="orange" size="sm" width="50%" onClick={handleVisibility}>
            Done
          </Button>
        </Center>
      </chakra.form>
    </Box>

  </Flex >
);
