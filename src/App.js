import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      heightsSets: 0,
      heightsScore: 0,
      otherSets: 0,
      otherScore: 0,
      pointsToWin: 25,
      winBy2: true,
      setScores: [],
      wantsToClear: false,
    }
  }

  setHeightsSets(val){
    this.setState({heightsSets: val});
  }

  setHeightsScore(val){

    let otherScore = this.state.otherScore;
    let heightsScore = val;

    if (val >= this.state.pointsToWin && (!this.state.winBy2 || Math.abs(heightsScore - otherScore) >= 2)){
      let setScores = [...this.state.setScores, [heightsScore, otherScore]];
      let heightsSets = this.state.heightsSets+1;
      
      this.setState({
        heightsScore: 0,
        otherScore: 0,
        setScores: setScores,
        heightsSets: heightsSets,
      })
    } else {
      
      this.setState({heightsScore: val});

    }
  }

  setOtherSets(val){
    this.setState({otherSets: val});
  }

  setOtherScore(val){

    let otherScore = val;
    let heightsScore = this.state.heightsScore;

    if (val >= this.state.pointsToWin && (!this.state.winBy2 || Math.abs(heightsScore - otherScore) >= 2)){
      let setScores = [...this.state.setScores, [heightsScore, otherScore]];
      let otherSets = this.state.otherSets+1;
      
      this.setState({
        heightsScore: 0,
        otherScore: 0,
        setScores: setScores,
        otherSets: otherSets,
      })
    } else {
      
      this.setState({otherScore: val});

    }
  }

  setPointsToWin(val){
    this.setState({pointsToWin: val});
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{width: 400, color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          

          <div style={{display: 'flex', marginTop: 20,  }}>
              Points to win set: <div style={{width: 10}}/><b> {this.state.pointsToWin}</b>
              <div onClick={() => this.setPointsToWin(this.state.pointsToWin+1)} style={{fontSize: 22, marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>+</div>
              <div onClick={() => this.setPointsToWin(this.state.pointsToWin-1)} style={{fontSize: 22, marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
          </div>

          <div style={{display: 'flex', marginTop: 20}}>Win by 2? <div style={{width: 10}}/><input style={{height: 30}} type="checkbox" checked={this.state.winBy2} defaultChecked={true} onChange={val => this.setState({winBy2: val.target.checked})}/></div>

            <hr style={{color: 'black', width: 360}}/>
            <div style={{display: 'flex',color: 'black', alignItems: 'center', justifyContent: 'center'}}>

              <div >
                <b>Heights</b>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{display: 'flex', marginTop: 20, marginBottom: 20}}>
                    Sets: <div style={{width: 10, }}/><b>{this.state.heightsSets}</b>
                  </div>
                  


                  <div style={{display: 'flex'}}>
                    <div onClick={() => this.setHeightsScore(this.state.heightsScore-1)} style={{fontSize: 22, marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
                    <div onClick={() => this.setHeightsScore(0)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer', borderRadius: 12}}>reset</div>
                  </div>
                </div>
              </div>  

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 40}}>
                <div onClick={() => this.setHeightsScore(this.state.heightsScore+1)} style={{backgroundColor: '#80FF72', marginBottom: 20, height: 60, width: 100, borderStyle: 'solid', borderWidth: 3, borderRadius: 12, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>+ point</div>
                
                <div style={{display: 'flex', }}>
                  Score: <div style={{width: 10}}/><b> {this.state.heightsScore}</b>
                  
                </div>
              </div>


            </div>
          </div>
          <hr  style={{color: 'black', width: 360}}/>
          <div style={{display: 'flex',color: 'black', alignItems: 'center', justifyContent: 'center'}}>

              <div >
                <b>Others</b>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{display: 'flex', marginTop: 20, marginBottom: 20}}>
                    Sets: <div style={{width: 10, }}/><b>{this.state.otherSets}</b>
                  </div>
                  


                  <div style={{display: 'flex'}}>
                    <div onClick={() => this.setOtherScore(this.state.otherScore-1)} style={{fontSize: 22, marginLeft: 20, height: 30, width: 30, borderStyle: 'solid', borderWidth: 3, borderRadius: '50%', cursor: 'pointer'}}>-</div>
                    <div onClick={() => this.setOtherScore(0)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 20, height: 30, width: 100, borderStyle: 'solid', borderWidth: 3, cursor: 'pointer', borderRadius: 12}}>reset</div>
                  </div>
                </div>
              </div>  

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 40}}>
                <div onClick={() => this.setOtherScore(this.state.otherScore+1)} style={{backgroundColor: '#80FF72', marginBottom: 20, height: 60, width: 100, borderStyle: 'solid', borderWidth: 3, borderRadius: 12, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>+ point</div>
                
                <div style={{display: 'flex', }}>
                  Score: <div style={{width: 10}}/><b> {this.state.otherScore}</b>
                  
                </div>
              </div>


            </div>
            <hr style={{width: 360}}/>


          <div style={{display: 'flex', color: 'black', justifyContent: 'center'}}>
            Sets: {this.state.setScores.length > 0 ? this.state.setScores.map((setScore) => 
              setScore[0] > setScore[1] 
                ? 
              <div style={{marginLeft: 20}}><b>{setScore[0]}</b>-{setScore[1]}</div>
                : 
              <div style={{marginLeft: 20}}>{setScore[0]}-<b>{setScore[1]}</b></div>
            ) 
              : 
            <div style={{marginLeft: 10}}>-</div>}

          </div>
          <div style={{display: 'flex', marginBottom: 20}}><div onClick={() => this.setState({wantsToClear: true})} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, color: 'black', height: 30, width: 110, borderStyle: 'solid', borderWidth: 3, borderRadius: 12, cursor: 'pointer'}}>clear all</div>
          {this.state.wantsToClear && <div onClick={() => this.setState({wantsToClear: false})} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, color: 'black', height: 30, width: 110, marginLeft: 10, marginRight: 10, borderStyle: 'solid', borderWidth: 3, borderRadius: 12, cursor: 'pointer'}}>cancel</div>}
          {this.state.wantsToClear && <div onClick={() => this.setState({wantsToClear: false, setScores: [], heightsSets: 0, otherSets: 0, heightsScore: 0, otherScore: 0})} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, color: 'black', height: 30, width: 110, borderStyle: 'solid', borderWidth: 3, borderRadius: 12, cursor: 'pointer'}}>confirm</div>}</div>

        </div>
        
      </header>
    </div>
  );}
}
