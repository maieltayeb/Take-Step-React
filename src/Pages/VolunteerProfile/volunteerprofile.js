import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import InProgressTaskCard from "../../Components/Card/InProgressTaskCard/inprogresstaskcard";

const VolunteerProfile = props => {
  return (
    <div>
      <div className="d-inline-block p-3 my-2 rounded ">
        <Toast style={{ maxWidth: "837px" }}>
          <ToastHeader
            className="p-3 text-warning"
            style={{ backgroundColor: "#494848" }}
          >
            Progress
          </ToastHeader>
          <ToastBody>
            <InProgressTaskCard></InProgressTaskCard>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default VolunteerProfile;
