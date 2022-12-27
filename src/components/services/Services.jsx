import React from 'react';
// 1:34 
const Services = () => {
  return (
    <section className='services section' id='services'>
         <h2 className='section-title'>Services</h2>
      <span className='section-subtitle'>What I offer</span>

      <div className='services-container container grid'>
        <div className='services-content'>
            <div>
                <i className='uil uil-web-grid services-icon'></i>
                <h3 className='services-title'>
                    Product <br /> Designer
                </h3>
            </div>

            <span className='services-button'>View more<i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className='services-modal'>
                <div className='services.modal-content'>
                    <i className='uil uil-times services-modal-close'> </i>

                    <h3 className='services-modal-title'>Product Designer</h3>
                    <p className='services-modal-description'>Service with more than .....</p>

                    <ul className='services-modal-services grid'>
                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I develop the user interface.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Web page development.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I create UX element interactions.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I position your company brand.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='services-content'>
            <div>
                <i className='uil uil-arrow services-icon'></i>
                <h3 className='services-title'>
                    UI/UX <br /> Designer
                </h3>
            </div>

            <span className='services-button'>View more<i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className='services-modal'>
                <div className='services.modal-content'>
                    <i className='uil uil-times services-modal-close'> </i>

                    <h3 className='services-modal-title'>UI/UX Designer</h3>
                    <p className='services-modal-description'>Service with more than .....</p>

                    <ul className='services-modal-services grid'>
                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I develop the user interface.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Web page development.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I create UX element interactions.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I position your company brand.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='services-content'>
            <div>
                <i className='uil uil-edit services-icon'></i>
                <h3 className='services-title'>
                    Visual <br /> Designer
                </h3>
            </div>

            <span className='services-button'>View more <i className='uil uil-arrow-right services-button-icon'></i></span>

            <div className='services-modal'>
                <div className='services.modal-content'>
                    <i className='uil uil-times services-modal-close'> </i>

                    <h3 className='services-modal-title'>Visual Designer</h3>
                    <p className='services-modal-description'>Service with more than .....</p>

                    <ul className='services-modal-services grid'>
                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I develop the user interface.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Web page development.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I create UX element interactions.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>I position your company brand.</p>
                        </li>

                        <li className='services-modal-service'>
                            <i className='uil uil-check-circle services-modal-icon'></i>
                            <p className='services-modal-info'>Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
    )
}

export default Services