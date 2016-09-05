import React, { Component, PropTypes } from 'react';
const propTypes = {
  onPlus : PropTypes.func,
  onSubtract : PropTypes.func,
  onRandomColor : PropTypes.func

};

function createWarning(funcName){
  return ()=> console.warn(funcName+' is not definded');
}
const defaultProps = {
  onPlus : createWarning('onplus'),
  onSubtract : createWarning('onSubtract'),
  onRandomColor : createWarning('onRandomColor')
};


class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <button
                onClick={this.props.onPlus}
              >+</button>
              <button
                onClick={this.props.onSubtract}
              >*</button>
              <button
                onClick={this.props.onRandomColor}
              >color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
