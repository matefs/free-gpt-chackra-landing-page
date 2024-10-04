import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/components/prism-javascript.min.js';

import {
  ChakraProvider,
  extendTheme,
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  VStack,
  HStack,
  Code,
  Center,
  Flex,
} from '@chakra-ui/react';

// Custom Theme for Apple-like Aesthetics
const theme = extendTheme({
  fonts: {
    heading: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    body: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
  },
  colors: {
    brand: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      200: '#bdbdbd',
      300: '#9e9e9e',
      400: '#757575',
      500: '#616161',
      600: '#424242',
      700: '#212121',
      800: '#121212',
      900: '#000000',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700',
      },
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(
      `fetch('https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query=test1', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleDescription = (element) => {
    const description = element.querySelector('.description');
    description.style.display =
      description.style.display === 'block' ? 'none' : 'block';
    const arrow = element.querySelector('.arrow');
    arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
  };

  return (
    <ChakraProvider theme={theme}>
      <Box>
        {/* Header */}
        <header>
          <Box
            bg="white"
            boxShadow="sm"
            position="fixed"
            top="0"
            width="100%"
            zIndex="1000"
          >
            <Container maxW="container.xl" py={4}>
              <Flex align="center" justify="space-between">
                <Heading as="h1" size="md" color="brand.900">
                  Free GPT API
                </Heading>
                <HStack spacing={6}>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#features"
                  >
                    Features
                  </Button>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#benefits"
                  >
                    Benefits
                  </Button>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#how-it-works"
                  >
                    How It Works
                  </Button>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#use-cases"
                  >
                    Use Cases
                  </Button>
                  <Button colorScheme="brand" as="a" href="/docs">
                    Get Started
                  </Button>
                </HStack>
              </Flex>
            </Container>
          </Box>
        </header>

        {/* Main Content */}
        <main>
          <Box pt={24} pb={10}>
            {/* Hero Section */}
            <Center py={20}>
              <VStack spacing={4} textAlign="center">
                <Heading as="h1" size="2xl" color="brand.900">
                  Unleash Your Inner Developer with Free GPT API
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  Seamlessly integrate AI into your projects without the hassle
                  of API keys.
                </Text>
                <Button
                  colorScheme="brand"
                  size="lg"
                  as="a"
                  href="/docs"
                  px={8}
                  py={6}
                  _hover={{ bg: 'brand.600' }}
                >
                  Let's Dive In!
                </Button>
              </VStack>
            </Center>

            {/* Features Section */}
            <section id="features">
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={10}
                color="brand.900"
              >
                Epic Features
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing={10}
                justifyContent="center"
              >
                {featuresData.map((feature) => (
                  <Center key={feature.title}>
                    <Box
                      p={8}
                      borderRadius="lg"
                      boxShadow="base"
                      bg="white"
                      transition="transform 0.3s"
                      _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: 'md',
                      }}
                      maxW="300px"
                    >
                      <Flex justifyContent="center" mb={4}>
                        <img src={feature.icon} alt={feature.alt} width={64} />
                      </Flex>
                      <Heading as="h3" size="md" mb={2} color="brand.700">
                        {feature.title}
                      </Heading>
                      <Text color="gray.600">{feature.description}</Text>
                    </Box>
                  </Center>
                ))}
              </SimpleGrid>
            </section>

            {/* Code Example Section */}
            <section className="code-example" py={20}>
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={10}
                color="brand.900"
              >
                Try It Out!
              </Heading>
              <Center>
                <Box
                  p={8}
                  borderRadius="lg"
                  boxShadow="base"
                  bg="gray.50"
                  position="relative"
                  maxW="800px"
                >
                  <Code
                    className="language-javascript"
                    whiteSpace="pre-wrap"
                    display="block"
                    p={4}
                    borderRadius="md"
                    overflowX="auto"
                  >
                    {`fetch('https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query=test1', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                  </Code>
                  <Button
                    colorScheme="brand"
                    size="sm"
                    onClick={copyCode}
                    position="absolute"
                    top="-2"
                    right="5"
                    bg="brand.500"
                    _hover={{ bg: 'brand.600' }}
                  >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                </Box>
              </Center>
            </section>

            {/* Benefits Section */}
            <section id="benefits">
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={10}
                color="brand.900"
              >
                Why Choose Free GPT API?
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
                justifyContent="center"
              >
                {benefitsData.map((benefit) => (
                  <Center key={benefit.title}>
                    <Box
                      p={8}
                      borderRadius="lg"
                      boxShadow="base"
                      bg="white"
                      transition="transform 0.3s"
                      _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: 'md',
                      }}
                      maxW="300px"
                    >
                      <Text
                        fontWeight="bold"
                        fontSize="lg"
                        mb={2}
                        color="brand.700"
                      >
                        {benefit.title}
                      </Text>
                      <Text color="gray.600">{benefit.description}</Text>
                    </Box>
                  </Center>
                ))}
              </SimpleGrid>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" py={20}>
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={10}
                color="brand.900"
              >
                How It Works
              </Heading>
              <Stack
                spacing={10}
                direction={{ base: 'column', md: 'row' }}
                justifyContent="center"
              >
                {howItWorksData.map((step, index) => (
                  <Center key={step.title}>
                    <Box
                      p={8}
                      borderRadius="lg"
                      boxShadow="base"
                      bg="white"
                      flex={1}
                      transition="transform 0.3s"
                      _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: 'md',
                      }}
                      maxW="300px"
                    >
                      <HStack spacing={6} align="start">
                        <Box
                          w={12}
                          h={12}
                          borderRadius="full"
                          bg="brand.500"
                          color="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="lg"
                          fontWeight="bold"
                        >
                          {index + 1}
                        </Box>
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold" color="brand.700">
                            {step.title}
                          </Text>
                          <Text color="gray.600">{step.description}</Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </Center>
                ))}
              </Stack>
            </section>

            {/* Use Cases Section */}
            <section id="use-cases">
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={10}
                color="brand.900"
              >
                Use Cases
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
                justifyContent="center"
              >
                {useCasesData.map((useCase) => (
                  <Center key={useCase.title}>
                    <Box
                      p={8}
                      borderRadius="lg"
                      boxShadow="base"
                      bg="white"
                      transition="transform 0.3s"
                      _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: 'md',
                      }}
                      onClick={(e) => toggleDescription(e.currentTarget)}
                      cursor="pointer"
                      maxW="300px"
                    >
                      <HStack justify="space-between">
                        <Text fontWeight="bold" color="brand.700">
                          {useCase.title}
                        </Text>
                        <Text className="arrow" color="brand.600">
                          ▼
                        </Text>
                      </HStack>
                      <Text
                        color="gray.600"
                        className="description"
                        display="none"
                        mt={4}
                      >
                        {useCase.description}
                      </Text>
                    </Box>
                  </Center>
                ))}
              </SimpleGrid>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action" py={20}>
              <Center>
                <Box
                  bg="gray.50"
                  p={16}
                  borderRadius="lg"
                  boxShadow="base"
                  textAlign="center"
                  maxW="800px"
                >
                  <Heading as="h2" size="xl" mb={4} color="brand.900">
                    Kickstart Your Journey Today!
                  </Heading>
                  <Text fontSize="lg" color="gray.600" mb={8}>
                    Experience the power of innovation with Free GPT API. Unlock
                    limitless possibilities and seamlessly integrate AI into
                    your projects without any hassle.
                  </Text>
                  <Button
                    colorScheme="brand"
                    size="lg"
                    as="a"
                    href="/docs"
                    px={8}
                    py={6}
                    _hover={{ bg: 'brand.600' }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Center>
            </section>
          </Box>
        </main>

        {/* Footer */}
        <footer>
          <Box bg="brand.50" py={6}>
            <Container maxW="container.xl">
              <VStack spacing={4} align="center">
                <HStack spacing={8}>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#"
                  >
                    Docs
                  </Button>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#"
                  >
                    Dev Community
                  </Button>
                  <Button
                    variant="ghost"
                    color="brand.600"
                    _hover={{ color: 'brand.800' }}
                    as="a"
                    href="#"
                  >
                    Contact Us
                  </Button>
                </HStack>
                <Text color="gray.600">
                  &copy; 2024 Free GPT API. All rights reserved.
                </Text>
              </VStack>
            </Container>
          </Box>
        </footer>
      </Box>
    </ChakraProvider>
  );
}

