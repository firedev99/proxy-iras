import { LayoutWrapper } from "./styles"
import { LayoutType } from "@types"
import Head from "next/head"
import dynamic from "next/dynamic"
import Footer from "../footer"

const Menu = dynamic(() => import("../menu"), { ssr: false })

export default function Layout({
  children,
  title,
  description,
  icon,
  footer = true,
}: LayoutType) {
  return (
    <>
      <Head>
        <title>{title || "Proxy IRAS"}</title>
        <meta
          name="description"
          content={
            description ||
            "Welcome to Proxy IRAS (IUB), your comprehensive solution for managing academic tasks seamlessly. This platform is integrated with Independent University, Bangladesh's existing management system along with Google Classroom. Log in with your student id and password now. - @firedev99 | iub | proxy iub | iub proxy"
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
        {/* address bar theme */}
        <meta name="theme-color" content="rgb(var(--background-base))" />
        {/* Open Graph meta tags for Facebook and other platforms */}
        <meta property="og:title" content={title || "Proxy IRAS"} />
        <meta
          property="og:description"
          content={
            description ||
            "Welcome to Proxy IRAS (IUB), your comprehensive solution for managing academic tasks seamlessly. This platform is integrated with Independent University, Bangladesh's existing management system along with Google Classroom. Log in with your student id and password now. - @firedev99 | iub | proxy iub | iub proxy"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/firey/image/upload/f_auto,q_auto/v1/iub/proxy-iras-seo"
        />
        <meta property="og:image:alt" content="thumbnail.jpg" />
        <meta property="og:site_name" content={title || "Proxy IRAS"} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thedevguy99" />
        <meta name="twitter:title" content={title || "Proxy IRAS"} />
        <meta
          name="twitter:description"
          content={
            description ||
            "Welcome to Proxy IRAS (IUB), your comprehensive solution for managing academic tasks seamlessly. This platform is integrated with Independent University, Bangladesh's existing management system along with Google Classroom. Log in with your student id and password now. - @firedev99 | iub | proxy iub | iub proxy"
          }
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/firey/image/upload/f_auto,q_auto/v1/iub/proxy-iras-seo"
        />
      </Head>
      <Menu />
      <LayoutWrapper>
        {children}
        {footer && <Footer />}
      </LayoutWrapper>
    </>
  )
}
