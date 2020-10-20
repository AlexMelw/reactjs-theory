import React from "react";


export class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <tr className="category-row">
        <td colSpan={2} align="center">
          {this.props.category}
        </td>
      </tr>
    );
  }
}
