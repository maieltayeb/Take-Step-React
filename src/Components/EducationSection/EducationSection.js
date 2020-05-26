import React, { Component } from 'react'; 
import './EducationSection.css'  ;

class EducationSection extends Component {
    state = {  }
    render() { 
        return ( 
    
            <div className="EducationSection-container">
            <div className="EducationSection-container-top">
                <div className="EducationSection-container-top-h6">
                     <h6>Education</h6></div>
            <div className="space"></div>
            <div className="EducationSection-container-top-icon">
               <i class="fas fa-plus"></i> </div>
             
            
            </div>
            <div className="EducationSection-container-body">
            <div className="EducationSection-container-body-img">
                <img src="/img/itilogo.png"  style={{ 'border-radius': "50%" ,width:'80%'}}/>
            </div>
            <div className="EducationSection-container-body-info">
                <div className="EducationSection-container-body-info-title">Information technology Instituit</div>
                <div className="EducationSection-container-body-info-dgree">Diploma 9 month</div>
                <div className="EducationSection-container-body-info-date">
                    <p className="EducationSection-container-body-info-Startdate">2019 -</p>
                    <p className="EducationSection-container-body-info-Startdate">2020</p>
                </div>
            </div>
            <div className="body-space"></div>
            <div className="EducationSection-container-body-icon">
                <div className="EducationSection-container-body-icon-edit"> 
                <i class="fas fa-pencil-alt"></i></div>
                <div className="EducationSection-container-body-icon-delete">
                <i class="fas fa-trash-alt"></i></div>
            
            </div>
            </div>
            
            </div> 
           
     
         );
    }
}
 
export default EducationSection;
