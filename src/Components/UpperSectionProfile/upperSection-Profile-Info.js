import React ,{ useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "reactstrap";
import "./upperSection-Profile-Info.css";
import PersonalInfoModal from "../Modal/PersonalInfo/PersonalInfoModal";
//import { useSelector } from "react-redux";
const PersonalInfo = props => {
 
//   let currentuserJson=localStorage.getItem("user");
  
//  let currentUser=JSON.parse(currentuserJson);
//  const [currentUserState,setStatecurrentUser]=useState(

//   currentUser
//     )
 console.log("props",props);
//   const [state, setState] = useState({
//     firstName:currentUser.firstName
//     ,lastName:currentUser.lastName,
//     companyName:currentUser.companyName,
//     description:currentUser.description,
//     countryName:currentUser.country.countryName,
//     jobTitle:currentUser.jobTitle
//   });
//   console.log(state);
//  const ownerUser = useSelector(state => state.ownerPersonalInfo);


// useEffect(() => {
//   setState(currentUserState);
// }, [currentUserState]);
  return (
    <div>
      <Container>
        <div className="upper-container">
          <Row>
            <Col lg="8">
            
                <div className="first-profile-info">
                  <div className="upper-info">
                    <div className="profile-photo">
                      <img
                        src="/img/profilephoto.png"
                        className="img"
                        alt="personal pic"
                      />
                      <div className="edit-icon">
                        <PersonalInfoModal />
                      </div>
                    </div>
                    <div className="username-location">
                      {props.currentUser.companyName?(
                      <span>{props.currentUser.companyName} </span>)
                    :(<span>company-Name </span>)}
                      <br />
                      <span className="font-smaller">
                      {props.currentUser.jobTitle?(
                      <span>{props.currentUser.jobTitle} </span>)
                    :(<span>job-Title </span>)}
                    
                      </span>
                      <br />
                      <span className="map-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span className="location">
                    


                      {/* {Object.keys(props.currentUser.country).map((keyName, i) => (
    
        <span>key: {i} {props.currentUser.country[keyName]}</span>
    
))} */}



{/* 
                        {props.currentUser.country?(
                      <span>{props.currentUser.country} </span>)
                    :(<span>country-Title </span>)} */}
                        </span>
                    </div> 
                  </div>

                  <div className="job">
                    <p className="job-title">
                      {props.currentUser.firstName}&nbsp;{props.currentUser.lastName}
                    </p>
                    <p className="job-description">
                    {props.currentUser.description?(
                      <span>{props.currentUser.description} </span>)
                    :(<span>Descripe yourself .......... </span>)}
                      </p>
                  </div>
                </div>
             
            </Col>
            <Col lg="4">
              <div className="col-profile-setting">
                <div className="profile-setting">
                  <p>Profile Setting</p>
                </div>
                <div className="loctaion">
                  <h6>Location</h6>
                  <p>Cairo</p>
                </div>
                <div className="languages">
                  <h6>languages</h6>
                  <p>English</p>
                </div>
                <div className="profile-link">
                  <p>ProfileLink</p>
                </div>
                <div className="link">
                  <p>http://www.nameproject.com</p>
                </div>
                <div className="copylink">
                  <p>CopyLink</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(PersonalInfo);
