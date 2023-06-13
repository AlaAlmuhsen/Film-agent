import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "../components/Landing";

function Home () {
    return (
        <Fragment>
            <Landing></Landing>
        </Fragment>
    )
}

export default Home;