import { Input, FormControl, FormLabel, FormHelperText, Center, Box, Stack, Button } from "@chakra-ui/react";

export const Forgot = () => {
    return (
            <Center height="100vh">
              <Box width="100%" maxWidth="400px" p={4} borderWidth={1} borderRadius="md" boxShadow="0 0 10px black">
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>New Password</FormLabel>
                    <Input type='password' />
                    <FormHelperText>We'll never share your password.</FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' />
                    <FormHelperText>We'll never share your password.</FormHelperText>
                  </FormControl>
                  <Button backgroundColor="black" colorScheme="black" width="full">Update</Button>
                </Stack>
              </Box>
            </Center>
          
        
       
        
       
    );
};