import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import "./AddSkillModal.css";
const AddSkill = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{
          marginLeft: "6px",
          backgroundColor: "#0E0D0D",
          borderRadius: "58px",
          height: "48px",
          width: "138px",
          fontSize: "20px",
          fontFamily: "tahoma"
        }}
        onClick={toggle}
      >
        Add Skill
      </Button>
      <Modal
        className="modalShapSkill"
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader className="headerModalSkill" toggle={toggle}>
          Add Skill
        </ModalHeader>
        <ModalBody className="bodyModalSkill">
          <div className="">
            <form className="mb-3">
              <Input
                placeholder="Skill (ex:Photoshop)"
                type="text"
                className=""
                list="skillName"
              ></Input>
              <p className="ml-0 small text-secondary">
                You can add more than one skill
              </p>
            </form>
            <div className=" mt-2 d-inline">
              <span className=" para mr-2 ">
                Photoshop<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
              <span className=" para mr-2 ">
                Illustrator<i className="pl-2 fas fa-times"></i>
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className=" bodyModal">
          <Button className=" mr-0 cancelModal" onClick={toggle}>
            Cancel
          </Button>
          <Button className=" ml-2 mr-1 addModal" onClick={toggle}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddSkill;
