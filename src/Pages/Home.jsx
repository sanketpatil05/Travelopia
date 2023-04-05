import { Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  Select,
  Button,
} from '@chakra-ui/react'
export const Home = () => {
const [data, setData]=useState({})

 const handleChange=(e)=>{
    const {id, value}=e.target; 
     console.log(id, value)

     setData({...data, [id]:value})
 }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <div>

   
 <Navbar/>
 <Container>
   <Box>
    <Text fontSize='4xl'>Fill the following form</Text>
   </Box>
   <Box>

   
 <FormControl>
 <FormLabel>Name</FormLabel>
  <Input type='text' id='name' onChange={handleChange} />
  <FormLabel>Email address</FormLabel>
  <Input type='email' id='email' onChange={handleChange} />
  <FormLabel>Where do you want to go?</FormLabel>
  <Select placeholder='Select option' id="location" onChange={handleChange}>
  <option value='India'>India</option>
  <option value='Africa'>Africa</option>
  <option value='Europe'>Europe</option>
</Select>
<FormLabel>No. of travellers</FormLabel>
<Input type='number' id='no_of_travellers'onChange={handleChange} />
 <FormLabel>Budget per person (In $)</FormLabel>
  <Input type="number" id='budget' onChange={handleChange}/>
  <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handlesubmit}
          >
            Submit
          </Button>
</FormControl>
</Box>
</Container>
    </div>
  )
}
