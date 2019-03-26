import React from 'react'
import {Card} from 'semantic-ui-react'

import { useStateValue } from '../State.js';

export default function SummaryCard() {

  const [{selectedPartIds}, dispatch] = useStateValue();

  let renderSummaryCard = () => {

  }

  return(
    <Card>
      <Card.Content> Summary </Card.Content>
    </Card>
  )


}
