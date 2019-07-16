import React from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { store } from '@/redux';
import { add } from '@/redux/actions';

// api
import { test } from '@/api';

class Test extends React.Component {
  constructor(){
    super()
    this.state = {
      test: 'Click me!!! This is a test for redux.',
      num: store.getState().num
    }

    this.fnRequest = this.fnRequest.bind(this);
    this.fnClick = this.fnClick.bind(this);
  }

  fnRequest(){
    let { num } = this.state;
    if(num === 10){
      this.props.history.push('/test2');
    }else{
      test({test: 1}).then(res => {
        console.log(res)
      })
    }
  }

  fnClick(){
    add(2);
    this.setState({ num: store.getState().num });
  }

  render() {
    let { fnRequest, fnClick } = this, { test, num } = this.state;
    let h1Style = {
      userSelect: 'none',
      cursor: 'pointer',
      textAlign: 'center'
    }
    return (
      <div className="Test">
        <p onClick={fnRequest} style={{ fontSize: 100, textAlign: 'center' }}>{num}</p>
        <h1 onClick={fnClick} style={h1Style}>{test}</h1>
        <p style={{ textAlign: 'center' }}>You can also click NUMBER for test axios & mock.</p>
      </div>
    );
  }
}

export default Test;
