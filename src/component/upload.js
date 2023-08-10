import React, { useState, useEffect } from 'react';
import './upload.css'
import Nav from './nav'
import Footer from './footer'
import Loop_text from './loop_text';
function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Add description state
  const [cover, setCover] = useState();
  const [books, setBooks] = useState([]);
 
  
  const newBook = () => {
    if (!title || !description || !cover) {
      alert('Please fill in all fields.');
      return;
    }
    const uploadData = new FormData();
    uploadData.append('title', title);
    uploadData.append('description', description); // Append the description
    uploadData.append('cover', cover, cover.name);
      
    fetch('http://127.0.0.1:8000/books/', {
      method: 'POST',
      body: uploadData
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // Refresh the list of books after successful upload
      fetchBooks();
    })
    .catch(error => console.log(error));
  }

  const fetchBooks = () => {
    fetch('http://127.0.0.1:8000/books/')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <div className='uploadpath'>
        <h3>Upload images</h3>
        <br />
        <div className='inputpath d-flex justify-content-around'>
          <label>
            <input className='inputpic' type="file" onChange={(evt) => setCover(evt.target.files[0])} />
          </label>
          <label>
            <input className='title-text' type="text" value={title} placeholder='V28-room8' onChange={(evt) => setTitle(evt.target.value)} />
          </label>
          <label>
             <input className='title-text '  value={description} placeholder='What is on your mind?' onChange={(evt) => setDescription(evt.target.value)} />
          </label>
         
          <br/>
        </div>
        <div className=''>
           <div className='btn buton-click '>
          <button className='cancel btn' onClick={() => newBook()}>Cancel</button>
          
        </div>
        <div className='btn '>
         <button className='upload' onClick={() => newBook()}>Upload</button>
        </div>

        </div>
       
      </div>
      <Loop_text></Loop_text>
      <Footer></Footer>
    </div>
  );
}

export default Upload;
