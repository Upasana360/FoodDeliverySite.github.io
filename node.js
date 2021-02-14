const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Food Delivery Website</title>
      <link rel="stylesheet" href="style1.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap" rel="stylesheet">
      <link rel="stylesheet" media="screen and (max-width: 1000px)" href="phone.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>/* CSS Reset */
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      
      html{
          scroll-behavior: smooth;
      }
      
      /* CSS Variables */
      :root{
          --navbar-height: 59px;
      }
      
      /* Navigation Bar */
      #navbar{
          display: flex;
          align-items: center;
          position: sticky;
          top: 0px;
      }
      #navbar::before{
          content: " ";
          background-color: rgb(1, 1, 12);
          position: absolute;
          top:0px;
          left:0px;
          height:100%;
          width: 100%;
          z-index: -1;
          opacity: 0.7;
      
      }
      /* NaviagtionBar Logo and image */
      #logo{
          margin: 10pxpx 35px;
      
      }
      #logo img{
          height:60px;
          margin:8px 26px;
          /* border:2px solid white; */
          border-radius: 34px;
      }
      /* NavigationBar ListStyling */
      #navbar ul{
          display: flex;
          font-family:'Baloo Bhaina 2', cursive;
      }
      #navbar ul li{
          list-style: none;
          font-size: 1.3rem;
      }
      #navbar ul li a{
          color:white;
          display:block;
          padding:3px 22px;
          border-radius: 20px;
          text-decoration: none;
      }
      #navbar ul li a:hover{
          background-color: white;
          color:black;
      }
      /* Home section */
      #Home{
          display: flex;
          flex-direction: column;
          padding:10px 200px;
          height:536px;
          justify-content: center;
          align-items: center;
      }
      #Home::before{
          content: " ";
          position: absolute;
          background: url('4.jpg') no-repeat center center/cover;
          height:100%;
          /* top:0px;
          left:0px; */
          width:100%;
          z-index: -1;
          opacity: 0.7px;
      }
      #Home h1{
          color:white;
          text-align: center;
          font-family:'Baloo Bhaina 2', cursive;
      }
      #Home p{
          color:white;
          text-align: center;
          font-size: 1rem;
          font-family:'Baloo Bhaina 2', cursive;
      }
      .button{
          background-color: rgb(22, 14, 14);
          color:white;
          border:2px solid white;
          border-radius: 24px;
          cursor: pointer;
          padding:12px 25px;
          margin:36px;
          font-size: 1.1rem;
      }
      .button:hover{ background-color: brown;
          border:2px solid black;
      
      }
      /*Services Section*/
      #services{
      margin:34px;
      display:flex;
      
      }
      #services .box{
          border:2px solid black;
          padding:40px;
          margin:20px 20px;
          border-radius:10px;
          background:rgb(231, 215, 215);
          /* margin-bottom:10px; */
          
      }
      #services .box img{
          height:160px;
          margin:auto;
          display:block;
      }
      #services-container h1{
          text-align: center;
      }
      #services-container{
          display: flex;
          flex-direction: column;
      }
      #services-container::before{
          content: " ";
          position: absolute;
          background: url('7.jpg') no-repeat center center/cover;
          height:100%;
          width:100%;
          z-index: -1;
          opacity: 0.7px;
      
      }
      #services .box h2{
          text-align: center;
          text-decoration: underline;
      }
      /* Client section */
      #client-section{
          position: relative;
      }
      #client-section::before{
          content: " ";
          position: absolute;
          background: url('Back4.jpg') no-repeat center center/cover;
          height:100%;
          width:100%;
          z-index: -1;
          opacity: 0.7;
        
      
      }
      #client-section h1{
          text-align: center;
      }
      #clients{
          display: flex;
          align-items: center;
          justify-content: center;
          padding:30px;
      }
      .client-item{
          padding:53px;
      
      }
      #clients img{
          height:125px;
          border-radius: 60px;
          /* border:2px solid black; */
      }
      /* Contact Section */
      #contact{
          position: relative;
      }
      #contact::before{
          content:" ";
          position:absolute;
          background: url('Back1.jpg') no-repeat center center/cover;
          height: 100%;
          width:100%;
          z-index: -1;
          opacity: 0.5;
      }
      #contact-box{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
      }
      #contact-box input,
      #contact-box textarea{
          width:100%;
          padding: 0.5rem;
          border-radius: 15px;
          font-size:1.1rem;
      }
      #contact-box form{
          width:40%;
      }
      #contact-box label{
          font-size:1.3rem;
         
      }
      footer{
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 30px;
       position: relative;
       color: white;
      }
      footer::before{
          content:" ";
          background-color:black;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -1;
         
      }
      /* Utility classes */
      h-primary{
          font-size:3rem;
          padding:12px;
      }
      h-secondary{
          font-size:2.1rem;
          padding:12px;
      } 
      .h-primary{
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 3.8rem;
          padding:12px;
      }
      .h-secondary{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 2rem;
          padding:12px;
      }
      #contact h1{
          text-align: center;
      }
      /* footer */
      #services h2:hover{
          color:blue;
      
      
      }
      .fa{
         margin-right: 8px;
      }
      .subcontainer{
          display: none;
      }
      /* .navbar ul li:hover .subcontainer
      {
          display:block;
          position: absolute;
          background: cadetblue;
          margin-top: 10px;
          margin-left: 10px;
      } */
      .item:hover .subcontainer{
          display:block;
          position: absolute;
          background: rgb(101, 161, 23);
          margin-top: 10px;
          margin-left: 10px;
      }
      .subcontainer ul li{
      width:150px;
      padding:5px;
      border-bottom: 1px dotted #fff;
      background: transparent;
      text-align: left;
      border-radius: 2px;
      }
      .item:hover .subcontainer ul {display:flex;
          flex-direction: column;
      margin:5px;
      }
      .item:hover .subcontainer ul:last-child{
          border-bottom: none;
      }
      
      </style>
  </head>
  
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="1.jpg" alt="My Online Meal.com">
          </div>
          <ul>
              <li class="item">
                  <a href="#Home"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
              </li>
              <li class="item">
                  <a href="#services-container"><i class="fa fa-user" aria-hidden="true"></i>Services</a>
              </li>
              <li class="item">
                  <a href="#client-section"><i class="fa fa-address-book-o" aria-hidden="true"></i>Our Client</a>
              </li>
              <li class="item">
                  <a href="#contact"><i class="fa fa-phone-square" aria-hidden="true"></i>Conatct Us</a>
                  <div class="subcontainer">
              <ul><li><a href="#">Email Us</a></li>
              <li><a href="#">Call Us</a></li>
              <li><a href="#">Text Us</li></a></ul>
              </div>
              </li>
          </ul>
      </nav>
      <section id="Home">
          <h1 class="h-primary">Welcome to my online Meal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vel Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nam error iste maxime ex eveniet natus
              culpa quibusdam fugiat fugit.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vel Lorem ipsum dolor sit amet.</p>
          <button class="button">Order Now</button>
      </section>
      <section id="services-container">
          <h1 id="h-primaryCenter">Oue Services</h1>
          <div id="services">
              <div class="box"><img src="3.jpg" alt=" ">
                  <h2 class="h-secondaryCenter">Cake Section</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur
                      consequuntur aliquam voluptate ratione doloribus cupiditate quisquam neque dolore iusto! Doloremque,
                      corrupti iste voluptatem aliquam odio esse fuga, deleniti inventore cum, necessitatibus autem dolor.
                  </p>
              </div>
              <div class="box"><img src="5.jpg" alt=" ">
                  <h2 class="h-secondaryCenter">Cookies Section</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur
                      consequuntur aliquam voluptate ratione doloribus cupiditate quisquam neque dolore iusto! Doloremque,
                      corrupti iste voluptatem aliquam odio esse fuga, deleniti inventore cum, necessitatibus autem dolor.
                  </p>
              </div>
              <div class="box"><img src="6.jpg" alt=" ">
                  <h2 class="h-secondaryCenter">Snakes Section</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur
                      consequuntur aliquam voluptate ratione doloribus cupiditate quisquam neque dolore iusto! Doloremque,
                      corrupti iste voluptatem aliquam odio esse fuga, deleniti inventore cum, necessitatibus autem dolor.
                  </p>
              </div>
          </div>
  
      </section>
      <section id="client-section">
          <h1 class="h-primaryCenter">Our Clients</h1>
          <div id="clients">
              <div class="client-item"><img src="logo1.jpg" alt="Our clients"></div>
              <div class="client-item"><img src="logo2.jpg" alt="Our clients"></div>
              <div class="client-item"><img src="logo3.jpg" alt="Our clients"></div>
              <div class="client-item"><img src="logo1.jpg" alt="Our clients"></div>
          </div>
      </section>
      <section id="contact">
          <h1 class="h-primaryCenter">Contat Us</h1>
          <div id="contact-box">
              <form action="">
                  <div class="form-group"><label for="name">Name:</label>
                      <input type="text" name="name" id="name" placeholder="Enter Your name">
                  </div>
                  <div class="form-group"><label for="email">Email:</label>
                      <input type="text" name="email" id="email" placeholder="Enter Your Email">
                  </div>
                  <div class="form-group"><label for="PhoneNo">PhoneNo:</label>
                      <input type="text" name="PhoneNo" id="PhoneNo" placeholder="Enter Your PhoneNo">
                  </div>
                  <div class="form-group"><label for="message">Message:</label>
                      <textarea name="message" id="message" cols="30" rows="10"
                          placeholder="Enter Your Message Here"></textarea>
                  </div>
              </form>
          </div>
      </section>
      <footer>
          <div class="center">
              Copy right &copy; www.myOnline Meal.com. All rights reserved!
          </div>
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});