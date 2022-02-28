export const loadPosts = async () => {
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
     return postsAndPhotos
     
}
