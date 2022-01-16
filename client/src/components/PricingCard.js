import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import FeatureList from "./FeatureList";
import axios from "axios";

export default function PricingCard({
  name,
  priceId,
  price,
  limitUsers,
  description,
}) {
  const handleSelectPlan = async () => {
    const res = await axios.post(
      "http://localhost:5001/create-checkout-session",
      {
        priceId,
        quantity: limitUsers,
      }
    );

    console.log(res);
  };

  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            {name}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              {price / 100}
            </Text>
            <Text color={"gray.500"}>/month</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <FeatureList limitUsers={limitUsers} description={description} />
          </List>
          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
            onClick={handleSelectPlan}
          >
            Select Plan
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
