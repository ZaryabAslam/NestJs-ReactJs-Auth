import { UserContextType, useUser } from "../context/index";

export const ProfilePage = () => {
  
  const { userName } = useUser() as UserContextType;

  return (
    <>
      <section className="section about-section" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">Welcome {userName}</h3>
                <h6 className="theme-color lead">
                  Lorem ipsum dolor sit amet, consectetur
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse efficitur fringilla sodales. Nunc tempor maximus
                  eleifend. Ut maximus nulla non augue egestas, efficitur
                  tincidunt urna placerat
                </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Birthday</label>
                      <p>4th april 1998</p>
                    </div>
                    <div className="media">
                      <label>Age</label>
                      <p>22 Yr</p>
                    </div>
                    <div className="media">
                      <label>Residence</label>
                      <p>Canada</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>California, USA</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>info@domain.com</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>123-456-7899</p>
                    </div>
                    <div className="media">
                      <label>Linkedin</label>
                      <p>linkedin.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="500" data-speed="500">
                    500
                  </h6>
                  <p className="m-0px font-w-600">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="150" data-speed="150">
                    150
                  </h6>
                  <p className="m-0px font-w-600">Project Completed</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="850" data-speed="850">
                    2
                  </h6>
                  <p className="m-0px font-w-600">Ongoing Projects</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="190" data-speed="190">
                    190
                  </h6>
                  <p className="m-0px font-w-600">Telephonic Talk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
