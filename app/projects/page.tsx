"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";

export default function Projects() {
  return (
    <>
      <div
        className="p-10 bg-black/20 mt-10 rounded-lg backdrop-blur text-4xl grid items-center max-w-7xl mx-auto"
        style={{ gridTemplateColumns: "auto 1fr auto 1fr auto" }}
      >
        <img
          src="/home.png"
          alt="Home"
          className="rounded-xl p-2"
          loading="lazy"
          decoding="async"
          width={75}
          height={75}
        />
        <hr className="border-white/20" />
        <h1 className="text-center">My Projects</h1>
        <hr className="border-white/20" />
      </div>
      <BentoGrid className="mx-auto md:grid-cols-2">
        {info.map((item, i) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
      <BentoGrid className="mx-auto md:grid-cols-3">
        {items.map((item, i) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            className={item.className}
            image={item.image}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const info = [
  {
    title: "Preface",
    description:
      "- You can find a full list of my projects on my [GitHub](https://github.com/AtharvaThorve).\n - This is a collection of projects I'm proud of and excited to share. Whether you're looking for inspiration for your own work or simply enjoy exploring different coding approaches, I hope you'll find something interesting and valuable here.\n - Feel free to browse through them and contact me know if you have any questions!",
    className: "md:col-span-1",
  },
  {
    title: "Tech",
    description:
      "These are the frameworks/languages I use the most:\n - [Java](https://www.java.com/en/)\n - [NodeJS](https://nodejs.org/en)\n - [ReactJS](https://reactjs.org/)\n - [MongoDB (Document Database)](https://www.mongodb.com/)\n - [Jupyter (Python and Julia)](https://jupyter.org/)",
    className: "md:col-span-1",
  },
];
const items = [
  {
    title: "Network Security Enhancement",
    description:
      "- Performed an analysis of all the IPv4 and IPv6 CIDR blocks falling under North Carolina State University's ASN\n - Fetched all the data of the hosts under the ASN using censys.io\n - Analysed the network vulnerabilities using shodan, aggregated the top 10 most frequent vulnerabilities and mapped them with their severity scores. \n - Reported the top 3 biggest threats to NCSU admin",
    className: "md:col-span-2",
  },
  {
    title: "Network Security Enhancement",
    description: "[Confidential]()",
    className: "md:col-span-1",
    image: "/shield.png",
  },
  {
    title: "Dandelion Optimizer",
    description:
      "[GitHub](https://github.com/AtharvaThorve/Dandelion-Optimizer) / [Paper](https://www.sciencedirect.com/science/article/abs/pii/S0952197622002305)",
    className: "md:col-span-1",
    image: "/dandelion.png",
  },
  {
    title: "Dandelion Optimizer",
    description:
      "- The algorithm uses the movement of Dandelions as a way to solve continuous and discrete optimization problems.\n - We implemented all the different stages of the algorithm and used a variety of CEC2017 problems to test the performance of our implementation with the performance of the authors.\n - Furthermore, we worked on adapting the algorithm for the TSP problem which is a discrete optimization problem. We tested our adaptation of the algorithm on 15 different TSPLIB instances and compared the performance with the Discrete Bat Algorithm.",
    className: "md:col-span-2",
  },
  {
    title: "Expertiza LMS Platform",
    description:
      "- Reimplemented the courses and instructor section in the e-learning platform that manages student’s courses and grades for Professor Ed Geiringer, using TypeScript and Ruby on Rails.\n - Key elements included a main page displaying course listings, administrative capabilities to manage courses and TAs, and various React components like Course Row, TA Management Modal, and Course Editor.\n - Incorporated design patterns like Composite, DRY, Provider, Observer, HOC, and Mediator. Testing scenarios involved Jest and Enzyme for features like listing courses, managing TAs, and UI validation.",
    className: "md:col-span-2",
  },
  {
    title: "Expertiza LMS Platform",
    description:
      "[GitHub](https://github.com/expertiza/reimplementation-front-end/pull/23) / [Website](https://expertiza.ncsu.edu/)",
    className: "md:col-span-1",
    image: "/expertiza.png",
  },
  {
    title: "Decentralized Identity Management",
    description:
      "[GitHub](https://github.com/BTechProject2022) / [Paper](https://ieeexplore.ieee.org/document/10074477)",
    className: "md:col-span-1",
    image: "/blockchain.png",
  },
  {
    title: "Decentralized Identity Management",
    description:
      "- We proposed a Blockchain-based decentralized Identity Management System that makes use of self-sovereign identity, decentralized identifiers, and verifiable credentials.\n - It gives users the ability to choose from a very large number of identity providers instead of just a select few corporations\n - The main advantages of the proposed solution include the elimination of the need for a central authority for identity verification and identity data management, the reduction of time spent on identity verification, the ability to share data with permission, and the ability to verify the origin of the data while sharing.",
    className: "md:col-span-2",
  },
  {
    title: "Railway Ticketing System",
    description:
      "- Developed a robust and user-friendly Rail Ticketing System using Ruby on Rails.\n - Implemented comprehensive modules for Admin, Passenger, Train, Ticket, and Customer Review functionalities, enabling a seamless ticketing experience.\n - Streamlined user registration process, allowing passengers to quickly create accounts and book tickets.\n - Integrated a secure backend database using SQLite, ensuring data integrity and confidentiality.\n - Implemented robust security measures to prevent unauthorized access and data manipulation, protecting user information and ticket details.",
    className: "md:col-span-2",
  },
  {
    title: "Railway Ticketing System",
    description:
      "[GitHub](https://github.ncsu.edu/kmalick/Rail-Ticketing-System)",
    className: "md:col-span-1",
    image: "/train.png",
  },
  {
    title: "Open Source Contributions",
    description: "[GitHub](https://github.com/AtharvaThorve)",
    className: "md:col-span-1",
    image: "/opensource.png",
  },
  {
    title: "Open Source Contributions",
    description:
      "- In my opinion open source contributions are very important as these projects are maintained by few passionate developers but used by countless number of people and organizations.\n - Open source projects provided me with valuable training ground to hone real-world development skills. It also leads to more collaboration among people living in various parts of the world.\n - Few repositories that I contributed to [Expertiza](https://github.com/expertiza/reimplementation-front-end), [Java Algorithms](https://github.com/williamfiset/Algorithms), [COCWebsite](https://github.com/CommunityOfCoders/COCWebsite), [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)",
    className: "md:col-span-2",
  },
];
