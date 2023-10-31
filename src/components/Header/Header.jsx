import React, { useState } from "react";
import HeaderStyles from "./Header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { getJobTypeMenu } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị từ input

  // hàm search xong navigate
  const handleSearch = () => {
    navigate(`/jobs/${searchTerm}`); // Truyền giá trị từ state vào navigate
  };

  // hàm nhấn vào list xong navigate
  const handleMoveToJobType = (type, id) => {
    navigate(`/types/${type}/${id}`); // Truyền giá trị từ state vào navigate
  };
  const {
    data: menuJob = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getJobTypeMenu,
  });

  console.log(menuJob);

  return (
    <div className={`${HeaderStyles.header}`}>
      <div className={`${HeaderStyles.header_container}`}>
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary ">
          <Container>
            <Navbar.Brand href="#home">
              <a href="#">
                <img
                  src="./images/Fiverr-Logo.png"
                  alt=""
                  srcset=""
                  height={50}
                  width={90}
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <div
                  className={`${HeaderStyles.header_search}`}
                  style={{ marginRight: 150 }}
                >
                  <input
                    placeholder="What service are you looking for today?"
                    type="text"
                    value={searchTerm} // Gán giá trị từ state vào input
                    onChange={(e) => setSearchTerm(e.target.value)} // Xử lý sự kiện khi giá trị input thay đổi
                  />
                  <button onClick={handleSearch}>
                    <CiSearch></CiSearch>
                  </button>
                </div>
                <NavDropdown
                  title={<span className="fw-bold">Business solutions</span>}
                  id="basic-nav-dropdown"
                  className="pe-3"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Fiverr Pro
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Fiverr Certified
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.4">
                    Fiverr Enterprise
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={<span className="fw-bold">Explore</span>}
                  id="basic-nav-dropdown"
                  className="pe-3"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Discover
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Community
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.4">Guide</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Podcast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Learn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Logo Maker
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Fiverr Workspace
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="pe-3">
                  <span className="fw-bold">English</span>
                </Nav.Link>
                <Nav.Link className="pe-3">
                  <span className="fw-bold">Become a seller</span>
                </Nav.Link>
                <Nav.Link className="pe-3">
                  <span className="fw-bold">Sign-in</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className={`${HeaderStyles.header_menu}`}>
            <div className={`${HeaderStyles.header_menu_container}`}>
              <ul>
                {menuJob.map((menuItem) => (
                  <li
                    className={`${HeaderStyles.header_menu_li}`}
                    key={menuItem.id}
                    onClick={() => {
                      handleMoveToJobType(
                        menuItem.tenLoaiCongViec,
                        menuItem.id
                      );
                    }}
                  >
                    <a className={`${HeaderStyles.header_menu_a}`} href="#">
                      {menuItem.tenLoaiCongViec}
                    </a>
                    <div className={`${HeaderStyles.header_menu_li_in}`}>
                      {menuItem.dsNhomChiTietLoai.map((nhomChiTiet) => {
                        return (
                          <div>
                            <li key={nhomChiTiet.id}>
                              <a href="#">
                                <b>{nhomChiTiet.tenNhom}</b>
                              </a>
                              <ul>
                                {nhomChiTiet.dsChiTietLoai.map((chiTiet) => (
                                  <li key={chiTiet.id}>
                                    <a href="#">{chiTiet.tenChiTiet}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
{
  /* <ul>
                      {menuItem.dsNhomChiTietLoai.map((nhomChiTiet) => (
                        <li key={nhomChiTiet.id}>
                          <a href="#">{nhomChiTiet.tenNhom}</a>
                          <ul>
                            {nhomChiTiet.dsChiTietLoai.map((chiTiet) => (
                              <li key={chiTiet.id}>
                                <a href="#">{chiTiet.tenChiTiet}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul> */
}
