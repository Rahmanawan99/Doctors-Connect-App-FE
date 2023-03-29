export const SignupForPatient = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          width: "700px",
        }}
      >
        <h1 style={{ color: "#000", fontSize: "24px", textAlign: "center" }}>
          Login For Patients
        </h1>
        <div
          style={{
            margin: "10px 15px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Type Your Name"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Type Your Email"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Type Your Password"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Age:
            </label>
            <input
              type="text"
              placeholder="Type Your Age"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Age:
            </label>
            <input
              type="text"
              placeholder="Type Your Country"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Age:
            </label>
            <input
              type="text"
              placeholder="Type Gender"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Age:
            </label>
            <input
              type="text"
              placeholder="Type Your Address"
              style={{
                border: "1px solid #d5d5d5",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <button style={{ margin: "10px" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};
