import React, { useState, useEffect } from 'react'

export default function Tags(props) {
    const [tags, setTags] = useState(
        ['boomdotdev', 'task', 'tags', 'react']
    )

    return (

        <div className="tags">
            {
            props.children.map((child, i) => 
                <p key={i} className="tag">#{child} </p>)
                }
            
        </div>
    )
}
