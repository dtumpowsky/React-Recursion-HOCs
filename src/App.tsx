import * as React from 'react';
import './App.css';
import logo from './assets/elevar-logo.png';
import  Collapsable from './Collapsable';
import AlphaList, {listSort} from './AlphaList';

class App extends React.Component<{}, {}> {
  public render() {
    
  const tree = [
    {
      "text": "Movies",
      "children": [
        {
          "text": "Horror",
          "children": [
            {
              "text": "Halloween"
            },
            {
              "text": "Alien"
            }
          ]
        },
        {
          "text": "Action",
          "children": [
            {
              "text": "Stone Cold"
            },
            {
              "text": "Commando"
            }
          ]
        }
      ]
    },
    {
      "text": "Books",
      "children": [
        {
          "text": "Children of time"
        }
      ]
    }
  ]
  
  const sorted = listSort(tree);
  let list2 = sorted.map((item, i) => <AlphaList key={i} text={item.text} children={item.children}></AlphaList>)
  
  let list = tree.map((item, i) => <Collapsable key={i} text={item.text} children={item.children}></Collapsable>)
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h4 className='component-header'>Collapsable</h4>
          <div className="collapsable-elm">
            {list}     
          </div>
        <h4 className='component-header'>Sorted Alphabetically</h4>
          <div>
            {list2}     
          </div>
      </div>
    );
  }
}

export default App;
