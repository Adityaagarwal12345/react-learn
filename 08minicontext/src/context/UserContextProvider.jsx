import React from 'react';
import UserContext from './UserContext';

const UserConetextProvider = ({ children})=>{

    const [user,setUser]=React.useState(null)
     return (
        <UserConetext.Provider value={{user,setUser}}>
            {childern}
        </UserConetext.Provider>
     )

}

export default UserConetextProvider