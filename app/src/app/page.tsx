import Navbar from "../components/Navbar";

import Range from "../components/Range";
import Ourproduct from '../components/Ourproduct'
import Product from '../components/Product'
import Rooms from '../components/Rooms'
import Furnitor from '../components/Furnitor'


export default function Home() {
  return (
    <div>
    
    <Navbar/>

      {/* Range Section */}
      <Range />

      {/* Product Section */}
      <Ourproduct/>
      <Product/>
      <Rooms/>
      <Furnitor/>
      
    
      </div>
     ) }