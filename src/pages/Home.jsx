import React from 'react'

export default function Home() {
  return (
    <div className='home'>
      <div className="left">
        <div style={{ marginLeft: "2px", display: "flex", gap: "35px", width: "350px", height: "34px" }}>
          <p className="tagline">We are The Best </p>
          <p className="line" ></p>

        </div>
        <h1>
          Graybook – Where AI <br />
          meets every <br/>
          <span className="highlight">profession.</span>
        </h1>
        <p className="description">
          A curated AI marketplace that now empowers you with all the tools and resources you need to
          transform your profession, accelerate performance, and deliver impactful value.
        </p>
        <button className="cta-btn">Get Started</button>

      </div>
      <div className="right">

        <div className="right-img">
          <img className='img-top' src="https://graybook.ai/_next/image?url=https%3A%2F%2Fprompt-upload-bucket.s3.us-east-2.amazonaws.com%2Fuploads%2F747a300e-71be-4af8-bc41-bcf71145e09f.JPEG&w=2048&q=75" alt="2-img" />
          <img className='img-bottom' src="https://graybook.ai/_next/image?url=https%3A%2F%2Fprompt-upload-bucket.s3.us-east-2.amazonaws.com%2Fuploads%2Ffb0947f9-9858-4003-8471-1648e7a21c8f.JPEG&w=1920&q=75" alt="2-img" />
        </div>
        <div className='right-img'>
          <img className='img-bottom' src="https://graybook.ai/_next/image?url=https%3A%2F%2Fprompt-upload-bucket.s3.us-east-2.amazonaws.com%2Fuploads%2F4e43d3dc-ee9e-489e-ae33-9c5520fe6259.JPEG&w=3840&q=75" alt="2-img" />
          <img className='img-top' src="https://graybook.ai/_next/image?url=https%3A%2F%2Fprompt-upload-bucket.s3.us-east-2.amazonaws.com%2Fuploads%2F5af92f96-bd4b-4ef9-aa02-d923fe997f41.JPEG&w=1920&q=75" alt="2-img" />
        </div>
        <div>

          <img className='img-top' src="https://graybook.ai/_next/image?url=https%3A%2F%2Fprompt-upload-bucket.s3.us-east-2.amazonaws.com%2Fuploads%2F34584b32-4d96-4f33-817d-1b763582dd05.JPEG&w=1920&q=75" alt="2-img" />
        </div>


      </div>
    </div>
  )
}
