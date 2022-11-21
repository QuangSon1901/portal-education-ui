import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '~/config';
import { logoutUser } from '~/pages/auth/authSlice';

const Sidebar = ({ toggle, close }) => {
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState({});
    return (
        <>
            <div className={`overlay ${toggle && 'active'}`} onClick={close}></div>
            <div className={`sidebar ${toggle && 'active'}`}>
                <ul className="sidebar__list">
                    <li className="sidebar__list__item">
                        <Link to={config.routes.home} className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-home-alt-2"></i>
                                Trang chủ
                            </div>
                        </Link>
                    </li>
                    <li className="sidebar__list__item">
                        <Link to="/" className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-bell">
                                    <span className="header-main__body__right__right__news-tag">
                                        <span>22</span>
                                    </span>
                                </i>
                                Tin tức
                            </div>
                        </Link>
                    </li>
                    <li
                        className={`sidebar__list__item ${dropdown.thongtinchung && 'active'}`}
                        onClick={() => setDropdown({ thongtinchung: !dropdown.thongtinchung })}
                    >
                        <div className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-tv"></i>
                                Thông tin chung
                            </div>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <div className="sidebar__list__item__dropdown">
                            <Link to={config.routes.me} className="sidebar__list__item__link">
                                Thông tin sinh viên
                            </Link>
                            <Link to={config.routes.home} className="sidebar__list__item__link">
                                Đề xuất cập nhật thông tin
                            </Link>
                            <Link to={config.routes.home} className="sidebar__list__item__link">
                                Đề xuất biểu mẫu
                            </Link>
                            <Link to={config.routes.home} className="sidebar__list__item__link">
                                Hồ sơ sinh viên
                            </Link>
                        </div>
                    </li>
                    <li
                        className={`sidebar__list__item ${dropdown.hoctap && 'active'}`}
                        onClick={() => setDropdown({ hoctap: !dropdown.hoctap })}
                    >
                        <div className="sidebar__list__item__link">
                            <div>
                                <i className="bx bxs-face-mask"></i>
                                Học tập
                            </div>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <div className="sidebar__list__item__dropdown">
                            <Link to={config.routes.scheduleWeek} className="sidebar__list__item__link">
                                Lịch theo tuần
                            </Link>
                            <Link className="sidebar__list__item__link">Lịch theo tiến độ</Link>
                            <Link className="sidebar__list__item__link">Thông tin điểm danh</Link>
                            <Link className="sidebar__list__item__link">Kết quả rèn luyện</Link>
                            <Link className="sidebar__list__item__link">Kết quả học tập</Link>
                            <Link className="sidebar__list__item__link">Xem lịch thi</Link>
                            <Link className="sidebar__list__item__link">Khen thưởng sinh viên</Link>
                        </div>
                    </li>
                    <li
                        className={`sidebar__list__item ${dropdown.dangkyhocphan && 'active'}`}
                        onClick={() => setDropdown({ dangkyhocphan: !dropdown.dangkyhocphan })}
                    >
                        <div className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-user-check"></i>
                                Đăng ký học phần
                            </div>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <div className="sidebar__list__item__dropdown">
                            <Link to={config.routes.umbrellaPrograms} className="sidebar__list__item__link">
                                Chương trình khung
                            </Link>
                            <Link to={config.routes.courseRegistration} className="sidebar__list__item__link">
                                Đăng ký học phần
                            </Link>
                            <Link className="sidebar__list__item__link">Đăng ký thi lại</Link>
                            <Link className="sidebar__list__item__link">Đăng ký chuyên nghành</Link>
                        </div>
                    </li>
                    <li
                        className={`sidebar__list__item ${dropdown.hocphi && 'active'}`}
                        onClick={() => setDropdown({ hocphi: !dropdown.hocphi })}
                    >
                        <div className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-credit-card-alt"></i>
                                Học phí
                            </div>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <div className="sidebar__list__item__dropdown">
                            <Link className="sidebar__list__item__link">Tra cứu công nợ</Link>
                            <Link className="sidebar__list__item__link">Thanh toán trực tuyến</Link>
                            <Link className="sidebar__list__item__link">Phiếu thu tổng hợp</Link>
                            <Link className="sidebar__list__item__link">Phiếu thu trực tuyến</Link>
                            <Link className="sidebar__list__item__link">Thanh toán dịch vụ</Link>
                        </div>
                    </li>
                    <li
                        className={`sidebar__list__item ${dropdown.khac && 'active'}`}
                        onClick={() => setDropdown({ khac: !dropdown.khac })}
                    >
                        <div className="sidebar__list__item__link">
                            <div>
                                <i className="bx bx-cog"></i>
                                Khác
                            </div>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <div className="sidebar__list__item__dropdown">
                            <Link className="sidebar__list__item__link">Hợp thư sinh viên</Link>
                        </div>
                    </li>
                    <li className="sidebar__list__item">
                        <div className="sidebar__list__item__link" onClick={() => dispatch(logoutUser())}>
                            <div>
                                <i className="bx bx-log-out"></i>
                                Đăng xuất
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
