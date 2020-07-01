import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [title, setTitle] = useState();
  const [body, setBody] =useState();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
   getBlogPost();
  },[]);
  const getBlogPost = ()=>{
    axios.get('/api')
        .then((response)=>{
          const data = response.data;
          setPosts(data);
          console.log("data is recieved from backend");
        })
        .catch(()=>{
          alert('error retrieving data');
        })
  }


  const handleChange = (event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    //in classes u could use an object literal to make de [name]
    name === "Title"
        ?
        setTitle(value)
        :
        setBody(value);
  }

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      body: body
    }

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    }).then(()=>{
        console.log('data has been sent');
        resetInputs();
        getBlogPost();
    }).catch(()=>{
          console.log('internal server error');
        });
  };

  function resetInputs(){
    setBody('');
    setTitle('');
  }
  const displayBlogPost = (posts) =>{
      if(!posts.length)return null;
     return posts.map((post,i) =>(
          <div key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ));

  }
  return (
    <div className="App">
    <h1>hey</h1>
      <form onSubmit={submit}>
        <div className="form-input">
          <input type="text"
                 name="Title"
                 value={title}
                 onChange={handleChange}
                 placeholder={"title"}

          />
        </div>
        <div className="form-input">
          <textarea placeholder={"body"}
                    name="Body" id="" cols="30"
                    rows="10"
                    value={body}
                    onChange={handleChange}/>

        </div>
        <button>submit</button>
      </form>
      <div className="blog">
        {displayBlogPost(posts)}
      </div>
    </div>
  );
}

export default App;
