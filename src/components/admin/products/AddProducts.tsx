import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ImageUploader from "./ImageUploader";
import Select from "react-select";
import {IProductDetails, ISelectorOption} from "../../../types/types";
import {units} from "../../../constants/units";
import {useForm, Controller} from "react-hook-form";

const AddProducts: React.FC = () => {

  const [categoryValidated, setCategoryValidated] = useState<boolean>(false);
  const [categoryOptions, setCategoryOptions] = useState<ISelectorOption[]>([]);

  const [productUnit, setProductUnit] = useState<string | null>(null);

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


  let borderColor = '#ced4da';
  let focusBorderColor = '#66afe9';
  let focusBoxShadow = `0 0 0 .2rem rgba(0, 123, 255, 0.25)`;
  if (categoryValidated) {
    borderColor = '#dc3545';
    focusBorderColor = '#dc3545';
    focusBoxShadow = `0 0 0 .2rem rgba(220, 53, 69, .25)`;
  }

  const style = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.selectProps.menuIsOpen ? focusBorderColor : borderColor,
      boxShadow: state.selectProps.menuIsOpen ? focusBoxShadow : 'none',
    }),
  };

  return (
    <Container>
      <Row className="add-product py-4">
        <Col xs={12} md={4}>
          {/*<Preview/>*/}
        </Col>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
                validated={false}>
            <Form.Group>
              <Form.Label>
                Product Name
              </Form.Label>
              <Form.Control type="text" size="sm" required {...register("name", {required: true})}
              />
              <Form.Control.Feedback type="invalid">Please Enter Product Name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Product Category
              </Form.Label>
              <Controller
                control={control}
                name="category"
                render={({field: {onChange, value, ref}}) => (
                  <Select
                    inputRef={ref}
                    className="category-select" classNamePrefix="select-control"
                    isSearchable
                    required
                    options={categoryOptions}
                    placeholder={null}
                    noOptionsMessage={() => ("No options here, Please Create a new Category")}
                    styles={style}
                    value={categoryOptions?.filter(option => option.value === value)}
                    onChange={(option) => {
                      onChange(option?.value)
                    }}
                  />
                )}
              />
              {categoryValidated && <small className="text-danger font-weight-bold">
                Please Select Product Category
              </small>}
            </Form.Group>
            <Row>
              <Col xs={9}>
                <Form.Group>
                  <Form.Label>
                    Product Price
                  </Form.Label>
                  <Form.Control type="text" size="sm" required
                                {...register("price", {required: true})}
                  />
                  <Form.Control.Feedback type="invalid">Please Enter Product Price</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group>
                  <Form.Label>
                    per
                  </Form.Label>
                  <Select className="category-select" classNamePrefix="select-control"
                          isSearchable
                          required
                          options={units}
                          placeholder={null}
                          noOptionsMessage={() => ("No options here, Please Create a new Category")}
                          styles={style}
                          onChange={(option) => {
                            if (option) {
                              setProductUnit(option.value);
                              setCategoryValidated(false);
                            }
                          }}
                          value={units?.filter(option => option.value === productUnit)}
                  />
                  {categoryValidated && <small className="text-danger font-weight-bold">
                    Please Select Product Category
                  </small>}
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit">Add Product</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProducts;