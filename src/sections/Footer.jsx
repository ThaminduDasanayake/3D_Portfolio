import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <a href="/">Visit</a>
                </div>

                <div className="socials">
                    {socialImgs.map(({name, url, imgPath}) => (
                        <a key={name} className="icon" target="_blank" href={url}>
                            <img src={imgPath} alt={name}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Thamindu Dasanayake. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
