import React, { useState } from "react";
// import "../Card/BusinessOwnerProfileCard/OwnerProfileCard.css";
import "./NotificationDropdown.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

const NotificationDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ background: "none", border: "none" }}>
        <i class="fas fa-bell text-warning"></i>
      </DropdownToggle>
      <DropdownMenu
        className="notification-container"
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: data => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "400px"
                }
              };
            }
          }
        }}
      >
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem className="dropdown-item-container">
          <img className="rounded-circle dropdown-img" src="./img/people.png" />
          <div className="dropdown-item-text">
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div className="dropdown-item-text">
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />

        <DropdownItem className="notification-footer">
          {" "}
          <b>See All </b>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default NotificationDropdown;
