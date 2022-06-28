import {
  Container,
  Heading,
  Input,
  Skeleton,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CoinList from "./components/CoinList";

function App() {
  const filterRef = useRef(null);
  const [coinsList, setCoinsList] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(coinsList);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchCoinsList = () => {
      axios
        .get("https://api.coinstats.app/public/v1/coins?skip=0")
        .then((response) => {
          setCoinsList(response.data.coins);
          setFilteredCoins(response.data.coins);
          setIsLoading(false);
        });
    };
    fetchCoinsList();
  }, []);

  const filterCoins = (coinName) => {
    console.log("HMMMM");
    const filteredCoins = coinsList.filter((coin, idx) => {
      if (coin.name.toLowerCase().includes(coinName)) {
        return coin;
      }
    });
    setFilteredCoins(filteredCoins);
  };

  if (loading) {
    return (
      <Skeleton isLoaded={loading}>
        <Box padding="6" boxShadow="lg" bg="white">
          <Stack>
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
          </Stack>
        </Box>
      </Skeleton>
    );
  }
  return (
    <>
      <Container>
        <Heading as="h1" size="4xl" m={5}>
          CryptoTrekr
        </Heading>
        <Input
          variant="filled"
          placeholder="Enter coin name to filter..."
          m={5}
          ref={filterRef}
          onChange={(e) => filterCoins(e.target.value)}
        />
      </Container>

      <CoinList coinsList={filteredCoins} />
    </>
  );
}

export default App;
