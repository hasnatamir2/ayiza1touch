import React from "react";
import { useSelector } from "react-redux";
import Home from "../../components/home/Home";

const HomeContainer:React.FC = () => {
    const companyValues = useSelector((state:any) => state.companyValues);
    return <Home values={companyValues} />;
}

export default HomeContainer;