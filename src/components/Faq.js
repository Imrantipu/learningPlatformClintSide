import { Accordion } from "flowbite-react";
import React from "react";

const Faq = () => {
  return (
    <div className="m-5">
      <Accordion flush={true}>
  <Accordion.Panel>
    <Accordion.Title className="text-2xl">
    Who should take an Online Course?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Students join our online courses for a variety of reasons and come
          from diverse backgrounds, professions, and age groups. With online
          courses, you can Advance your skill-set or begin a career change. Take
          the next step in your formal education. Ease the transition before
          entering a full-time academic program. Enjoy learning a new topic.
          Whatever the reason, our online courses are a flexible way of learning
          about the art world without disrupting your daily life.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="text-2xl">
    How do I select a course?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Visit the course catalog to browse our offerings. In addition to
          searching by course duration and availability, you can also search by
          subject to ensure you find a course that reflects your interests.
          Though it is not required, we encourage those who have not studied art
          before to consider taking an art history course first to get a solid
          grounding in the discipline before exploring more specific
          disciplines. Our art history courses are the perfect first step before
          moving on to art market courses.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="text-2xl">
    Are there prerequisites or language requirements?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      There are no prerequisites. Our courses are open to students of all
          backgrounds who are 18 years of age and older. All courses are
          conducted in English. Video lectures include English subtitles and the
          option to slow-down, pause, or replay lectures for better retention.
          Discussion boards are a critical component of each of our courses;
          therefore, we suggest students have a conversational knowledge of
          English when pursuing a Certificate of Completion. For any of the art
          writing courses, students need to be 100% proficient in written
          English.
      </p>
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title className="text-2xl">
    Can I take more than one course at a time?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      If you are new to online learning, we recommend that you begin with
          one course. As our courses are offered frequently throughout the year,
          you can always come back and continue your studies with one or more
          topics.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>

    </div>
  );
};

export default Faq;
