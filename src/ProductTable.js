import React from "react";
import { ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export class ProductTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const groupedProducts = this.getFilteredProducts();
    const categoryAndProductsList = this.createCategoryAndProductRows(groupedProducts);

    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {categoryAndProductsList}
        </tbody>

      </table>
    );
  }

  getFilteredProducts() {
    const products = this.props.products || [];
    const filterText = this.props.filterText || this.props.filterText.toLowerCase();

    const filteredProducts = products.filter(prod =>
      (!this.props.inStockOnly || prod.stocked) && (
        !filterText ||
        String.prototype.includes.call(prod.category.toLowerCase(), filterText) ||
        String.prototype.includes.call(prod.name.toLowerCase(), filterText)
      )
    );

    const groupedProducts = filteredProducts.reduce((groupsMap, product) => {

      if (!groupsMap.has(product.category)) {
        groupsMap.set(product.category, []);
      }

      groupsMap.get(product.category).push(product);
      return groupsMap;

    }, new Map());
    return groupedProducts;
  }

  createCategoryAndProductRows(groupedProducts) {

    return [...groupedProducts.entries()].map(
      (entry) => {
        const [category, products] = entry;

        return (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />

            {products.map((prod) => (
              <ProductRow product={prod} key={prod.name} />
            ))}
          </React.Fragment>
        );
      }
    );
  }
}
