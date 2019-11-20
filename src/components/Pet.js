import React from 'react'

class Pet extends React.Component {
  render() {
    let adoptedBtn;
    
    if(this.props.petObject.isAdopted) {
      adoptedBtn =  <button className="ui disabled button">Already adopted</button>
    } else {
      adoptedBtn =  <button onClick={() => this.props.onAdoptPet(this.props.petObject.id)}
       className="ui primary button">Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.petObject.gender === 'male' ? '♀' : '♂'}
            {"  "}
            {this.props.petObject.name}
          </a>
          <div className="meta">
            <span className="date">
              Pet Type: {this.props.petObject.type}
            </span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObject.age} yrs</p>
            <p>Weight: {this.props.petObject.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          {adoptedBtn}
        </div>
        <div>
         <br></br>
        </div>
      </div>
    )
  }
}

export default Pet
