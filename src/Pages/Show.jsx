import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';

const Show = () => {
  const [data, setData]=useState([]);
  const getData=()=>{
    axios.get(`https://lime-bright-fox.cyclic.app/`).then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((er)=>console.log(er))
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <Navbar/>
      <Text fontSize='4xl'>The form data </Text>
      <TableContainer>
  <Table variant='striped' colorScheme='teal' size="sm">
   
    <Thead >
      <Tr>
        <Th>Sr.No</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Location</Th>
        <Th>No. of travellers</Th>
        <Th>Budget per person</Th>

      </Tr>
    </Thead>
    <Tbody>
      {data.map((item,i)=>{
        return <Tr>
          <Td>{i+1}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.location}</Td>
        <Td>{item.no_of_travellers}</Td>
        <Td>{`$${item.budget}`}</Td>
        
        </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>




    </div>
  )
}

export default Show
