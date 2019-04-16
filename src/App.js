import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      brood: [
        {
          id:1,
          name: 'wit',
          price: 3
        },
        {
          id: 2,
          name: 'bruin',
          price: 3
        },
        {
          id: 3,
          name: 'sandwich',
          price: 4
        }
      ],
      vlees: [
        {
          id: 4,
          name: 'kip',
          price: 3
        },
        {
          id: 5,
          name: 'rund',
          price: 4
        },
        {
          id: 6,
          name: 'vis',
          price: 5
        }
      ],
      diversen: [
        {
          id: 7,
          name: 'sla',
          price: 1
        },
        {
          id: 8,
          name: 'tomaat',
          price: 1
        },
        {
          id: 9,
          name: 'kaas',
          price: 2
        }
      ]
    }
  }


    addItem = (e) => {
      console.log(e.currentTarget.id);
      console.log(e.currentTarget.name);
      let changePrice =  parseFloat(e.currentTarget.className);

      this.setState((prevState) => ({
				total: parseFloat(prevState.total) + changePrice
			}))
    }



  // Pure functies en javascript
  render() {
  let listOfBrood = this.state.brood.map((br, index) => {
    return(
      <li key={index}>{br.name}: {br.price} 
      <button key={index} id={br.id} name={br.name} className={br.price} onClick={this.addItem}> + </button>
      </li>
    )
  })

  let listOfVlees = this.state.vlees.map((vl, index) => {
    return(
      <li key={index}>{vl.name}: {vl.price}
      <button key={index} id={vl.id} name={vl.name} className={vl.price} onClick={this.addItem}> + </button>
      </li>
    )
  })

  let listOfDiversen = this.state.diversen.map((di, index) => {
    return(
      <li key={index}>{di.name}: {di.price}
      <button key={index} id={di.id} name={di.name} className={di.price} onClick={this.addItem}> + </button>
      </li>
  )
  })


    // HTML DINGES
    return (
      <div>
        <h1>Burgers</h1>
        <h2>Broodjes</h2>
          <ul> {listOfBrood}
          </ul>
        <h2>Burgers</h2>
          <ul>{listOfVlees}
          </ul>
        <h2>Diversen</h2>
          <ul>{listOfDiversen}
          </ul>
          <div></div>
        <div>total: {this.state.total}</div>
      </div>
    )
  }
  

}

export default App;
