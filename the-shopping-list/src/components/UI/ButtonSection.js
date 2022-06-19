import { faTrash, faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ButtonSection.module.css";
import Button from "./Button";

const ButtonSection = ({ onRemove, onEdit, isEdited }) => {
  return (
    <div className={classes["btn-panel"]}>
      <form className={classes["form-remove"]} onSubmit={onRemove}>
        <Button name="btn1" onClick={onRemove} cssButtonClasses={"remove"}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </form>

      <Button name="btn2" onClick={onEdit} cssButtonClasses={"btn-pink edit"}>
        {isEdited ? (
          <FontAwesomeIcon icon={faSave} />
        ) : (
          <FontAwesomeIcon className="edit-icon" icon={faEdit} />
        )}{" "}
      </Button>
    </div>
  );
};

export default ButtonSection;
