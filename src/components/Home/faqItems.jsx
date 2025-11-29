// faqData.js
import React from "react";

const faqItems = [
  {
    question: "What does Magic Bus do?",
    category: "Overview",
    answer: (
      <div className="space-y-3">
        <p>
          <span className="font-bold">In a nutshell:</span> At Magic Bus we
          move children out of poverty by nurturing them on a journey from
          childhood to livelihood. We use mentors and a sports-based curriculum
          to engage children and ensure that they make the right choices from
          childhood all the way through to better livelihoods as adults.
        </p>
        <p>
          <span className="font-bold">Going deeper:</span> We train and guide
          local, community-based mentors to deliver a long-term program that
          focuses on education, health and gender equity. The program enables
          young people to have more choice and control in their lives and
          increases their chances of moving out of poverty. We do this by using
          a comprehensive curriculum that uses activities and sport and is
          delivered using a child-friendly mentoring approach. Our approach has
          proven successful for two main reasons: the child’s long-term
          engagement and the mentor’s familiarity with the child’s context. The
          mentor provides constant feedback and monitors the child’s behavior
          over a long period of time. This brings about proven behavior change.
        </p>
        <p>
          Every Magic Bus participant is offered our livelihood program,{" "}
          <span className="font-semibold">CONNECT</span>. It offers youth a
          chance to enroll in college and helps with securing a job placement.
          As a result of our work, more than <span className="font-semibold">250,000</span>{" "}
          children and youth are today accessing better education, improving
          their health situation, displaying more gender-equal behavior and
          working towards stronger livelihood options as adults.
        </p>
      </div>
    ),
  },
  {
    question: "Why should I support you?",
    category: "Support",
    answer: (
      <div className="space-y-3">
        <p>
          Today, Magic Bus supports the advancement of{" "}
          <span className="font-semibold">300,000 children</span> and{" "}
          <span className="font-semibold">8,000 youth</span>, helping them to
          learn, grow, and work their way out of generations of poverty. The
          approach we pioneered in India—sport for development—has demonstrated
          impact and is quickly becoming a widely accepted mainstream children
          and youth development program. We are considered a thought leader in
          the sector and our work has been recognized globally. Examples:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">2014:</span> UN Office for Sports,
            Development and Peace (UNOSDP) nominated Magic Bus to host the Next
            Step 2014 Conference—Asia’s first-ever Sport for Development Summit
            with ~450 stakeholders from 25 countries.
          </li>
          <li>
            <span className="font-semibold">2014:</span> Laureus Sport for Good
            Award—global award for the world’s highest-impact sport for
            development program proven to change children’s lives.
          </li>
          <li>
            <span className="font-semibold">2013:</span> Rising Star Award by
            the Resource Alliance (EdelGive Foundation & Rockefeller Foundation
            joint venture).
          </li>
          <li>
            <span className="font-semibold">2013:</span> Invited to speak at
            the International Olympic Committee’s international summit in Lima,
            Peru as a best-practice example for a sport-for-development program.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What programs do you run?",
    category: "Programmes",
    answer: (
      <div className="space-y-3">
        <p>Magic Bus runs two parallel programs:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            A mentoring program focused on{" "}
            <span className="font-semibold">childhood development</span>.
          </li>
          <li>
            A livelihood development program,{" "}
            <span className="font-semibold">Connect</span>, focused on{" "}
            <span className="font-semibold">youth development</span>.
          </li>
        </ul>
        <p>
          We use sport and activity-based methods and tools, developed internally
          over a 15-year incubation period (1999–2014). The program is versatile
          and can be both community-based and school-based.
        </p>
        <p>
          Magic Bus also conducts training and accreditation of the sport-for-
          development methodology and runs{" "}
          <span className="font-semibold">organizational development</span>{" "}
          workshops and programs for private and public sector organizations
          across the world.
        </p>
      </div>
    ),
  },
  {
    question: "How does the program work?",
    category: "How it works",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          We work only in marginalized communities with dire poverty (urban
          slums or marginalized rural villages). We engage schools, officials,
          NGOs and community focus groups to identify major issues and high-
          potential young people needing positive opportunities.
        </li>
        <li>
          We train local young people to become community mentors who bring
          credibility and build mentor-child interactions based on mutual
          respect. Mentors are volunteers trained by Magic Bus in a variety of
          life skills to make them role models.
        </li>
        <li>
          Our mentors and development experts work with the larger community to
          build an enabling environment by engaging parents and stakeholders.
          We leverage existing structures (schools, local government, private
          sector) to aggregate resources and mindset for sustainable progress.
        </li>
        <li>
          Sessions are delivered weekly in any community and are designed to
          empower children to access higher education, better health, hygiene,
          personal and social skills. We also connect youth to vocational
          training and employment opportunities.
        </li>
        <li>
          The accrued impact of our work ultimately leads to breaking out of the
          poverty cycle.
        </li>
      </ul>
    ),
  },
  {
    question: "What happens in a Magic Bus session?",
    category: "Sessions",
    answer: (
      <div className="space-y-3">
        <p>
          A typical Magic Bus session lasts for <span className="font-semibold">2 hours</span> and is divided into:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">ICE BREAKER</span> – rapport-building
            song or activity.
          </li>
          <li>
            <span className="font-semibold">SPORTING GAME</span> – actual
            sporting skill or technique.
          </li>
          <li>
            <span className="font-semibold">ANTICIPATORY HOOK</span> – main
            objective introduced via theme song or minor game.
          </li>
          <li>
            <span className="font-semibold">MAIN GAME</span> – achieving the
            objective using a metaphor for each session and linking to real-life.
          </li>
          <li>
            <span className="font-semibold">SIT-BREATHE-THINK</span> – reflect on
            the session, listen to others, express opinions and discuss.
          </li>
          <li>
            <span className="font-semibold">TAKEAWAY</span> – summarize specific
            key messages children can apply to their lives.
          </li>
          <li>
            <span className="font-semibold">OFF THE TRAINING FIELD</span> – work
            with communities and parents: rallies, cleanliness drives, and
            community-wide sporting events that empower and strengthen
            communities.
          </li>
        </ul>
      </div>
    ),
  },
];

export default faqItems;
