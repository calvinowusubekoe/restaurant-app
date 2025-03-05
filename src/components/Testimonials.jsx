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
  SimpleGrid,
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
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const quoteColor = useColorModeValue('orange.200', 'orange.500');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
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
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
} 