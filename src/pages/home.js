import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Button from "../components/Button"
import Lottie from "lottie-react-web"
import travelAnimationData from "../assets/animations/travel.json"

const BACKGROUND_FILL = "#F8F8F8"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-col items-start lg:w-1/2 p-4 md:p-6 lg:px-10 lg:py-20">
          <p className="mb-2 max-w-lg lg:text-lg lg:max-w-xl uppercase font-body tracking-wide">
            Beautiful places
          </p>
          <h1 className="mb-12 text-3xl md:text-4xl text-gray-900 font-display">
            Wanna Read latest travel blogs?
          </h1>
          <Button label="Blogs" withIcons link="blogs" />
        </div>
        <div className="relative lg:w-1/2 mx-auto p-4 md:p-6 lg:px-10 lg:py-20">
          <Lottie
            options={{ animationData: travelAnimationData, loop: true }}
          />
        </div>
      </div>
    </section>

    <section className="bg-brand-primary mb-12 md:mb-24 xl:mb-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="md:-mt-10 lg:-mt-16 bg-white fill-current"
      >
        <path
          fill={BACKGROUND_FILL}
          d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* <div className="container mx-auto p-4">
        <h3 className="my-16 text-4xl text-purple-700 font-display">
          Recent blogs
        </h3>
      </div> */}
    </section>
  </Layout>
)

export default IndexPage
