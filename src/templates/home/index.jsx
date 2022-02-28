import { Component } from 'react'
import './style.css'

import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button'



  
class Home extends Component{

  // simulando dados
  constructor(props) {
    super(props)
    this.state = {
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage: 53
    } 
  }
  // utilizaremos fetch para fazer as chamadas
  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state
    const postAndPhotos = await loadPosts();
    this.setState({ 
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
      
    })

  }

  loadMorePosts = () => {
   const { page, postsPerPage, allPosts, posts } = this.state
   const nextPage = page + postsPerPage
   const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
   posts.push(...nextPosts);

  this.setState({posts, page: nextPage})

  }

render(){
    const { posts, page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length
    
return(
  <>
   <section className="container">
    <Posts posts = { posts }/>
    
    < Button text = "Load more posts"
    onClick = {this.loadMorePosts}
    className = 'Button-container'
    disabled = {noMorePosts}
    />
   </section>
  </>
)
}}

export default Home


