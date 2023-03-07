
const NativeAds = (props) => {
  return (
    <>
      <div className="card-1-container">
        <div className="left-side">
          <div className="left-info">
            <div className="h3">
              {" "}
              <span>{props.title} </span>{" "}
            </div>
            <div className="h3-meta">{props.description}</div>
            <div className="h4-meta mt-4">{props.offer}</div>
          </div>
        </div>
        <div className="right-side">
          <div className="">
            <a
              className="bg-[#0070F4] rounded-[4px] py-[18px] px-6 text-white"
              href="https://learn.pricingforpm.in/pricing-model/1-fremium-models?utm_source=apiforpm"
            >
              Read free chapter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const YoutubeIframeView = (props) => {
  return (
    <>
      <div className="youtube-embed-desktop">
        <iframe
          width="730"
          height="400"
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="youtube-embed-mobile">
        <iframe
          width="360"
          height="200"
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

const MDXComponents = {
  NativeAds: NativeAds,
  YoutubeView: YoutubeIframeView
};

export default MDXComponents;
