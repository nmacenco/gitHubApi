
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getCommits} from '../actions';
import {  useSelector } from "react-redux";

const CommitsList = ()=> {
    const dispatch = useDispatch();
    const commits = useSelector((state) => state.commits); 
    // const commits = [
    //     {commit : {
    //         message : 'Algo'
    //     }},
    //     {commit : {
    //         message : 'Algo mas'
    //     }},
    //     {commit : {
    //         message : 'Algo menos'
    //     }},
    //     {commit : {
    //         message : 'Alguito'
    //     }},
    //     {commit : {
    //         message : 'Algooooo'
    //     }},
    //     {commit : {
    //         message : 'Que paso'
    //     }},
    //     {commit : {
    //         message : 'Que onda'
    //     }},
    // ]
    useEffect(()=> {
        dispatch(getCommits())
      },[])

      return (
          <div className = 'flex flex-col justify-start  items-center bg-cyan-600 h-full' >
              <h1 className='my-7 text-3xl font-bold'> gitHubApi </h1>
              <ul className="list-none text-left w-3/4" >
                  {
                   commits.length > 0  &&  commits.map( (commit , index) => 
                    <li  
                        key={index} 
                        className = 'my-1'
                    > {commit.commit.author.date.slice(0,10)} at {commit.commit.author.date.slice(11,19)} : {commit.commit.message} </li>   
                    )
                  }
              </ul>
          </div>
      )

}

export default CommitsList