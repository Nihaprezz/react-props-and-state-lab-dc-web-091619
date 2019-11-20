import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filterType = (event) => {
    //console.log('you are trying to filter', event.target.value)
    this.setState({
      ...this.setState,
      filters: {
        ...this.setState.filters,
        type: event.target.value
      }
    })
  }



  fetchPets = (event) => {
    let fakeURL;

    if (this.state.filters.type === 'all') {
      fakeURL = '/api/pets'
    } else {
      fakeURL = `/api/pets?type=${this.state.filters.type}`
    }

    //console.log('you are trying to fetch the pets', fakeURL)

    fetch(fakeURL)
    .then(response => response.json())
    .then(allPets => this.setState({
      ...this.setState,
      pets: allPets 
    }))
  }

  onAdoptPet = (petID) => {
    console.log(petID)
    //let currentPets = this.state.pets
    //currentPets.map    <---- why cant I seprate the steps???

    let currentPets = this.state.pets.map(eachPet => {
       return eachPet.id === petID ? {...eachPet, isAdopted: true} : eachPet
    })

    //no need to copy the array of pets bc we did that in the method above.
    console.log(currentPets)
    this.setState({
      pets: currentPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.filterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
