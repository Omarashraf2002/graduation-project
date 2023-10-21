import React from "react";
import "../Style/SideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <img src="../Imgs/الزهراء لوجو.png" />
        </div>

        <ul class="list-unstyled components">
          <p>القائمة</p>
          <li class="active">
            <a></a>
            <Link to={"/AppDate"}> مواعيد التقدم للمدن الجامعية</Link>
            {/* <Link to={`/tvdetails/${tv.id}`} className="btn btn-success">
                  See Movie Details
                </Link> */}
          </li>
          <li>
            <a href="#">تقديم طلب التحاق بالمدينة الجامعية</a>
            <a></a>
          </li>
          {/* <li>
            <a href="#">الإستعلام عن القبول في المدينة الجامعية</a>
          </li> */}
          <li>
            <a href="#">الإستعلام عن القبول في المدينة الجامعية</a>
          </li>
          <li>
            <a href="#">إرشادات التقدم والإقرارات</a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button>
          </div>
        </nav>

        {/* <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p></p>
        <p></p>

        <div class="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p></p>

        <div class="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p></p>

        <div class="line"></div>

        <h3>Lorem Ipsum Dolor</h3>
        <p></p> */}
      </div>
    </div>
  );
};

export default SideBar;
