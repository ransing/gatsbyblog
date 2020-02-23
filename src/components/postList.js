import React from 'react';
import {Link} from 'gatsby';

const PostList = ({post}) => (
    <>
        <br/>
        {post.map(post => {
            const{frontmatter, id } = post.node; 
            const {title, path} = frontmatter;
            return(
                <div key={id}>
                    <h3>
                        <Link to={path}>{title}</Link>
                    </h3>
                </div>
            )
        })

        } 
    </>
);

export default PostList;
