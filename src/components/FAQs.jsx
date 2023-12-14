import { useState } from 'react';

import { faqs } from '../constants';
import { styles, Accordion } from '../ui';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (i) => {
    setActiveIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  const data = [
    {
      title: `${faqs[0].question}`,
      content: (
        <>
          {faqs[0].answer1}
          <br />
          <br />
          {faqs[0].answer2}
        </>
      ),
    },
    {
      title: `${faqs[1].question}`,
      content: `${faqs[1].answer1}`,
    },
    {
      title: `${faqs[2].question}`,
      content: (
        <>
          {faqs[2].answer1}
          <br />
          <br />
          {faqs[2].answer2}
        </>
      ),
    },
    {
      title: `${faqs[3].question}`,
      content: `${faqs[3].answer1}`,
    },
    {
      title: `${faqs[4].question}`,
      content: `${faqs[4].answer1}`,
    },
    {
      title: `${faqs[5].question}`,
      content: (
        <>
          {faqs[5].answer1}
          <br />
          <br />
          {faqs[5].answer2}
        </>
      ),
    },
  ];

  return (
    <section className={`${styles.flexCenter} flex-col px-72 py-44`}>
      <h1 className={`${styles.heading}`}>Frequently Asked Questions</h1>
      <div className="container mx-auto p-4 my-10">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
