import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Refreshing Mocktails and Cocktails available to chill out"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking Adventures",
                info:"Where there is Adventure , there is Fun"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Why walk after doing adventures?We provide you FREE shuttles"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Relax and have Fun with your Friends and Loved ones by having the best beer we provide"
            },
        ]
    }
  render() {
    return (
      <section className="services"> 
    
      <Title title="Services"></Title>
      <div className="services-center">
      {this.state.services.map((item,index)=>{
        return <article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
        </article>
      })}
      </div>
      </section>
    );
  }
}
