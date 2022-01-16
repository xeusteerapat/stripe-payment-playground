import React, { useState } from "react";
import { Flex, Container } from "@chakra-ui/react";
import PricingCard from "./components/PricingCard";
import { uid } from "./libs/uid";

const planDetails = [
  {
    id: uid(),
    name: "Free",
    price: 0,
    list: [
      {
        listId: uid(),
        users: 10,
        features: "Basic Dashboard",
        note: "Basic features",
      },
    ],
  },
  {
    id: uid(),
    name: "Business",
    price: 3,
    list: [
      {
        listId: uid(),
        users: 1000,
        features: "Basic Dashboard",
        note: "All features",
      },
    ],
  },
  {
    id: uid(),
    name: "Premium",
    price: 10,
    list: [
      {
        listId: uid(),
        users: 10000,
        features: "Advanced Dashboard",
        note: "All features",
      },
    ],
  },
];

function App() {
  const [plans] = useState(planDetails);

  return (
    <Container maxW='container.lg'>
      <Flex justifyContent='space-between'>
        {plans.map(plan => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            name={plan.name}
            price={plan.price}
            list={plan.list}
          />
        ))}
      </Flex>
    </Container>
  );
}

export default App;
