import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';


export default function AuthOptions() {
    //history is anything that has happene in url bar.
    const history = useHistory();
    const register = () => history.push('/register');
    const login = () => history.push('/login')

    return (
        <nav className='auth-options'>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
        </nav>
    )
}


// export default function AuthOptions() {
//     const { userData, setUserData } = UserContext(UserContext);
  
//     //history is anything that has happene in url bar.
//     const history = useHistory();
  
//     const register = () => history.push("/register");
//     const login = () => history.push("/login");
//     const logout = () => {
//         setUserData({
//             token: undefined,
//             user: undefined
//           });
//           localStorage.setItem('auth-token', '');
//     };
  
  
//     return (
//       <nav className="auth-options">
//         {userData.user ? (
//           <button onClick={logout}>Logout</button>
//         ) : ( <>
//               <button onClick={register}>Register</button>
//               <button onClick={login}>Login</button> 
//               </>
//           )}
//       </nav>
//     );
//   }
  
