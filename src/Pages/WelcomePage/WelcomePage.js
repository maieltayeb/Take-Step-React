import React, { Component } from 'react';
import SubscribeCardsSection from './SubscribeCardSections/subscribeCardSection';

class WelcomePage extends Component {
    state = {  }
    render() { 
        return (  
            <container>
                <SubscribeCardsSection />
            </container>
        );
    }
}
 
export default WelcomePage;