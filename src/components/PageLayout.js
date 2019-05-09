import React,{Component, createRef } from 'react'
import PageTabs from './PageTabs'
import {Grid, Rail, Ref, Segment, Sticky,Header,Image} from 'semantic-ui-react'
import SummaryScreen from './SummaryScreen'
import PageHeader from './PageHeader.js'



export default class PageLayout extends Component
{

  contextRef = createRef()

  render(){
    return(
      <div>
        <Grid centered columns={3} >
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={13}>
            <PageHeader></PageHeader>
            <PageTabs/>
          </Grid.Column>
          <Grid.Column width = {2}>
            <div className ="sticky-test">
              <SummaryScreen className="sticky-test"/>
            </div>

          </Grid.Column>
        </Grid>
      </div>
    )}

}
