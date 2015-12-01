import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.onRadioChanged = this.onRadioChanged.bind(this);
  }

  render() {
	console.log(this.state.isActive);
	const checked = this.state.isActive ? 'checked' : '';
    return (
      <div>
        <div>Hello {this.props.name}</div>
        <Timer />
        <label>Afficher le texte ?</label>
        <input type="radio" name="radioType" value="yes" id="radioYes"
			checked={this.state.isActive} onChange={this.onRadioChanged} />
        <label htmlFor="radioYes">OUI</label>
        <input type="radio" name="radioType" value="no" id="radioNo"
			checked={!this.state.isActive} onChange={this.onRadioChanged} />
        <label htmlFor="radioNo">NON</label>
        { this.state.isActive ? <p>When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.</p> : null }
      </div>
    );
  }

  onRadioChanged(e) {
	// e.preventDefault();
	if((e.target.value === 'yes' && this.state.isActive) || (e.target.value === 'no' && !this.state.isActive))
		return;
    console.log('onRadioChanged', e.target.value);
    this.setState({
      isActive: e.target.value === 'yes' ? true : false
    });
  }
}
