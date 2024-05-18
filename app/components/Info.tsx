"use client";

import { Tabs } from "./tabs";
import { forwardRef } from "react";
import moment from "moment";

export const Info = forwardRef<HTMLDivElement>((props, ref) => {
  const tabs = [
    {
      title: "/about",
      value: "about",
      content: (
        <div className="w-full relative min-h-full flex rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="w-full h-full flex flex-col">
            <p className="text-yellow-400 mb-6">/about</p>
            <p className="text-lg text-gray-400 mb-6">
              Hey! I am <b className="text-teal-400">Atharva Thorve</b>, a
              software developer and Masters in Computer Science student at
              North Carolina State University. I have built and acquired strong
              skills in Software Engineering and System Design.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I have applied my skills and knowledge in various real-world
              projects as a Engineering Analyst at Goldman Sachs. I achieved
              Subject Matter Expertise (SME) status for the team's datalake
              needs within three months. I initiated data lake integration with
              existing applications.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I also have experience working as a Teaching Assistant, under
              Professor David Sturgill, teaching Operating Systems. I evaluated
              and graded quizzes and exams for enrolled students. I also aided
              Professor David Sturgill throughout the course, providing valuable
              assistance and support.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I am passionate about problem solving and building large software
              applications. I am always looking for new and exciting
              opportunities to leverage my knowledge and analytical skills to
              contribute towards new technological innovations.
            </p>
            <hr className="border-yellow-400 " />
          </div>
        </div>
      ),
    },
    {
      title: "/skills",
      value: "skills",
      content: (
        <div className="w-full relative min-h-full flex rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="w-full h-full flex flex-col">
            <p className="text-yellow-400 mb-6">/skills</p>
            <p className="text-lg text-gray-400 mb-6">
              I love to learn new things and experiment with new technologies.
              These are some of the major languages, technologies, tools, and
              platforms I have worked with:
            </p>
            <div className="w-full h-full flex flex-col gap-2 text-lg text-gray-400">
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Java</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2018), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>JavaScript</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2019), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Git</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2019), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>SQL</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2020), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Node JS</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2020), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Mongo DB</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2020), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Go</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2021), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>Solidity</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2022), "years")} years</span>
              </div>
              <div
                className="grid items-center gap-2 mb-8"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span>TypeScript</span>
                <hr className="border-teal-600" />
                <span>{moment().diff(moment().year(2022), "years")} years</span>
              </div>
              <hr className="border-yellow-400" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "/projects",
      value: "projects",
      content: (
        <div className="w-full relative min-h-full flex rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="w-full h-full flex flex-col">
            <p className="text-yellow-400 mb-6">/projects</p>
            <p className="text-lg text-gray-400 mb-6">
              Here are some of the projects that I worked on. You can find the
              whole list <b className="text-teal-600">here</b>
            </p>
            <b
              className="text-2xl"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Dandelion Optimizer</span>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://github.com/AtharvaThorve/Dandelion-Optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                github
              </a>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0952197622002305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                paper
              </a>
            </b>
            <p className="text-lg text-gray-400 mb-6">
              Dandelion Optimizer Algorithm (DO). The algorithm uses the
              movement of Dandelions and then uses these movements as a way to
              solve continuous optimization problems. Project for the class
              Nature Inspired Metaheuristics.
            </p>
            <b
              className="text-2xl"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Expertiza</span>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://expertiza.ncsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                website
              </a>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://github.com/expertiza/reimplementation-front-end"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                github
              </a>
            </b>
            <p className="text-lg text-gray-400 mb-6">
              Reimplemented the courses and instructor section in the e-learning
              platform that manages student’s courses and grades for Professor
              Ed Geiringer, using TypeScript and Ruby on Rails.
            </p>
            <b
              className="text-2xl"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Blockchain Identity Management</span>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://github.com/BTechProject2022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                github
              </a>
              <span className="text-white text-opacity-50">/</span>
              <a
                href="https://ieeexplore.ieee.org/document/10074477"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                paper
              </a>
            </b>
            <p className="text-lg text-gray-400 mb-6">
              Blockchain-based decentralized Identity Management System that
              makes use of self-sovereign identity, decentralized identifiers,
              and verifiable credentials. It also gives users the ability to
              choose from a very large number of identity providers instead of
              just a select few corporations.
            </p>
            <hr className="border-yellow-400" />
          </div>
        </div>
      ),
    },
    {
      title: "/extra",
      value: "extra",
      content: (
        <div className="w-full relative min-h-full flex rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="w-full h-full flex flex-col">
            <p className="text-yellow-400 mb-6">/extra</p>
            <p className="text-lg mb-6">Work Experience</p>
            <p className="text-lg text-gray-400 mb-6">
              I have worked at Goldman Sachs as an Intern and as a full time
              Enginerring Analyst. During my time there I worked on many
              mission-critical applications. I have a total of 10 months of work
              experience at Goldman Sachs.
            </p>
            <p className="text-lg mb-6">Open Source Contribution</p>
            <p className="text-lg text-gray-400 mb-6">
              During my free time I like to contribute to open source projects
              and you can view my contribution on my{" "}
              <a
                href="https://github.com/AtharvaThorve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                github
              </a>{" "}
              profile.
            </p>
            <p className="text-lg mb-6">Competitive Programming</p>
            <p className="text-lg text-gray-400 mb-6">
              Also, during my free time I like to practice competitive
              programming and solve problems on{" "}
              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                leetcode
              </a>
              , and{" "}
              <a
                href="https://open.kattis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                kattis
              </a>
              . I also participated in ACM ICPC North America Mid Atlantic
              Regionals 2023.
            </p>
            <hr className="border-yellow-400" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      ref={ref}
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full bg-black items-start justify-start my-40"
    >
      <Tabs tabs={tabs} />
    </div>
  );
});
