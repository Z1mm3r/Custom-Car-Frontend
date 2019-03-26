import React from 'react'
import PageTabs from './PageTabs'
import {Grid} from 'semantic-ui-react'
import SummaryCard from './SummaryCard'

export default function PageLayout()
{


  return(
    <div>
      <Grid columns={2} divided>
        <Grid.Column width={12}>
          <PageTabs/>
        </Grid.Column>
        <Grid.Column width={3}>
          <SummaryCard/>
        </Grid.Column>
      </Grid>
    </div>
  )
}
