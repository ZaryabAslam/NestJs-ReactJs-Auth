import Slider from "../components/Slider";

// const Home = (props: { name: string }) => {
const Home = () => {
  return (
    <div>
      <section className="welcome-section">
        <h2>
          Welcome to the App!{" "}
          <span> Get ready for some amazing deals and updates right here.</span>
        </h2>
        <p>Login or Signup to continue</p>
      </section>
      <Slider />
      <div className="info-container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="info-img">
              <img
                src="https://www.katahdincedarloghomes.com/uploads/img-2770-hdr-copy-510x370.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-8 col-12">
            <div className="info">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget molestie felis, eget condimentum urna. Praesent facilisis
                risus non laoreet placerat. Mauris quis scelerisque sem, et
                congue risus. Mauris id nibh massa. Vestibulum tortor lorem,
                faucibus in hendrerit eu, fermentum et felis. Proin turpis
                tellus, tincidunt eu auctor vitae, eleifend a turpis. Vivamus
                elit libero, eleifend et turpis non, porttitor vulputate enim.
                Maecenas id dolor et massa vestibulum sollicitudin. In efficitur
                libero ut posuere finibus. Sed ut elementum quam, et rhoncus
                mauris. Cras vel vehicula elit. Vivamus rhoncus sem nunc, et
                finibus odio semper sit amet. Nunc volutpat diam eu ante aliquam
                placerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
