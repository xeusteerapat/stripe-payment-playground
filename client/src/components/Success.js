import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <VStack>
        <Box>
          <Text fontSize='4xl'>Payment Success</Text>
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

export default Success;
