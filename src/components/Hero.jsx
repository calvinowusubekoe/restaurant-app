import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isVideoOpen, onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure();
  const toast = useToast();

  const handleReservation = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your reservation.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      width={'full'}
      overflow={'hidden'}
      id="home"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        height="100%" // Changed from { base: "300px", md: "100%" }
        width="100%"
        left="0"
        top="0"
        bg={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="auto"
        brightness="90%"
      />

      <Container
        maxW={'7xl'}
        zIndex={10}
        position={'relative'}
        height="100%"
      >
        <Stack
          height="100%"
          alignItems={'center'}
          justifyContent={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 32, md: 40 }} // Increased padding top and bottom
          px={{ base: 4, md: 8 }}
          mt={{ base: 16, md: 0 }} // Add margin top on small screens
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              textAlign={'center'}
              color={'white'}
            >
              
              Experience Fine Dining{' '}
              <Text as={'span'} color={'orange.400'}>
                at its Best
              </Text>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text
              color={'gray.100'}
              maxW={'3xl'}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={'center'}
              px={4}
            >
              Indulge in a culinary journey that awakens your senses. Our master chefs
              create extraordinary dishes using the finest ingredients, bringing you an
              unforgettable dining experience in an elegant atmosphere.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              align={'center'}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'semibold'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
                onClick={onOpen}
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve a Table
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'semibold'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                color={'white'}
                bg={'whiteAlpha.300'}
                _hover={{ bg: 'whiteAlpha.400' }}
                onClick={onVideoOpen}
              >
                Watch Video
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="stats-container"
          >
            <Flex
              gap={{ base: 4, md: 8 }}
              mt={10}
              justify="center"
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              px={4}
            >
              <Stack align={'center'} className="stat-item">
                <Text color="white" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>4.9/5</Text>
                <Text color="gray.300" fontSize={{ base: 'xs', md: 'sm' }}>Customer Rating</Text>
              </Stack>
              <Stack align={'center'} className="stat-item">
                <Text color="white" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>15+</Text>
                <Text color="gray.300" fontSize={{ base: 'xs', md: 'sm' }}>Years of Excellence</Text>
              </Stack>
              <Stack align={'center'} className="stat-item">
                <Text color="white" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>50k+</Text>
                <Text color="gray.300" fontSize={{ base: 'xs', md: 'sm' }}>Happy Customers</Text>
              </Stack>
            </Flex>
          </motion.div>

          {/* Reservation Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay backdropFilter="blur(4px)" />
            <ModalContent>
              <ModalHeader
                bg={useColorModeValue('orange.50', 'gray.800')}
                borderTopRadius="md"
              >
                Reserve Your Table
              </ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleReservation}>
                <ModalBody py={6}>
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input placeholder="Your name" />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="your@email.com" />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Phone</FormLabel>
                      <Input type="tel" placeholder="Your phone number" />
                    </FormControl>

                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                      <FormControl isRequired>
                        <FormLabel>Date</FormLabel>
                        <Input type="date" min={new Date().toISOString().split('T')[0]} />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Time</FormLabel>
                        <Select placeholder="Select time">
                          {[...Array(14)].map((_, i) => {
                            const hour = i + 11; // Start from 11 AM
                            return (
                              <option key={hour} value={`${hour}:00`}>
                                {hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}
                              </option>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Stack>

                    <FormControl isRequired>
                      <FormLabel>Number of Guests</FormLabel>
                      <NumberInput min={1} max={20} defaultValue={2}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Special Requests</FormLabel>
                      <Input placeholder="Any special requests or dietary requirements?" />
                    </FormControl>
                  </Stack>
                </ModalBody>

                <ModalFooter
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  borderBottomRadius="md"
                >
                  <Button colorScheme="gray" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    colorScheme="orange"
                    _hover={{ bg: 'orange.500' }}
                  >
                    Reserve Now
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>

          {/* Video Modal */}
          <Modal isOpen={isVideoOpen} onClose={onVideoClose} size="2xl" isCentered>
            <ModalOverlay />
            <ModalContent bg="black" p={0}>
              <ModalCloseButton color="white" />
              <Box
                as="video"
                width="100%"
                height="400px"
                controls
                autoPlay
                borderRadius="md"
                style={{ background: "black" }}
              >
                <source src="/videos/restaurant-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </ModalContent>
          </Modal>
        </Stack>
      </Container>
    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});