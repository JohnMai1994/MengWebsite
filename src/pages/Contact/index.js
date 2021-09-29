import React, {useRef, useEffect} from "react";
import styled from "styled-components";

import Moon from "../../image/moon.png"
import Stars from "../../image/stars.png"
import MountainBehind from "../../image/mountains_behind.png"
import MountainFront from "../../image/mountains_front.png"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt, faEnvelope, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";


const ContactStyle = styled.div`



`

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
    overflow: hidden;
    background: #000102;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    
    }
    
    :after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #160419 70%, transparent);
      z-index: 5;
   
    }
    
    


`


const Text1 = styled.h2`
    position: absolute;
    color: #fff;
    font-size: 10vw;
    text-align: center;
    line-height: 0.55em;
    font-family: "Rancho", cursive;
    transform: translateY(-150%);
    z-index: 1;


`


const Text2 = styled.span`
    position: absolute;
    right: -80px;
    color: #fff;
    text-align: center;
    line-height: 0.55em;
    font-size: 2vw;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: sans-serif;
`


const TextBox = styled.div`
    position: relative;
    height: 100vh;
    padding: 100px;
    background: #160419;
    text-align: center;

    h2{
      font-size: 3.5em;
      color: #fff;
      text-transform: uppercase;
      
    
    }
    
    p {
      font-size: 1em;
      color: #fff;
      
    }

`

const ContactBox = styled.section`
    position: relative;
    min-width: 1100px;
    max-width: 1400px;
    height: 550px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px auto;
    padding: 5px;
    background: white;
    border-radius: 20px;

`


const ContactInfo = styled.div`
    min-width: 450px;
    height: 100%;
    background: #3e1f92;
    border-radius: 20px;
    
    position: relative;
    overflow: hidden;
    
    padding: 40px;
    text-align: left;
    
    h2{
        font-size: 1.5em;
    
    }
    
    p{
        font-size: 1em;
        font-weight: lighter;
    }
    
    
    
    :before {
        content: "";
        position: absolute;
        right: -250px;
        bottom: -250px;
        width: 500px;
        height: 500px;
        background: #fa949d;
        border-radius: 50%;
        z-index: 1;
    }
    
    :after {
    
          content: "";
      position: absolute;
      bottom: 100px;
      right: 100px;
      width: 150px;
      height: 150px;
      background: #7e53fa;
      border-radius: 50%;
      opacity: 90%;
      z-index:2;
    
    
    }
    
    
`


const ContactInfoMSG = styled.ul`
    position: relative;
    margin: 60px 0;
    z-index: 3;

    li{
        position: relative;
        list-style: none;
        display: flex;
        margin: 50px 0;
        cursor: pointer;
        align-items: center;
        
        span:nth-child(1){
          width: 30px;
          min-width: 30px;
        }
        
        span:nth-child(2){
          color: #fff;
          margin-left: 10px;
          font-weight: 300;
        
        }
        
    
    }

`

const Icon = styled(FontAwesomeIcon)`
    transition:0.1s;
`

const ContactInfoSocial = styled.ul`
    margin: 5px 0;
    display: flex;
    list-style: none;
    
    
    
    li{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: transparent;
        transition: 0.5s;
        
        :hover{
            background: #f694a0;
            
            ${Icon} {
             color: white;
            }
            
        }
    }
`


const ContactForm = styled.div`
    min-width: calc(100% - 465px) ;
    height: 100%;

    background: transparent;
    border-radius: 20px;
    margin-left: 10px;
    text-align: left;
    padding: 40px;
    
    
    h2{
        font-size: 1.5em;
        color: #3e1f92;
    
    }
`


const FormBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;




`

const InputBox1 = styled.div`
    position: relative;
    margin-bottom: 35px;
    width: 47%;
    
    input {
        width: 100%;
        resize: none;
        padding: 5px 0;
        font-size: 18px;
        font-weight: 300;
        color: #333;
        border: none;
        border-bottom: 1px #e1e0e6 solid;
        outline: none;
        font-family: sans-serif;
        
        :focus,:valid{
            border-bottom: 3px #3e1f92 solid;
        
        }
    }
    
    
    label {
        position: absolute;
        top: 0px;
        left: 0;
        padding: 5px 0;
        color: #89889d;
        pointer-events: none;
        font-size: 18px;
        font-weight: 300;
        transition: 0.3s;
    }
    
    input:focus ~ label, 
    input:valid ~ label  {
        top: -18px;
        color: #6a47c7;
        font-size: 12px;
        
    
    }
    


`

