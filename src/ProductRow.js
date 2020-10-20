import React from "react";


export class ProductRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <tr className="product-row">
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
