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
        : 'https://7ub1xio0m9.execute-api.us-east-1.amazonaws.com';
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
        <div
          id='overlay'
          style={{
            position: 'absolute',
            display: 'none',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: '2',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              fontSize: '50px',
              color: 'white',
              transform: 'translate(-50%,-50%)',
              msTransform: 'translate(-50%,-50%)',
            }}
          >
            Loading your image please wait...
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus={true}
            type='text'
            name='searchQuery'
            placeholder='enter desired text'
          />

          <div>
            <img
              id='myImage'
              alt='Your Image will appear here'
              style={{
                maxInlineSize: '100%',
                blockSize: 'auto',
                aspectRatio: '2/1',
              }}
            />
          </div>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
export default App;
