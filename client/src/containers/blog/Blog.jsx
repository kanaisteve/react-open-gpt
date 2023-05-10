import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__pading" id="blog">
      <div className="gpt3__blog-heading">
        <div className="gradient__text">
          A lot is happening, We are blogging about it.
        </div>

        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Sep 26, 2021" title="Introducing GPT-3: The Future of Natural Language Processing" />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3: Powering the Next Generation of Chatbots" />
            <Article imgUrl={blog03} date="Sep 26, 2021" title="Creating Compelling Content with GPT-3" />
            <Article imgUrl={blog04} date="Sep 26, 2021" title="Building Advanced Question-Answering Systems with GPT-3" />
            <Article imgUrl={blog05} date="Sep 26, 2021" title="The Potential of GPT-3 for Business and Marketing" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog