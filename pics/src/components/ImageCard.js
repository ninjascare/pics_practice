import React, { Component } from "react";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef(); /* This line of code craetes a Ref to acces the height of the images */
  }
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default componentName;
