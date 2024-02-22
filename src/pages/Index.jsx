import React from "react";
import { ChakraProvider, Box, Container, VStack, Heading, Text, Button, Image, Link, IconButton, useColorMode, useColorModeValue, SimpleGrid, GridItem, Input, FormControl, FormLabel, Textarea, HStack, Divider } from "@chakra-ui/react";
import { FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMoon, FaSun, FaRegCommentDots } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Box bg={useColorModeValue("gray.100", "gray.800")} minHeight="100vh">
        <Box bg={useColorModeValue("brand.700", "gray.800")} py={2}>
          <Container maxW="container.xl">
            <HStack justify="space-between" align="center">
              <Heading as="h1" size="lg" color={useColorModeValue("white", "gray.200")}>
                N's Garden
              </Heading>
              <HStack spacing={4}>
                <Link px={3} py={1} color={useColorModeValue("white", "gray.200")} href="#arrangements">
                  Arrangements
                </Link>
                <Link px={3} py={1} color={useColorModeValue("white", "gray.200")} href="#services">
                  Services
                </Link>
                <Link px={3} py={1} color={useColorModeValue("white", "gray.200")} href="#subscription">
                  Subscription
                </Link>
                <Link px={3} py={1} color={useColorModeValue("white", "gray.200")} href="#testimonials">
                  Testimonials
                </Link>
                <Link px={3} py={1} color={useColorModeValue("white", "gray.200")} href="#contact">
                  Contact
                </Link>
              </HStack>
            </HStack>
          </Container>
        </Box>
        <Container maxW="container.xl" p={4}>
          <VStack spacing={4} align="flex-start">
            <Box position="relative" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/1200x600?text=Hero+Image" alt="Hero Image" w="full" />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Heading as="h2" size="2xl" color="white" textAlign="center">
                  Beautiful Flowers Delivered
                </Heading>
                <Button mt={4} size="lg" bg="brand.800" color="white" _hover={{ bg: "brand.900" }}>
                  Shop Now
                </Button>
              </Box>
            </Box>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle Dark Mode" />

            <Heading as="h1" size="2xl">
              N's Garden
            </Heading>
            <Text>Welcome to our online flower shop. We provide a beautiful selection of flowers for every occasion, with delivery in Cairo.</Text>

            {/* Featured Arrangements */}
            <Heading as="h2" size="xl">
              Beautiful Arrangements
            </Heading>
            <SimpleGrid columns={3} spacing={10}>
              <GridItem>
                <Image src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwwfHx8fDE3MDg2MTQwMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Text mt={2}>Spring Bouquet</Text>
              </GridItem>
              <GridItem>
                <Image src="https://images.unsplash.com/photo-1615591144999-0b56442e2116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwwfHx8fDE3MDg2MTQwMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Text mt={2}>Wedding Special</Text>
              </GridItem>
              <GridItem>
                <Image src="https://images.unsplash.com/photo-1606104218551-2c2ad1231dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwwfHx8fDE3MDg2MTQwMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Text mt={2}>Corporate Event Pack</Text>
              </GridItem>
            </SimpleGrid>

            {/* Services */}
            <Heading as="h2" size="xl">
              Our Services
            </Heading>
            <VStack align="flex-start">
              <Text>Same day delivery</Text>
              <Text>Weddings and corporate events</Text>
              <Text>Custom floral arrangements</Text>
            </VStack>

            {/* Seasonal Subscription */}
            <Heading as="h2" size="xl">
              Seasonal Flower Subscription
            </Heading>
            <Text>Get a beautiful bouquet sent every month. Subscribe now!</Text>
            <Button>Subscribe</Button>

            {/* Happy Customers */}
            <Heading as="h2" size="xl">
              Happy Customers
            </Heading>
            <Box>
              {/* Customer reviews would be fetched and mapped here */}
              <Text>"The flowers were absolutely stunning!" - A Happy Customer</Text>
            </Box>

            {/* Newsletter */}
            <Heading as="h2" size="xl">
              Join Our Newsletter
            </Heading>
            <HStack>
              <Input placeholder="Your email address" />
              <Button>Subscribe</Button>
            </HStack>

            {/* Contact Us */}
            <Heading as="h2" size="xl">
              Contact Us
            </Heading>
            <FormControl id="contact-form">
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" />
              <FormLabel mt={4}>Message</FormLabel>
              <Textarea placeholder="Your message" />
              <Button mt={4}>Send</Button>
            </FormControl>
          </VStack>

          {/* Footer */}
          <Divider my={10} />
          <VStack spacing={4}>
            <HStack spacing={10}>
              <Link href="https://www.instagram.com" isExternal>
                <IconButton icon={<FaInstagram />} aria-label="Instagram" />
              </Link>
              <Link href="https://www.tiktok.com" isExternal>
                <IconButton icon={<FaTiktok />} aria-label="Tiktok" />
              </Link>
              <IconButton icon={<FaPhoneAlt />} aria-label="Phone" />
              <IconButton icon={<FaEnvelope />} aria-label="Email" />
            </HStack>
            <Text>© Cairo Flower Shop. All rights reserved.</Text>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
