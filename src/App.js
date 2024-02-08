import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostsList from './components/PostsList ';

function App() {
  const [posts, setPosts] = useState([]);
  const [postField, setPostField] = useState({
    'title': '',
    'body': ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault();

    setPosts(current => [...current, {
      'id': posts.length + 1,
      'title': postField.title,
      'body': postField.body,
    }])

    setPostField({
      'title': '',
      'body': ''
    })
  }

  const handleDelete = (id) => {
    setPosts(current =>
      current.filter(
        post => {
          return post.id !== id;
        }
      )
    )
  }

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto">
      {loading ? <h1>loading...</h1> : <PostsList posts={posts} postField={postField} setPostField={setPostField} handleSubmit={handleSubmit} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
