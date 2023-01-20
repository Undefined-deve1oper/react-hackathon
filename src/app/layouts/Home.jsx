import React from "react";
import Container from "../components/common/Container/Container";
import HomePage from "../components/pages/HomePage";
import NavBar from "../components/ui/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <Container>
                {/* <BreadCrumbs /> */}
                <HomePage />
            </Container>
            {/* <Footer/> */}
        </>
    );
};

export default Home;
