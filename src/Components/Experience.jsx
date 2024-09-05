
import React from 'react'

const Experience = () => {
  return (
    <div className="h-full items-center flex">
      <div className=" space-y-3 text-justify	border-box px-7 leading-relaxed  text-white m-[40px]">
        <h1 className="text-[#b3b3b4] font-bold text-2xl">Experience</h1>
        <div className="text-[#b3b3b4]">
          <p className="pb-2 font-semibold">
            Salesforce – Sales Representative
          </p>
          <p>Santa Carla, CA June 2021 – Present</p>
          <p>
            In my role as a Sales Representative at Salesforce, I’ve been
            instrumental in driving client success through tailored solutions
            and strategic guidance. My responsibilities include:
          </p>
          <ul className="text-[#b3b3b4] list-disc py-3 pl-5 space-y-1">
            <li>
              Developing and maintaining strong relationships with clients to
              understand their needs and challenges.
            </li>
            <li>
              Conducting in-depth product demonstrations and providing expert
              consultations to showcase how Salesforce’s solutions can address
              client goals.
            </li>
            <li>
              Collaborating with cross-functional teams to ensure seamless
              implementation and integration of Salesforce products.
            </li>
            <li>
              Achieving and exceeding sales targets through a combination of
              strategic outreach, effective follow-ups, and exceptional customer
              service.
            </li>
            <li>
              Analyzing market trends and client feedback to refine sales
              strategies and enhance product offerings.
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[#b3b3b4]">
            <p className="pb-2 text-[#b3b3b4] font-semibold">
              XYZ Ltd. – Sales Associate
            </p>
            <p>Albany, NY January 2015 – April 2018</p>
            <p>
              In this role, I gained foundational experience in sales and customer
              service. My responsibilities included:
            </p>
    
          </div>
          <ul className="text-[#b3b3b4] list-disc py-3 pl-5 space-y-1">
            <li>
              Assisting customers with product inquiries, sales transactions,
              and after-sales support.
            </li>
            <li>
              Contributing to store sales targets through active promotion and
              upselling of products.
            </li>
            <li>
              Maintaining a high standard of customer service to enhance the
              overall shopping experience.
            </li>
            <li>
              Handling administrative tasks such as inventory management and
              report generation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience

