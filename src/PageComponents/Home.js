import React from 'react';
import PageHeader from '../components/PageHeader.js'
import {Grid, Container, Segment, Header,Image} from 'semantic-ui-react'
import picture from '../Media/Images/horizon.jpg';
export default function HomeScreen(){




  return(
    <div>
      <PageHeader/>
      <Grid divided centered >
        <Grid.Row height={3}>
          <Header> Dare To Be Different</Header>
            <div className="ui fluid image">
              <Image centered src={picture}/>
              <div style={{color: 'white', position: 'absolute', bottom: 0, width: '100%', height: 'auto'}}>TEST</div>
            </div>
        </Grid.Row>
        <Grid.Row height={10}>
          <div>
            <Grid columns={3} divided centered style={{height: '100%',width: '100%'}}>
              <Grid.Column width={1}>
                left
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
                right
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )

}
