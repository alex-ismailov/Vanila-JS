import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}

const mountNode = document.getElementById('react-root');
ReactDOM.render(<Hello />, mountNode);