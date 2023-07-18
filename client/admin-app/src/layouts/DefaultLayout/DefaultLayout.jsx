import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Collapse } from 'react-bootstrap'
import './DefaultLayout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/navbar/Navbar";
import 'boxicons'

const DefaultLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="default-layout">
    <div className='admin_html'>
     <div className='admin_body'>
     <div className='admin_header'>
      <Header setOpen={setOpen} open={open}/>
          </div>
          <div className='admin_main'>
               <Collapse in={open} dimension="width">
                    <div className='admin_nav'>
                    {/* ======================= */}
                    <Navbar/>
                    {/* ======================= */}
                    </div>
               </Collapse>
               <div className='admin_content'>
                    {/* ======================= */}
                    <main className="content">{children}</main>
                    {/* ======================= */}
               </div>
          </div>
      {/* <Footer /> */}
    </div>
    </div>
     </div>
  );
};

export default DefaultLayout;
