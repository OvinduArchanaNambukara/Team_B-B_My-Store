import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Select from "react-select";
import {IProductDetails, ISelectorOption} from "../../../../types/types";
import {units} from "../../../../constants/units";
import {Controller, useForm} from "react-hook-form";
import ProductPreview from "./ProductPreview";

const AddProducts: React.FC = () => {

  const [categoryOptions, setCategoryOptions] = useState<ISelectorOption[]>([]);
  const [productImage, setProductImage] = useState<any>(null);
  const [formData, setFormData] = useState<IProductDetails | null>(null);

  const {register, handleSubmit, formState: {errors}, control} = useForm<IProductDetails>()

  //fetch categories
  useEffect(() => {
    let categories = ["Grocery", "Electronics", "Pharmacy", "Food"];

    let catOptions: ISelectorOption[] = [];
    categories.forEach((cat) => {
      catOptions.push({label: cat, value: cat});
    })
    setCategoryOptions(catOptions);
  }, []);

  useEffect(() => {
    console.log(productImage);
  }, [productImage]);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    console.log(formData);
  }


  console.log(errors);
  return (
    <Container>
      <Row className="add-product py-4">
        <Col xs={12} md={4}>
          <ProductPreview name={formData ? formData.name : 'Product Name'} price={formData ? formData.price : 0}
                          unit={formData ? formData.unit : ''}
                          disPrice={formData ? formData.disPrice : 0} setProductImage={() => setProductImage}/>
        </Col>
        <Col xs={12} md={8} className="pt-4">
          <Form onSubmit={handleSubmit((data) => {
            handleFormSubmit(data);
          })}>
            <Form.Group>
              <Form.Label>
                Product Name
              </Form.Label>
              <Form.Control type="text" size="sm" {...register("name", {required: true})}
              />
              {errors.name && <small className="text-danger font-weight-bold">
                Please Enter Product Name
              </small>}
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Product Category
              </Form.Label>
              <Controller
                control={control}
                name="category"
                rules={{required: true}}
                render={({field: {onChange, value, ref}}) => (
                  <Select
                    inputRef={ref}
                    className="category-select"
                    classNamePrefix="select-control"
                    isSearchable
                    required
                    options={categoryOptions}
                    placeholder={null}
                    noOptionsMessage={() => ("No options here, Please Create a new Category")}
                    value={categoryOptions?.filter(option => option.value === value)}
                    onChange={(option) => {
                      onChange(option?.value)
                    }}
                  />
                )}
              />
              {errors.category && <small className="text-danger font-weight-bold">
                Please Select Product Category
              </small>}
            </Form.Group>
            <Form.Group>
              <Row>
                <Col xs={8}>
                  <Form.Label>
                    Product Price
                  </Form.Label>
                  <Form.Control type="text" size="sm"
                                {...register("price", {required: true, valueAsNumber: true})}
                  />
                  {errors.price && <small className="text-danger font-weight-bold">
                    Please Enter Product Price
                  </small>}
                </Col>
                <Col xs={4}>
                  <Form.Label>
                    per
                  </Form.Label>
                  <Controller
                    control={control}
                    name="unit"
                    rules={{required: true}}
                    render={({field: {onChange, value, ref}}) => (
                      <Select className="unit-select"
                              classNamePrefix="select-control"
                              inputRef={ref}
                              isSearchable
                              required
                              options={units}
                              onChange={(option) => {
                                onChange(option?.value)
                              }}
                              value={units?.filter(option => option.value === value)}
                      />)}
                  />
                  {errors.unit && <small className="text-danger font-weight-bold">
                    Please Select Unit
                  </small>}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Discount Price
              </Form.Label>
              <Form.Control type="text" size="sm"
                            {...register("disPrice", {valueAsNumber: true})}
              />
            </Form.Group>
            <Row className="justify-content-end p-3">
              <Button type="submit" className="add-button">Add Product</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProducts;