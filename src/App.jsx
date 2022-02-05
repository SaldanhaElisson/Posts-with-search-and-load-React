import { Component } from 'react'
import './App.css'
import {PostCard} from './components/PostCard'


class App extends Component{

  // simulando dados
  state = {
    posts:[]
  }
  // utilizaremos fetch para fazer as chamadas
  componentDidMount(){
   this.loadPosts()
  }

  loadPosts = async () => {

    // o PostResponde está fazer uma requisição
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const phtosoResponde =  fetch('https://jsonplaceholder.typicode.com/photos')

    // o postsResponde vai receber arrays.Ele vai esperar receber todas as respostas do postResponde
    const [posts, photos] = await Promise.all([postsResponse, phtosoResponde]);

    // depois vamos transforma esse arrays e, json
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //fazendo zip de dois json's
    // vou pegar o array com meno indice
    // irei pegar os index desse menor array e irei relacionar com o maior array
    const postsAndPhotos = postsJson.map((post, index) => {
      return{...post, cover: photosJson[index].url}
    })

    // e por fim vamos passar esses json's para os estados
    this.setState({posts: postsAndPhotos})


  }

  render(){
    const {posts} = this.state;
return(
  <>
   <section className="container">
     <div className = "posts">

     {posts.map(post =>(

       // alguns components tem child e outros não, nesse exemlo temos 
       // também podemos passar atributos que vai receber no objeto props que pode ser capturado no component
       // nesse caso vou passar os dados do post 
       <PostCard atribut="lala"
        key ={post.id}
        title={post.title}
        body = {post.body}
        id = {post.id}
        cover = {post.cover}

        />
     ))}
    
     </div>
   </section>
  </>
)
}}

export default App


