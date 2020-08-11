import React from 'react';

import Events from '../service/EventService';

export default class ObserverChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: '',
    };
  }
  render() {
    return (
      <div className="border border-primary p-4">
        <h3>Observer Child</h3>
        <p>Recibido: [{this.state.mensaje}].</p>
        <p>Envia o brodcastea el valor del campo.</p>
        <input
          onKeyUp={(e) => {
            console.log('KeyUp!');
            Events.trigger('updateText', e.target.value);
          }}
        />
      </div>
    );
  }
  componentDidMount() {
    // subscribe
    Events.bind('updateText', (mensaje) => {
      this.setState({ mensaje });
    });
  }
  componentWillUnmount() {
    // unsubscribe
    Events.unbind('updateText');
  }
}
