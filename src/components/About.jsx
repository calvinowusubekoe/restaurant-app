import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHeart, FaLeaf, FaUsers } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionImage = motion(Image);

const Feature = ({ text, icon }) => {
  return (
    <Stack direction={'row'} align={'center'} spacing={4}>
      <Icon as={icon} color="orange.400" w={5} h={5} />
      <Text fontSize={'md'} color={useColorModeValue('gray.600', 'gray.400')}>
        {text}
      </Text>
    </Stack>
  );
};

export default function About() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  return (
    <Box id="about" bg={bgColor} py={{ base: 16, md: 20 }}>
      <Container maxW={'7xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionStack
            spacing={4}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              color={headingColor}
            >
              Our Story{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, orange.400,red.400)"
                bgClip="text"
              >
                & Mission
              </Text>
            </Heading>
            <Text
              color={textColor}
              fontSize={'lg'}
              textAlign={'justify'}
              lineHeight={'tall'}
            >
              Founded with a passion for culinary excellence, our restaurant brings together 
              traditional flavors and modern innovation. We believe in creating not just meals, 
              but memorable dining experiences that celebrate the art of fine cuisine.
            </Text>
            <Stack spacing={4} mt={4}>
              <Feature
                icon={FaHeart}
                text="Passionate about quality ingredients and authentic flavors"
              />
              <Feature
                icon={FaLeaf}
                text="Committed to sustainable and eco-friendly practices"
              />
              <Feature
                icon={FaUsers}
                text="Creating memorable dining experiences since 2010"
              />
            </Stack>
          </MotionStack>

          <MotionBox
            position={'relative'}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              position={'relative'}
              height={'full'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'About Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </Box>
          </MotionBox>
        </SimpleGrid>

        <MotionStack
          spacing={4}
          mt={16}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded={'xl'}
              textAlign={'center'}
              pos={'relative'}
              _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
            >
              <Box
                color={'orange.400'}
                px={2}
                py={1}
                mb={4}
                fontSize={'3xl'}
              >
                <FaUsers />
              </Box>
              <Text fontWeight={600} color={headingColor}>Expert Chefs</Text>
              <Text color={textColor} fontSize={'sm'} mt={2}>
                Our team of passionate culinary experts brings years of experience and creativity to every dish.
              </Text>
            </Box>

            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded={'xl'}
              textAlign={'center'}
              pos={'relative'}
              _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
            >
              <Box
                color={'orange.400'}
                px={2}
                py={1}
                mb={4}
                fontSize={'3xl'}
              >
                <FaLeaf />
              </Box>
              <Text fontWeight={600} color={headingColor}>Fresh Ingredients</Text>
              <Text color={textColor} fontSize={'sm'} mt={2}>
                We source only the finest, seasonal ingredients from local suppliers to ensure quality in every bite.
              </Text>
            </Box>

            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded={'xl'}
              textAlign={'center'}
              pos={'relative'}
              _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
            >
              <Box
                color={'orange.400'}
                px={2}
                py={1}
                mb={4}
                fontSize={'3xl'}
              >
                <FaHeart />
              </Box>
              <Text fontWeight={600} color={headingColor}>Made with Love</Text>
              <Text color={textColor} fontSize={'sm'} mt={2}>
                Every dish is crafted with attention to detail and a genuine passion for culinary excellence.
              </Text>
            </Box>
          </SimpleGrid>
        </MotionStack>
      </Container>
    </Box>
  );
} 