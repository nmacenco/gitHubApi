
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getCommits} from '../actions';
import {  useSelector } from "react-redux";

const CommitsList = ()=> {
    const dispatch = useDispatch();
    // const commits = useSelector((state) => state.commits); 
    const commits = [
        {commit : {
            message : 'Algo'
        }},
        {commit : {
            message : 'Algo mas'
        }},
        {commit : {
            message : 'Algo menos'
        }},
        {commit : {
            message : 'Alguito'
        }},
        {commit : {
            message : 'Algooooo'
        }},
        {commit : {
            message : 'Que paso'
        }},
        {commit : {
            message : 'Que onda'
        }},
    ]
    useEffect(()=> {
        dispatch(getCommits())
      },[])

      return (
          <div className = 'flex flex-col justify-center  items-center' >
              <h1 className='my-5 text-3xl font-bold'> Nombre del repo </h1>
              <ul className="list-none text-left" >
                  {
                   commits.length > 0  &&  commits.map( (commit , index) => 
                    <li  
                        key={index} 
                        className = 'my-1'
                    > {commit.commit.message} </li>   
                    )
                  }
              </ul>
          </div>
      )

}

export default CommitsList