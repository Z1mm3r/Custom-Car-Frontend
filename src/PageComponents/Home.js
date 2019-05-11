import React from 'react';
import PageHeader from '../components/PageHeader.js'
import {Grid, Container, Segment} from 'semantic-ui-react'

export default function HomeScreen(){


  return(
    <div>
      <PageHeader/>
      <div className="home-body">
        <div className = "home-video">
          <video className="video-body" autoplay="true" loop id="vid" muted>
            <source src="../Media/Images/road.mp4" type="video/mp4"/>
            <source src="https://i.giphy.com/media/jlraqCNnuvyfD0jUmr/source.mp4" type="video/mp4"/>
          </video>
          <div className='home-content'>
             <Grid columns={3} divided centered style={{height: '100%',width: '100%'}}>
               <Grid.Column width={1}>
                  hello
               </Grid.Column>
               <Grid.Column width={10}>
                 <div className='home-content-main'>
                   <Container>
                     <Segment>
                       The Brown Cow Jumped Over The Moon
                     </Segment>
                     <Segment>
                        Surely you Could aswell?
                     </Segment>
                   </Container>
                 </div>
               </Grid.Column>
               <Grid.Column width={1}>
                 test
               </Grid.Column>
             </Grid>
           </div>
        </div>
      </div>
    </div>
  )

}
