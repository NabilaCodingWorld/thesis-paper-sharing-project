import React from 'react';
import giffi from '../../../assets/XoD7.gif'

const AboutThesis = () => {

    return (
        <div className='my-20'>
            <div className=' bg-white bg-opacity-10 text-white md:p-10 p-3 md:mx-28 mx-5 relative z-2 rounded-lg shadow-5xl  hover:border grid md:grid-cols-2 md:gap-10 gap-3 justify-center items-center'>


                <img src={giffi} alt="" />

                <div >
                    <p className='text-pink-700 md:text-2xl font-bold text-center'>Our Goal</p>
                    <p className='md:text-3xl text-white text-center mb-3 font-bold'>The Aim of Our Work</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit deserunt dolor quas quos voluptatum aliquid ad, earum facere similique id eum esse minima eligendi necessitatibus ipsa sed, error eos est consequatur amet illum atque fugiat ullam perferendis! In id non et, sit soluta assumenda adipisci natus velit? Quidem doloremque labore amet exercitationem nostrum officiis. Iure nulla explicabo nesciunt earum! Accusamus dolore dolorem quos ipsum officia dolor optio exercitationem, ut amet minus accusantium ipsam eligendi, minima voluptatum totam obcaecati eveniet voluptate magni consequuntur atque? Expedita, quas sequi! Corporis vitae tempora assumenda aspernatur natus sed perferendis, sit iste beatae cupiditate temporibus ullam?</p>


                    <div className='my-10'>
                        <p className='flex gap-5'>
                            <div class="pl-2 border-l-8 border-yellow-700 ... text-xl font-bold">20 + Shared Thesis </div> <br />

                            <div class="pl-2 border-l-8 border-yellow-700 ... text-xl font-bold">25 + Latest Project Idea </div>
                        </p>
                    </div>

                </div>


            </div> <br />
        </div>
    );
};

export default AboutThesis;