const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?_embed";

const carouselContainer = document.querySelector("#posts-carousel");
const rightArrow = document.querySelector("#right-carousel-button");
const leftArrow = document.querySelector("#left-carousel-button");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        // only displays left arrow after right arrow have been pressed (See righArrowFunction below)
        leftArrow.style.display = "none";
        rightArrow.style.display = "block";

        // empty the container when json gets fetched
        carouselContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            let featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            let altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;
            let postTitle = posts[i].title.rendered;

            if(checkForUndefined(postTitle)){
                postTitle = "Title Missing";
            }
            if(checkForUndefined(featuredImage)){
                featuredImage = "https://via.placeholder.com/300x250?text=Image+missing";
            }
            if(checkForUndefined(altImageText)){
                altImageText = "We are sorry, but the alt image text is missing";
            } 

            if(i<=3){ 
            
            carouselContainer.innerHTML += 
                `<a href="specific-post.html?id=${posts[i].id}">
                    <div class="post-container">
                        <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                        <h4>${postTitle}</h4>
                        <p class="read-link">read<i class="fas fa-angle-double-right"></i></p> 
                    </div>
                </a>`;    
            }    
        }
         
    }   
    catch(error){
        console.log(error);
        // gets rid of grid to center the error message
        carouselContainer.style.grid = "none";
        //creates the error message
        carouselContainer.innerHTML = errorMessage("error", `The website messed up. Please try to <a href="posts.html" class="reload-link">reload</a> the page.`);
    }

}

fetchPosts();

// function for rightArrow-button
async function rightArrowFunction(){
    
    try{
                const response = await fetch(url);
        
                const json = await response.json();
        
                const posts = json;
        
                carouselContainer.innerHTML = "";
            
                for(let i = 0; i < posts.length; i++){
        
                    const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
                    const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;  
        
                    if((i>=4) && (i<=7)){
        
                    leftArrow.style.display = "block";
                    rightArrow.style.display = "none";
        
                    carouselContainer.innerHTML += 
                        `<a href="specific-post.html?id=${posts[i].id}">
                            <div class="post-container">
                                <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                                <h4>${posts[i].title.rendered}</h4>
                                <p class="read-link">read<i class="fas fa-angle-double-right"></i></p>
                            </div>
                        </a>`;
                    }
                }
            }   
            catch(error){
                console.log(error);
                // gets rid of grid to center the error message
                carouselContainer.style.grid = "none";
                //creates the error message
                carouselContainer.innerHTML = errorMessage("error", `The website messed up. Please try to <a href="posts.html" class="reload-link">reload</a> the page.`);
            }
    };

// eventlisteners for posts-carousel right arrow button, with function for fetching/creating html
rightArrow.addEventListener("click", rightArrowFunction);
rightArrow.onkeyup = rightArrowFunction;

// eventlisteners for posts-carousel right arrow button, with function for fetching/creating html
leftArrow.addEventListener("click", fetchPosts);
leftArrow.onkeyup = fetchPosts;


