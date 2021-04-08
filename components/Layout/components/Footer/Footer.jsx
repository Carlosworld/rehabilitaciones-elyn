import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      {/* <InstagramFeed /> */}
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4></h4>
                  <p>
                   <strong></strong> <strong></strong>
                    <br />
                    <br />
                  <strong></strong>
                  </p>
                  
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i
                          className="fab fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a> */}
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4></h4>
                  {/* <div class="fb-page" data-href="https://www.facebook.com/bybconsultingtraining/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/bybconsultingtraining/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bybconsultingtraining/">B&amp;B Consulting Training</a></blockquote></div> */}
                  {/* <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4></h4>
                  <ul>
                    <li>
                      <p>
                        {/* <i className="fas fa-map-marker-alt"></i> */}
                         <br/> 
                         <br />
                         
                        <br /> {" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {/* <i className="fas fa-phone-square"></i>{" "} */}
                        <a href="tel:5566103088"></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        {/* <i className="fas fa-envelope"></i>Email:{" "} */}
                        <a href="mailto:contacto@bybconsultingtraining.com">
                          {/* contacto@bybconsultingtraining.com */}
                        </a>
                      </p>
                    </li>
                    {/* <li>
                      <p>
                        <i className="fas fa-paper-plane"></i>Buzón:{" "}
                        <a href="complaints">
                          Quejas y sugerencias
                        </a>
                      </p>
                    </li> */}
                    
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
