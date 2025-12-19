import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Showcase/>
            <LogoShowcase/>
            <FeatureCards/>
        </>
    );
};
export default App;
