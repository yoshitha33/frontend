

// // // import {Input,FormLabel,FormControl,FormHelperText} from "@chakra-ui/react"

// // // export const SignIn = ()=>{

// // //     return(

// // //         <>
// // //         <FormControl>
// // //   <FormLabel>Email address</FormLabel>
// // //   <Input type='email' />
// // //   <FormHelperText>We'll never share your email.</FormHelperText>
// // // </FormControl>


// // // <FormControl>
// // //   <FormLabel>password</FormLabel>
// // //   <Input type='number' />
// // //   <FormHelperText>We'll never share your email.</FormHelperText>
// // // </FormControl>
        
// // //         </>
// // //     )
// // // }

// // import { Box, Button, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
// // import axios from 'axios';
// // import {api} from "../actions/api";
// // import { useState} from "react";
// // export const SignIn=()=>{
// //     const [name,setName]=useState()
// //     const [password,setPassword]=useState()

// //     const Signin = async() => {
// //     await axios.post(api+"/SignIn",{name,password})
// //         .then((res)=>{
// //             if(res.data.message){
// //                 console.log(res.data.values)
// //                 alert("login sucessfully")
// //             } else {
// //                 alert("user not found")
// //                 window.location.href="/signup"
// //             }
// //         })
// //         .catch((e)=>console.log(e))
// //     }
// //     return(

// //         <Box 
// //             maxW="400px" 
// //             mx="auto" 
// //             mt="100px" 
// //             p="6" 
// //             borderWidth="1px" 
// //             borderRadius="lg" 
// //             boxShadow="lg" 
// //             textAlign="center"
// //         >
// //             <FormControl mb={4}>
// //                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
// //                     Email Address
// //                 </FormLabel>
// //                 <Input 
// //                     type="email" 
// //                     placeholder="Enter your email" 
// //                     focusBorderColor="teal.500"
// //                     borderRadius="md"
// //                     onChange={(e)=>setName(e.target.value)}
// //                 />
// //                 <FormHelperText color="gray.500">
// //                     We'll never share your email.
// //                 </FormHelperText>
// //             </FormControl>

// //             <FormControl mb={6}>
// //                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
// //                     Password
// //                 </FormLabel>
// //                 <Input 
// //                     type="password" 
// //                     placeholder="Enter your password" 
// //                     focusBorderColor="teal.500"
// //                     borderRadius="md"
// //                     onChange={(e)=>setPassword(e.target.value)}
// //                 />
// //                 <FormHelperText color="gray.500">
// //                     Ensure your password is strong and secure.
// //                 </FormHelperText>
// //             </FormControl>

// //             <Button 
// //                 colorScheme="teal" 
// //                 size="lg" 
// //                 width="100%" 
// //                 borderRadius="md" 
// //                 onClick={Signin}
// //             >
// //                 Sign In
// //             </Button>
// //         </Box>
// //     );
// // }




// // import { 
// //     Card, 
// //     CardBody, 
// //     FormControl, 
// //     FormHelperText, 
// //     FormLabel, 
// //     Input, 
// //     Button, 
// //     VStack, 
// //     Box 
// // } from "@chakra-ui/react";
// // import axios from 'axios'
// // import { api } from "../actions/api";
// // import { useState } from "react";

// // export const SignIn = () => {
// //     const [name,setName]=useState()
// //     const [password,setPassword]=useState()

// //     const Signin=async()=>{
// //         await axios.post(api+"/signin",{name,password})
// //         .then((res)=>{
// //             if(res.data.message){
// //                 console.log(res.data.values)
// //                 alert(res.data.message)
// //             } else {
// //                 alert(res.data.error)
// //                 window.location.href="/signup"
// //             }
// //         })
// //         .catch((e)=>console.log(e))
// //     }

// //     return (
// //         <Box 
// //             height="100vh" 
// //             display="flex" 
// //             justifyContent="center" 
// //             alignItems="center" 
// //             bg="gray.50"
// //         >
// //             <Card 
// //                 width="400px" 
// //                 boxShadow="lg" 
// //                 p={6} 
// //                 borderRadius="md"
// //             >
// //                 <CardBody>
// //                     <VStack spacing={4} align="stretch">
// //                         <FormControl id="email">
// //                             <FormLabel>Email address</FormLabel>
// //                
//             //  <Input type="email" focusBorderColor="teal.500" onChange={(e)=>setName(e.target.value)} />
// //                             <FormHelperText>We'll never share your email.</FormHelperText>
// //                         </FormControl>

// //                         <FormControl id="password">
// //                             <FormLabel>Password</FormLabel>
// //                             <Input type="password" focusBorderColor="teal.500" onChange={(e)=>setPassword(e.target.value)}/>
// //                             <FormHelperText>We'll never share your password.</FormHelperText>
// //                         </FormControl>

// //                         <Button colorScheme="teal" size="lg" mt={4} onClick={Signin}>Sign In</Button>

                        
// //                         <Text textAlign="center">
// //                         <p>New User</p> <Link color="teal.500" href="/signup">SignUp</Link>
// //                     </Text>
// //                     </VStack>
// //                 </CardBody>
// //             </Card>
// //         </Box>
// //     );
// // };



// import { 
//     Card, 
//     CardBody, 
//     FormControl, 
//     FormHelperText, 
//     FormLabel, 
//     Input, 
//     Button, 
//     VStack, 
//     Box, 
//     Text
// } from "@chakra-ui/react";
// import axios from 'axios'
// import { api } from "../actions/api";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export const SignIn = () => {
//     const [name,setName]=useState()
//     const [password,setPassword]=useState()
//     const nav=useNavigate()

//     const Signin=async()=>{
//         await axios.post(api+"/signin",{name,password})
//         .then((res)=>{
//             console.log(res?.data)
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert(res.data.message)
//                 nav('/home')
//             } else {
//                 alert(res.data.error)
//                 // window.location.href="/signup"
//                 nav('/signup')
//             }
//         })
//         .catch((e)=>console.log(e))
//     }

//     return (
        








//     );
// };