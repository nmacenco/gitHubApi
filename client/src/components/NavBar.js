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
        <div className= 'flex flex-row justify-around  p-1.5 bg-teal-300 bg-teal-300'>
            <div className=" flex flex-col " >
                <div>
                    <span className='font-bold' >Name : </span>
                    <span>Nicolas Macenco</span>
                    {/* { userData && <span> {userData.name} </span> } */}
                </div>  
                <div>
                    <span className='font-bold' >UserName : </span>
                    <span>nmacenco</span>
                    {/* { userData && <span> {userData.userName} </span> } */}
                </div>  
                <div>
                    <span className='font-bold' >Folowers : </span>
                    <span>25</span>
                    {/* { userData && <span> {userData.userName} </span> } */}
                </div>  
            </div>
            <div  className=" flex content-center  " >
                <img 
                    src="https://img.icons8.com/glyph-neue/64/000000/github.png"
                    className=" w-20  "
                />
            </div>

        </div>
      )

}

export default NavBar