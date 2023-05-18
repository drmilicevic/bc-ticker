import { useEffect } from "@wordpress/element";

const fetchAuthorsPosts = (showPosts, loadMore, author, numberOfPosts, count, setOutput2) => {
    useEffect(() => {
        if (showPosts === true) {
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
                });
        } else {
            setOutput2("");
        }
    }, [count, showPosts]);
};

export default fetchAuthorsPosts;