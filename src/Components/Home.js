import React from "react";
import "./Styles/Home.css";
import { Link } from "react-router-dom";
import food from "./images/ab.png";
import line from "./images/line.png";
import black from "./images/black.png";
import fork from "./images/fork.png";
import spl from "./images/spl.png";
import pizza from "./images/pizza.png";
import reserve from "./images/reserve.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h2>Delightfull Experience</h2>
          <h1>Welcome to 'Retro Restaurants'</h1>
          <Link to="book" className="home-button">
            Reservation
          </Link>
        </div>
        <img src={line} alt="line" />
      </div>
      <div className="home-about">
        <img src={line} alt="line" className="reddash" />
        <img src={food} alt="food" className="home-img" />
        <img src={fork} alt="fork" className="fork" />
        <div className="about-content">
          <h2>honest, flavorful food</h2>
          <h1>A Few Words About Our Restaurant</h1>
          <img src={black} alt="dash" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            ipsum. Voluptatem sapiente cumque est, amet culpa natus molestiae
            quia, fugiat excepturi rerum laboriosam! Quidem suscipit odio
            exercitationem voluptate! Fugiat eos enim cupiditate alias possimus
            voluptate. Quidem quasi dolor accusamus voluptatem! Odio, non!
            Dolores, officia. Molestias aliquid earum optio recusandae quae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            officia! A aperiam sequi ducimus, natus laboriosam dolore nam soluta
            ut explicabo veritatis ea vitae? Commodi quia quod voluptas repellat
            aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Beatae, libero.
          </p>
          <Link to="/">Read More</Link>
        </div>
      </div>
      <div className="demo-menu">
        <div className="menu-content">
          <h2>eat good food</h2>
          <h1>Have A Quick Look At Our Menus</h1>
          <img src={black} alt="dash" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reiciendis veniam consequatur saepe esse facere nemo, doloribus
            omnis pariatur a iste velit similique dignissimos molestias rem
            aliquid, atque modi dolor?
          </p>
        </div>
        <div className="chef-spl">
          <div className="items">
            <h1>Chef Recommend</h1>
            <Link to="/">
              Lamb Salad with Fregola​<span>......................$32.5</span>​
            </Link>
            <p>Lamb / Fregola</p>
            <Link to="/">
              Pappardelle with Sea Urchin & Cauliflower<span>.....$59.5</span>​
            </Link>
            <p>Pappardelle / Urchin / Cauliflower</p>
            <Link to="/">
              Scallop Sashimi with Meyer Lemon Confit<span>.......$40.5</span>
            </Link>
            <p>Sashimi / Lemon</p>
            <Link to="/">
              Braised Leeks with Mozzarella & Fried Egg<span>.....$37.5</span>​
            </Link>
            <p>Leeks / Mozzarella / Egg</p>
          </div>
          <div className="item-img">
            <img src={spl} alt="spl" width="400px" className="spl" />
          </div>
          <img src={line} alt="line" className="reddash" />
        </div>

        <div className="chef-main">
          <div className="main-img">
            <img src={pizza} alt="spl" width="400px" className="pizza" />
          </div>
          <div className="items">
            <h1>Main Course</h1>
            <Link to="/">
              Pork Rillette Hand Pies​<span>......................$32.5</span>​
            </Link>
            <p>Pork / Pies</p>
            <Link to="/">
              Island Duck with Mulberry Mustard<span>.....$59.5</span>​
            </Link>
            <p>Duck / Mustard</p>
            <Link to="/">
              Malted Custard French Toast<span>.......$40.5</span>
            </Link>
            <p>Custard / Toast</p>
            <Link to="/">
              Custard / Toast<span>.....$37.5</span>​
            </Link>
            <p>Pasta / Lamb</p>
          </div>
          <img src={line} alt="line" className="reddash" />
        </div>
      </div>
      <div className="home-rating">
        <div className="container">
          <div className="stars">
          <i className="fa-solid fa-star"></i>{'     '}
          <i className="fa-solid fa-star"></i>{'     '}
          <i className="fa-solid fa-star"></i>{'     '}
          <i className="fa-solid fa-star"></i>{'     '}
          <i className="fa-solid fa-star"></i>{'     '}
          </div>
          <h1>Our Customers Fall In Love With Us</h1>
          <img src={black} alt="dash" />
          <p>
            “ by far the best occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque. ”
          </p>
          <span>Randy Morgan</span>{" "}
        </div>
        <img src={line} alt="line" className="reddash" />
      </div>
      <div className="reservation">
        <div className="image">
            <img src={reserve} alt="reserve"/>
        </div>
        <div className="context">
            <h2>join us</h2>
            <h1>Book A Table Now, Come And See Us</h1>
            <Link to='book'>Reservation</Link>
        </div>
      </div>
      
    </>
  );
}

export default Home;
