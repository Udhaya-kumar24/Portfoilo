import React from 'react'

const ExperienceBox = ({title,exp,language,companyName,content}) => {
  return (
    <div className="row exp-section theme-highlight grey-bg px-2 py-3 rounded-own mx-1 my-4">
      <div className="col-12">
        <div className="row px-3">
          <div className="col-12 col-lg-3 bg-glossy p-3">
            <h4 className='short_name h2 my-0'>{title}</h4>
            <h4 className='heading-exp h6 pb-2 my-0'>{exp}</h4>
            <hr className='border-text-color my-2'/>
            <p className='exp-para my-1'>{language}</p>
          </div>
          <div className="col-12 col-lg-9 mt-3 mt-lg-0">
            <h3 className='heading-exp p-0 m-0'>{companyName}</h3>
            <p className='exp-para'>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceBox