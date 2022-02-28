import { PostCard } from '../PostCard'

export const Posts = ({ posts }) => (
    <div className = "posts">
      {/* {console.log(posts)} */}
    {posts.map(post =>(
      
    // alguns components tem child e outros não, nesse exemlo temos 
    // também podemos passar atributos que vai receber no objeto props que pode ser capturado no component
    // nesse caso vou passar os dados do post 
    <PostCard 
      key ={post.id}
      title={post.title}
      body = {post.body}
      id = {post.id}
      cover = {post.cover}

      />
    ))}
   
    </div>
)