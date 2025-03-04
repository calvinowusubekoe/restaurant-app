import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NavLink = ({ children, href, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    if (onClick) onClick();
  };

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      bg={isActive ? useColorModeValue('orange.50', 'gray.700') : 'transparent'}
      color={isActive ? 'orange.500' : useColorModeValue('gray.800', 'white')}
      borderBottom={isActive ? '2px' : '0'}
      borderColor="orange.500"
      href={href}
      cursor="pointer"
      fontWeight="medium"
      transition="all 0.3s ease"
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const activeSection = useScrollSpy();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex={999}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow="sm"
      transition="all 0.3s ease"
    >
      <Container maxW="7xl">
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
          justify={'space-between'}
        >
          <Flex flex={{ base: 1 }} justify={'start'}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                href="#home"
                onClick={handleNavClick}
              >
                <Box
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  color={useColorModeValue('gray.800', 'white')}
                  fontWeight="bold"
                  fontSize="xl"
                >
                  Palette Pleasers
                </Box>
              </NavLink>
            </motion.div>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            align="center"
          >
            <Flex
              display={{ base: 'none', md: 'flex' }}
              ml={10}
              align="center"
              gap={8}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isActive={activeSection === item.href.substring(1)}
                  onClick={handleNavClick}
                >
                  {item.name}
                </NavLink>
              ))}
            </Flex>

            <Button
              onClick={toggleColorMode}
              size="sm"
              variant="ghost"
              _hover={{
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            />
          </Stack>
        </Flex>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Collapse in={isOpen} animateOpacity>
                <Stack
                  bg={useColorModeValue('white', 'gray.900')}
                  p={4}
                  display={{ md: 'none' }}
                  spacing={4}
                >
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      isActive={activeSection === item.href.substring(1)}
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </Stack>
              </Collapse>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
} 