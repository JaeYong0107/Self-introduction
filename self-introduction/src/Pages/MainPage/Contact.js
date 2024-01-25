import React from "react";

const Contact = () => {
    return (
        <div className="Content">
            <div className="Contact-content">
                <h1>ABOUT ME</h1>
                <div>
                    <p>이름 : 이재용</p>
                    <p>생년월일 : 2000.01.07</p>
                    <p>연락처 : 01086726213</p>
                    <p>이메일 : dwd07@naver.com</p>
                    <p>학력 : 강원대학교(춘천 캠퍼스)</p>
                    <p>주전공 : 수학과</p>
                    <p>복수전공 : 소프트웨어융합연계전공</p>
                </div>
            </div>
            <div className="contact-me">
                <a href="https://blog.naver.com/dwd07">Blog</a> | <a href="mailto:dwd07@naver.com">E-mail</a> | {" "}
                <a href="https://github.com/JaeYong0107?tab=repositories">Github</a>
            </div>
        </div>
    )
}


export default Contact;