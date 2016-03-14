import React from 'react'

class SinglePixel extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const divStyle = {
      backgroundColor: this.props.color,
      width: '1px',
      height: '1px',
      position: 'absolute',
      left: this.props.x,
      top: this.props.y,
      opacity: this.props.opacity
    };
    return (
     <div style={divStyle}></div>
    );
  }
}

SinglePixel.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  color: React.PropTypes.string,
  opacity: React.PropTypes.number
};

export default SinglePixel;
