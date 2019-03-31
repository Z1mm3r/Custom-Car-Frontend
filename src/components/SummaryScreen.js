import React from 'react'
import {Grid} from 'semantic-ui-react'

import SummaryCard from './SummaryCard'
import CartCard from './CartCard'


export default function SummaryScreen() {

  return(
    <Grid>
      <Grid.Row>
        <CartCard/>
      </Grid.Row>
      <Grid.Row>
        <SummaryCard/>
      </Grid.Row>
    </Grid>
  )

}
