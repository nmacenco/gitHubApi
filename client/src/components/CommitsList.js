
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getCommits} from '../actions';
import {  useSelector } from "react-redux";

const CommitsList = ()=> {
    const dispatch = useDispatch();
    const commits = useSelector((state) => state.commits); 
    useEffect(()=> {
        dispatch(getCommits())
      },[])

      return (
          <div>
              <ul>
                  {
                   commits.length > 0  &&  commits.map( commit => 
                    <li> {commit.commit.message} </li>   
                    )
                  }
              </ul>
          </div>
      )

}

export default CommitsList