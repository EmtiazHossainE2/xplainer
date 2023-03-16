import IframeResizer from "iframe-resizer-react"

const TestimonialsCarousel = () => {
  return (
    <div className="container mx-auto px-5 mb-5 big:px-36 large:px-96 pt-20">
      {/* Section header */}
      <div className="max-w-3xl  mx-auto text-center pb-9  md:pb-4">
        <h1 className="text-2xl font-extrabold mb-4 ">
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