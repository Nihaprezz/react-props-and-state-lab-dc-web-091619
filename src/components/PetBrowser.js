import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props)
    let petCardsArray = this.props.pets.map(eachPet => {

      return <Pet key={eachPet.id} petObject={eachPet} onAdoptPet={this.props.onAdoptPet}/>
      
    });
  return <div>{petCardsArray}</div>
    //<div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  }
}

export default PetBrowser
