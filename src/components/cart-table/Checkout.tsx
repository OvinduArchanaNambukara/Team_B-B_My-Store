import React, {useState} from 'react';
import {Card, Col, Container, Pagination, Row, Table} from "react-bootstrap";
import CabbageImg from '../../assets/images/groceryImages/cabbage.jpg';
import CarrotImg from '../../assets/images/groceryImages/carrot.jpg';
import {ICheckoutProduct} from "../../types/types";
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";
import CartHeader from "./CartHeader";
import TableRow from "./TableRow";


const demoProducts: ICheckoutProduct[] = [
  {
    quantity: 5, product: {
      name: "1", image: CarrotImg, currentPrice: 650, oldPrice: 670
    }
  },
  {
    quantity: 7, product: {
      name: "2", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 5, product: {
      name: "3", image: CarrotImg, currentPrice: 650, oldPrice: 670
    }
  },
  {
    quantity: 7, product: {
      name: "4", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 5, product: {
      name: "5", image: CarrotImg, currentPrice: 650, oldPrice: 670
    }
  },
  {
    quantity: 7, product: {
      name: "6", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 5, product: {
      name: "7", image: CarrotImg, currentPrice: 650, oldPrice: 670
    }
  },
  {
    quantity: 7, product: {
      name: "8", image: CabbageImg, currentPrice: 340, oldPrice: 400
    }
  },
  {
    quantity: 7, product: {
      name: "9", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 7, product: {
      name: "10", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 7, product: {
      name: "10", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 7, product: {
      name: "10", image: CabbageImg, currentPrice: 340, oldPrice: 400
    },
  },
  {
    quantity: 7, product: {
      name: "10", image: CabbageImg, currentPrice: 340, oldPrice: 400
    }
  }
]

const Checkout: React.FC = () => {

  const [pageProducts, setPageProducts] = useState<ICheckoutProduct[]>([]);
  const [limit, setLimit] = useState<number>(2);

  /**
   * create table rows
   * @author Kaveesh
   */
  const renderCheckedProducts =
      pageProducts.map((checkedProduct: ICheckoutProduct, index) => {
        return (
            <TableRow
                key={index}
                rowNumber={index}
                image={checkedProduct.product.image}
                name={checkedProduct.product.name}
                price={checkedProduct.product.currentPrice}
                quantity={checkedProduct.quantity}/>
        )
      })

  /**
   * create pagination products array for a page
   * @param value
   * @author Ovindu ft Sriya bro
   */
  const getProducts = (value: number) => {
    let pages = [];
    let upperLimit = value * limit - 1;
    const count = Math.ceil(demoProducts.length / limit);
    if (value === count) {
      if ((demoProducts.length % limit) !== 0) {
        upperLimit = value * limit - 1 - (limit - (demoProducts.length % limit));
      }
    }
    for (let i = (value * limit) - limit; i <= upperLimit; i++) {
      pages.push(demoProducts[i]);
    }
    setPageProducts(pages);
  }

  /**
   * create pagination buttons
   * @author Ovindu ft Sriya bro
   */
  const declarePagination = () => {
    let pages = [];
    const count = Math.ceil(demoProducts.length / limit);
    for (let i = 1; i <= count; i++) {
      pages.push(<Pagination.Item onClick={() => getProducts(i)}>{i}</Pagination.Item>);
    }
    return (
        <Pagination>
          <Pagination.First/>
          <Pagination.Prev/>
          {pages}
          <Pagination.Ellipsis/>
        </Pagination>
    )
  }

  return (
      <Container fluid className='mt-5 checkOut'>
        <Row>
          <Col xs={12}>
            <Row className='pl-0 pl-md-4 mx-0 '>
              <CheckoutHeader/>
              <ContinueShoppingBtn/>
            </Row>
          </Col>
        </Row>
        <Card className='ml-md-4 ml-0 px-3 py-3 my-3'>
          <CartHeader/>
          <Card.Body>
            <Table responsive>
              <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Amount</th>
                <th className='d-none'>delete icon</th>
              </tr>
              </thead>
              <tbody>
              {renderCheckedProducts}

              </tbody>
            </Table>
            {declarePagination()}
          </Card.Body>
        </Card>
      </Container>
  )
}

export default Checkout;
