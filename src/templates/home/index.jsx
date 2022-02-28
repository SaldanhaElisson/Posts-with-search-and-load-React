import { Component } from 'react'
import './style.css'

import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'



  
class Home extends Component{

  // simulando dados
  constructor(props) {
    super(props)
    this.state = {
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage: 10,
    searchValue: ''

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

  handleChange = (e) =>{
    const { value } = e.target
    this.setState({ searchValue: value})
  }

render(){
    const { posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    // Lógia para filtrar os posts de acordo com o value do input
    const filteredPosts = !!searchValue ? 
    posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }) 
    :
     posts;
    
return(
  <>
   <section className="container">
     {/* colocar !! na frente de uma variavel/parametro tranformas em um valor boloeano */}
     <div className="search-container">
       {!!searchValue && (
         <>
          <h1>Search value: {searchValue} </h1>
         </>
       ) }
       
       < TextInput handleChange={this.handleChange}  searchValue = {searchValue}/>
     </div>

      {filteredPosts.length > 0 && ( 
         <Posts posts = { filteredPosts }/>
      )}

      {filteredPosts.length === 0 && ( 
         <p> Não existe post </p>
      )}
   

    {/* Nesse trecho estou dizendo que se tem algum valor no inpunt eu não quero que aparece o botão de load de mais posts */}
    {!searchValue && ( 
      < Button text = "Load more posts"
      onClick = {this.loadMorePosts}
      className = 'Button-container'
      disabled = {noMorePosts}
      />
    )}
    
   </section>
  </>
)
}}

export default Home


