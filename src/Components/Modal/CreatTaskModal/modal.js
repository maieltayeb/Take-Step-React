import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import "./modal.css"
import ModalPost from '../AddPostModel/modal';
const ModalCreateTask= (props) => {


  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return (
    <div >
     <ModalPost></ModalPost>
    </div>
  );
}

export default ModalCreateTask;

{/* <Button  style={{marginLeft:"6px",backgroundColor:"#0E0D0D",borderRadius:"58px",height:"48px",width:"138px",fontSize:"20px",fontFamily:"tahoma"}} onClick={toggle}>Create Post</Button>
<Modal className="modalShap" isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader  className="headerModal" toggle={toggle}>Add Post</ModalHeader>
  <ModalBody className="bodyModal">

 <FormGroup row>
 
</FormGroup>
 <Form>
<FormGroup row>
  <Label for="TaskTitle" sm={2}>Task Title &nbsp;&nbsp;&nbsp;:</Label>
  <Col sm={10}>
    <Input type="text" name="TaskTitle" id="TaskTitle" placeholder="write task title " />
  </Col>
</FormGroup>

<FormGroup row>
  <Label for="Proposals" sm={2}>Proposals &nbsp;&nbsp;:</Label>
  <Col sm={4}>
    <Input type="number" name="Proposals" id="Proposals" placeholder="Proposals num " />
  </Col>
  <Label for="Time" >Time :</Label>
  <Col sm={2}>
    <Input type="select" name="Time" id="Time">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
    
    </Input> 
  
  </Col>
</FormGroup>



<FormGroup row>
  <Label for="Description" sm={2}>Description :</Label>
  <Col sm={10}>
    <Input type="textarea" name="text" id="Description" />
  </Col>
</FormGroup>
<FormGroup row>
  <Label for="exampleFile" sm={2}>File /Image :</Label>
  <Col sm={10}>
    <Input type="file" name="file" id="exampleFile" />
  
  </Col>
</FormGroup>



</Form>
  </ModalBody>
  <ModalFooter className=" bodyModal">
    <Button className=" mr-0 cancelModal"
     onClick={toggle}>Cancel</Button>
    <Button className=" ml-2 mr-1 addModal" onClick={toggle}>Add</Button>
  </ModalFooter>
</Modal> */}