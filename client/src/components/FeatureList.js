import { CheckIcon } from "@chakra-ui/icons";
import { ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";

const FeatureList = ({ users, features, note }) => {
  return (
    <>
      <ListItem>
        <ListIcon as={CheckIcon} color='green.400' />
        {users} identified users
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color='green.400' />
        {features}
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color='green.400' />
        {note}
      </ListItem>
    </>
  );
};

export default FeatureList;
