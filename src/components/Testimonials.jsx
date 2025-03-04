import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Icon,
  Flex,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Critic',
    content: 'The attention to detail in every dish is remarkable. The fusion of flavors creates an unforgettable dining experience that keeps me coming back.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'Not just a meal, but a journey through flavors. The ambiance perfectly complements the exceptional cuisine. Their service is top-notch!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    content: 'Each visit brings a new culinary adventure. The seasonal menu keeps things exciting, and the wine pairing suggestions are always perfect.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const quoteColor = useColorModeValue('orange.200', 'orange.500');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box bg={bgColor} py={12} id="testimonials">
      <Container maxW={'7xl'}>
        <Stack spacing={0} align={'center'} mb={8}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign={'center'}
            mb={2}
          >
            What Our Customers Say
          </Heading>
          <Text color={textColor} textAlign={'center'} maxW={'2xl'} fontSize={'md'}>
            Don't just take our word for it - hear what our valued customers have to share about their dining experiences.
          </Text>
        </Stack>

        <Box position="relative" px={4}>
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentTestimonial === index ? 1 : 0,
                y: currentTestimonial === index ? 0 : 20,
                position: currentTestimonial === index ? 'relative' : 'absolute',
              }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                top: 0,
                display: currentTestimonial === index ? 'block' : 'none'
              }}
            >
              <Card
                maxW={'600px'}
                mx={'auto'}
                bg={cardBg}
                boxShadow={'lg'}
                rounded={'xl'}
                border="1px solid"
                borderColor={borderColor}
                p={4}
                position="relative"
                overflow="hidden"
              >
                <CardBody p={4}>
                  <Stack spacing={6} align={'center'} position="relative">
                    <Icon 
                      as={FaQuoteLeft} 
                      w={8} 
                      h={8} 
                      color={quoteColor}
                      position="absolute"
                      top={0}
                      left={2}
                      opacity={0.3}
                    />
                    
                    <Avatar
                      src={testimonial.avatar}
                      size={'lg'}
                      border={'2px solid'}
                      borderColor={'orange.400'}
                    />

                    <Stack spacing={2} align={'center'} maxW={'500px'}>
                      <Text
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight={'medium'}
                        textAlign={'center'}
                        color={useColorModeValue('gray.800', 'white')}
                        position="relative"
                        zIndex={1}
                        lineHeight="1.6"
                      >
                        {testimonial.content}
                      </Text>

                      <Stack spacing={1} align={'center'} pt={2}>
                        <Text fontWeight={600} fontSize={'md'}>
                          {testimonial.name}
                        </Text>
                        <Text fontSize={'sm'} color={textColor}>
                          {testimonial.role}
                        </Text>
                        <Flex mt={1}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              as={FaStar}
                              w={3.5}
                              h={3.5}
                              color={'orange.400'}
                              mr={0.5}
                            />
                          ))}
                        </Flex>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardBody>
              </Card>
            </motion.div>
          ))}

          {/* Dots indicator */}
          <Flex justify="center" mt={4}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                as="button"
                mx={1}
                w={1.5}
                h={1.5}
                borderRadius="full"
                bg={currentTestimonial === index ? 'orange.500' : 'gray.300'}
                onClick={() => setCurrentTestimonial(index)}
                transition="background-color 0.3s"
                _hover={{ bg: 'orange.400' }}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
} 