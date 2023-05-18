import { useEffect } from "@wordpress/element";

const fetchAuthorData =(author, linkToAuthor, authorName, authorDesc, avatar, totalNumberOfPosts, authorData, setOutput, setAttributes) => {

    useEffect(()=> {
        if (author !== 0 && authorData) {
            fetch(ajaxurl, {
                method: "POST",
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                }),
                body: `action=bc_get_author_data&linkToAuthor=${linkToAuthor}&authorName=${authorName}&authorDesc=${authorDesc}&avatar=${avatar}&author=${author}&totalNumberOfPosts=${totalNumberOfPosts}`,
            })
                .then((response) => response.json())
                .then(result => {
                    setOutput(result.output);
                });
        }

        if (authorData === false) {
            setAttributes({ avatar: false })
            setAttributes({ authorDesc: false })
            setAttributes({ authorName: false })
            setAttributes({ totalNumberOfPosts: false })
            setAttributes({ linkToAuthor: false })
            setOutput('Select Option');
        }
    }, [author,linkToAuthor,authorData,avatar,authorDesc,authorName,authorDesc,totalNumberOfPosts]);
};

export default fetchAuthorData;
