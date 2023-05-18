const fetchAuthorData =(author, linkToAuthor, authorName, authorDesc, avatar, totalNumberOfPosts, authorData, setOutput, setAttributes) => {

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
                    setAttributes({ avatar: true })
                    setOutput(result.output);
                });
        }

};

export default fetchAuthorData;
