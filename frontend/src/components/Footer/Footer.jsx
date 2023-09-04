import React from "react";
import CIT from "../../images/Trojans/cit_white_logo.webp"
import Trojans from "../../images/Trojans/trojans_logo.webp"

// import './footer.css'

import {FooterContainer} from "./Footer.styles";

const FooterlLinksContainer = ({title, links}) => {
    return (
        <div className="footer-links-container">
            <h2>{title}</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>
							{link.name}
                            {/* <img src={link.image} alt={link.alt} /> */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const FooterlLinksContainerIcons = ({title, links}) => {
    return (
        <div className="footer-links-container">
            <h2>{title}</h2>
            <ul className="image-footer-atag">
                {links.map((link, index) => (
                    <li key={index}>
                        <a target="_blank" href={link.url}>
                            <img className="image-footer-icons" src={link.image} alt={link.alt} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function Footer() {
    return (
        <FooterContainer>
            <div className="footer-top">
                <div className="footer-logo-container">
                    <div>
                        <img src={Trojans} alt="Trojans" />
                    </div>
                    {/* <div>
						<img src={Trojans} alt='Trojans' />
					</div> */}
                </div>
                <div>
                    <FooterlLinksContainer
                        title="Events"
                        links={[
                            {url: "/#events", name: "Technical"},
                            {url: "/#events", name: "Fun-Tech"},
                            {url: "/#events", name: "Gaming"},
                            {url: "/#events", name: "Workshops"},
                        ]}
                    />
                    <FooterlLinksContainer
                        title="About"
                        links={[
                            {url: "/#trojans", name: "Trojans"},
                            {url: "/", name: "Department"},
                            {url: "/#cit", name: "College"},
                        ]}
                    />
                    <FooterlLinksContainerIcons
                        title="Connect"
                        links={[
                            {
                                url: "https://www.instagram.com/trojans_cit/",
                                image: "https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png",
                                alt: "Instagram",
                            },
                            {
                                url: "https://www.linkedin.com/in/trojans-cit-363404239/",
                                image: "https://img.icons8.com/ios/50/ffffff/linkedin.png",
                                alt: "LinkedIn",
                            },
                            {
                                url: "https://www.youtube.com/channel/UC5pM39xn_AYsaldF2DPpI3A",
                                image: "https://img.icons8.com/ios/50/ffffff/youtube-play--v1.png",
                                alt: "Youtube",
                            },
                            {
                                url: "/#contact",
                                image: "https://img.icons8.com/material-outlined/50/ffffff/call-male.png",
                                alt: "Contact Us",
                            },
                        ]}
                    />

                    <FooterlLinksContainer
                        title="Guidelines"
                        links={[
                            {
                                url: "/guidelines",
                                name: "Terms and Conditions",
                            },
                        ]}
                    />
                </div>
                <div className="footer-logo-container">
                    {/* <div>
                        <img src={Trojans} alt="Trojans" />
                    </div> */}
                    <div>
                        <img className="citLogo" src={CIT} alt="CIT" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>COPYRIGHT © TROJANS </p>
                <p className="created">Crafted and Cultivated by the <span className="foot">Trojans Web Development Crew</span></p>
            </div>
        </FooterContainer>
    );
}

export default Footer;