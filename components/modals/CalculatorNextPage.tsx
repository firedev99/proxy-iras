import Image from "next/image"
import Link from "next/link"
import {
  CalculatorNextPageContent,
  CalculatorNextPageHeading,
  CalculatorNextPageWrapper,
  IubImage,
} from "./styles/CalculatorModalStyles"

export default function CalculatorNextPage() {
  return (
    <CalculatorNextPageWrapper>
      <CalculatorNextPageHeading>
        <div className="details">
          <h3>Proxy CGPA Calculator</h3>
          <span>
            by <Link href="#">@firedev</Link>
          </span>
          <h5>How to use Proxy CGPA Calculator?</h5>
          <ul>
            <li>
              To use the Proxy CGPA Calculater, select the course name from the
              course offering list and it will automatically fetch the credit of
              that course or you can manually enter the course credit by your
              self. After that select the course grade from the list and click
              on the Calculate button on the bottom.
            </li>
          </ul>
        </div>
        <IubImage>
          <Image
            src="https://res.cloudinary.com/firey/image/upload/f_auto,q_auto/v1/iub/iub_gallery"
            alt="Imran Khan - IUB fb group"
            fill
            sizes="(max-width: 768px) 124px, 468px"
          />
        </IubImage>
      </CalculatorNextPageHeading>
      <CalculatorNextPageContent>
        <ul>
          <li>
            Initially your courses from the running semester are already
            selected as the initial state, so just select the grades for each
            course and click on the Calculate button.
          </li>
          <li>
            If you want to add a new row to the list click on the Add Rows
            button.
          </li>
          <li>If you want to reset the list click on the Reset button.</li>
          <li>
            After resetting the calculator if you fill like you want to
            calculate only the courses from the running semester click on This
            Semester button.
          </li>
        </ul>
      </CalculatorNextPageContent>
    </CalculatorNextPageWrapper>
  )
}
