import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import "./signpeople.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SinglePeople() {
  const [peopleData, setPeopleData] = useState({}); //null
  let peopleID = useParams();
  let imageUrl = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/person/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`
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

                      <h3>
                        <bdi>Personal Info</bdi>
                      </h3>

                      <section>
                        <p>
                          <strong>
                            <bdi>Known For</bdi>
                          </strong>{" "}
                          Acting
                        </p>
                        <p>
                          <strong>
                            <bdi>Known Credits</bdi>
                          </strong>{" "}
                          204
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
                          1952-06-07 (70 years old)
                        </p>
                        <p className="full">
                          <strong>
                            <bdi>Place of Birth</bdi>
                          </strong>{" "}
                          Ballymena, County Antrim, Northern Ireland, UK
                        </p>

                        <p className="full true">
                          <strong>
                            <bdi>Also Known As</bdi>
                          </strong>
                        </p>
                        <ul>
                          <li itemprop="additionalName">連恩·尼遜</li>
                          <li itemprop="additionalName">เลียม นีสัน</li>
                          <li itemprop="additionalName">Лиам Нисон</li>
                          <li itemprop="additionalName">リーアム・ニーソン</li>
                          <li itemprop="additionalName">리암 니슨</li>
                          <li itemprop="additionalName">ليام نيسون</li>
                          <li itemprop="additionalName">Ліам Нісон</li>
                          <li itemprop="additionalName">Вільям Джон Нісон</li>
                          <li itemprop="additionalName">连姆·尼森</li>
                          <li itemprop="additionalName">
                            William John "Liam" Neeson OBE
                          </li>
                          <li itemprop="additionalName">Λίαμ Νίσον</li>
                        </ul>
                      </section>

                      <div className="">
                        <p className="rounded new_button pad">
                          <a className="" href="/person/3896-liam-neeson/edit">
                            edit page
                          </a>
                        </p>
                      </div>

                      <div className="keyboard_shortcut_text">
                        <p>
                          <a
                            id="keyboard_shortcuts"
                            className="no_click"
                            href="#"
                          >
                            <span className="glyphicons_v2 keyboard"></span>{" "}
                            Keyboard Shortcuts
                          </a>
                        </p>
                      </div>

                      <div className="report_issue">
                        <p className="report_issue">
                          <a
                            className="no_click report"
                            window="person"
                            href="#"
                          >
                            <span className="glyphicons_v2 speech-bubble-alert"></span>{" "}
                            Report an Issue
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
                        <a href="/person/3896-liam-neeson">Liam Neeson</a>
                      </h2>
                    </div>
                  </section>

                  <section className="full_wrapper">
                    <h3 dir="auto">Biography</h3>
                    <div dir="auto" className="biography true">
                      <div className="content fade_text">
                        <div className="text initial truncate should_fade">
                          <p>
                            An Irish actor who has been nominated for an Oscar,
                            a BAFTA and three Golden Globe Awards. He has
                            starred in a number of notable roles including Oskar
                            Schindler in Schindler's List, Michael Collins in
                            Michael Collins, Peyton Westlake in Darkman, Jean
                            Valjean in Les Misérables, Qui-Gon Jinn in Star Wars
                            Episode I: The Phantom Menace, Alfred Kinsey in
                            Kinsey, Ras Al Ghul in Batman Begins and the voice
                            of Aslan in The Chronicles of Narnia film series. He
                            has also starred in several other notable films,
                            from major Hollywood studio releases (ie. Excalibur,
                            The Dead Pool, Nell, Rob Roy, The Haunting, Love
                            Actually, Kingdom of Heaven, Taken, Clash of the
                            Titans, The A-Team, Unknown) to smaller arthouse
                            films (ie. Deception, Breakfast on Pluto, Chloe).
                          </p>
                          <p>
                            He was born in Ballymena, County Antrim, Northern
                            Ireland and educated at Saint Patrick's College,
                            Ballymena Technical College and Queen's University
                            Belfast. He moved to Dublin after university to
                            further his acting career, joining the renowned
                            Abbey Theatre. In the early 1990s, he moved again to
                            the United States, where the wide acclaim for his
                            performance in Schindler's List led to more
                            high-profile work. He is widowed and lives in New
                            York with his two sons.
                          </p>
                          <p>
                            Description above from the Wikipedia article Liam
                            Neeson, licensed under CC-BY-SA, full list of
                            contributors on Wikipedia.
                          </p>
                        </div>
                        <div className="read_more">
                          <a className="read_more no_click" href="#">
                            Read More{" "}
                            <span className="glyphicons_v2 chevron-right"></span>
                          </a>
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
                                  src={imageUrl + peopleData.backdrop_path}
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
