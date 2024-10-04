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
  VStack,
  HStack,
  Center,
  Flex,
  Code
} from '@chakra-ui/react';
import { 
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  StepTitle,
  StepDescription,
  useColorModeValue
} from '@chakra-ui/react';

const activeStep = 1; // Example: Set the currently active step (index starts from 0)

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
            <section id="features" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
            <section className="code-example" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
                    whiteSpace="no-wrap"
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
            <section id="benefits" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
              <Heading 
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
            <section id="how-it-works" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={10}
        color={useColorModeValue('brand.900', 'gray.100')} // Adjust color for dark mode
      >
        How It Works
      </Heading>
      <Container maxW="container.lg">
        <Stepper index={activeStep} orientation="vertical">
          {howItWorksData.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepStatus completeBg={useColorModeValue('brand.500', 'brand.200')} />} // Adjust colors for dark mode
                  active={<StepStatus activeBg={useColorModeValue('brand.600', 'brand.300')} />} // Adjust colors for dark mode
                  incomplete={<StepStatus incompleteBg={useColorModeValue('gray.200', 'gray.600')} />} // Adjust colors for dark mode
                />
              </StepIndicator>
              <Box ml={5}>
                <StepTitle color={useColorModeValue('brand.700', 'gray.100')}>{step.title}</StepTitle> {/* Adjust color for dark mode */}
                <StepDescription color={useColorModeValue('gray.600', 'gray.400')}>{step.description}</StepDescription> {/* Adjust color for dark mode */}
              </Box>
              <StepSeparator borderColor={useColorModeValue('gray.200', 'gray.700')} /> {/* Adjust color for dark mode */}
            </Step>
          ))}
        </Stepper>
      </Container>
    </section>

            {/* Use Cases Section */}
            <section id="use-cases" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
                      maxW="300px"
                    >
                      <Heading as="h3" size="md" mb={2} color="brand.700">
                        {useCase.title}
                      </Heading>
                      <Text color="gray.600">{useCase.description}</Text>
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
      </Box>
    </ChakraProvider>
  );
}

const featuresData = [
  {
    title: 'No API Keys Needed',
    description: 'Start using the API without the hassle of API key management.',
    icon: '/path-to-icon/no-api-keys.svg',
    alt: 'No API Keys Needed'
  },
  {
    title: 'Free Forever',
    description: 'Enjoy free access to the API without hidden costs or limitations.',
    icon: '/path-to-icon/free-forever.svg',
    alt: 'Free Forever'
  },
  {
    title: 'Simple Integration',
    description: 'Easily integrate the API into your applications with minimal setup.',
    icon: '/path-to-icon/simple-integration.svg',
    alt: 'Simple Integration'
  },
  {
    title: 'AI-Powered',
    description: 'Leverage the power of GPT to enhance your applications with advanced AI.',
    icon: '/path-to-icon/ai-powered.svg',
    alt: 'AI-Powered'
  }
];

const benefitsData = [
  {
    title: 'Fast Response',
    description: 'Receive quick and accurate responses to your API requests.'
  },
  {
    title: 'Reliable Performance',
    description: 'Count on the API for consistent and reliable results.'
  },
  {
    title: 'Scalable',
    description: 'Easily scale your usage as your application grows.'
  }
];

const howItWorksData = [
  {
    title: 'Step 1: Make a Request',
    description: 'Send a request to the GPT API using simple HTTP methods.'
  },
  {
    title: 'Step 2: Get a Response',
    description: 'Receive AI-generated content based on your query.'
  },
  {
    title: 'Step 3: Integrate in Your App',
    description: 'Use the response data in your app to enhance user experience.'
  }
];

const useCasesData = [
  {
    title: 'Chatbots',
    description: 'Use the API to power smart and interactive chatbots.'
  },
  {
    title: 'Content Generation',
    description: 'Generate high-quality content for blogs, social media, and more.'
  },
  {
    title: 'Customer Support',
    description: 'Automate customer support with intelligent responses.'
  }
];


export default App;
