export const PostCard = ({ title, body, id, cover }) => { 
      return (
          // capturando os atributos do meu component PostCard
      // console.log(props)
      <div className="post">
            <img src={cover} alt={title} />
            <div key={id} className="content">
                  <h1>{title}</h1>
                  <p>{body}</p>
            </div>
      </div>
)}
