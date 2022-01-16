import { Text, Button, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <>
      <VStack>
        <Box>
          <Text fontSize='4xl'>Cancel Payment</Text>
        </Box>
      </VStack>
      <VStack>
        <Link to='/'>
          <Box>
            <Button>Back Home</Button>
          </Box>
        </Link>
      </VStack>
    </>
  );
};

export default Cancel;
