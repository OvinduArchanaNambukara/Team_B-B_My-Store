import React from "react";
import {Col, Image} from "react-bootstrap";

type CategoryProps = {
  name: string,
  image: string
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
      <Col className='category text-center mt-2 px-1 px-md-2' xs={2}>
        <div>
          <Image src={props.image} alt={props.name} fluid={true}/>
          <p className='m-1'>{props.name}</p>
        </div>
      </Col>
  );
}

export default Category;
