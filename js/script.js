const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts?_embed";

const carouselContainer = document.querySelector("#posts-carousel");
const rightArrow = document.querySelector(".fa-chevron-right");
const leftArrow = document.querySelector(".fa-chevron-left");


async function fetchPosts(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        carouselContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;
            

            if(i<=3){

            leftArrow.style.display = "none";
            
            carouselContainer.innerHTML += 
                `<a href="specific-post.html?id=${posts[i].id}">
                    <div class="post-container">
                        <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                        <h4>${posts[i].title.rendered}</h4>
                        <div class="read-link">
                            <p>read></p>
                        </div>    
                    </div>
                </a>`;    
            } 
        }
         
    }   
    catch(error){
        console.log(error);
    }

}

fetchPosts();


rightArrow.addEventListener("click", async function(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        carouselContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;  

            if((i>=4) && (i<=7)){

            leftArrow.style.display = "block";
            rightArrow.style.display = "none";

            carouselContainer.innerHTML += 
                `<a href="specific-post.html?id=${posts[i].id}">
                    <div class="post-container">
                        <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                        <h4>${posts[i].title.rendered}</h4>
                        <p class="read-link">read></p>
                    </div>
                </a>`;
            }
        }
    }   
    catch(error){
        console.log(error);
    }
});

leftArrow.addEventListener("click", async function(){

    try{
        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        carouselContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
            const altImageText = posts[i]._embedded["wp:featuredmedia"][0].alt_text;  

            if(i<=3){

            rightArrow.style.display = "block";
            leftArrow.style.display = "none";    

            carouselContainer.innerHTML += 
                `<a href="specific-post.html?id="${posts[i].id}">
                    <div class="post-container">
                        <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
                        <h4>${posts[i].title.rendered}</h4>
                        <p class="read-link">read></p>
                    </div>
                </a>`;
            }   
        }
    }   
    catch(error){
        console.log(error);
    }
});
            
