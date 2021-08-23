import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$12', image:'https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2021/08/1-41.jpg?iv=276' },
  { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$120', image:'https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2021/08/2-41.jpg?iv=276' }
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;