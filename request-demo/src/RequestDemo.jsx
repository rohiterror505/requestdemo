
import React from "react";
import demoImg from "./assets/demorequest.png";

export default function RequestDemo() {
  return (
    <div style={styles.page}>
      <div style={styles.triangle} aria-hidden="true" />

      <h1 style={styles.title}>REQUEST A DEMO</h1>

      <div className="container" style={{ marginTop: 60 }}>
        <div className="row align-items-center g-4">
          {/* Left image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src={demoImg} alt="Illustration" style={styles.illustration} />
          </div>

          {/* Right form */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div style={styles.card}>
              <div style={styles.cardHeader}>Raise Request For The Demo</div>

              <form className="d-flex flex-column" style={{ gap: 16 }}>
               
                <div className="al9-outlined">
                  <input
                    id="fullName"
                    type="text"
                    className="form-control al9-outlined__input"
                    placeholder=" "
                  />
                  <label htmlFor="fullName" className="al9-outlined__label">
                    Full Name
                  </label>
                </div>

                {/* ✅ Bootstrap Floating labels */}
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control al9-control"
                        id="phone"
                        placeholder="Phone Number"
                      />
                      <label htmlFor="phone" className="al9-bslabel">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control al9-control"
                        id="email"
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="al9-bslabel">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control al9-control"
                    id="school"
                    placeholder="School or University Name"
                  />
                  <label htmlFor="school" className="al9-bslabel">
                    School or University Name
                  </label>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control al9-control al9-textarea"
                    id="req"
                    placeholder="Please mention your requirement"
                  />
                  <label htmlFor="req" className="al9-bslabel">
                    Please mention your requirement
                  </label>
                </div>

                <button type="button" style={styles.button}>
                  Book a Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CSS (inline) */}
      <style>{`
        /* remove bootstrap blue glow */
        .form-control:focus { box-shadow: none !important; }

        /* match input sizes (bigger) */
        .al9-control {
          height: 52px !important;
          border-radius: 6px !important;
          border: 1px solid #d1d1d1 !important;
          font-size: 14px !important;
        }
        .al9-textarea {
          height: 140px !important;
          resize: none !important;
        }

        /* floating label font */
        .al9-bslabel { font-size: 13px; color: #3b3b3b; }

        /* ✅ Full Name: label on border always */
        .al9-outlined { position: relative; }
        .al9-outlined__input {
          height: 52px !important;
          border-radius: 6px !important;
          border: 2px solid #f08a1a !important;
          padding-top: 16px !important;
          font-size: 14px !important;
        }
        .al9-outlined__label {
          position: absolute;
          top: -9px;
          left: 12px;
          background: #e8e8e8; /* same as card background */
          padding: 0 6px;
          font-size: 12px;
          color: #000;
          pointer-events: none;
        }

        /* keep bootstrap floating label spacing correct */
        .form-floating > .form-control { padding-top: 1.45rem; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#fff2e7",
    position: "relative",
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    padding: "44px 28px 70px",
    boxSizing: "border-box",
  },
  title: {
    margin: 0,
    textAlign: "center",
    color: "#f08a1a",
    fontWeight: 800,
    letterSpacing: "0.6px",
    fontSize: "34px",
  },
  triangle: {
    position: "absolute",
    right: "34px",
    top: "26px",
    width: 0,
    height: 0,
    borderLeft: "42px solid transparent",
    borderRight: "42px solid transparent",
    borderBottom: "72px solid transparent",
    transform: "rotate(25deg)",
    outline: "2px solid #f08a1a",
    outlineOffset: "-2px",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  },
  illustration: {
    width: "560px",
    maxWidth: "100%",
    height: "auto",
  },
  card: {
    width: "520px",
    maxWidth: "100%",
    background: "#e8e8e8",
    borderRadius: "10px",
    padding: "24px 22px 26px",
    boxSizing: "border-box",
    boxShadow: "0 2px 0 rgba(0,0,0,0.08)",
  },
  cardHeader: {
    textAlign: "center",
    fontWeight: 700,
    color: "#3b3b3b",
    fontSize: "14px",
    marginBottom: "16px",
  },
  button: {
    marginTop: "6px",
    height: "46px",
    border: "none",
    borderRadius: "12px",
    background: "#f08a1a",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "13px",
    cursor: "pointer",
    width: "190px",
    alignSelf: "center",
    boxShadow: "0 2px 0 rgba(0,0,0,0.12)",
  },
};
