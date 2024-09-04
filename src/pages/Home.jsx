import AboutMe from "../components/AboutMe";
import Navbar from "../components/navbar";
import Formacao from "../components/Formacao";
import CursoExtra from "../components/CursoExtra";
import Contato from "../components/Contato";

function Home() {

    return (
        <>
        <Navbar />
        <AboutMe />
        <Formacao />
        <CursoExtra />
        <Contato />
        </>
    );  
}

export default Home;