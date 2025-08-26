// srcimport React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CorporateEvents from "./pages/Corporate/CorporateEvents";
import Payment from "./pages/Corporate/Payment";
import BookingConfirmation from "./pages/Corporate/BookingConfirmation";
import Birthday from "./pages/Birthday/Birthday";
import BirthdayBooking from "./pages/Birthday/BirthdayBooking";
import Wedding from "./pages/Wedding/Wedding";
import Concert from "./pages/Concert/Concert";
import ConcertPaymentSuccess from "./pages/Concert/PaymentSuccess";
import CulturalFestival from "./pages/Cultural/CulturalFestival";
import CulturalBooking from "./pages/Cultural/CulturalBooking";
import SportsEvents from "./pages/Sports/SportEvents";
import SportsBooking from "./pages/Sports/SportsBooking";
import WeddingBooking from "./pages/Wedding/WeddingBooking";
import WeddingPayment from "./pages/Wedding/WeddingPayment";
import Booking from "./pages/Corporate/Booking";
import ConcertBooking from "./pages/Concert/ConcertBooking";
import SportsPaymentSuccess from "./pages/Sports/sportsPaymentSuccess";


function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar title="Indian Events" />

      <Routes>
        <Route path="/" element={<Hero />} />   {/* Default Page */}
        <Route path="/services" element={<Services />} />
        <Route path="/CorporateEvents" element={<CorporateEvents />} />
        <Route path="/Corporate/Booking" element={<Booking />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
        <Route path= "/Birthday" element = {<Birthday />} />
        <Route path= "/BirthdayBooking" element = {<BirthdayBooking />} />
        <Route path= "/Wedding" element = {<Wedding />} />      
        <Route path= "/WeddingBooking" element = {<WeddingBooking />} />      
        <Route path= "/WeddingPayment" element = {<WeddingPayment />} />      
        <Route path= "/Concert" element = {<Concert />} />     
        <Route path="/concert/payment-success/:orderId" element={<ConcertPaymentSuccess />} />
        {/* <Route path= "/PaymentSuccess" element = {<PaymentSuccess/>} />      */}
        <Route path= "/ConcertBooking" element = {<ConcertBooking />} />     
        <Route path= "/CulturalFestival" element = {<CulturalFestival />} />     
        <Route path= "/CulturalBooking" element = {<CulturalBooking />} />     
        <Route path= "/SportEvents" element = {<SportsEvents />} />     
        <Route path= "/SportsBooking" element = {<SportsBooking />} /> 
      <Route path= "/sports-payment-success/:orderId" element={<SportsPaymentSuccess />} /> 

      
            
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        
      
      
      </Routes>
    {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;










































// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import  Register  from "./components/Register";
// import Login from "./components/Login";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState } from "react";



// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <About />
//       <Contact />
//       <Footer />
//       {/* <Register/>  */}
//       {/* <Login/> */}
//        </>
//        );
// }


// export default App;



 {/* //         <Router>
//           <Routes>
//             {<navbarprops title="Changed"></navbarprops>}
//           <Route path ="/Hero" element={<Hero/> } />
//           <Route path ="/Services" element={<Services/> } />
//           <Route path ="/About" element={<About/> } />
//           <Route path ="/Contact" element={<Contact/> } />
//           <Route path ="/Footer" element={<Footer/> } />
//           <Route path="/" element = {<Register />} />
//           <Route path ="/Register" element={<Register/> } />
//           <Route path ="/Login" element={<Login/> } />
//           </Routes>
         
//         </Router> * */}
          
          



        






//     </>
//   );
// }

// export default App;

















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App






