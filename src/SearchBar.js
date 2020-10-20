import React from "react";


export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <div className="search-box">

        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />

        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            onChange={this.handleInStockChange}
            value={inStockOnly}
          /> Only show products in stock
        </label>

      </div>
    );
  }
}
