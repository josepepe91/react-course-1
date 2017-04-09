import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      txtState:'this is the state txt',
      currentEvent: '___',
      a:'',
      b:''
    }
    this.updateText= this.updateT.bind(this)
  }
  updateT(e){
    this.setState({currentEvent: e.type})
  }
  update(e){
    this.setState({txtState: e.target.value})
  }
  updateRef(e){
    this.setState({
      a: this.a.refs.input.value,
      b:this.refs.b.value})
  }
  //return React.createElement('h1',null,'React rocks')
  render (){
    let txt = this.props.txt
    return (
      <div>
        ---------Hello World-----------
        <h1>Hello</h1> 
        ---------Component properties-----------
        <br/>
        <b>{this.props.txtt}</b>
        <br/>
        ---------defaultProps, propTypes-----------
        <br/>
        {txt}
        <br/>
        {this.props.cat}
        <br/>
        ---------state, binding-----------
        <br/>
        <input type="text"
        onChange={this.update.bind(this)}/>
        <br/>
        {this.state.txtState}
        <br/>
        ---------Children-----------
        <br/>
        <Widget update={this.update.bind(this)}/>
        <br/>
        ---------Children properties-----------
        <br/>
        <Button>I <Heart></Heart> React</Button>
        <Heart></Heart>
        <br/>
        ---------propTypes Validations-----------
        <br/>
        <Title text="1234321232"/>
        <br/>
        ----Normalize Events with Reacts Synthetic Event System---
        <br/>
        <textarea 
          onChange={this.updateT.bind(this)}
          cols="30" 
          rows="10"/>
        <textarea 
          onKeyPress={this.updateText}
          onCopy={this.updateText}
          onCut={this.updateText}
          onPaste={this.updateText}
          onFocus={this.updateText}
          onBlur={this.updateText}
          onDoubleClick={this.updateText}
          onTouchStart={this.updateText}
          onTouchMove={this.updateText}
          onTouchEnd={this.updateText}
          cols="30" 
          rows="10"/>
        <h1>{this.state.currentEvent}</h1>
        <br/>
        ---Use React ref to Get a Reference to Specific Components----
        <br/>
        <Input
        ref={ component => this.a = component}
        update={this.updateRef.bind(this)}/>  
        {this.state.a}
        <input
          ref="b"
          type="text"
          onChange={this.updateRef.bind(this)}/> 
          {this.state.b}
      </div>
      )
  }
}


const Widget = (props)=>
  <input type="text" onChange={props.update}/>

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&hearts;</span>

const Title = (props) =>
  <h1>Title: {props.text}</h1>

Title.propTypes={
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

//const App = () => <h1>Hello stateless</h1>
App.propTypes={
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps={
  txt: "this is the default text"
}

class Input extends React.Component {
  render(){
    return <input type="text" ref="input" onChange={this.props.update} />
  }
}

export default App