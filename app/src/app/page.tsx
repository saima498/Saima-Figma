import Navbar from '../components/Navbar'
import Ourproduct from '../components/Ourproduct'

import Rooms from '../components/Rooms'
import Furnitor from '../components/Furnitor'
import Footer from '../components/Footer'





      
   

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

    {/* Product Section */}
      <Ourproduct/>
    
      <Rooms/>
      <Furnitor/>

      <Footer/>
   
    
      </div>
     ) }