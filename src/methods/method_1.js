import React from 'react';
import './method.css';

class ReactCreateElement extends React.Component {
  render() {
    return (
      React.createElement('div', { class: 'method' }, React.createElement('p', null, 'React.createElemen is rendered here'))
    );
  }
}

export default ReactCreateElement;
