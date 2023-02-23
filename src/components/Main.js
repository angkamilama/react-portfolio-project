
import myPhoto from '../images/riverFall.avif';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";




function Main() {
    return (
        <div>
            <main>
                <div className="profile">
                   <div className="profile-photo">
                     <img src={myPhoto} alt="my photo"/>
                   </div> 
                   <div className="profile-info">
                        <h2>Introduction</h2>
                        <p className="profile-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio quia saepe distinctio obcaecati repudiandae cumque sed labore expedita. Voluptate nostrum sequi obcaecati quidem sapiente alias praesentium quo accusamus, beatae aspernatur mollitia soluta voluptatem molestias perspiciatis explicabo laborum maiores possimus nam quaerat? Fugit vel, quos reiciendis error mollitia nisi maxime.</p>
                    </div>  
                </div>
                <div className="line"></div>
                <div className="project-container">
                    <h1></h1>
                    <div className="project-box">
                        <button className="btn-prev">
                            <FaArrowLeft className="fa-solid fa-arrow-left"/>
                        </button>
                        <div className="project-info">
                            <div className="open-projects">Please! click here to see my projects !!!</div>
                         </div>
                        <button className="btn-next">
                        <FaArrowRight className="fa-solid fa-arrow-right"/>
                            
                        </button>
                    </div>
                </div>
            </main>
            
        </div>
    )
};

export default Main;