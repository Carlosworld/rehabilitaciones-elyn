import React from "react";

export default function ContactUs() {
  return (
    <>
        <div className="about-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 rounded  border border-light bg-light text-dark">
                        <h2 className="noo-sh-title">Contactanos</h2>
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Email address</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Email address</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1"><strong>Email address</strong></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>               
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1"><strong>Example textarea</strong></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}