import React from "react";
import "../Style/AppDate.css";
import Table from "react-bootstrap/Table";

const ApplicationDates = () => {
  return (
    <div className="main">
      <p>مواعيد التقدم للمدن الجامعة الخاصة بجامعة حلوان</p>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> </th>
              <th>من</th>
              <th>إلي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الطلاب الجدد</td>
              <td>14/1/2002</td>
              <td>13/11/2001</td>
            </tr>
            <tr>
              <td>الطلاب القدامي</td>
              <td>14/1/2002</td>
              <td>13/11/2001</td>
            </tr>
            <tr>
              <td>الطالبات الجدد</td>
              <td>14/1/2002</td>
              <td>13/11/2001</td>
            </tr>
            <tr>
              <td>الطالبات القدامي</td>
              <td>14/1/2002</td>
              <td>13/11/2001</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicationDates;
