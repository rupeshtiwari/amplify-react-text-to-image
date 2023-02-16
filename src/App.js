import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

class App extends Component {
  handleSubmit(e) {
    document.querySelector('#overlay').style.display = 'block';
    e.preventDefault();
    console.log(e.target.searchQuery.value);
    console.log(process.env.NODE_ENV);
    const api =
      process.env.NODE_ENV === 'development'
        ? '/test/texttoimage'
        : 'https://7ub1xio0m9.execute-api.us-east-1.amazonaws.com/test/texttoimage';
    const data = { data: e.target.searchQuery.value };
    console.log(data);
    axios({
      method: 'POST',
      data: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      url: api,
    })
      .then((response) => {
        console.log(response);
        const el = document.querySelector('#myImage');
        el.setAttribute('src', response.data.body);
        setTimeout(() => {
          document.querySelector('#overlay').style.display = 'none';
          const elem = document.getElementById('searchQuery');
          elem.value = '';
          elem.focus();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='container'>
        <div id='overlay'>
          <div id='overlayText'>Loading your image please wait...</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1> Welcome to Stable Diffusion AI</h1>
          <input
            autoFocus={true}
            type='text'
            name='searchQuery'
            id='searchQuery'
            placeholder='enter desired text'
          />
          <div>
            <input type='submit' value='Submit' />
          </div>
          <div>
            <br></br>
            <img
              id='myImage'
              alt='Your Image will appear here'
              className='imageContainer'
            />
          </div>
        </form>
      </div>
    );
  }
}
export default App;
