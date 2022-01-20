import React from "react";
import { Image, GridItem, Text, Heading, Badge } from "@chakra-ui/react";

const Coin = ({ coin }) => {
  return (
    <GridItem m={15} p={15} borderWidth="1px" borderRadius="lg">
      <Heading as="lg">{coin.name}</Heading>
      <Image src={coin.icon} alt={coin.name} boxSize="64px" />
      <Text fontSize="2xl">{coin.price}</Text>
      <Badge m="1" fontSize="1.3em" colorScheme="red" variant="solid">
        {coin.symbol}
      </Badge>
    </GridItem>
  );
};

export default Coin;
