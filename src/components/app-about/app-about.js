import { Fragment } from 'react';
import '../app-about/app-about.scss';

function About () {
    return (
        <Fragment>
            <div className="about">    
                <img src="../../imgs/girl-865304_1920.jpg" alt="girl-with-cup" className="about__img" />
                
                <div className="about__info">
                    <h2 className="about__title">About our beans</h2>
                    <div className="divider">
                        <img src="../../imgs/icons/coffee-beans_black.png" alt="coffee-beans-black" className="divider__img" />
                    </div>

                    <div className="about__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /><br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="divider divired_long"></div>
        </Fragment>
        
    )
}

export default About;