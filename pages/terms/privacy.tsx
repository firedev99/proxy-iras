import { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { SimpleLayout } from "@/components"
import {
  TermSection,
  TermsContentWrapper,
  TermsPageWrapper,
} from "@/styles/TermStyles"
import Link from "next/link"
import Icon from "@/lib/icons"

export default function TermsPage() {
  const [mount, _] = useState(true)
  const router = useRouter()

  // when it's triggered from the navigation with hidden overflow, we need to unset the overflow
  useEffect(() => {
    if (!mount) false
    document.body.style.overflow = "unset"
  }, [mount])

  return (
    <TermsPageWrapper>
      <TermsContentWrapper>
        <button className="btn_left" onClick={() => router.push("/")}>
          <Icon name="home" />
        </button>
        <button className="btn_right" onClick={() => router.back()}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
        <TermSection>
          <h1>Privacy Policy</h1>
          <span>Last updated: 17/05/2024</span>
        </TermSection>

        <TermSection>
          <h2>Introduction</h2>
          <p>
            We are committed to protecting your privacy. This Privacy Policy
            outlines the types of personal information we collect, how we use
            it, and the steps we take to safeguard it.
          </p>
          <p>
            We use your data to provide and improve Service. By using Service,
            you agree to the collection and use of information in accordance
            with this policy. Unless otherwise defined in this Privacy Policy,
            the terms used in this Privacy Policy have the same meanings as in
            our <Link href="/terms">Terms and Conditions</Link>.
          </p>
          <p>
            Our Terms and Conditions (“Terms”) govern all use of our Service and
            together with the Privacy Policy constitutes your agreement with us
            (“agreement”).
          </p>
        </TermSection>

        <TermSection>
          <h2>Information We Collect</h2>
          <p>
            Personal information such as your name, email address, and other
            details required for Google Classroom integration.
          </p>
          <p>
            Small chunk of your usage data, including your interactions with our
            website and services.
          </p>
        </TermSection>

        <TermSection>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <p>
            Provide and improve our services for academic and educational
            purposes in alignment with the aim to provide better user
            experience.
          </p>
          <p>Communicate with you, including responding to your inquiries.</p>
          <p>
            Comply with university policies and regulations regarding the use
            and disclosure of personal information as the amount of data is
            getting stored is as minimal as it can be possible.
          </p>
        </TermSection>

        <TermSection>
          <h2>Google Classroom Integration</h2>
          <p>
            Our website integrates with Google Classroom&apos;s API to fetch
            course details and personal information about you. By using our
            services, you consent to this integration and acknowledge that your
            information is subject to Google&apos;s privacy policy.
          </p>
        </TermSection>

        <TermSection>
          <h2>Security</h2>
          <p>
            We implemented appropriate security measures to protect your
            personal information from unauthorized access, alteration, or
            disclosure in accordance with all the concerned policies and
            regulations.
          </p>
        </TermSection>

        <TermSection>
          <h2>Changes to Privacy Policy</h2>
          <p>
            We reserve the right to modify or replace this Privacy Policy at any
            time. It is your responsibility to review these policies
            periodically for updates.
          </p>
        </TermSection>

        <TermSection>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <p>
            By email:{" "}
            <Link href="mailto: firethedev@gmail.com">
              firethedev@gmail.com
            </Link>
          </p>
        </TermSection>
      </TermsContentWrapper>
    </TermsPageWrapper>
  )
}

TermsPage.getLayout = function getLayout(page: ReactElement) {
  return <SimpleLayout title="Privacy Policy - @firedev99">{page}</SimpleLayout>
}
