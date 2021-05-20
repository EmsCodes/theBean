const postContainer = document.querySelector("#chosen-post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const footer = document.querySelector("footer");



const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts/" + id + "?_embed";

async function fetchPost(){

    footer.style.marginTop = "650px";
    // gives the footer distance when loading icon is active

    try{

        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

        const featuredImage = posts._embedded["wp:featuredmedia"][0].source_url;
        const altImageText = posts._embedded["wp:featuredmedia"][0].alt_text;

        footer.style.marginTop = "75px";
        // changes the top margin back after URL fetch

        //creates the HTML/content based on the ID of the post the user have chosen
        
        postContainer.innerHTML = 
        `<div class="blog-post">
            <h1>${posts.title.rendered}</h1>
            <p class="date">Posted:${posts.date}</p>
            <div class="featured-image" style="background-image:url(${featuredImage})" alt="${altImageText}"></div>
            <div class="post-content">
                ${posts.content.rendered}
            </div>
        </div>`;

        const modalImage = document.querySelectorAll(".wp-block-image");
        const modalContainer = document.querySelector("#modal-container");

        //Creates an Image modal when the user clicks any of the images in the chosen post

        for(let i=0; i<modalImage.length; i++){
            modalImage.innerHTML += `<i class="fas fa-expand"></i>`;
            //variable for the modal HTML
            const modalHtml = 
            `<div class="image-modal"></div>
             <div>
                <div class="post-image-modal" style="background-image:url(${modalImage[i].childNodes[0].src})"></div>
                <button><i tabindex="0" class="fas fa-times"></i></button>
            </div>`

            //adding tabIndex to post images for accessibility
            modalImage[i].tabIndex="0";
            
            modalImage[i].addEventListener("click", function(){

                modalContainer.innerHTML += modalHtml;

            });

            modalImage[i].onkeyup = function(){

                modalContainer.innerHTML += modalHtml;
            };

            //Closes the modal when clicked outside

            document.addEventListener("click", function(event){

                if(event.target.closest(".image-modal") || event.target.matches(".fa-times")){

                    modalContainer.innerHTML = ""; 

                }
            })
        }
        
    }
    catch(error){
        console.log(error);
        //creates the error message
        carouselContainer.innerHTML = errorMessage("error", `The website messed up. Please try to <a href="posts.html" class="reload-link">reload</a> the page.`);
    }
}

fetchPost();