const featuresData = [
  {
    icon: '/static/no-key-icon.png',
    alt: 'No API Key Icon',
    title: 'No API Key? No Problem!',
    description:
      'Easily integrate AI without the hassle of managing API keys, allowing you to focus on what matters most—building great applications.',
  },
  {
    icon: '/static/fast-response-icon.png',
    alt: 'Fast Response Icon',
    title: 'Lightning-Fast Responses',
    description:
      'Receive responses in just 1 to 3 seconds, ensuring a smooth and efficient development process.',
  },
  {
    icon: '/static/integration-icon.png',
    alt: 'Integration Icon',
    title: 'Seamless Integration',
    description:
      'Effortlessly incorporate our API into your projects with simple GET requests and robust documentation.',
  },
  {
    icon: '/static/swagger-icon.png',
    alt: 'Swagger Icon',
    title: 'Intuitive Swagger Docs',
    description:
      'Explore and interact with our API using Swagger’s user-friendly interface, making development a breeze.',
  },
];

const benefitsData = [
  {
    title: 'Maximize Value:',
    description:
      'Leverage powerful AI tools without incurring hefty costs, ensuring you get the most out of every project.',
  },
  {
    title: 'Accessible to All:',
    description:
      'Our API is designed for everyone, breaking down barriers and making advanced AI accessible to developers of all levels.',
  },
  {
    title: 'Collaborative Community:',
    description:
      'Join a vibrant community of developers and innovators who are pushing the boundaries of AI technology.',
  },
];

const howItWorksData = [
  {
    title: 'Send a GET Request:',
    description:
      'Simply send your query via a GET request and let our API handle the rest.',
  },
  {
    title: 'Receive Instant Responses:',
    description:
      'Enjoy rapid responses that keep your development process moving smoothly and efficiently.',
  },
  {
    title: 'Explore with Swagger:',
    description:
      'Utilize our Swagger interface to fully harness the capabilities of our API and customize your integrations.',
  },
];

const useCasesData = [
  {
    title: 'Enhance Your Chatbots',
    description:
      'Develop intelligent chatbots that provide exceptional user experiences and keep your customers engaged.',
  },
  {
    title: 'Streamline Content Creation',
    description:
      'Automate the generation of articles, blogs, and marketing content effortlessly, saving you time and resources.',
  },
  {
    title: 'Upgrade Educational Tools',
    description:
      'Build interactive learning applications that offer real-time assistance and personalized learning experiences.',
  },
];

export default App;
