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
      <i class="fas fa-plus" onClick={toggle}></i>
      {/* <Button className="bg-dark rounded-circle w-2 h-2" onClick={toggle}>
=======
      <Button className="bg-skill rounded-circle w-2 h-2" onClick={toggle}>
>>>>>>> 43bde5a484c1324421e8b129b44b20dd97d956b1
=======
      <Button className="bg-skill rounded-circle w-2 h-2" onClick={toggle}>
>>>>>>> 43bde5a484c1324421e8b129b44b20dd97d956b1
        <i class=" d-inline-block p-10 fas fa-pen text-warning"></i>
      </Button> */}
      {/* <div className="d-inline-block  bg-secondary"><span><i class=" d-inline-block p-10 fas fa-pen text-warning"></i></span></div> */}
      <Modal
        className="modalShapSkill"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModalSkill"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Add Skill
        </ModalHeader>
        <ModalBody className="bodyModalSkill">
          <div className="">
            <form className="mb-3">
              {/* <Input placeholder="Skill (ex:Photoshop)" type="text" className=""  ></Input> */}
              <div class="input-group">
                <Input
                  class="form-control py-2 border-right-0 border"
                  type="search"
                  placeholder="Skill (ex:Photoshop)"
                >
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-search"></i>
                    </div>
                  </div>
                </Input>
              </div>
              <p class="ml-0 small text-secondary">
                You can add more than one skill
              </p>
            </form>
            <div class=" mt-2 d-inline">
              <span class=" para mr-2 ">
                Photoshop<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
              <span class=" para mr-2 ">
                Illustrator<i class="pl-2 fas fa-times"></i>
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="skill-button"
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "black",
              width: "100px"
            }}
          >
            Cancel
          </Button>{" "}
          <Button
            className="skill-button"
            color="secondary"
            onClick={toggle}
            style={{
              backgroundColor: "#494848",
              borderRadius: "20px",
              color: "#EBC010",
              width: "100px"
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddSkill;
