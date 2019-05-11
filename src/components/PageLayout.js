import React from 'react'
import PageTabs from './PageTabs'
import {Grid} from 'semantic-ui-react'
import SummaryScreen from './SummaryScreen'
import PageHeader from './PageHeader.js'
import SideMenu from './SideMenu.js'

export default function PageLayout()
{

  return(
    <div>
      <div>
        <PageHeader></PageHeader>
      </div>
      <Grid columns={3} divided centered style={{height: '100vh',width: '100vw'}}>
        <Grid.Column width={1}>
          <SideMenu></SideMenu>
        </Grid.Column>
        <Grid.Column width={11}>
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
