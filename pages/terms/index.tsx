import { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { SimpleLayout } from "@/components"
import {
  TermSection,
  TermsContentWrapper,
  TermsPageWrapper,
} from "@/styles/TermStyles"
import Icon from "@/lib/icons"
import Link from "next/link"

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
          <h1>Terms of Use</h1>
          <span>Last updated: 17/05/2024</span>
        </TermSection>

        <TermSection>
          <h2>Introduction</h2>
          <p>
            Welcome to Proxy IRAS, your comprehensive solution for managing
            academic tasks seamlessly. Designed with the modern student
            environment in mind, our platform offers a simplified yet powerful
            alternative to the traditional university management system. As you
            have just clicked our Terms of Use, please pause, grab a cup of
            coffee and carefully read the following pages. It will take you
            approximately 10 minutes.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages. Please read it here{" "}
            <Link href="/terms/privacy">{`${process.env.NEXT_PUBLIC_URL}/privacy`}</Link>
            .
          </p>
          <p>
            At the heart of our platform it is integrated with our
            university&apos;s existing management system (iras v1 / iras v2 /
            iras v3), leveraging its robust REST API to fetch essential details
            such as course information, student profiles, and class schedules.
            This ensures that you have access to the most up-to-date and
            accurate information at your fingertips, making academic planning
            and scheduling effortless.
          </p>
          <p>
            But we didn&apos;t stop there. Recognizing the growing importance of
            digital learning platforms, we&apos;ve bridged the gap between our
            university&apos;s curriculum and Google Classroom. By integrating
            Google Classroom&apos;s API into our platform, we&apos;ve enabled
            seamless access to course materials, assignments, and personal
            insights—all within an unified interface. A student who is looking
            to stay organized, aiming to enhance the learning experience,or
            seeking efficient management tools, Proxy IRAS is here to simplify
            your academic journey.
          </p>
          <p>
            These Terms of Service (“Terms”, “Terms of Use”) govern your use of
            our web pages located at {process.env.NEXT_PUBLIC_URL} operated by{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/tripyy_land/"
            >
              @firedev99
            </Link>
            .
          </p>
          <p>
            **this app was built only for study purporse and no commercial use
            was attempted!**
          </p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy
            (“Agreements”). You acknowledge that you have read and understood
            Agreements, and agree to be bound of them.
          </p>
          <p>Thank you for being responsible.</p>
        </TermSection>

        <TermSection>
          <h2>Use of the Service</h2>
          <p>
            You may use our website and services solely for academic and
            educational purposes in alignment with the policies and regulations
            set forth by Independent University, Bangladesh. The content and
            features on our website are intended for students from Independent
            University, Bangladesh.
          </p>
        </TermSection>

        <TermSection>
          <h2>Google Classroom Integration</h2>
          <p>
            Our website integrates with Google Classroom&apos;s API to fetch
            course details and personal information about the user. By using our
            services, you consent to this integration and acknowledge that you
            are subject to Google&apos;s terms of service and privacy policy.
          </p>
        </TermSection>

        <TermSection>
          <h2>Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in any way connected with
            your use of our website or services.
          </p>
        </TermSection>

        <TermSection>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Use at any
            time. It is your responsibility to review these terms periodically
            for updates.
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
  return (
    <SimpleLayout title="Terms & Conditions - @firedev99">{page}</SimpleLayout>
  )
}
