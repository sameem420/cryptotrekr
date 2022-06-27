import {
  Container,
  Heading,
  Input,
  Skeleton,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinList from "./components/CoinList";

function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchCoinsList = () => {
      axios
        .get("https://api.coinstats.app/public/v1/coins?skip=0")
        .then((response) => {
          setCoinsList(response.data.coins);
          setIsLoading(false);
        });
    };
    fetchCoinsList();
  }, []);

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
          onChange={console.log("Hello World!")}
        />
      </Container>

      <CoinList coinsList={coinsList} />
    </>
  );
}

export default App;
