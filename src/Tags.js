import React, { useState } from 'react'

export default function Tags(props) {
    // const [tags, setTags] = useState(
    //     ['boomdotdev', 'task', 'tags', 'react']
    // )

    return (
        <div className="tags">
            {
                props.tags.map((tag, i) => 
                <p key={i} className="tag">#{tag} </p>)
                }
            
        </div>
    )
}
