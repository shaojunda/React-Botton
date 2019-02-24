import React from "react";
import ReactDOM from "react-dom";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    };
    this.myRef = React.createRef();
  }

  onClick(event) {
    console.log(event.clientX, event.clientY);
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;
    this.myRef.current.getBoundingClientRect();
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    });
  }

  onAnimationEnd() {
    console.log("hh");
    console.log(this.state);
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <button
        ref={this.myRef}
        className="buttonC"
        onClick={this.onClick.bind(this)}
      >
        <span className=" ">{this.props.value}</span>
        {this.state.active === true ? (
          <span
            className="circle"
            onAnimationEnd={this.onAnimationEnd.bind(this)}
            style={{ left: this.state.deltaX, top: this.state.deltaY }}
          />
        ) : (
          ""
        )}
      </button>
    );
  }
}

export default Button;
