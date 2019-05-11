import React from 'react';
import PageHeader from '../components/PageHeader.js'

export default function HomeScreen(){


  return(
    <div>
      <PageHeader/>
      <div className="home-body">
        <video className="video-body" autoplay="true" loop id="vid" muted>
          <source src="../Media/Images/road.mp4" type="video/mp4"/>
          <source src="https://i.giphy.com/media/jlraqCNnuvyfD0jUmr/source.mp4" type="video/mp4"/>
        </video>

        Home
      </div>
    </div>
  )

}
