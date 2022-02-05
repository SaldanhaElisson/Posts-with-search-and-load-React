export const PostCard = ({title, body, id, cover}) => {
    // capturando os atributos do meu component PostCard
    // console.log(props)

    return(
            <div className="post">
            <img src={cover} alt = {title}/>
                  <div key = {id} className="content">
            <h1>{title}</h1>
            <p>{body}</p>
                  </div>
                </div>
    )
}