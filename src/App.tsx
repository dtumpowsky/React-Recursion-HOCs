import * as React from 'react';
import './App.css';
import logo from './assets/elevar-logo.png';
import  AlphaList from './AlphaList';
import {listSort} from './ListModel'

class App extends React.Component<{}, {}> {
  public render() {
    
  const tree = [
    {
      "text": "bFolder 1",
      "children": [
        {
          "text": "bSub Folder 1",
          "children": [
            {
              "text": "Sub Sub Folder 1"          
            }
          ]
        },
        {
          "text": "aSub Folder 2",
          "children": []
        }
      ]
    },
    {
      "text": "aFolder 2",
      "children": []
    }
  ]
  const sorted = listSort(tree);
  let list = sorted.map((item, i) => <AlphaList key={i} text={item.text} children={item.children}></AlphaList>)
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {list}     
        </div>
      </div>
    );
  }
}

export default App;
