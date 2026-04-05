//Async/Await
async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    
    console.log('User found:', user.name);
  } catch (error) {
    console.log('Failed:', error);
  }
}
//Promise
function getUserData() {
  fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(user => {
      console.log('User found:', user.name);
    })
    .catch(error => {
      console.log('Failed:', error);
    });
}

//Challenge
function getAuthorPosts(authorName) {
  findAuthorId(authorName)
    .then(id => fetchPosts(id))
    .then(posts => {
      console.log("Here are the posts:", posts);
    })
    .catch(error => {
      console.log("Error finding posts:", error);
    });
}
async function getUserD(){
    try{
        const response =  await fetch('https://api.example.com');
            const user = response.json()
            console.log('User found, ', user.name );
        }catch(error){
            console.log('Failed', error)
        }
    
}


async function getAuthorPosts(authorName){
    try{
        const id = findAuthorId(authorName);
        const post = getAuthorPosts(id);
        console.log('Here are the posts: ', post);
    }catch(error){
        console.log('Failed to fetch post', error)
    }
}

async function getMyStack(myProjects){
    try{
        const id = findProjectConfigs(myProjects);
        const stacks = getMyProjects(id);
        console.log('My stacks are: ', stacks)
    }catch(error){
        console.log('Can not find stacks', error)
    }
}