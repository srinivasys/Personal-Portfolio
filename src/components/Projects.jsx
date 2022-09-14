import React from 'react'

const TastyKitchens = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663140455/Screenshot_3_lwyczj.png';
const Netflix = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663141627/Screenshot_4_rwsfdh.png';
const NxtTrends = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663141623/Screenshot_6_l0dvro.png';
const TodoApp = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663141623/Screenshot_7_kptygn.png';
const JobbyApp = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663141623/Screenshot_8_mift9g.png';
const NxtWatch = 'https://res.cloudinary.com/daqxrreic/image/upload/v1663141624/Screenshot_5_p00um7.png';

const Projects = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${Netflix})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NETFLIX CLONE Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://netflixsaiclone.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/Netflix-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${NxtTrends})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NXT TRENDS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://nxttrendssai.ccbp.tech/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/NXT-Trends-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${TastyKitchens})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                TASTY KITCHENS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tkappclonesai.ccbp.tech/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/Tasty-Kitchens-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${TodoApp})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                TODO Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://todosappsai.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/Todo-Application'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${NxtWatch})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NXT WATCH Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://nxtsaiswatchapp.ccbp.tech/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/NXT-Watch-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${JobbyApp})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JOBBY Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jobbysaisapp.ccbp.tech/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/srinivasys/Jobby-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
