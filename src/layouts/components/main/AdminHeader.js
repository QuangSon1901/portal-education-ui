import React, { useState } from 'react';
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import adminSidebarSlice from '../sidebar/adminSidebarSlice';
import { logoutUser } from '~/pages/auth/authSlice';

const AdminHeader = () => {
    const dispatch = useDispatch();
    const [userMenu, setUserMenu] = useState(false);
    return (
        <div className="header-admin">
            <div className="container-admin header-admin__body">
                <div
                    className="header-admin__body__toggle-menu"
                    onClick={() => dispatch(adminSidebarSlice.actions.toggle())}
                >
                    <i className="bx bx-menu"></i>
                </div>
                <div className="header-admin__body__right-menu">
                    <div className="header-admin__body__right-menu__btn">
                        <i className="bx bx-bell"></i>
                    </div>
                    <HeadlessTippy
                        visible={userMenu}
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="dropdown">
                                <div className="dropdown__content">
                                    <ul className="dropdown__content__list">
                                        <li>
                                            <Link to="/" className="dropdown__content__list__item-link">
                                                Thông tin cá nhân
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="dropdown__content__list__item-link">Hộp thư</div>
                                        </li>
                                        <li>
                                            <div className="dropdown__content__list__item-link">Đổi mật khẩu</div>
                                        </li>
                                        <li>
                                            <div
                                                className="dropdown__content__list__item-link"
                                                onClick={() => dispatch(logoutUser())}
                                            >
                                                Đăng xuất
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        onClickOutside={() => setUserMenu(false)}
                    >
                        <div className="header-admin__body__right-menu__user" onClick={() => setUserMenu(true)}>
                            <h2>Vũ Quang Sơn</h2>
                            <Image src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/admin.jpg" />
                        </div>
                    </HeadlessTippy>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
