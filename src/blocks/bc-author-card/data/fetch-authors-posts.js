const fetchAuthorsPosts = (showPosts,setOutput, loadMore, author, numberOfPosts, count, setOutput2) => {
        if (showPosts === true) {
            console.log(showPosts);
            fetch(ajaxurl, {
                method: "POST",
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                }),
                body: `action=bc_get_authors_posts&loadPerClick=${loadMore}&authorId=${author}&initiallyShow=${numberOfPosts}`,
            })
                .then((response) => response.json())
                .then(result => {
                    setOutput2(result.output);
                    setOutput("");
                });
        } else {
            setOutput2("");
        }
};

export default fetchAuthorsPosts;