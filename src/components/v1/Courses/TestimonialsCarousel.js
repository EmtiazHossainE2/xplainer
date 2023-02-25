import IframeResizer from "iframe-resizer-react"

const TestimonialsCarousel = () => {
  return (
    <div>
      {/* Section header */}
      <div className="max-w-3xl mt-2 mx-auto text-center pb-9 md:pt-12 md:pb-4">
        <h1 className="text-2xl font-extrabold mt-4 mb-4 md:text-3xl">
          {"Not just testimonials! Find love letter from our learners ❤️"}
        </h1>
      </div>

      <section >

      <IframeResizer src="https://embed.testimonial.to/w/api-for-pm?theme=light&card=base" style={{ width: "1px", minWidth: "100%" }} />

    </section>
    </div>
  )
}

export default TestimonialsCarousel