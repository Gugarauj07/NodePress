import React from 'react'
import '../assets/App.css';

const Post = () => {
  return (
    <div className='post'>
        <div className='image'>
          <img src="https://saebrasil.org.br/wp-content/uploads/2022/01/SAE-BAJA_1131_resize-258x300.jpg"/>
        </div>

        <div className="texts">
          <h2>React JS is the new thing!</h2>
          <p className="info">
            <a className="author">Gustavo Lima</a>
            <time>24-01-2004 18:24</time>
          </p>
          <p className="summary">Lorem Ipsum</p>
        </div>

      </div>
  )
}

export default Post