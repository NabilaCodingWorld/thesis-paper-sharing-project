import React, { useState } from 'react';

const Aim = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>

            <p className='text-pink-700 mdKtext-2xl md:font-bold text-center'>About Us</p>
            <p className='md:text-3xl text-white text-center mb-3 font-bold'>How It is Effective</p>

            <div className="tabs mb-20 mt-5 text-white  text-center bg-white md:p-10 p-3 md:mx-20 mx-5 rounded-2xl bg-opacity-30">

                <div className="tab-menu md:ml-[400px] ">

                    <a
                        className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''} `}
                        onClick={() => handleTabClick(1)}
                    >
                        <span className='text-white text-xl font-bold'>About</span>
                    </a>
                    <a
                        className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        <span className='text-white text-xl font-bold'>Mission</span>
                    </a>
                    <a
                        className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        <span className='text-white text-xl font-bold'>Vission</span>
                    </a>

                </div>



                <div className="tab-content md:mx-40">
                    <div className="tab-pane" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                        <br /><br />
                        Thesis sharing, often referred to as open access publishing, is a practice that involves making academic research papers and theses freely available to the public. This approach promotes the dissemination of knowledge, fosters collaboration, and enhances the impact of research by removing barriers to access. It is typically facilitated through online platforms and repositories, making scholarly work accessible to a global audience. Thesis sharing contributes to the advancement of science, as it allows researchers to build upon existing knowledge, while also benefiting students and the general public who can access valuable information without cost or restrictions.
                    </div>
                    <div className="tab-pane" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                        <br /><br />
                        The mission of thesis sharing, often associated with open access initiatives, is to democratize access to academic research and knowledge, thereby fostering global collaboration, innovation, and the advancement of science. This mission aims to break down barriers to information, making research more inclusive and accessible to researchers, students, and the general public regardless of their location or financial resources. It seeks to maximize the impact of scholarly work, encouraging the sharing of ideas and discoveries for the betterment of society as a whole. In essence, the mission is to make research more transparent, efficient, and beneficial for both academia and the broader community.
                    </div>
                    <div className="tab-pane" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                        <br /><br />
                        The vision of thesis sharing and open access initiatives is to create a world where all knowledge and academic research are freely and readily available to anyone, anywhere, at any time. This vision seeks to eliminate the traditional barriers of paywalls and restricted access to information, making research easily accessible to researchers, students, and the public. By doing so, it aims to accelerate the pace of scientific discovery, foster collaboration among scholars, and empower individuals to engage with and benefit from the wealth of human knowledge. Ultimately, the vision is to promote a more equitable and inclusive global knowledge ecosystem where information is a public good and a catalyst for positive societal change.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aim;
