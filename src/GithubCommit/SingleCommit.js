import React from 'react';
import PropTypes from 'prop-types';

const SingleCommit = ({commitObject})=>{
    return(
        <React.Fragment>
            <div className="commit-author">{commitObject.commit.author.name}</div>
            <div className="commit-date">{commitObject.commit.committer.date}</div>
            <div className="commit-message">{commitObject.commit.message}</div>
        </React.Fragment>
    )
}
SingleCommit.propTypes ={
    commitObject: PropTypes.object.isRequired,
}

export default SingleCommit;