import React from 'react';
import Hero  from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import Services from './Services';

import FeaturedRooms from './featuredRooms';

class Home extends React.Component {
    
    render() { 
        return ( 
            <div>
            <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
            Our Rooms
            </Link> <br/><br/>
            <Link to="/register" className="btn-primary">
            Click here to Register
            </Link>
            </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
            </div>
         );
    }
}
 
export default Home ;