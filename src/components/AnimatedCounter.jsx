import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-2-cols">
                {counterItems.map(({value, suffix, label}) => (
                    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div key={label} className="counter-number text-white text-5xl font-bold mb-2">
                            <CountUp suffix={suffix} end={value}/>
                        </div>
                        <div className="text-white text-lg">{label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default AnimatedCounter;
