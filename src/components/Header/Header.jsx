import { useState } from "react";
import NavMajor from "./Navigation/NavMajor";
import NavMinor from "./Navigation/NavMinor";
import ModelWindow from "./ModelWindow";
import ProfileEdit from "../Profile/ProfileEditMode/ProfileEdit";
import styles from "./Header.module.css";


export default function Header(props) {
  const [isModelWindowOn, toggleModelWindow] = useState(false);

  const logOut = () => {
    props.logOut();
    toggleModelWindow(false);
  };

  const openModelWindow = () => {
    toggleModelWindow(true);
  };

  const exitModelWindow = (e) => {
    if (e.target.className === styles.modelWindow_container) {
      toggleModelWindow(false);
    }
  };

  ////RENDER

  return (
    <>
      {isModelWindowOn && (
        <ModelWindow exitModelWindowFn={exitModelWindow} logOutFn={logOut} />
      )}
      
      {props.isEditModeOn && (
        <ProfileEdit
          backImg={props.profile.photos.large}
          avatar={props.profile.photos.small}
          profile={props.profile}
        />
      )}
      <header className={styles.header}>
        <div className={styles.img}>
          <img
            src="https://bbts1.azureedge.net/images/p/full/2017/09/8819c275-f982-4c5b-aa61-754f4c6a5402.png"
            alt=""
          />
        </div>
        {props.auth.isLogged && <NavMajor auth={props.auth} />}
        <NavMinor auth={props.auth} openModelWindowFn={openModelWindow} />
      </header>
    </>
  );
}
