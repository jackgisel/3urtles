import { Text, Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box p="5">
      <Head>
        <title>3urtles - Small NFT Community</title>
        <meta
          name="description"
          content="3urtles is a small NFT community to communicate and collabrate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb="10">
        <Flex justify="space-between">
          <Box>
            <Flex flexDir="row" align="center" justify="center">
              <Image src="/3urtles.png" height={20} width={60} />
              <Text fontFamily="Space Grotesk">3urtles</Text>
            </Flex>
          </Box>
          <Box p={4} border="2px" borderColor="black">
            <Text fontFamily="Space Grotesk">Connect Wallet</Text>
          </Box>
        </Flex>
      </Box>
      <Flex
        textAlign="center"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontFamily="Space Grotesk" fontSize="48">
            3urtles
          </Text>
        </Box>
        <Text>
          Welcome to 3urtles. We are a small NFT community focused on
          collabrating.
        </Text>
        <Text>
          By joining our community get access to Discord, where you will get the
          chance to build the roadmap for this project.
        </Text>
        <Box m={10}>
          <Box p={4} border="2px" borderColor="black">
            <Text fontFamily="Space Grotesk">{1} of 333 currently minted</Text>
          </Box>
          <Box
            mt={2}
            p={4}
            border="2px"
            borderColor="black"
            bgColor="black"
            textAlign="center"
          >
            <Text color="white" fontFamily="Space Grotesk">
              Mint Now
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
