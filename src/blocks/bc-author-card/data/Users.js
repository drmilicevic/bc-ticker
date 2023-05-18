import { useEffect } from "@wordpress/element";

const Users = ({ setUsers }) => {
    useEffect(() => {
        fetch(ajaxurl, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
            }),
            body: `action=bc_get_authors`,
        })
            .then((response) => response.json())
            .then((result) => {
                let authors = result.data;
                authors.unshift({ value: 0, label: "Select Author" });
                setUsers(authors);
            });
    }, [setUsers]);

    return null;
};

export default Users;