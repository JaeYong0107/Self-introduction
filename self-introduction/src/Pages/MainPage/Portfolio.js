import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import SelfIntroduction from "../PortfolioPage/self-introduction";
import Empty from "../PortfolioPage/empty";
import Empty2 from "../PortfolioPage/empty2";

const Portfolio = () => {

    let page = ['', 'empty', 'empty2'];
    const [pageNum, setPageNum] = useState(0);
    const navigate = useNavigate();

    const ToPreqPage = () => {
        setPageNum((prevNum) => { return Math.max(prevNum - 1, 0) })
        navigate(`/portfolio/${page[pageNum]}`);
        console.log(page[pageNum]);
        console.log(pageNum);

    }

    const ToNextPage = () => {
        setPageNum((prevNum) => { return Math.min(prevNum + 1, page.length - 1) })
        navigate(`/portfolio/${page[pageNum]}`);
        console.log(page[pageNum]);
        console.log(pageNum);
    }


    return (
        <div className="Content">
            <div className="Portfolio">
                <Routes>
                    <Route path="/" element={<SelfIntroduction />} />
                    <Route path="/empty" element={<Empty />} />
                    <Route path="/empty2" element={<Empty2 />} />
                </Routes>
                <div>
                    <button size="large" onClick={ToPreqPage}>이전</button>
                    <button size="large" onClick={ToNextPage}>다음</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;