import './Footer.css';

const Footer = () => {
    return(
       <div className="footer-contain">
           <div className="footer-contents">
                <div className="footer-content">
                    <a href="https://github.com/binhk1004" target="_blank" rel="noopener noreferrer">
                        <img src="images/github_black.svg" alt="github"/>
                    </a>
                    <a href="https://velog.io/@binhk1004" target="_blank" rel="noopener noreferrer">
                        <img src="images/blog_black.svg" alt="velog"/>
                    </a>
                    <a href="https://www.instagram.com/bin_89_hyun/" target="_blank" rel="noopener noreferrer">
                        <img src="images/instagram_black.svg" alt="instagram"/>
                    </a> 
                    <a href="https://www.linkedin.com/in/bin-hyun-kim-4b8289b6/" target="_blank" rel="noopener noreferrer">
                        <img src="images/Linkedin_black.svg" alt="linkedin"/>
                    </a>
               </div>
            </div>
            <div className="copyright">
               <p>© 2021. Kim Bin Hyun. All rights reserved.</p>
            </div>
       </div>
    )
}

export default Footer;