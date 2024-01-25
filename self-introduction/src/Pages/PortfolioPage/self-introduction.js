import React from "react";

const SelfIntroduction = () => {
    return (
        <div className="Portfolio-content">
            <img src="/Portfolio_Images/PortfolioPage.png" width="450px" height="500px" />
            <article className="Portfolio-info">
                <h2>자기소개 페이지</h2>
                <p>기간 : 24.01.24 ~ (계속 업데이트할 예정)</p>
                <p>기술 : React</p>
                <p>개발 노트 : Router 기능을 활용하여 페이지 이동 기능을 구현하는데에 있어, BrowserRouter로 App.js에서 감쌌는데,
                    오류가 났다.  이후 왜 그런지 모르겠지만 index.js에서 BrowserRouter가 App 태그를 감싸게 바꾸었더니 해결이 됐다.
                </p>
            </article>
        </div>
    )
}

export default SelfIntroduction