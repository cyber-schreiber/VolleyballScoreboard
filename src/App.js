import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      heightsSets: 0,
      heightsScore: 0,
      otherSets: 0,
      otherScore: 0
    }
  }

  setHeightsSets(val){
    this.setState({heightsSets: val});
  }

  setHeightsScore(val){
    this.setState({heightsScore: val});
  }

  setOtherSets(val){
    this.setState({otherSets: val});
  }

  setOtherScore(val){
    this.setState({otherScore: val});
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <div style={{width: 400, color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <b>Heights</b>
            <div style={{display: 'flex', marginTop: 20}}>
              Sets: <div style={{width: 10}}/><b> {this.state.heightsSets}</b>
              <div onClick={() => this.setHeightsSets(this.state.heightsSets+1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>+</div>
              <div onClick={() => this.setHeightsSets(this.state.heightsSets-1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
              <div onClick={() => this.setHeightsSets(0)} style={{marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer'}}>reset</div>
            </div>
            <div style={{display: 'flex', marginTop: 20}}>
              Score: <div style={{width: 10}}/><b> {this.state.heightsScore}</b>
              <div onClick={() => this.setHeightsScore(this.state.heightsScore+1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>+</div>
              <div onClick={() => this.setHeightsScore(this.state.heightsScore-1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
              <div onClick={() => this.setHeightsScore(0)} style={{marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer'}}>reset</div>
            </div>
          </div>
          <hr/>
          <div style={{width: 400, color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <b>Others</b>
            <div style={{display: 'flex', marginTop: 20}}>
              Sets: <div style={{width: 10}}/><b> {this.state.otherSets}</b>
              <div onClick={() => this.setOtherSets(this.state.otherSets+1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>+</div>
              <div onClick={() => this.setOtherSets(this.state.otherSets-1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
              <div onClick={() => this.setOtherSets(0)} style={{marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer'}}>reset</div>
            </div>
            <div style={{display: 'flex', marginTop: 20}}>
              Score: <div style={{width: 10}}/><b> {this.state.otherScore}</b>
              <div onClick={() => this.setOtherScore(this.state.otherScore+1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>+</div>
              <div onClick={() => this.setOtherScore(this.state.otherScore-1)} style={{marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
              <div onClick={() => this.setOtherScore(0)} style={{marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer'}}>reset</div>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );}
}
