import React from 'react'

function Camera_ready() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 text-justify bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply"
        />
      </div>
      <div className="space-y-6">
        <p className="leading-relaxed md:leading-loose text-gray-700">
          Authors of the accepted papers are requested to follow the instructions below for final camera-ready paper submission and IEEE Copyright Transfer for inclusion of their article into conference proceeding:
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 1:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          Please log in to{' '}
          <a
            href="https://cmt3.research.microsoft.com/UPCON2025/"
            className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cmt3.research.microsoft.com/UPCON2025/
          </a>{' '}
          to view the reviewer comments, if any, and address the concerns/comments of the reviewers in the final camera-ready submission.
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 2:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          The authors will have to submit a camera-ready version as per the guidelines given on the conference website on or before{' '}
          <strong className="text-[#C0392B]">31st October 2025</strong>. Please make sure that plagiarism of your manuscript must be less than 30%, using standard plagiarism checking software (e.g Turnitin), before submitting the camera-ready paper from your end to confirm the inclusion of the paper in IEEE Xplore. If plagiarism is more than 30%, then your paper will not be forwarded for the publication in IEEE Xplore. Further, the authors need to disclose the use of AI-generated text in the final article in the acknowledgement section to follow the IEEE rules. Also, the section of the paper that uses AI-generated text needs to have a citation to the AI system used to generate the text.
        </p>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          The authors are urged to ensure that the camera-ready submission strictly follows the IEEE Template given on the conference website{' '}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ieee.org/conferences/publishing/templates.html
          </a>{' '}
          with the author details. The number of pages in Final Camera-Ready Paper must be within 6 Pages. The camera-ready papers that do not meet these requirements will not be submitted for further consideration to IEEE Xplore.
        </p>
        <img src="/camera_ready/1.png" alt="" className="w-full h-auto my-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" />

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 3:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          At least one author must register with Full Author Registration and present the selected paper at UPCON 2025, for the paper to be considered for inclusion on IEEE Xplore. Each registration is meant for ONE (01) participant to attend the conference only (Certificate will be given to him/her only). Co-author(s) who are also attending the conference, and require certificate, will need to register separately under appropriate registration category.
        </p>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          The final manuscript should have the copyright clearance code notice at the bottom of the first page. Kindly refer to the latex/word template provided here:{' '}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ieee.org/conferences/publishing/templates.html
          </a>{' '}
          and replace the dummy code at the first page bottom with this code:
        </p>
        <ul className="list-decimal list-inside leading-relaxed text-gray-700 pl-4 md:pl-6 space-y-2">
          <li>
            For papers in which all authors are employed by the US government, the copyright notice is : <span className="font-semibold">U.S. Government work not protected by U.S. copyright</span>
          </li>
          <li>
            For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <span className="font-semibold">979-8-3315-0325-3/25/$31.00 ©2025 Crown</span>
          </li>
          <li>
            For papers in which all authors are employed by the European Union, the copyright notice is: <span className="font-semibold">979-8-3315-0325-3/25/$31.00 ©2025 European Union</span>
          </li>
          <li>
            For all other papers the copyright notice is: <span className="font-semibold">979-8-3315-0325-3/25/$31.00 ©2025 IEEE</span>
          </li>
        </ul>

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 4:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          Follow the steps below for Preparing Camera Ready submission through IEEE pdf-express:
        </p>
        <ul className="list-decimal list-inside leading-relaxed text-gray-700 pl-4 md:pl-6 space-y-2">
          <li>
            <span className="font-semibold">Before Creating a PDF:</span>
            <ul className="list-disc list-inside ml-6">
              <li>Add the copyright notice to the bottom of the first page of your source document.</li>
              <li>Proof read your source document thoroughly to confirm that it will require no revision.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Creating your PDF eXpress Account:</span>
            <ul className="list-disc list-inside ml-6">
              <li>Log in to the IEEE PDF eXpressTM site</li>
              <li>
                First-time users should do the following:
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Select the New Users -{' '}
                    <a
                      href="https://ieee-pdf-express.org/account/signup"
                      className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ieee-pdf-express.org/account/signup
                    </a>{' '}
                    link
                  </li>
                  <li>Enter the following:</li>
                  <ul className="list-disc list-inside ml-6">
                    <li><strong>66414X</strong> for the conference ID</li>
                    <li>your email address</li>
                    <li>a password</li>
                  </ul>
                  <li>Continue to enter information as prompted by clicking on the “Create New Title” tab.</li>
                  <li>An Online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</li>
                </ul>
              </li>
              <li>
                Previous users of PDF eXpress need to follow the above steps but should enter the same password that was used for previous conferences. Verify that your contact information is valid.
              </li>
            </ul>
          </li>
        </ul>
        <img src="/camera_ready/2.png" alt="" className="w-full h-auto my-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" />

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 5:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          Download the IEEE PDF eXpress checked paper and rename your article as “PIDXXX” (XXX is your article ID in CMT. For example, if your article id is 213, then rename your final manuscript as “PID213”)
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 6:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          Upload your Camera-ready paper in the CMT portal and answer all the following mandatory questions. Remember, author registration is mandatory before submitting the camera-ready paper as you need to enter the transaction ID.
        </p>
        <img src="/camera_ready/3.png" alt="" className="w-full h-auto my-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" />

        <h2 className="text-lg sm:text-xl font-bold text-[#C0392B] tracking-wide border-b border-gray-200 pb-1 mt-6 mb-2">Step 7:</h2>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          <span className="font-semibold">Procedure for IEEE Copyright Form eCF submission:</span>
        </p>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          To enable your paper to appear in IEEE eXplorer, it is mandatory to transfer the Copyright to IEEE. The corresponding/submitting author of each paper must transfer IEEE eCF. The steps to transfer the Copyright to IEEE are also given below:
        </p>
        <ul className="list-decimal list-inside leading-relaxed text-gray-700 pl-4 md:pl-6 space-y-2">
          <li>
            Login to your CMT Paper Submission Portal and Click on the IEEE copyright link. You will be redirected to IEEE Copyright Form Submission page.
          </li>
          <li>
            Click on “Click here to redirect to the IEEE copyright website” to transfer eCF and you will be redirected to IEEE copyright portal.
          </li>
        </ul>
        <img src="/camera_ready/4.png" alt="" className="w-full h-auto my-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" />
        <ul className="list-decimal list-inside leading-relaxed text-gray-700 pl-4 md:pl-6 space-y-2">
          <li>
            Follow the steps (Step 1 to Step 5) and provided instructions to complete the IEEE Copyright Transfer process.
          </li>
        </ul>
        <img src="/camera_ready/5.png" alt="" className="w-full h-auto my-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" />
        <ul className="list-decimal list-inside leading-relaxed text-gray-700 pl-4 md:pl-6 space-y-2">
          <li>
            At the end of Step 5, download the completed Copyright Form and rename it as “PIDXXX_C” (XXX is your article ID in CMT. For example, if your article id is 213, then rename your copyright form as “PID213_C”) (Make sure to download a copy of the completed form.)
          </li>
          <li>
            Login to your CMT Paper Submission Portal and upload this pdf file of Copyright Transfer Form.
          </li>
        </ul>
        <p className="leading-relaxed md:leading-loose text-gray-700">
          It completes the Copyright Transfer of your paper to IEEE. Please note that separate copyright transfer is required for each paper.
        </p>
      </div>
    </div>
  )
}

export default Camera_ready
