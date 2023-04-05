import { Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
// creating routes for all the pages
const Navbar = () => {
  return (
    <div>
       <div style={{display:"flex", gap:"42%" , backgroundColor:"black", justifyContent:"space-evenly"}}>
   
   <Link to={"/"}><div> <Text fontSize={"20px"} color="blue">Home</Text></div></Link>
     <Link to={"/show"} ><div><Text fontSize={"20px"} color="blue">Show Data</Text></div></Link>
   
     </div>
    </div>
  )
}

export default Navbar