const InputBox2 = styled.div`
    position: relative;
    margin-bottom: 35px;
    width: 100%;
    
    textarea {
        width: 100%;
        height: 120px;
        resize: none;
        padding: 5px 0;
        font-size: 18px;
        font-weight: 300;
        color: #333;
        border: none;
        outline: none;
        border-bottom: 1px #e1e0e6 solid;
        font-family: sans-serif;
    }
    
    label {
        position: absolute;
        top: 0px;
        left: 0;
        padding: 5px 0;
        color: #89889d;
        pointer-events: none;
        font-size: 18px;
        font-weight: 300;
        transition: 0.3s;
    }
    
    textarea:focus ~ label, 
    textarea:valid ~ label  {
        top: -18px;
        color: #6a47c7;
        font-size: 12px;
        
    
    }
    
    input[type="submit"] {
        position: relative;
        cursor: pointer;
        background: #3e1f92;
        color: #fff;
        border: none;
        width: 100%;
        padding: 12px;
        transition: 0.3s;
        
        :hover{
           background: #774ef0;
        }
    
    }
    
    



`

function Contact() {
    const text1 = useRef();
    const text2 = useRef();
    const stars = useRef();
    const moon = useRef();
    const mountainbehind = useRef();
    const mountainfront = useRef();

    const onScroll = () => {
        let value = window.scrollY;
        text1.current.style.top = 50 + value * -0.05 + "%";
        text2.current.style.right = -80 + value * 2 + "px";
        moon.current.style.top = value * -2 + "px";
        stars.current.style.left = value * 0.2 + "px";
        mountainfront.current.style.top = value * -0.02 + "px";
        mountainbehind.current.style.top = value * -0.2 + "px";

    }

    useEffect(() => {
        document.addEventListener("scroll", onScroll)

        return () => {
            document.removeEventListener("scroll", onScroll)
        }

    })


    return <ContactStyle>
        <Section>
            <Text1 ref={text1}>
                Contact Me
            </Text1>
            <Text2 ref={text2}>
                Want to Know More?
            </Text2>
            <img src={Stars} alt="stars" ref={stars}/>
            <img src={Moon} alt="" ref={moon}/>
            <img src={MountainBehind} alt="" ref={mountainbehind}/>
            <img src={MountainFront} alt="" ref={mountainfront}/>


        </Section>


        <TextBox>
            <h2>Contact Me</h2>
            <p>Any Question or remarks?? Just write us a message!</p>
            <ContactBox>
                <ContactInfo>
                    <h2>Contact Information</h2>
                    <br/>
                    <p>Fill up the form and our Team will get back to you within 24 hours</p>

                    <ContactInfoMSG>
                        <li>
                            <span>
                            <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} color={"#fa949d"}/>
                            </span>
                            <span>+1 519-781-2983</span>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} size={"lg"} color={"#fa949d"}/>
                            </span>
                            <span>mjd64929@icloud.com</span>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} size={"lg"} color={"#fa949d"}/>
                            </span>
                            <span>109 Olive Ave, Toronto, ON</span>
                        </li>
                    </ContactInfoMSG>
                    <ContactInfoSocial>
                        <li>
                            <a href="#">
                                <Icon icon={faFacebookF} size={"lg"} color={"#fa949d"}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon icon={faTwitter} size={"lg"} color={"#fa949d"}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon icon={faInstagram} size={"lg"} color={"#fa949d"}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon icon={faLinkedinIn} size={"lg"} color={"#fa949d"}/>
                            </a>
                        </li>
                    </ContactInfoSocial>
                </ContactInfo>
                <ContactForm>
                    <h2>Send a Message</h2>
                    <FormBox>
                        <InputBox1>
                            <input type="text" required/>
                            <label>First Name</label>
                        </InputBox1>

                        <InputBox1>
                            <input type="text" required/>
                            <label>Last Name</label>
                        </InputBox1>

                        <InputBox1>
                            <input type="text" required/>
                            <label>Email Address</label>
                        </InputBox1>

                        <InputBox1>
                            <input type="text" required/>
                            <label>Phone Number</label>
                        </InputBox1>

                        <InputBox2>
                            <textarea name="" id="" required >

                            </textarea>
                            <label>Write Your Message...</label>

                        </InputBox2>

                        <InputBox2>
                            <input type="submit" value={"Send"}/>
                        </InputBox2>
                    </FormBox>


                </ContactForm>

            </ContactBox>


        </TextBox>
    </ContactStyle>


}

export default Contact;