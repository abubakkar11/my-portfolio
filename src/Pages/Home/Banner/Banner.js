import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Images/IMG-20220601-WA0008-02-removebg-preview.png'
import pdf from '../../../Images/Untitled document (1).pdf'
import { FaDownload } from 'react-icons/fa';


const Banner = () => {
    return (
        <div className="mt-10">
            <div className="lg:flex lg:justify-center lg:items-center ">
                <div className=''>
                    <h1 className="text-5xl font-bold">Hello This is <br />
                   <span className='text-4xl text-green-600'> Md. Abubokkor Sheikh</span> <br />
                   <span className='text-4xl text-green-600'> Junior Web Developer</span>
                    </h1>
                    <p className="py-6">Iam a Frontend web developer with 6 months of learning <br />
                    experience . I love to work with logic and build it by programing.
                    </p>
                    <Link to={pdf} target="_blank" download className="btn btn-primary"><FaDownload className='mr-2'/>Resume</Link>
                </div>
                <img src={img} alt='' className=" lg:ml-96 w-80 lg:block hidden rounded-full shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;