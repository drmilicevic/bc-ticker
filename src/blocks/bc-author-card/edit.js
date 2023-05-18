import {InspectorControls,} from "@wordpress/block-editor";
import {useEffect, useState} from "@wordpress/element";
import {ToggleControl,TextControl,PanelBody,SelectControl,Button} from '@wordpress/components';

let debounceTimeout = null;
const Edit = ({attributes, setAttributes}) => {
    const {finalOutput,authorData,author,avatar,authorName,totalNumberOfPosts,authorDesc,showPosts,numberOfPosts,loadMore,linkToAuthor} = attributes;
    const [users, setUsers] = useState([]);
    const [output, setOutput] = useState('Select Author');
    const [output2, setOutput2] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const combinedOutput = output + output2;
        setAttributes({ finalOutput: combinedOutput });
    }, [output, output2]);

    useEffect(()=> {
        if(author != 0 && authorData) {
            fetch(ajaxurl, {
                method: "POST",
                headers: new Headers( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                } ),
                body: `action=bc_get_author_data&linkToAuthor=${linkToAuthor}&authorName=${authorName}&authorDesc=${authorDesc}&avatar=${avatar}&author=${author}&totalNumberOfPosts=${totalNumberOfPosts}`,
            })
                .then((response) => response.json())
                .then(result => {
                    setOutput(result.output);
                });
        }

        if( authorData === false) {
            setAttributes({ avatar: false })
            setAttributes({ authorDesc: false })
            setAttributes({ authorName: false })
            setAttributes({ totalNumberOfPosts: false })
            setAttributes({ linkToAuthor: false })
            setOutput('Select Option');
        }

    }, [author,linkToAuthor,authorData,avatar,authorDesc,authorName,authorDesc,totalNumberOfPosts]);

    useEffect(()=> {
        fetch(ajaxurl, {
            method: "POST",
            headers: new Headers( {
                'Content-Type': 'application/x-www-form-urlencoded',
            } ),
            body: `action=bc_get_authors`,
        })
            .then((response) => response.json())
            .then(result => {
                let authors = result.data;
                authors.unshift({ value: 0, label: "Select Author"})
                setUsers(result.data);
            });
    }, []);

    useEffect(()=> {
        if(showPosts == true) {
            fetch(ajaxurl, {
                method: "POST",
                headers: new Headers( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                } ),
                body: `action=bc_get_authors_posts&loadPerClick=${loadMore}&authorId=${author}&initiallyShow=${numberOfPosts}`,
            })
                .then((response) => response.json())
                .then(result => {
                    setOutput2(result.output);
                });
        } else {
            setOutput2("");
        }

    }, [count,showPosts]);

    const debounce = (attributeName, attributeValue) => {
        clearTimeout(debounceTimeout);
        setAttributes({[attributeName]: attributeValue});
        debounceTimeout = setTimeout(() => {
            setAttributes({ 'debounce': [].concat(attributeName) });
        }, 700);
    }

    return ([
            <div dangerouslySetInnerHTML={{__html: output}}/>,
        <InspectorControls>
            <PanelBody title="Author Settings" initialOpen={true}>
                <SelectControl
                    label="Author"
                    value={ author }
                    options={ users }
                    onChange={ ( author ) => {
                        setAttributes({ author })
                        setOutput2("");
                    }}
                />
                {author !=0 &&  <ToggleControl
                    label="Show author data?"
                    help={authorData ? "Yes" : "No"}
                    checked={authorData}
                    onChange={() => setAttributes({ authorData: !authorData })}
                />}

                {author !=0 && authorData && <ToggleControl
                    label="Show author avatar?"
                    help={avatar ? "Yes" : "No"}
                    checked={avatar}
                    onChange={() => setAttributes({ avatar: !avatar })}
                />}
                {author !=0 && authorData && <ToggleControl
                    label="Show author name?"
                    help={authorName ? "Yes" : "No"}
                    checked={authorName}
                    onChange={() => setAttributes({ authorName: !authorName })}
                />}
                {author !=0 && authorData && <ToggleControl
                    label="Show total number of posts for this user?"
                    help={totalNumberOfPosts ? "Yes" : "No"}
                    checked={totalNumberOfPosts}
                    onChange={() => setAttributes({ totalNumberOfPosts: !totalNumberOfPosts })}
                />}
                {author !=0 && authorData && <ToggleControl
                    label="Show author description?"
                    help={authorDesc ? "Yes" : "No"}
                    checked={authorDesc}
                    onChange={() => setAttributes({ authorDesc: !authorDesc })}
                />}
                {author !=0 && authorData && <ToggleControl
                    label="Link to author page?"
                    help={linkToAuthor ? "Yes" : "No"}
                    checked={linkToAuthor}
                    onChange={() => setAttributes({ linkToAuthor: !linkToAuthor })}
                />}
            </PanelBody>
            <PanelBody title="Posts Settings" initialOpen={false}>
                <ToggleControl
                    label="Show authors posts?"
                    help={showPosts ? "Yes" : "No"}
                    checked={showPosts}
                    onChange={() => setAttributes({ showPosts: !showPosts })}
                />
                {showPosts == true &&   <TextControl
                    label="Initially show:"
                    value={ numberOfPosts }
                    onChange={ ( numberOfPosts ) => debounce( 'numberOfPosts', numberOfPosts ) }
                />}
                {showPosts == true &&  <TextControl
                    label="On click load more:"
                    value={ loadMore }
                    onChange={ ( loadMore ) => debounce( 'loadMore', loadMore ) }
                />}
                {showPosts == true && <Button onClick={() => setCount(count + 1)} variant="secondary">
                    Get Posts
                </Button> }
            </PanelBody>
        </InspectorControls>,<div dangerouslySetInnerHTML={{__html: output2}}/>,
    ])
}

export default Edit;