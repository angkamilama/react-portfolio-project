
import myPhoto from '../images/riverFall.avif';


function Introduction() {
    return (
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
            </main>           
    )
};

export default Introduction;