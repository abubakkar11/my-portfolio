import React from 'react';
import img from '../../../Images/flat-tourists-ready-holiday_23-2149059980.webp'
import StudyPoint from '../../../Images/stuydpoint1.webp'
import QuizCrackerz from '../../../Images/images.jpg'
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
       <div className='mt-10'>
        <h1 className="text-3xl mb-10">My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 '>
        <div className="card w-96 bg-gray-600 rounded-md shadow-xl text-white">
            <div className='flex'>
                <figure><img src={img} className='w-full rounded-lg'alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    Tourist Guide
                </h2>
                <p>This is full-stack customer review giving platform about tourist service. </p>
                   <p> ● Technology used - React , React Router , Tailwind , DaisyUI , Node js , Express.js , MongoDB.</p>
                   
                   <div className="card-actions justify-end mt-3">
                    <div className="badge badge-primary"><a href='https://assesment-11.web.app/'>Live link</a></div>
                    <div className="badge badge-primary"><a href='https://github.com/abubakkar11/Tourist-review-client'>GitHub client</a></div>
                    <div className="badge badge-primary"><a href='https://github.com/abubakkar11/Tourist-review-server'>Git Hub server</a></div>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-gray-600 rounded-md shadow-xl text-white">
            <div className='flex'>
                <figure><img src={StudyPoint} className='w-[400px] rounded-lg h-[260px]'alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                Study-Point
                </h2>
                <p>This is full-stack learning website. </p>
                   <p> ● Technology used - React , React Router , Tailwind , DaisyUI , Node js , Express.js , MongoDB.</p>
                   
                   <div className="card-actions justify-end mt-3">
                    <div className="badge badge-primary"><a href='https://study-point-auth.web.app/'>Live link</a></div>
                    <div className="badge badge-primary"><a href='https://github.com/abubakkar11/Stydy-pint-client'>GitHub client</a></div>
                    <div className="badge badge-primary"><a href='https://github.com/abubakkar11/stydy-point-server'>GitHub server</a></div>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-gray-600 rounded-lg shadow-xl text-white">
            <div className='flex'>
                <figure><img src={QuizCrackerz} className='w-[400px] rounded-lg h-[260px]'alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                Quiz-Crackers
                </h2>
                <p>This is a programing learning website. </p>
                   <p> ● Technology used - React , React Router , Tailwind , DaisyUI.</p>
                <div className="card-actions justify-end mt-3">
                    <div className="badge badge-primary"><a href='https://whimsical-conkies-4f727c.netlify.app/quizs/1'>Live link</a></div>
                    <div className="badge badge-primary"><a href='https://github.com/abubakkar11/react-quice'>GitHub</a></div>
                    
                </div>
            </div>
        </div>
         
        </div>
       </div>
    );
};

export default MyProjects;