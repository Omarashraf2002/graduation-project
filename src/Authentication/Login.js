import background from "../Images/1.webp";
import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginTop: "0px",
      backgroundAttachment: "fixed", // Background is fixed
    };

    const loginContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      gap: "15px", // Gap of 15px between elements
      direction: "rtl", // Right-to-left layout
    };

    const signupContainerStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
      width: "400px",
      padding: "20px",
      borderRadius: "10px",
    };

    const headerStyle = {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center", // Center align text within the container
    };

    const linkStyle = {
      fontSize: "18px",
      textDecoration: "underline",
      marginBottom: "20px",
    };

    const centerstuff = {
      alignItems: "center", // Center align all child elements
      textAlign: "center", // Center align text within the container
    };

    const footerStyle = {
      fontSize: "12px",
      marginTop: "20px",
    };

    return (
      <div className="login-form" style={myStyle}>
        <div style={loginContainerStyle}>
          <div style={signupContainerStyle}>
            <div style={headerStyle}>الزهراء لادارة المدن الجامعية</div>
            <TextField label="الرقم القومي" variant="outlined" fullWidth />
            <TextField
              label="كلمة المرور"
              type="password"
              variant="outlined"
              fullWidth
            />

            <div style={centerstuff}>
              <Button variant="contained" color="primary">
                تسجيل الدخول
              </Button>
              <div>
              <Link to="/AppForm" style={{ fontSize: "16px" }}>التقدم للمدن الجامعية</Link>
              </div>
            </div>
          </div>

          <div style={footerStyle}>
            جميع الحقوق محفوظة لكلية الحاسبات والذكاء الاصطناعي - جامعة حلوان
          </div>
        </div>
      </div>
    );
  }
}

export default App;
