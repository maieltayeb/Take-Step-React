import React, {Component} from 'react';
// import styles from './subcribeCard.module.css';
import './subscribeCard.css';
import {
Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardHeader,Row, Col
} from 'reactstrap';

class SubscribeCard extends Component {
    render() { 
     

        return ( 
              
          <container className=" subscribeCard-card card">
          <div className="subscribeCard-top">
             <h3>Free</h3>
             <h1>0.00 $</h1>
             <p>per month</p>
          </div>
          <hr/>
          <div className="subscribeCard-middle">
         
          
            <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
          
                untill 10 tasks free 
             </div>
          
             <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
      
                untill 10 tasks free 
             </div>
          
            <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
             
                untill 10 tasks free 
             </div>
             <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
             
                untill 10 tasks free 
             </div>
             <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
             
                untill 10 tasks free 
             </div>
             <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
             
                untill 10 tasks free 
             </div>
             <div className="subscribeCard-imgTitle">
            <i class="fas fa-bolt" style={{color:'yellow',paddingRight:'10px'}}></i>
             
                untill 10 tasks free 
             </div>
      
               </div>
          <div className="subscribeCard-bottom">
            <button className="subscribeCard-btn">Try &#8594;</button>
          </div>

       </container> 
            
          
         );
    }
}
 
export default SubscribeCard;


////////////////////////////////////////////
{/* <Card className={styles.card}>
<CardText className={styles.CardTextWord}>{this.props.type}</CardText>
<CardText className={styles.header}>{this.props.price}  $</CardText>
<CardText>per month</CardText>
<hr/>
<CardBody className={styles.cardBody}>
{this.props.advatages.map((ad)=>{
return    <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>{ad} </CardText>
})}
<Button className={styles.btn} >Try Now</Button>
</CardBody>
</Card> */}


////////////////////////////
// </Col>
// <Col> <Card className={styles.CardMiddle} >
//     <CardText className={styles.CardTextWord}>Plus</CardText>
//     <CardText className={styles.header}>199.00 $ </CardText>
//     <CardText>per month</CardText>
//     <hr />
//     {/* <CardHeader className={styles.header}>0.00</CardHeader> */}
//   <CardBody className={styles.cardBody}>

//   <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/> Untill 50 FreeTask </CardText>


//  <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>Proposals Filtering</CardText>
//  <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>enjoy Plus Account</CardText>
//     {/* <i className="far fa-hand-point-right">--</i> */}
 
  
//               <Button className={styles.btn} >Try Now </Button>
//   </CardBody>
// </Card></Col>
// <Col>  <Card className={styles.card}>
//     <CardText className={styles.CardTextWord}>Premium</CardText>
//     <CardText className={styles.header}>500.00 $</CardText>
//     <CardText>per month</CardText>
//     <hr />
//     {/* <CardHeader className={styles.header}>0.00</CardHeader> */}
//   <CardBody className={styles.cardBody}>

//   <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>Untill 100 FreeTask </CardText>


//  <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>Proposals Filtering</CardText>
//  <CardText><img width="30px" src="/img/light.png" alt="Card image cap"/>enjoy Pre  Account</CardText>
//     {/* <i className="far fa-hand-point-right">--</i> */}
 
  
//               <Button className={styles.btn} >Try Now</Button>
//   </CardBody>
// </Card></Col>

// </Row> 
   





