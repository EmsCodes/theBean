const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?per_page=30&_embed";

const blogPostsContainer = document.querySelector(".blog-list-container");
const morePostsButton = document.querySelector("#more-button");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        blogPostsContainer.innerHTML = ""; 

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;
            
            if(i<=9){
                blogPostsContainer.innerHTML += 
                `<a href="specific-post.html?id=${posts[i].id}">
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
            }
            //gives every other object green background-color
                if(i % 2 === 0){
                    const blogPostBackground = document.querySelectorAll(".brown-post-container");
            
                    blogPostBackground.forEach(function() {
        
                    blogPostBackground[i].style.backgroundColor = "#3B543D";
        
                });
    
        }
    }
    }
    catch(error){
        console.log(error);
        
    }

}

fetchPosts();


morePostsButton.addEventListener("click", async function(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        blogPostsContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;  

            if(i<=11){

                blogPostsContainer.innerHTML += 
                        `<a href="specific-post.html?id=${posts[i].id}">
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
        
        
                        if(i % 2 === 0){
                            const blogPostBackground = document.querySelectorAll(".brown-post-container");
                    
                            blogPostBackground.forEach(function() {
                
                            blogPostBackground[i].style.backgroundColor = "#3B543D";
                            });

                morePostsButton.style.display = "none";            
            }
        }
    }
}
    catch(error){
        console.log(error);
    }
});

