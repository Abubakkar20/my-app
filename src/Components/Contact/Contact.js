import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className=" mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <form className='fromContect'>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" required />
                                </div><br></br>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" required />
                                </div><br></br>
                            </div><br></br>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" required />
                                </div><br></br>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" required />
                                </div><br></br>
                            </div><br></br>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" required/>
                                </div><br></br>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" required/>
                                </div>
                            </div><br></br>
                            <div className="textArea">
                                <textarea style={{ width: "472px", height: "150px" }}></textarea>
                            </div><br></br>
                            <button type="submit" class="btn btn-outline-warning">Submit</button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <div className="column text-center">
                                <h3>Facebook:</h3>
                                <a href="#">Abubakkar/facebook.com</a><br></br>
                                <h3 className="mt-5">Twiter:</h3>
                                    <a href="#">Abubakkar/twiter.com</a><br></br>
                                <h3 className="mt-5">Whatsapp:</h3>
                                <a href="#">Abubakkar/whatsapp.com</a><br></br>
                        
                                <h3 className="mt-5">Linkedin:</h3>
                                <a href="#">Abubakkar/Linkdin.com</a><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;