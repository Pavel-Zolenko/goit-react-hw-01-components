import css from "./FriendList.module.css";
            
export const FriendListItem = ({ avatar, name, isOnline } ) => (
    <li className={css.item}>
        <span className={css.status} style={{backgroundColor: getBgColor({isOnline})}}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
    </li>

   
)

 function getBgColor(isOnline) {
     if (isOnline.isOnline) {
       return "green"
     }
     return "red"

}

