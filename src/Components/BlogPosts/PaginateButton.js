import React from 'react';

const PaginateButton = (props) => {
    // console.log(props)
    return(
        <div onClick={(e) => props.active(e)} className="paginate__button" >{props.page}</div>
    )
}

export default PaginateButton;