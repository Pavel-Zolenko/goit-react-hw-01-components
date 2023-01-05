import { FriendListItem } from "components/FriendList/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(friend => (
           <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        ))}
    
</ul>
    
) 
