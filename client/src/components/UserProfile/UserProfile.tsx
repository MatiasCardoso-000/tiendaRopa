import { useAuth } from "../../hooks/useAuth"



export const UserProfile = () => {
 const {user}= useAuth()

 return ( 
  <>
    <div>
      <h3>{user.username}</h3>
    </div>
  
  </>
 )

}