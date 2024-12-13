import AvatarForm from "../../containers/AvatarForm/AvatarFormContainer.jsx";
import styles from "./AvatarCreation.module.scss";

function AvatarCreationPage() {
  return (
    <div className={styles["avatar-page"]}>
      <AvatarForm />
    </div>
  );
}

export default AvatarCreationPage;
