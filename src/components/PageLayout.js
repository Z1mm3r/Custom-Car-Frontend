import React from 'react'
import PageTabs from './PageTabs'
import {Grid} from 'semantic-ui-react'
import SummaryScreen from './SummaryScreen'
import PageHeader from './PageHeader.js'

export default function PageLayout()
{

  return(
    <div>
      <Grid columns={3} divided style={{height: '100vh'}}>
        <Grid.Column width={1}/>
        <Grid.Column width={13}>
          <PageHeader></PageHeader>
          <PageTabs/>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className ="sticky-side">
            <SummaryScreen/>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}
