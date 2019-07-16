import React from 'react';

class Test2 extends React.Component {
  constructor(){
    super()
    this.state = {
      test: 'This is a test for dynamic import.'
    }
  }

  render() {
    let { test } = this.state;
    return (
      <div className="Test2">
        <h1 style={{ textAlign: 'center' }}>{test}</h1>
      </div>
    );
  }
}

export default Test2;
