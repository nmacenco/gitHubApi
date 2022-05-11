import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getUser} from '../actions';
import {  useSelector } from "react-redux";

const NavBar = ()=> {
    const dispatch = useDispatch();
    // const userData = useSelector((state) => state.user); 
    useEffect(()=> {
        dispatch(getUser())
      },[])

      return (
          <div>
              <div>
                  {/* { userData && <span> {userData.name} </span> }
                  { userData && <span> {userData.userName} </span> } */}
                  
              </div>
          </div>
      )

}

export default NavBar