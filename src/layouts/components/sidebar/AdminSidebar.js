import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';
import config from '~/config';
import { logoutUser } from '~/pages/auth/authSlice';
import { adminSidebarSelector } from '~/redux/selector';
import adminSidebarSlice from './adminSidebarSlice';

const AdminSidebar = () => {
    const { toggle } = useSelector(adminSidebarSelector);
    const dispatch = useDispatch();
    return (
        <>
            <div
                className={`overlay sidebar-admin__overlay ${toggle && 'active'}`}
                onClick={() => dispatch(adminSidebarSlice.actions.toggle())}
            ></div>
            <div className={`sidebar-admin ${!toggle && 'active'}`}>
                <div className="sidebar-admin__header">
                    <div className="sidebar-admin__header__logo">
                        <Image src={images.logoDashboard} className="sidebar-admin__header__logo__big" />
                        <Image src={images.logo} className="sidebar-admin__header__logo__small" />
                    </div>
                    <div className="sidebar-admin__header__avatar">
                        <Image src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/admin.jpg" />
                        <h2>Vũ Quang Sơn</h2>
                        <h3>Admin</h3>
                    </div>
                </div>
                <div className="sidebar-admin__body">
                    <div className="sidebar-admin__body__group">
                        <p>Chính</p>
                        <ul className="sidebar-admin__body__group__list">
                            <li>
                                <NavLink
                                    to={config.routes.adminDashboard}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-table"></i>
                                        <h3>Bảng thống kê</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminProgram}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-objects-horizontal-left"></i>
                                        <h3>Chương trình đào tạo</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminFaculty}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-sushi"></i>
                                        <h3>Khoa</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminTeam}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-shape-square"></i>
                                        <h3>Lớp</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminSubject}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-book-content"></i>
                                        <h3>Học phần</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminTeacher}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-user"></i>
                                        <h3>Giáo viên</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminStudent}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-user"></i>
                                        <h3>Sinh viên</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminRoom}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-home-smile"></i>
                                        <h3>Phòng học</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-admin__body__group">
                        <p>Đào tạo</p>
                        <ul className="sidebar-admin__body__group__list">
                            <li>
                                <NavLink
                                    to={config.routes.adminEnrollClassSubject}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-objects-horizontal-left"></i>
                                        <h3>Mở học phần</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminClassSubject}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-objects-horizontal-center"></i>
                                        <h3>Lớp học phần</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={config.routes.adminCreateSchedule}
                                    className="sidebar-admin__body__group__list__item"
                                >
                                    <div>
                                        <i className="bx bx-calendar-alt"></i>
                                        <h3>Lập thời khoá biểu</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="sidebar-admin__body__group__list__item">
                                    <div>
                                        <i className="bx bx-calendar"></i>
                                        <h3>Xem thời khoá biểu</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-admin__body__group">
                        <p>Khác</p>
                        <ul className="sidebar-admin__body__group__list">
                            <li>
                                <NavLink to="/" className="sidebar-admin__body__group__list__item">
                                    <div>
                                        <i className="bx bx-cog"></i>
                                        <h3>Cài đặt trang web</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <div
                                    className="sidebar-admin__body__group__list__item"
                                    onClick={() => dispatch(logoutUser())}
                                >
                                    <div>
                                        <i className="bx bx-log-out"></i>
                                        <h3>Đăng xuất</h3>
                                    </div>
                                    <div>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;
