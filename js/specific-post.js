const postContainer = document.querySelector("#chosen-post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://makra-stenkloev.no/thebean/wp-json/wp/v2/posts/" + id + "?_embed";

async function fetchPost(){

    try{

        const response = await fetch(url);

        const json = await response.json();

        const posts = json;

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

        const modalImage = document.querySelectorAll(".wp-block-image");
        const modalContainer = document.querySelector("#modal-container");

        

        for(let i=0; i<modalImage.length; i++){

            console.log(modalImage[i]);

            
            modalImage[i].addEventListener("click", function(){

                console.log(modalImage[i].childNodes[0].src);

                modalContainer.innerHTML += 
                `<div class="image-modal">
                    <a href="specific-post.html?id=${posts.id}"><i class="fas fa-times"></i></a>
                    <div class="post-image-modal" style="background-image:url(${modalImage[i].childNodes[0].src})"></div>
                </div>`

            });

            modalImage[i].onkeyup = function(){

                modalContainer.innerHTML += 
                `<div class="image-modal">
                <a><i class="fas fa-times"></i></a>
                <div class="post-image-modal" style="background-image:url(${modalImage[i].childNodes[0].src})"></div>
                </div>`
            };

            document.addEventListener("click", function(event){

                if(event.target.closest(".image-modal")){

                    modalContainer.innerHTML = "";

                }

            })
            
        }
        
    }
    catch(error){
        console.log(error);
    }
}

fetchPost();


