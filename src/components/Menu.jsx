import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Image,
  Container,
  Badge,
  HStack,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const MenuItem = ({ title, description, price, image, rating, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        position="relative"
      >
        <Box
          h={'235px'}
          pos={'relative'}
          overflow={'hidden'}
        >
          <Image
            src={image}
            alt={title}
            w="full"
            h="full"
            objectFit="cover"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
          <Box
            position="absolute"
            top={2}
            right={2}
            bg="orange.500"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
          >
            ${price}
          </Box>
        </Box>

        <Box p={6}>
          <VStack align="start" spacing={2}>
            <HStack justify="space-between" w="full">
              <Badge colorScheme="orange" fontSize="0.8em" px={2} py={1}>
                {category}
              </Badge>
              <HStack spacing={1}>
                <Icon as={FaStar} color="orange.400" />
                <Text fontSize="sm" fontWeight="bold">
                  {rating}
                </Text>
              </HStack>
            </HStack>

            <Heading
              fontSize={'xl'}
              fontWeight={500}
              fontFamily={'body'}
              color={useColorModeValue('gray.700', 'white')}
            >
              {title}
            </Heading>

            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'sm'}
              lineHeight={1.6}
            >
              {description}
            </Text>
          </VStack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default function Menu() {
  const menuItems = [
    {
      title: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs and lemon butter sauce, served with seasonal vegetables and quinoa',
      price: '29.99',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      category: 'Seafood',
    },
    {
      title: 'Beef Tenderloin',
      description: 'Premium cut served with roasted vegetables, truffle mashed potatoes, and red wine reduction',
      price: '34.99',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      category: 'Meat',
    },
    {
      title: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, parmesan, and white truffle oil',
      price: '24.99',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      category: 'Vegetarian',
    },
    {
      title: 'Lobster Thermidor',
      description: 'Fresh lobster in a rich brandy cream sauce, topped with Gruyère cheese',
      price: '42.99',
      image: 'https://res.cloudinary.com/dswfnaydo/image/upload/v1741111785/A_gourmet_Lobster_Thermidor_dish_elegantly_plated._lgdy5w.webp',
      rating: '4.9',
      category: 'Seafood',
    },
    {
      title: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
      price: '32.99',
      image: 'https://res.cloudinary.com/dswfnaydo/image/upload/v1741111410/A_delicious_plate_of_creamy_pasta_aijzme.webp',
      rating: '4.8',
      category: 'Meat',
    },
    {
      title: 'Vegetable Wellington',
      description: 'Roasted vegetables and mushroom duxelles wrapped in crispy puff pastry',
      price: '26.99',
      image: 'https://res.cloudinary.com/dswfnaydo/image/upload/v1741111409/A_vibrant_vegetarian_salad_served_in_a_rustic_bowl._lmjmxq.webp',
      rating: '4.6',
      category: 'Vegetarian',
    },
  ];

  return (
    <Box
      py={20}
      bg={useColorModeValue('gray.50', 'gray.900')}
      id="menu"
    >
      <Container maxW="7xl">
        <VStack spacing={4} mb={16}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight={'bold'}
              textAlign="center"
            >
              Our Signature Dishes
            </Heading>
          </motion.div>
          <Divider maxW="200px" borderColor="orange.400" borderWidth={2} />
          <Text
            color={useColorModeValue('gray.600', 'gray.400')}
            textAlign="center"
            maxW="2xl"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Experience culinary excellence with our carefully curated menu featuring the finest ingredients and expert preparation
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
          pt={8}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuItem {...item} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 