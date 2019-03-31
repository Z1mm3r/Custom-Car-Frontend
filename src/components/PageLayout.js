import React from 'react'
import PageTabs from './PageTabs'
import {Grid} from 'semantic-ui-react'
import SummaryScreen from './SummaryScreen'

export default function PageLayout()
{


  return(
    <div>
      <Grid columns={3} divided style={{height: '100vh'}}>
        <Grid.Column width={1}/>
        <Grid.Column width={12}>
          <PageTabs/>
        </Grid.Column>
        <Grid.Column width={3}>
          <SummaryScreen/>
        </Grid.Column>
      </Grid>
    </div>
  )
}
