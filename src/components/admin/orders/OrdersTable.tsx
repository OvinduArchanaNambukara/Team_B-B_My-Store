import React from 'react';
import {IOrderDetails} from "../../../types/types";
import UnitPrice from "../../cart-table/UnitPrice";
import {FiEdit2} from "react-icons/all";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {Comparator, dateFilter} from 'react-bootstrap-table2-filter';

const OrdersTable: React.FC = () => {

    const allOrders: IOrderDetails[] = [
        {
            orderId: "60e8a04bea6ac033ab7b8573",
            total: 2464,
            date: "Wed Sep 19 2018 19:11:09 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e945cde0cb338632d57034",
            total: 2342,
            date: "Tue Aug 04 2020 21:11:04 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e8a04bea6ac033ab7b8573",
            total: 2464,
            date: "Wed Sep 19 2018 19:11:09 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e945cde0cb338632d57034",
            total: 2342,
            date: "Tue Aug 04 2020 21:11:04 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e8a04bea6ac033ab7b8573",
            total: 2464,
            date: "Wed Sep 19 2018 19:11:09 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e945cde0cb338632d57034",
            total: 2342,
            date: "Tue Aug 04 2020 21:11:04 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e8a04bea6ac033ab7b8573",
            total: 2464,
            date: "Wed Sep 19 2018 19:11:09 GMT+0530 (India Standard Time)"
        },
        {
            orderId: "60e945cde0cb338632d57034",
            total: 2342,
            date: "Tue Aug 04 2020 21:11:04 GMT+0530 (India Standard Time)"
        },
    ];

    const orders: any = [];
    allOrders.map((order: IOrderDetails, index: number) => {
        orders.push({
            id: index + 1,
            orderId: order.orderId,
            subTotal: <UnitPrice price={order.total}/>,
            date: order.date,
            action: <FiEdit2 size={20}/>
        })
    })

    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'orderId', text: 'Order ID'},
        {
            dataField: 'date', text: 'Ordered At', filter: dateFilter({
                defaultValue: {date: new Date(2019, 8, 5), comparator: Comparator.GT}
            })
        },
        {dataField: 'subTotal', text: 'SubTotal'},
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
            text: 'All', value: orders.length
        }]
    };

    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={orders}
            columns={columns}
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

export default OrdersTable;