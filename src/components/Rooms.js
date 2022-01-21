import React from "react";
import Hero from "../components/Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "./RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/home" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
    </>
  );
};

export default Rooms;
