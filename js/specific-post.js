const postContainer = document.querySelector("#chosen-post-container");

const queryString = document.location.search;

console.log(queryString);


const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);


const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(url);

async function fetchPost(){

    try{

        const response = await fetch(url);

        const json = await response.json();

        const posts = json;
    
        console.log(posts);

        const featuredImage = posts._embedded["wp:featuredmedia"][0].source_url;
        const altImageText = posts._embedded["wp:featuredmedia"][0].alt_text;

        postContainer.innerHTML += 
        `<div class="blog-post">
            <h1>${posts.title.rendered}</h1>
            <p class="date">Posted:${posts.date}</p>
            <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
            <div class="post-content">
                ${posts.content.rendered}
            </div>
        </div>`;

    }
    catch(error){
        console.log(error);
    }
}

fetchPost();