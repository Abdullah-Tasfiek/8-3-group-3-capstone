import '../Styles/UserProfile.css';
import User from './User';
import '../Styles/UserProfiles.css';

export default function UserProfile({ currentFilter, users, user }) {
  return (
    <div className='UserGallery bg-beige'>
      {users
        .filter((u) => {
          if (!currentFilter) {
            return true;
          } else {
            return u.dietary_restrictions.includes(currentFilter);
          }
        })
        .map((u) => {
          return <User info={u} key={`${u.id}-${u.name}`} signedInUser={user} />;
        })}
    </div>
  );
}
