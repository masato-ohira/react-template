import { ChakraProvider, Container, Button, Box } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Container minW={'container.lg'} py={10}>
          <Box shadow={'md'} p={8}>
            <Button>button</Button>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
