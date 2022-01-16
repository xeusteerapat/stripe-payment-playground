import React, { useState } from "react";
import { Flex, Container, Spinner } from "@chakra-ui/react";
import PricingCard from "./components/PricingCard";
import axios from "axios";

function App() {
  const [realPlans, setRealPlan] = useState([]);

  React.useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await axios.get("http://localhost:5001/plans");

      setRealPlan(data);
    };

    fetchPlans();
  }, []);

  return (
    <Container maxW='container.lg'>
      <Flex justifyContent='space-between'>
        {!realPlans.length ? (
          <>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </>
        ) : (
          realPlans.map(plan => (
            <PricingCard
              key={plan.id}
              priceId={plan.id}
              name={plan.product.name}
              price={plan.unit_amount}
              limitUsers={plan.transform_quantity.divide_by}
              description={plan.product.description}
              product={plan.product}
            />
          ))
        )}
      </Flex>
    </Container>
  );
}

export default App;
