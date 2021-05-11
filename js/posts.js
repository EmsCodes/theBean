const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?_embed";

const blogPostsContainer = document.querySelector(".blog-list-container");
const morePostsButton = document.querySelector("#more-button");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        console.log(json);

        createHtml(posts);

        // for(let i = 0; i < posts.length; i++){


        //     const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
        //     const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;

        //     // gives every other object either brown or green background-color
        //     if(i % 2 === 0){

        //         blogPostsContainer.innerHTML += 
        //         `<a href="specific-post.html?id="${posts[i].id}">
        //             <div class="brown-post-container">
        //                 <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
        //                 <div class="container-text-width">
        //                     <h3>${posts[i].title.rendered}</h3>
        //                     <p class="date">(${posts[i].date})</p>
        //                     <div class="description">${posts[i].excerpt.rendered}</div>
        //                     <p class="read-link">read></p>
        //                 </div>
        //             </div>
        //         </a>`;
        //     } 
        //     else { blogPostsContainer.innerHTML += 
        //         `<a href="specific-post.html?id="${posts[i].id}">
        //             <div class="green-post-container">
        //                 <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
        //                 <div class="container-text-width">
        //                     <h3>${posts[i].title.rendered}</h3>
        //                     <p class="date">(${posts[i].date})</p>
        //                     <div class="description">${posts[i].excerpt.rendered}</div>
        //                     <p class="read-link">read></p>
        //                 </div>
        //             </div>
        //         </a>`;
        //         }
            
        //     // Stops the loop when reaching 10 posts    
        //     if(i === 2){
        //         break;
        //     }
        // }
    }
    catch(error){
        console.log(error);
        
    }

}

fetchPosts();


function createHtml(posts){
    for(let i = 0; i < posts.length; i++){


        const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
        const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;

        blogPostsContainer.innerHTML += 
            `<a href="specific-post.html?id="${posts[i].id}">
                <div class="brown-post-container">
                    <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                    <div class="container-text-width">
                        <h3>${posts[i].title.rendered}</h3>
                        <p class="date">(${posts[i].date})</p>
                        <div class="description">${posts[i].excerpt.rendered}</div>
                        <p class="read-link">read></p>
                    </div>
                </div>
            </a>`;
        

        // gives every other object green background-color
        if(i % 2 === 0){

            const blogPostBackground = document.querySelectorAll(".brown-post-container");
    
            blogPostBackground.forEach(function() {

                blogPostBackground[i].style.backgroundColor = "#3B543D";

            });
         
        if(posts[i] === 9){
            break;
        }    
            
        };

    }
}
