import React from 'react'
import {
  Card, CardText, CardBody, CardHeader,
  CardFooter, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
  const {name, stocked, category, description, price} = props.product
  return (
    <div>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
        {!stocked && <p>Out of stock</p>}
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
      <CardFooter>
        Price: ${price}
        
      </CardFooter>
    </div>
  );
}

export default ProductCard
