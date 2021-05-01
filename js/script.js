const url = "http://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?_embed";

const carouselContainer = document.querySelector("#posts-carousel");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        console.log(json);

        for(let i = 0; i < posts.length; i++){


            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;

            console.log(featuredImage);
            


            // console.log(featuredImage);
            
            
            carouselContainer.innerHTML += 
            `<a href="specific-post.html?id="${posts[i].id}">
                <div class="post-container">
                    <div class="featured-image" style="background-image:url(${featuredImage})" alt=""></div>
                    <h4>${posts[i].title.rendered}</h4>
                    <p>read></p>
                </div>
            </a>`;
        }
        
    }
    catch(error){
        console.log(error);
        
    }
}

fetchPosts();

