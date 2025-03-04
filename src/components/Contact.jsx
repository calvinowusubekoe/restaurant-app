import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUtensils } from 'react-icons/fa';

const ContactInfo = ({ icon, title, content, subcontent }) => {
  return (
    <HStack
      spacing={4}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      rounded="lg"
      boxShadow="md"
      w="full"
    >
      <Icon as={icon} w={6} h={6} color="orange.400" />
      <Box>
        <Text fontWeight="bold">{title}</Text>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>{content}</Text>
        {subcontent && (
          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
            {subcontent}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default function Contact() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      py={20}
      id="contact"
    >
      <Container maxW="7xl">
        <VStack spacing={4} mb={16} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight={'bold'}
            >
              Get in Touch
            </Heading>
          </motion.div>
          <Divider maxW="200px" borderColor="orange.400" borderWidth={2} />
          <Text
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            We'd love to hear from you. Send us a message and we'll respond
            as soon as possible.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          alignItems="start"
        >
          <Stack spacing={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6} align="stretch">
                <ContactInfo
                  icon={FaPhone}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  subcontent="Mon-Fri from 8am to 8pm"
                />
                <ContactInfo
                  icon={FaEnvelope}
                  title="Email"
                  content="info@yourrestaurant.com"
                  subcontent="We'll respond within 24 hours"
                />
                <ContactInfo
                  icon={FaMapMarkerAlt}
                  title="Location"
                  content="123 Gourmet Street, Foodie City, FC 12345"
                  subcontent="Find us on Google Maps"
                />
                <ContactInfo
                  icon={FaClock}
                  title="Opening Hours"
                  content="Mon-Sun: 11:00 AM - 10:00 PM"
                  subcontent="Kitchen closes at 9:30 PM"
                />
                <ContactInfo
                  icon={FaUtensils}
                  title="Reservations"
                  content="Recommended for groups"
                  subcontent="Special events & private dining available"
                />
              </VStack>
            </motion.div>
          </Stack>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={{ base: 6, md: 8 }}
            rounded="lg"
            boxShadow="xl"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} w="full">
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="John"
                      size="lg"
                      _hover={{
                        borderColor: 'orange.300',
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Doe"
                      size="lg"
                      _hover={{
                        borderColor: 'orange.300',
                      }}
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    size="lg"
                    _hover={{
                      borderColor: 'orange.300',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    size="lg"
                    _hover={{
                      borderColor: 'orange.300',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Your message"
                    rows={6}
                    size="lg"
                    _hover={{
                      borderColor: 'orange.300',
                    }}
                  />
                </FormControl>

                <Button
                  colorScheme="orange"
                  size="lg"
                  w="full"
                  h={14}
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </Button>
              </VStack>
            </motion.div>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
} 