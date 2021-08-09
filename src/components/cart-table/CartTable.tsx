import React from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Quantity from "./Quantity";
import DeleteIcon from "./DeleteIcon";
import CartImage from "./CartImage";
import UnitPrice from "./UnitPrice";
import {ICheckoutProduct} from "../../types/types";
import {useSelector} from "react-redux";
import EmptyCartPreview from "../cart-preview/EmptyCartPreview";
import {RootState} from "../../store/reducers/RootReducer";

type CartTableProps = {
  onGetTotal: (total: number) => void
}

const CartTable: React.FC<CartTableProps> = (props) => {
  const checkedProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.cartList)
  const {onGetTotal} = props;

  let total: number = 0;
  const products: any = [];
  checkedProducts.map((checkedProduct: ICheckoutProduct, index:number) => {
    if (checkedProduct.quantity) {
      total += checkedProduct.product.currentPrice * checkedProduct.quantity;
      products.push({
        id: index + 1,
        item: <CartImage image={checkedProduct.product.image}/>,
        name: checkedProduct.product.name,
        qty: <Quantity quantity={checkedProduct.quantity} index={index}/>,
        unitPrice: <UnitPrice price={checkedProduct.product.currentPrice}/>,
        amount: <UnitPrice price={checkedProduct.product.currentPrice * checkedProduct.quantity}/>,
        deleteIcon: <DeleteIcon index={index} id={checkedProduct.product.id}/>
      })
    }
  });

  onGetTotal(total);

  const noDataIndicator = () => {
    return <EmptyCartPreview/>
  }

  const columns = [
    {dataField: 'id', text: '#'},
    {dataField: 'item', text: 'Item'},
    {dataField: 'name', text: 'Name', sort: true},
    {dataField: 'qty', text: 'Qty'},
    {dataField: 'unitPrice', text: 'UnitPrice'},
    {dataField: 'amount', text: 'Amount'},
    {dataField: 'deleteIcon', text: ''}
  ];

  const customTotal = (from: number, to: number, size: number) => (
      <span className="react-bootstrap-table-pagination-total text-secondary">
    Showing {from} to {to} of {size} Results
  </span>
  );

  const options:PaginationOptions = {
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
          noDataIndication={noDataIndicator}
          wrapperClasses='table-responsive overflow-x'
          classes='custom-table item-table'
          rowClasses='text-wrap'
          headerClasses='header-class'
          pagination={paginationFactory(options)}
          defaultSortDirection="asc"
      />
  )
}

export default CartTable;
