import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import { Layout } from "../components"
import Icon from "../lib/icons"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  FAQPageWrapper,
  PageHeaderWrapper,
  QuestionsWrapper,
} from "@/styles/FaqPageStyles"
import { questions } from "@/lib/dummy/questions"

export default function FAQPage() {
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <FAQPageWrapper>
      <PageHeaderWrapper>
        <h2>Frequently Asked Questions</h2>
        <p>
          To assist you, I have complied a list of frequently asked questions
          (FAQs) below. If you cannot find the information you&apos;re loking
          for or have additional questions, please don&apos;t hasitate to
          contact me.
        </p>
        <Link href="mailto:firethedev@gmail.com">Get in Touch</Link>
      </PageHeaderWrapper>
      <QuestionsWrapper>
        {questions.map((item, i) => (
          <div className="question_wrapper" key={`question_${i}`}>
            <div
              className="question"
              onClick={() => setExpanded(i === expanded ? false : i)}
            >
              <h4>{item.question}</h4>
              <Icon name="plus" />
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  className="answers"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.05 },
                    },
                  }}
                >
                  {item.answer && <p>{item.answer}</p>}
                  {item.list && (
                    <div className="faq_list">
                      <ul>
                        {item.list.map((txt, idx) => (
                          <li key={`faq_${i}_${idx}`}>{txt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.links && (
                    <div className="links">
                      {item.links.map((_item, uid) => (
                        <Link
                          key={`link_${uid}`}
                          href={_item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {_item.dest}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </QuestionsWrapper>
    </FAQPageWrapper>
  )
}

FAQPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Frequently Asked Questions - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
