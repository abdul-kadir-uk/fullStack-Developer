import Image from 'next/image';
import fullStack from '@/app/assets/images/full-stack.png'
import nsdc from '@/app/assets/images/nsdc.png'

const About = () => <div>
  <h1 className="md:text-3xl text-2xl p-5 text-center italic"> About Me </h1>
  <div className='flex justify-center items-center w-[100%] '>
    <div className="border-2 border-amber-50 p-4 m-2 h-[70vh] w-[90vw] md:w-[70vw] bg-black">

      <div className="flex items-center justify-center text h-72 text-xl  font-sans
    text-purple-600 md:text-2xl p-4 md:p-2">
        <p>
          My Name is Abdul kadir, I am from Uttarakhand, India
          <br />
          i have completed B-Tech in computer science and engineering
          <br />
          from COER University, Uttarakhand.
        </p>
      </div>
    </div>
  </div>

  <div className='mt-2 md:mt-6'>
    <h2 className="text-center md:text-3xl text-2xl my-3 md:my-7"> Skill set</h2>
    <div className='flex justify-center items-center'>

      <div className="p-2 md:p-4 flex justify-center items-center m-2  border-slate-950 border-2 w-[90vw] md:w-[70vw] 
    h-[90vh] md:h-[70vh] ">
        <div className="w-[80vw]">
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[92%] bg-blue-500"><p>HTML</p> <p>92%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[90%] bg-blue-500"><p>CSS</p> <p>90%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[93%] bg-blue-500"><p>JS</p> <p>93%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[90%] bg-blue-500"><p>TAILWIND CSS</p> <p>90%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[91%] bg-blue-500"><p>REACT</p> <p>91%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[92%] bg-blue-500"><p>NODE.JS</p> <p>92%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[90%] bg-blue-500"><p>MONGODB</p> <p>90%</p></div>
          </div>
          <div className="bg-black">
            <div className="flex p-1 mb-2 text-white justify-between w-[95%] bg-blue-500"><p>EXPRESS.JS</p> <p>94%</p></div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div className='mt-2 md:my-7'>
    <h2 className='text-3xl m-2 md:m-4 text-center my-3 md:my-7'> Certifications </h2>
    <div className='flex justify-center items-center'>
      <div className='p-2 flex justify-center items-center flex-col border-2 border-black w-[90vw] md:w-[70vw] mb-2'>
        <div className='mt-2 md:mt-4 flex flex-col justify-center items-center'>
          <p>1.This certification represents an 8-month Full Stack Developer program covering core technologies such as MongoDB, Express.js, React, and Node.js
          </p>
          <a href={fullStack.src} target='_blank' className='cursor-pointer '>
            <Image src={fullStack} alt="certificate" width={400} height={400} />
          </a>
          <a className='hover:bg-blue-300' href="https://trainings.internshala.com/verify-certificate/?certificate_number=gp2iz5gk3l7"> click to verify </a>
        </div>

        <div className='mt-2 md:mt-4 flex flex-col justify-center items-center'>
          <p>
            2.Certified Full Stack Developer by the National Skill Development Corporation (NSDC)
          </p>
          <a href={nsdc.src} target='_blank' className='cursor-pointer '>
            <Image src={nsdc} alt='nsdc' width={400} height={400} />
          </a>
        </div>

      </div>
    </div>
  </div>
</div>

export default About;