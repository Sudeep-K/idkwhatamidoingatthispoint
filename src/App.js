import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostsList from './components/PostsList ';

function App() {
  const [products, setProducts] = useState([]);
  const [productField, setProductField] = useState({
    "title": "",
    "price": 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [products])

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts(current => [...current, {
      'id': products.length + 1,
      'title': productField.title,
      'price': productField.price,
    }])

    setProductField({
      'title': '',
      'price':0 ,
    })
  }

  const handleDelete = (id) => {
    setProducts(current =>
      current.filter(
        product => {
          return product.id !== id;
        }
      )
    )
  }

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto">
      {loading ? <h1>loading...</h1> : <PostsList products={products} productField={productField} setProductField={setProductField} handleSubmit={handleSubmit} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
