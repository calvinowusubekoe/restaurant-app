import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2} color={useColorModeValue('gray.900', 'gray.50')}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={useColorModeValue('gray.800', 'white')}
              >
                Your Restaurant
              </Text>
              <Text fontSize="sm" mt={2} color={textColor} maxW={'300px'}>
                Experience the perfect blend of exquisite flavors and elegant ambiance at our award-winning restaurant.
              </Text>
            </Box>
            <Stack direction={'row'} spacing={6}>
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((social, index) => (
                <Link
                  key={index}
                  href={'#'}
                  isExternal
                  _hover={{
                    transform: 'translateY(-2px)',
                    color: 'orange.400',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon
                    as={social}
                    w={5}
                    h={5}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    _hover={{ color: 'orange.400' }}
                  />
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            {['About Us', 'Menu', 'Reservations', 'Private Events', 'Gift Cards'].map((text) => (
              <Link
                key={text}
                href={'#'}
                color={textColor}
                _hover={{
                  color: 'orange.400',
                  textDecoration: 'none',
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Opening Hours</ListHeader>
            <VStack align="flex-start" spacing={1} color={textColor}>
              <Text>Monday - Friday</Text>
              <Text fontWeight="500">11:00 AM - 10:00 PM</Text>
              <Text mt={2}>Saturday - Sunday</Text>
              <Text fontWeight="500">10:00 AM - 11:00 PM</Text>
            </VStack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Newsletter</ListHeader>
            <Text color={textColor}>
              Subscribe to stay updated with our latest offers and events.
            </Text>
            <Stack direction={'row'} width="100%">
              <InputGroup size="md">
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  border={0}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.700'),
                    outline: 'none',
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    bg="orange.400"
                    color="white"
                    _hover={{
                      bg: 'orange.500',
                    }}
                  >
                    Join
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>

            <Stack spacing={3} mt={4}>
              <Stack direction="row" align="center" color={textColor}>
                <Icon as={FaPhone} />
                <Text>+1 (555) 123-4567</Text>
              </Stack>
              <Stack direction="row" align="center" color={textColor}>
                <Icon as={FaEnvelope} />
                <Text>info@yourrestaurant.com</Text>
              </Stack>
              <Stack direction="row" align="center" color={textColor}>
                <Icon as={FaMapMarkerAlt} />
                <Text>123 Gourmet Street, Foodie City, FC 12345</Text>
              </Stack>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Divider my={6} borderColor={borderColor} />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          color={textColor}
          fontSize="sm"
          spacing={{ base: 4, md: 0 }}
        >
          <Text>© {new Date().getFullYear()} Your Restaurant. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'} _hover={{ color: 'orange.400' }}>Privacy Policy</Link>
            <Link href={'#'} _hover={{ color: 'orange.400' }}>Terms of Service</Link>
            <Link href={'#'} _hover={{ color: 'orange.400' }}>Contact Us</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
} 