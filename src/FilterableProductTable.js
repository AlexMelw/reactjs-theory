import React from "react";
import apiResponse from "./api.mock";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";


export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.products = apiResponse;

    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {

    return (
      <div className="filter-table">

        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />

        <ProductTable
          products={this.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />

      </div>
    );
  }
}
