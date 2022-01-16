import React from "react";
import { useLocation } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";

const Checkout = () => {
  const { state } = useLocation();

  React.useEffect(() => {
    window.location.href = state.url;
  }, [state]);

  return (
    <Center>
      <Text fontSize='4xl'>Payment Processing, Please wait...</Text>
    </Center>
  );
};

export default Checkout;
