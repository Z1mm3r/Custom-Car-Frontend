import React from 'react'
import {Card} from 'semantic-ui-react'

import { useStateValue } from '../State.js';

export default function SummaryCard() {

  const [{selectedPartIds}, dispatch] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();


  let renderSummaryCard = () => {
    return(
      <Card>
        <Card.Header> Summary </Card.Header>
        <Card.Content> Price </Card.Content>
      </Card>
    )
  }

  return(
    <>
      {renderSummaryCard()}
    </>

  )

}
