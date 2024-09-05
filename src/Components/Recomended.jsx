import React from 'react'

const Recomended = () => {
  return (
    <div className="h-full items-center flex">
      <div className=" space-y-3 text-justify	border-box px-7 leading-relaxed  text-white m-[40px]">
        <h1 className="font-bold text-[#b3b3b4] text-[20px]">Recommended</h1>
        <div>
          <ol className="text-[#b3b3b4] list-decimal pt-3 list-inside space-y-5">
            <li>
              <span className="font-semibold">Time Management Workshop:</span>{" "}
              "Balancing Sales and Family Life" - perfect for juggling a busy
              sales career with twin daughters starting school.
            </li>
            <li>
              <span className="font-semibold">Book:</span> "The Mom Test" by Rob
              Fitzpatrick - to sharpen client communication skills, especially
              useful for understanding customer needs.
            </li>
            <li>
              <span className="font-semibold"> Productivity App:</span>{" "}
              RescueTime - to optimize work hours and ensure quality time with
              family.
            </li>
            <li>
              <span className="font-semibold"> Local Networking:</span> Santa
              Carla Chamber of Commerce meetings - great for expanding
              professional connections in his area.
            </li>
            <li>
              <span className="font-semibold"> Podcast:</span> "Sales Success
              Stories" - for commute listening and staying updated on industry
              trends.
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                Twin Parenting Support Group in Santa Carla -
              </span>{" "}
              to connect with other parents facing similar challenges.
            </li>
            <li>
              <span className="font-semibold">
                Twin Parenting Salesforce Certifications:
              </span>{" "}
              Advanced Admin or Sales Cloud Consultant - to further career
              growth while at Salesforce.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Recomended
