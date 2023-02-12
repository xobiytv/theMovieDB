import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { twitter } from "react-icons-kit/feather/twitter";
import {instagram} from 'react-icons-kit/feather/instagram'

import "./signpeople.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SinglePeople() {
  const [peopleData, setPeopleData] = useState({}); //null
  let peopleID = useParams();
  let imageUrl = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/person/${peopleID.id}?/movie_credits?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`,
        `https://api.themoviedb.org/3/person/${peopleID.id}?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`
      )
      .then((res) => {
        setPeopleData(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error.massage);
      });
    // axios.get("")
    //   .then((res) => {
    //     setPeopleData(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.massage);
    //   });
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(peopleID);
  return (
    <div>
      <main>
        <section className="inner_content">
          <div className="header large border first">
            <div className="custom_bg">
              <div
                id="shortcut_bar_scroller"
                className="keyboard_s scroller_wrap shortcut_bar_wrapper is_fading"
              >
                <ul
                  id="new_shortcut_bar"
                  className="dropdown_menu  k-widget k-reset k-header k-menu k-menu-horizontal"
                  data-role="menu"
                  tabindex="0"
                  role="menubar"
                >
                  <li
                    className="true k-item k-menu-item k-state-default k-first"
                    aria-haspopup="true"
                    role="menuitem"
                  >
                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        Overview
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Main</Dropdown.Item>
                        <Dropdown.Item href="#">Translation</Dropdown.Item>
                        <Dropdown.Item href="#">Changes</Dropdown.Item>
                        <Dropdown.Item href="#">Report</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="d-inline mx-2" autoClose="inside">
                      <Dropdown.Toggle id="dropdown-autoclose-inside">
                        Media
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Profiels</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="d-inline mx-2" autoClose="outside">
                      <Dropdown.Toggle id="dropdown-autoclose-outside">
                        Fandom
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown className="d-inline mx-2" autoClose={false}>
                          <Dropdown.Toggle id="dropdown-autoclose-false">
                            Discussion
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Overivew</Dropdown.Item>
                            <Dropdown.Item href="#">General 2</Dropdown.Item>
                            <Dropdown.Item href="#">
                              Content Issues 1
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="d-inline mx-2" autoClose={false}>
                      <Dropdown.Toggle id="dropdown-autoclose-false">
                        Shere
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Shere Link</Dropdown.Item>
                        <Dropdown.Item href="#">Facebook</Dropdown.Item>
                        <Dropdown.Item href="#">Tweet</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {peopleData ? (
            <div>
              <div className="content_wrapper">
                <div className="grey_column col-3">
                  <section id="original_header" className="images inner">
                    <div className="poster_wrapper profile">
                      <div className="image_content">
                        <img src={imageUrl + peopleData.profile_path} alt="" />
                      </div>
                    </div>
                  </section>

                  <div className="column">
                    <section className="full_wrapper facts left_column">
                      <div className="social_links"></div>
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">Vist Facebook!</Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button disabled style={{ pointerEvents: "none" }}>
                            <div style={{ width: 24, height: 24 }}>
                              <Icon size={"100%"} icon={facebook} />
                            </div>
                          </Button>
                        </span>
                      </OverlayTrigger>
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">Vist Twitter!</Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button disabled style={{ pointerEvents: "none" }}>
                            <div style={{ width: 24, height: 24 }}>
                              <Icon size={"100%"} icon={twitter} />
                            </div>
                          </Button>
                        </span>
                      </OverlayTrigger>
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            Vist Instagram!
                          </Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button disabled style={{ pointerEvents: "none" }}>
                            <div style={{ width: 24, height: 24 }}>
                              <Icon size={"100%"} icon={instagram} />
                            </div>
                          </Button>
                        </span>
                      </OverlayTrigger>

                      <h3>
                        <bdi>Personal Info</bdi>
                      </h3>

                      <section>
                        <p>
                          <strong>
                            <bdi>Known For </bdi>
                          </strong>
                          {peopleData.name}
                        </p>
                        <p>
                          <strong>
                            <bdi>Known Credits</bdi>
                          </strong>{" "}
                        </p>
                        <p>
                          <strong>
                            <bdi>Gender</bdi>
                          </strong>{" "}
                          Male
                        </p>
                        <p className="full">
                          <strong>
                            <bdi>Birthday</bdi>
                          </strong>
                          {peopleData.birthday}
                        </p>
                        <p className="full">
                          <strong>
                            <bdi>Place of Birth</bdi>
                          </strong>{" "}
                          {peopleData.place_of_birth}
                        </p>

                        <p className="full true">
                          <strong>
                            <bdi>Also Known As</bdi>
                          </strong>{" "}
                        </p>
                        <ul>
                          <li itemprop="additionalName"></li>
                        </ul>
                      </section>

                      <div className="">
                        <p className="rounded new_button pad">
                          <a className="" href="/person/3896-liam-neeson/edit">
                            edit page
                          </a>
                        </p>
                      </div>

                    
                    </section>
                  </div>
                </div>

                <div className="white_column col-9">
                  <section>
                    <div className="title" dir="auto">
                      <h2 className="title">
                        {peopleData.name}
                        {/* <a href="/person/3896-liam-neeson">Liam Neeson</a> */}
                      </h2>
                    </div>
                  </section>

                  <section className="full_wrapper">
                    <h3 dir="auto">Biography</h3>
                    <div dir="auto" className="biography true">
                      <div className="content fade_text">
                        <div className="text initial truncate should_fade">
                          <p>{peopleData.biography}</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="full_wrapper">
                    <div id="known_for">
                      <h3 dir="auto">Known For</h3>

                      <div
                        id="known_for_scroller"
                        className="scroller_wrap should_fade is_fading"
                      >
                        <ul className="horizontal_media_list scroller">
                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>

                          <li className="account_adult_false item_adult_false">
                            <div className="image">
                              <a href="/movie/424">
                                <img
                                  src={imageUrl + peopleData.profile_path}
                                  alt=""
                                />
                                {/* <img loading="lazy" className="poster" src="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" srcset="/t/p/w150_and_h225_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 1x, /t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg 2x" alt="Schindler's List"> */}
                              </a>
                            </div>
                            <p>
                              <a className="title" href="/movie/424">
                                <bdi>Schindler's List</bdi>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="full_wrapper credits d-flex">
                    <div className="credits_list">
                      <h3 className="zero">Acting</h3>

                      <table
                        className="card credits"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        data-role="tooltip"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table className="credit_group">
                                <tbody>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/1038610"
                                        data-id="6354023d385202007a025ec8"
                                        data-type="movie"
                                        data-slug="1038610"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/1038610"
                                      >
                                        <bdi>
                                          Paul Muldoon - Laoithe is Lirici
                                        </bdi>
                                      </a>
                                      <span className="group">
                                        {" "}
                                        as{" "}
                                        <span className="character">
                                          Himself
                                        </span>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/1084553"
                                        data-id="63e548e865686e0085a917c9"
                                        data-type="movie"
                                        data-slug="1084553"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/1084553"
                                      >
                                        <bdi>The Riker’s Ghost</bdi>
                                      </a>
                                      <span className="group"> </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/1035259"
                                        data-id="6348e87c1b1f3c0079e6ba4d"
                                        data-type="movie"
                                        data-slug="1035259"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/1035259"
                                      >
                                        <bdi>Naked Gun Reboot</bdi>
                                      </a>
                                      <span className="group"> </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/696393"
                                        data-id="5ea1ce948e8702001c10193a"
                                        data-type="movie"
                                        data-slug="696393"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/696393"
                                      >
                                        <bdi>Cold Storage</bdi>
                                      </a>
                                      <span className="group"> </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/974453"
                                        data-id="627b85746636270ce46a5a34"
                                        data-type="movie"
                                        data-slug="974453"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/974453"
                                      >
                                        <bdi>Thug</bdi>
                                      </a>
                                      <span className="group"> </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/848379"
                                        data-id="60e524fd25882300740f1aa4"
                                        data-type="movie"
                                        data-slug="848379"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/848379"
                                      >
                                        <bdi>Cold Pursuit 2</bdi>
                                      </a>
                                      <span className="group">
                                        {" "}
                                        as{" "}
                                        <span className="character">
                                          Nels Coxman
                                        </span>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/522934"
                                        data-id="5af0fe5e9251411ec20012c1"
                                        data-type="movie"
                                        data-slug="522934"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/522934"
                                      >
                                        <bdi>Charlie Johnson in the Flames</bdi>
                                      </a>
                                      <span className="group"> </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="year">—</td>
                                    <td className="seperator">
                                      <span
                                        data-url="/movie/423912"
                                        data-id="5818ed0fc3a368422900138c"
                                        data-type="movie"
                                        data-slug="423912"
                                        className="glyphicons_v2 circle-empty account_adult_false item_adult_false"
                                      ></span>
                                    </td>
                                    <td className="role false account_adult_false item_adult_false">
                                      <a
                                        className="tooltip"
                                        href="/movie/423912"
                                      >
                                        <bdi>The Trainer</bdi>
                                      </a>
                                      <span className="group">
                                        {" "}
                                        as{" "}
                                        <span className="character">
                                          John Moore
                                        </span>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div id="credit_filters ">
                      <ul
                        id="filters"
                        className="dropdown_menu d-flex align_right white k-widget k-reset k-header k-menu k-menu-horizontal"
                        data-role="menu"
                        tabindex="0"
                        role="menubar"
                      >
                        <Dropdown className="d-inline mx-2">
                          <Dropdown.Toggle id="dropdown-autoclose-true">
                            Overview
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Main</Dropdown.Item>
                            <Dropdown.Item href="#">Translation</Dropdown.Item>
                            <Dropdown.Item href="#">Changes</Dropdown.Item>
                            <Dropdown.Item href="#">Report</Dropdown.Item>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="d-inline mx-2" autoClose="inside">
                          <Dropdown.Toggle id="dropdown-autoclose-inside">
                            Media
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Profiels</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              {/* <img src={imageUrl + peopleData.profile_path} alt="" /> */}
            </div>
          ) : (
            <>Loding...</>
          )}
        </section>
      </main>
    </div>
  );
}
