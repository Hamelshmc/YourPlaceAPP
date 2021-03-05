import styled from 'styled-components';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';

const Profile = () => <div />;
// return (
//   <ProfileContainer>
//     <div>
//       <ProfileHeader>
//         <ProfileHeaderContainer>
//           <ProfileHeaderContent>
//             <UserProfile>
//               <UserAvatar
//                 src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//                 loading="lazy"
//                 alt="…"
//                 width=""
//                 height="100"
//               />
//               <Username class="component-biography__name">
//                 <span>Hamel</span>
//               </Username>
//             </UserProfile>
//           </ProfileHeaderContent>
//           <EditProfile>
//             <EditButton>editar perfil</EditButton>
//           </EditProfile>
//         </ProfileHeaderContainer>
//       </ProfileHeader>
//       <div class="component-biography__info">
//         <p class="component-biography__item">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia placeat
//           repellendus magnam, ad libero! Iusto aliquam eius beat
//         </p>
//         <span class="component-biography__item component-biography__item--emphasis">
//           <span class="material-icons-round">location_on</span>A Coruña, Galicia
//         </span>
//         <span class="component-biography__item component-biography__item--emphasis">
//           <span class="material-icons-round">calendar_today</span>
//           Fecha de nacimiento: 28 de mayo de 1998
//         </span>
//         <div class="rating-user">
//           <div id="full-stars-example-two">
//             <div class="rating-group">
//               <input
//                 disabled
//                 checked
//                 class="rating__input rating__input--none"
//                 name="rating3"
//                 id="rating3-none"
//                 value="0"
//                 type="radio"
//               />
//               <label aria-label="1 star" class="rating__label" for="rating3-1">
//                 <i class="rating__icon rating__icon--star fa fa-star"></i>
//               </label>
//               <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
//               <label aria-label="2 stars" class="rating__label" for="rating3-2">
//                 <i class="rating__icon rating__icon--star fa fa-star"></i>
//               </label>
//               <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
//               <label aria-label="3 stars" class="rating__label" for="rating3-3">
//                 <i class="rating__icon rating__icon--star fa fa-star"></i>
//               </label>
//               <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
//               <label aria-label="4 stars" class="rating__label" for="rating3-4">
//                 <i class="rating__icon rating__icon--star fa fa-star"></i>
//               </label>
//               <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
//               <label aria-label="5 stars" class="rating__label" for="rating3-5">
//                 <i class="rating__icon rating__icon--star fa fa-star"></i>
//               </label>
//               <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="component-tabs">
//       <a class="component-tabs__tab">
//         <span class="material-icons-round">campaign</span>
//         <span>Publicaciones</span>
//       </a>
//       <a class="component-tabs__tab">
//         <span class="material-icons-round">history_edu</span>
//         <span>Historial</span>
//       </a>
//       <a class="component-tabs__tab">
//         <span class="material-icons-round">inbox</span>
//         <span>Mensajes</span>
//       </a>
//       <a class="component-tabs__tab">
//         <span class="material-icons">notifications_active</span>
//         <span>Notificaciones</span>
//       </a>
//     </div>
//     <ul class="component-posts">
//       <li class="component-posts__item">
//         <div class="component-post">
//           <div class="component-img">
//             <img
//               src="https://www.casasplanet.com/blog/wp-content/uploads/2018/07/2-1.png"
//               loading="lazy"
//               alt="…"
//               width="200"
//               height="200"
//               class="component-img__item"
//             />
//           </div>
//           <div class="component-post__content">
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">location_on</span>
//               <span class="component-post__item">A Coruña</span>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">house</span>
//               <span class="component-post__item">Piso Amueblado</span>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">euro_symbol</span>
//               <span class="component-post__item">300</span>
//             </div>
//             <div class="component-post__module">
//               <a class="component-post__item--reserva">Reserva</a>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round component-favorite">favorite</span>
//               <span class="material-icons-round component-close">close</span>
//             </div>
//           </div>
//         </div>
//       </li>
//       <li class="component-posts__item">
//         <div class="component-post">
//           <div class="component-img">
//             <img
//               src="https://www.casasplanet.com/blog/wp-content/uploads/2018/07/2-1.png"
//               loading="lazy"
//               alt="…"
//               width="200"
//               height="200"
//               class="component-img__item"
//             />
//           </div>
//           <div class="component-post__content">
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">location_on</span>
//               <span class="component-post__item">A Coruña</span>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">house</span>
//               <span class="component-post__item">Piso Amueblado</span>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round component-post__item">euro_symbol</span>
//               <span class="component-post__item">300</span>
//             </div>
//             <div class="component-post__module">
//               <a class="component-post__item">Reserva</a>
//             </div>
//             <div class="component-post__module">
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round">star_rate</span>
//               <span class="material-icons-round component-favorite">favorite</span>
//               <span class="material-icons-round component-close">close</span>
//             </div>
//           </div>
//         </div>
//       </li>
//     </ul>
//   </ProfileContainer>
// );
const ProfileContainer = styled.section`
  grid-row: 2;
`;

const ProfileHeader = styled.header`
  background-image: url(https://i.pinimg.com/originals/3c/5b/f8/3c5bf826c2b466e1c871c3fdb8a6f86e.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 5rem 1rem 0rem 1rem;
`;

const ProfileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  height: auto;
  position: relative;
  top: 2.5rem;
`;

const ProfileHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1 0 auto;
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 75px;
  max-width: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border: 2px solid var(--background-opacity-09);
  box-shadow: $box-shadow-card;
  filter: drop-shadow($box-shadow-card);
`;

const Username = styled.div`
  padding: 0.5rem;
  text-transform: capitalize;
`;

const EditProfile = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const EditButton = styled(SubmitButton)`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export default Profile;
