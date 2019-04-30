import React, {useState,useEffect} from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import _ from 'lodash'

import { useStateValue } from '../State.js';



export default function SearchExampleStandard(props) {

  const [searchState, setSearchState] = useState({isLoadingSearch: true,value});
  const [{possibleParts}, setPossibleParts] = useStateValue();

  useEffect(() => {
  console.log("Trigger Reset")
  resetComponent()
  }, []);

  let resetComponent = () =>{
    console.log("Reset")
    setSearchState({ isLoading: false, results: [], value: '' })
  }

  let handleResultSelect = (e, { result }) => setSearchState({ value: result.name })

  let handleSearchChange = (e, { value }) => {



    setTimeout(() => {
      
      setSearchState({isLoadingSearch: true,value});


      const re = new RegExp(_.escapeRegExp(searchState.value), 'i')
      const isMatch = result => re.test(result.title)

      setSearchState({
        isLoading: false,
        results: _.filter(possibleParts[props.type], isMatch),
      })
    }, 300)
  }


    const { isLoading, value, results } = searchState

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(searchState, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(possibleParts[props.type], null, 2)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}
