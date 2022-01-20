import React from "react";
import Coin from "./Coin";
import { Grid } from "@chakra-ui/react";

const CoinList = ({ coinsList }) => {
  return (
    <Grid
      templateRows="repeat(2, 5fr)"
      templateColumns="repeat(4, 1fr)"
      gap={5}
    >
      {coinsList.map((coin) => {
        return <Coin coin={coin} />;
      })}
    </Grid>
  );
};

export default CoinList;
