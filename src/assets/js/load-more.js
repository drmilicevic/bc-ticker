window.addEventListener('DOMContentLoaded', function () {
    let loadMorePosts = document.querySelector('.load-more-posts');
    let authorsArticles = document.querySelector('.author-articles');
    let offsetForPosts = parseInt(loadMorePosts.dataset.offset);
    const POSTS_PER_PAGE = parseInt(loadMorePosts.dataset.loadPerClick);



    if (loadMorePosts) {
        loadMorePosts.addEventListener('click', (event) => {
            event.preventDefault();
            // loadingAnimation.classList.add('sx-loader');
            loadMoreAuthorsPosts();
        });
    }

    function loadMoreAuthorsPosts(){
        const AUTHOR_ID = loadMorePosts.dataset.userId;
        let fetchArgs = {
            action : 'bc_get_more_authors_posts',
            offsetForPosts : offsetForPosts,
            loadPerClick : POSTS_PER_PAGE,
            authorId : AUTHOR_ID
        };
        loadMorePosts.style.pointerEvents = "none";
        let prepareArgs = new URLSearchParams(fetchArgs);

        fetch(ajaxObj.ajaxurl,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            },
            method: 'POST',
            body: prepareArgs
        })
            .then((response) => response.json())
            .then((result) => {
                // loadingAnimation.classList.remove('sx-loader');
                if(result.output == ""){
                    loadMorePosts.remove();
                    authorsArticles.innerHTML += `
                    <div class="col-12 fw-bold px-4">
                        <p>No more posts to be displayed...</p>
                    </div>
                    `;
                }

                authorsArticles.innerHTML += result.output;
                loadMorePosts.style.pointerEvents = "auto";
                offsetForPosts += POSTS_PER_PAGE;
            });
    }
});