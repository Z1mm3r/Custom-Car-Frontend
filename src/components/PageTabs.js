import React from 'react'
import {useStateValue} from '../State.js'
import {Tab} from 'semantic-ui-react'

import CarSelectionScreen from './CarSelectionScreen.js'
import PartSelectionScreen from './PartSelectionScreen.js'



const panes = [
  {menuItem:'Welcome', render:() => <Tab.Pane> Welcome </Tab.Pane>},
  {menuItem:'Model', render: () => <Tab.Pane> <CarSelectionScreen> </CarSelectionScreen> </Tab.Pane>},
  {menuItem:'Color', render: () => <Tab.Pane> <PartSelectionScreen part_type={"colors"}/></Tab.Pane>},
  {menuItem:'Wheels', render: () => <Tab.Pane><PartSelectionScreen part_type={"wheels"}/></Tab.Pane>},
  {menuItem:'Trim', render: () => <Tab.Pane>Trim Tab Content</Tab.Pane>},

]

const AllTabs = () => {
  const [{selectedPaneIndex}, dispatch] = useStateValue();

  const handleTabChange = (e,selectedPaneIndex) => {
    dispatch({
      type: 'ChangePaneIndex',
      newPaneIndex: selectedPaneIndex.activeIndex
    })
    return
  }

  return <Tab panes={panes} activeIndex={selectedPaneIndex} onTabChange={handleTabChange} />
}

export default AllTabs
