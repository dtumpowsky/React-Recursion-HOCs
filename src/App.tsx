import * as React from 'react';
import './App.css';
import logo from './assets/elevar-logo.png';
import ListItem from './ListItem';

class App extends React.Component<{}, {}> {
  public render() {
    
  const tree = [
    {
      "text": "Folder 1",
      "children": [
        {
          "text": "Sub Folder 1",
          "children": [
            {
              "text": "Sub Sub Folder 1"          
            }
          ]
        },
        {
          "text": "Sub Folder 2",
          "children": []
        }
      ]
    }
  ]
  
  let list = tree.map((item, i) => <ListItem key={i} text={item.text} children={item.children}></ListItem>)
  
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
