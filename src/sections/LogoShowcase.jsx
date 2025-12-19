import {logoIconsList} from "../constants/index.js";

const LogoIcon = ({icon}) => {
    return (
        <div className="flex-col-center text-center marquee-item space-y-4 whitespace-nowrap">
            <img src={icon.imgPath} alt={icon.name} className="w-16"/>
            <p>{icon.name}</p>
        </div>
    );
};

const LogoShowcase = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>

            <div className="marquee h-52 bg-zinc-900">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon}/>
                    ))}

                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default LogoShowcase;
