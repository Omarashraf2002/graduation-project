import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Style/InquiryAboytAdmission.css";
import Alert from "react-bootstrap/Alert";

const InquiryAboutAdmission = () => {
  return (
    <Form className="main-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          قم بإدخال الرقم القومي المراد الاستعلام عنه لعام 2023-2024
        </Form.Label>
        <Form.Control type="number" placeholder="ادخل الرقم القومي" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        الاستعلام
      </Button>
      <div className="accept">
        <Alert variant="success">تم القبول</Alert>
        <Alert variant="danger">لم يتم القبول</Alert>
      </div>
    </Form>
  );
};

export default InquiryAboutAdmission;
