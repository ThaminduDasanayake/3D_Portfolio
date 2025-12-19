import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons, techStackImgs} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(".tech-card", {opacity: 0, y: 50}, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#skills",
                start: "top center"
            }
        });
    });

    return (
        <div id="skills" className="flex-center md:mt-40 mt-20">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Tech Stacks"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="tech-grid">
                    {techStackIcons.map((model) => (
                        <div key={model.name}
                             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={model}/>
                                </div>
                                <div className="padding-x w-full">
                                    <p>{model.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                {/*    {techStackImgs.map(({name, imgPath}) => (*/}
                {/*        <div key={name}*/}
                {/*             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">*/}
                {/*            <div className="tech-card-animated-bg"/>*/}
                {/*            <div className="tech-card-content">*/}
                {/*                <div className="tech-icon-wrapper">*/}
                {/*                    <img src={imgPath} alt={name}/>*/}
                {/*                </div>*/}
                {/*                <div className="padding-x w-full">*/}
                {/*                    <p>{name}</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                </div>
            </div>
        </div>
    );
};
export default TechStack;
