import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
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
    addItem = () => {
      console.log('clicked',this);
     
    }

  // Pure functies en javascript
  render() {
    // console.log(this.state)
    // console.log(this.state.brood)

    // HTML DINGES
    return (
      <div>
        <h1>Burgers</h1>
        <h2>Broodjes</h2>
          <ul> {this.state.brood.map(br => (<li key={br.id}>{br.name}: {br.price} <button> + </button></li>))}
          </ul>
        <h2>Burgers</h2>
          <ul>{this.state.vlees.map(vl => (<li key={vl.id}>{vl.name}: {vl.price} <button onClick={this.addItem}> + </button></li>))}
          </ul>
        <h2>Diversen</h2>
          <ul>{this.state.diversen.map(di => (<li key={di.id}>{di.name}: {di.price} <button> + </button></li>))}
          </ul>
        <div></div>
      </div>
    )
  }
  

}

export default App;
