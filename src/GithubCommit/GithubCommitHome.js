import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router";
import SingleCommit from './SingleCommit';
import './GithubCommit.css';

const GithubCommitHome = ({})=>{
    const [commitList, setCommitList] = useState([]);
    const [filter, setFilter] = useState('');
    const history = useHistory();
    useEffect (()=>{
        let today = new Date().toLocaleString().split(',')[0].split('/').join('-');
        let filterParams = '';
        if(filter === 'today'){
            filterParams = `?since=${today}&until=${today}`;
        }else if(filter === 'lastTwo'){
            let twoDaysBeforeDate = new Date();
            twoDaysBeforeDate.setDate(new Date().getDate() - 2);
            twoDaysBeforeDate = twoDaysBeforeDate.toLocaleString().split(',')[0].split('/').join('-');
            filterParams = `?since=${twoDaysBeforeDate}&until=${today}`;
        }else if(filter === 'lastYear'){ 
            let currentYear = new Date().getFullYear();
            filterParams = `?since=01-01-${currentYear-1}&until=31-12-${currentYear-1}`;
        }
        axios.get(`https://api.github.com/repos/facebook/react/commits${filterParams}`)
        .then(res => {
            if(res && res.data){
                setCommitList(res.data);
            }
        })
    },[filter]);

    const  navigateToDetails = (commit) => {
        history.push(`/commitDetails/${commit.sha}`, commit);
    }

    const applyFilter = (type) =>{
        setFilter(type);
    }

    return(
        <React.Fragment>
            <div className="home-wrapper">
                <div className="home-title">
                    <span>Github Commits App</span>
                </div>
                <div className="commit-filters">
                    <span 
                        onClick={() =>applyFilter('today')} 
                        className={`filter-chip ${filter === 'today' ? 'filter-chip-selected' : ''}`}
                    >
                        Today
                    </span>
                    <span 
                    onClick={() => applyFilter('lastTwo')} 
                    className={`filter-chip ${filter === 'lastTwo' ? 'filter-chip-selected' : ''}`}
                    >
                        Last Two Days
                    </span>
                    <span
                     onClick={() => applyFilter('lastYear')} 
                     className={`filter-chip ${filter === 'lastYear' ? 'filter-chip-selected' : ''}`}
                    >
                        Entire Last Year
                    </span>
                    <span
                     onClick={() => applyFilter('')} 
                     className="filter-chip"
                    >
                        Clear All
                    </span>
                </div>
                <div className="commit-list-wrapper">
                    <div className="repo-info">Github commits of 
                    <a target="_blank" href="https://github.com/facebook/react"> https://github.com/facebook/react</a></div>
                    {
                        commitList.map((commit)=> (
                            <div key={commit.sha} className="single-commit" onClick={() => navigateToDetails(commit)}>
                                <SingleCommit commitObject={commit}/>
                            </div>
                        ))
                    }
                    {
                        commitList.length === 0 ? (
                            <h2>No Commits found</h2>
                        ) : null
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubCommitHome;