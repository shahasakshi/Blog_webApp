import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg'
        src='https://static-blog.treebo.com/wp-content/uploads/2021/10/Gokarna-Kuddle-Beach.jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          What a Nature !
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        The synergy between nature and the human mind weaves some magical moments that stay etched in the heart. And if this evokes visions of verdant meadows, sky-high trees, gurgling rivers, sunbaked backdrops, or rolling hills then you need to check out our bumper list of 10 Best Nature Places in India where living in the sunshine, swimming in the sea, and breathing the wild air is guaranteed. So unleash your inner nature lover!
      </p>
    </div>
  )
}

export default Post