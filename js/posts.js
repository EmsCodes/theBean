const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?_embed";

const blogPostsContainer = document.querySelector(".blog-list-container");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        console.log(json);

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;

            // for posts.html
            
            blogPostsContainer.innerHTML += 
            `<a href="specific-post.html?id="${posts[i].id}">
                <div class="post-container">
                    <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                    <div class="container-text-width">
                        <h3>${posts[i].title.rendered}</h3>
                        <p class="date">(${posts[i].date})</p>
                        <div class="description">${posts[i].excerpt.rendered}</div>
                        <p class="read-link">read></p>
                    </div>
                </div>
            </a>`;
            }
        
    }
    catch(error){
        console.log(error);
        
    }
}

fetchPosts();
