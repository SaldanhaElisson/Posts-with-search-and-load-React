import { Component } from 'react'


class App extends Component{

  // simulando dados
  state = {
    counter: 0,
    posts:[
      {
        id:1,
        tite: 'O titulo 1',
        body: 'Corpo 1'
      },
      {
        id:2,
        tite: 'O titulo 2',
        body: 'Corpo 2'
      },
      {
        id:3,
        tite: 'O titulo 2',
        body: 'Corpo 2'
      },
    ]
  }
  setTimeoutUpdate = null;

  // vamos utilizar essa função para buscar dados
  componentDidMount(){
    this.handletimeOut()
  }

  // toda vez que o component atualizar a função será executado
  componentDidUpdate(){
      this.handletimeOut()
  }

  // com essas duas funções pode dá erro, deixar um "lixo" antes de redenrizar outro component
  // por exemplo a função timeOut, quando o component for construido uma vez a função DidMount
  // irá ser adicionada, e depois o update e assim entrando em um loop infinito
  // as vezes a função que construi um component pode ser executado e o setTimeOut ainda está ativado
  // esse setTImeOut pode ser o lixo da nossa aplicação então precisamos resetar ele antes da função 
  // DidUpdate ser executado dnv e vamos o seguinte

  componentWillUnmount(){
    clearTimeout(this.setTimeoutUpdate)
  }

  handletimeOut(){
    const {posts, counter} = this.state
    posts[0].title = 'O titulo mudou'
      setTimeout(() =>{
        this.setState({post, counter: counter + 1})
      }, 2000)
  }



  render(){
    const {posts, counter} = this.state;
    return(
      <>
         <h1>{counter}</h1>
        {/* Quando tiver uma array e quisermos criar um elementos para cada dado podemos utilizar .map */}
        {/* Quando temos varios elementos iguais criado na tela precisas colocar
          uma 'chave unica': Key = "[alguém unico]" nesse camos vamos utilizar o id do objeto
        */}
        {posts.map(post => ( 
        <>
        <h1 key={post.id}>{post.tite}</h1>
        <p>{post.body} </p> 
        </>
        
        
        ))}
      </>
    )
  }
}
export default App
