import { Button, Image, Spinner, VStack } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDog } from "./api";

function App() {
  const { data, isLoading } = useQuery(["dog"], getDog);
  const queryClient = useQueryClient();
  const onClick = () => {
    queryClient.refetchQueries(["dog"]);
  };
  return (
    <VStack mt={100}>
      <Button mb={5} onClick={onClick}>
        Dog!
      </Button>
      {isLoading ? (
        <Spinner size={"lg"} />
      ) : (
        <Image
          objectFit={"cover"}
          h={"300px"}
          w={"300px"}
          src={data?.message}
        />
      )}
    </VStack>
  );
}

export default App;
