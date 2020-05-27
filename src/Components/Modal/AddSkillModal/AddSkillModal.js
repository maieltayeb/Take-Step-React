import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import "./AddSkillModal.css";
const AddSkill = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="bg-skill rounded-circle w-2 h-2" onClick={toggle}>
        <i class=" d-inline-block p-10 fas fa-pen text-warning"></i>
      </Button>
      {/* <div className="d-inline-block  bg-secondary"><span><i class=" d-inline-block p-10 fas fa-pen text-warning"></i></span></div> */}
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
