import React from "react";
import {IProductDetails} from "../../../types/types";
import CartImage from "../../cart-table/CartImage";
import UnitPrice from "../../cart-table/UnitPrice";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ProductAction from "./ProductAction";
import filterFactory, {multiSelectFilter, textFilter} from "react-bootstrap-table2-filter";

const ProductTable: React.FC = () => {

  const allProduct: IProductDetails[] = [
    // {name: "Burger", category: "Food", price: 120, unit: "kg", disPrice: 20, image: Burger},
    // {name: "Blender", category: "Electronic", price: 1245, unit: "g", disPrice: 24, image: Blender},
    // {name: "Cotton", category: "Pharmacy", price: 123, unit: "kg", disPrice: 45, image: Cotton},
    // {name: "Burger", category: "Food", price: 120, unit: "kg", disPrice: 20, image: Burger},
    // {name: "Cotton", category: "Pharmacy", price: 123, unit: "kg", disPrice: 45, image: Cotton},
    // {name: "Burger", category: "Food", price: 120, unit: "kg", disPrice: 20, image: Burger},
    // {name: "Blender", category: "Electronic", price: 1245, unit: "g", disPrice: 24, image: Blender},
    // {name: "Cotton", category: "Pharmacy", price: 123, unit: "kg", disPrice: 45, image: Cotton},
    // {name: "Burger", category: "Food", price: 120, unit: "kg", disPrice: 20, image: Burger},
    // {name: "Blender", category: "Electronic", price: 1245, unit: "g", disPrice: 24, image: Blender},
    // {name: "Cotton", category: "Pharmacy", price: 123, unit: "kg", disPrice: 45, image: Cotton},
    // {name: "Burger", category: "Food", price: 120, unit: "kg", disPrice: 20, image: Burger},
    // {name: "Cotton", category: "Pharmacy", price: 123, unit: "kg", disPrice: 45, image: Cotton}
  ];

  const selectOptions: any = {
    Grocery: 'Grocery',
    Pharmacy: 'Pharmacy',
    Electronic: 'Electronic',
    Food: 'Food',
    Fruit: 'Fruit',
    Meat: 'Meat',
    Vegetable: 'Vegetable'
  };

  const products: any = [];
  allProduct.map((product: IProductDetails, index: number) => {
    products.push({
      id: index + 1,
      item: <CartImage image={product.image}/>,
      name: product.name,
      category: product.category,
      date: "11 july 2021",
      unitPrice: <UnitPrice price={product.price}/>,
      action: <ProductAction/>
    })
  })

  const columns = [
    {dataField: 'id', text: '#'},
    {dataField: 'item', text: 'Item'},
    {dataField: 'name', text: 'Product Name', sort: true, filter: textFilter()},
    {
      dataField: 'category', text: 'Category', formatter: (cell: string | number) => selectOptions[cell],
      filter: multiSelectFilter({
        options: selectOptions,
        defaultValue: ["Grocery", "Pharmacy", "Electronic", "Food", "Fruit", "Meat", "Vegetable"]
      })
    },
    {dataField: 'date', text: 'Date'},
    {dataField: 'unitPrice', text: 'UnitPrice'},
    {dataField: 'action', text: 'Action'}
  ];

  const customTotal = (from: number, to: number, size: number) => (
    <span className="react-bootstrap-table-pagination-total text-secondary">
            Showing {from} to {to} of {size} Results
        </span>
  );

  const options: PaginationOptions = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: products.length
    }]
  };


  return (
    <BootstrapTable
      bootstrap4
      keyField='id'
      data={products}
      columns={columns}
      // noDataIndication={noDataIndicator}
      wrapperClasses='table-responsive overflow-x'
      classes='custom-table item-table'
      rowClasses='text-wrap'
      headerClasses='header-class'
      pagination={paginationFactory(options)}
      defaultSortDirection="asc"
      filter={filterFactory()}
    />
  )
}

export default ProductTable;