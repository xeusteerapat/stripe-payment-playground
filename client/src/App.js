import React from "react";
import { Flex, Container } from "@chakra-ui/react";
import PricingCard from "./components/PricingCard";

function App() {
  return (
    <Container maxW='container.lg'>
      <Flex justifyContent='space-between'>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </Flex>
    </Container>
  );
}

export default App;
