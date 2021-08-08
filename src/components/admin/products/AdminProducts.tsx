import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AdminProducts: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <h1>products</h1>
      <Button className="add-product-btn" onClick={() => history.push(`/admin/add-product`)}>Add New Product</Button>
    </React.Fragment>
  );
}

export default AdminProducts;