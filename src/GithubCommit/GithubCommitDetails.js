import React from 'react';
import {useLocation} from 'react-router-dom'

const GithubCommitDetails = ()=>{
    const location = useLocation();
    const commitObject = location.state;
    return(
        <React.Fragment>
            <div className="home-wrapper">
                <div className="home-title">
                    <a href='/'><img alt="home" className="home-icon" src="/home.png"/></a>
                    <span>Github Commits App</span>
                </div>
                <div className="commit-details-wrapper">
                    <a href={commitObject.author.html_url} target="_blank" rel="noreferrer">
                        <img  alt="avatar" className="commit-details-author-img" src={commitObject.author.avatar_url}/>
                    </a>
                    <div className="commit-author">Author: {commitObject.commit.author.name}</div>
                    <div className="commit-date">Date: {commitObject.commit.committer.date}</div>
                    <div className="commit-message-detail">Commit Message: {commitObject.commit.message}</div> 
                    <div>Commit URL: <a target="_blank" rel="noreferrer" href={commitObject.url}>{commitObject.url}</a></div> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubCommitDetails;