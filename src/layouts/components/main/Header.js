import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import config from '~/config';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '~/pages/auth/authSlice';
import { authSelector } from '~/redux/selector';
import Modal, { ModalContent, ModalHeader } from '~/components/Modal';
import ModalChangePass from '~/components/ModalChangePass';
import changePassSlice from '~/components/ModalChangePass/changePassSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);
    const [userMenu, setUserMenu] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <>
            <header className="header-main">
                <div className="container header-main__body">
                    <Link to={config.routes.home} className="header-main__body__logo">
                        <Image src={images.logoDashboard} />
                    </Link>
                    <div className="header-main__body__right">
                        <div className="header-main__body__right__search">
                            <InputCustom
                                typeComp="text2"
                                className="header-main__body__right__search__input"
                                placeholder="Tìm kiếm"
                                onChange={() => true}
                            />
                        </div>
                        <div className="header-main__body__right__toggle-menu" onClick={() => setSidebarToggle(true)}>
                            <i className="bx bx-menu" style={{ pointerEvents: 'none' }}></i>
                        </div>
                        <div>
                            <HeadlessTippy
                                visible={userMenu}
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className="dropdown">
                                        <div className="dropdown__content">
                                            <ul className="dropdown__content__list">
                                                <li>
                                                    <Link
                                                        to={config.routes.me}
                                                        className="dropdown__content__list__item-link"
                                                    >
                                                        Thông tin cá nhân
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dropdown__content__list__item-link"
                                                        onClick={() => dispatch(changePassSlice.actions.toggle())}
                                                    >
                                                        Đổi mật khẩu
                                                    </div>
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
                                <div className="header-main__body__right__user" onClick={() => setUserMenu(!userMenu)}>
                                    <Image src="https://student.hiu.vn/Content/images/no_avatar.svg" />
                                    <span>{user && user.name}</span>
                                    <i className="bx bx-chevron-down"></i>
                                </div>
                            </HeadlessTippy>
                        </div>
                        <div className="header-main__body__right__right">
                            <Link to={config.routes.home}>
                                <i className="bx bxs-home-alt-2"></i>
                                Trang chủ
                            </Link>
                            <Link to="/">
                                <i className="bx bxs-bell">
                                    <span className="header-main__body__right__right__news-tag">
                                        <span>22</span>
                                    </span>
                                </i>
                                Tin tức
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar toggle={sidebarToggle} close={() => setSidebarToggle(false)} />
            <Navbar />
            <ModalChangePass />
        </>
    );
};

export default Header;
