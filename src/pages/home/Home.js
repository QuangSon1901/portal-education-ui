import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';
import config from '~/config';
import { authSelector } from '~/redux/selector';

const Home = () => {
    const { user } = useSelector(authSelector);
    return (
        <div className="container home-main">
            <div className="home-main__body">
                <Card>
                    <CardHeader>
                        <h2>Hồ sơ sinh viên</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="home-main__body__avatar">
                            <div>
                                <Image src="https://student.hiu.vn/Content/images/no_avatar.svg" />
                            </div>
                            <div className="home-main__body__avatar__btn">
                                <InputCustom typeComp="button" value="Xem chi tiêt" />
                            </div>
                        </div>
                        <div className="home-main__body__info">
                            <Card className="solid">
                                <CardHeader>
                                    <h2>Thông tin xét tuyển</h2>
                                </CardHeader>
                                <CardContent className="grid-1">
                                    <div>
                                        <p>
                                            <b>Đợt xét tuyển:&#160;</b>
                                        </p>
                                        <p>
                                            <b>Ngày xét tuyển:&#160;</b>
                                        </p>
                                        <p>
                                            <b>Ngày nhập học:&#160;</b>
                                            {user && user.year_start}
                                        </p>
                                        <p>
                                            <b>Mã hồ sơ:&#160;</b>
                                        </p>
                                        <p>
                                            <b>Điểm xét tuyển:&#160;</b>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="solid">
                                <CardHeader>
                                    <h2>Thông tin sinh viên</h2>
                                </CardHeader>
                                <CardContent className="grid-2">
                                    <div>
                                        <p>
                                            <b>Mã sinh viên:&#160;</b>
                                            {user && user.code}
                                        </p>
                                        <p>
                                            <b>Họ và tên:&#160;</b>
                                            {user && user.name}
                                        </p>
                                        <p>
                                            <b>Giới tính:&#160;</b>Nam
                                        </p>
                                        <p>
                                            <b>Ngày sinh:&#160;</b>
                                            {user && user.birth}
                                        </p>
                                        <p>
                                            <b>Nơi sinh:&#160;</b>Tỉnh Đắk Lắk
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <b>Trạng thái:&#160;</b>Đang tích luỹ tín chỉ
                                        </p>
                                        <p>
                                            <b>Khóa học:&#160;</b>DHCQK2019
                                        </p>
                                        <p>
                                            <b>Lớp học:&#160;</b>
                                            {user && user.team}
                                        </p>
                                        <p>
                                            <b>Bậc học:&#160;</b>Đại học
                                        </p>
                                        <p>
                                            <b>Loại đào tạo:&#160;</b>
                                            {user && user.program}
                                        </p>
                                        <p>
                                            <b>Ngành học:&#160;</b>
                                            {user && user.faculty}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="solid">
                                <CardHeader>
                                    <h2>Chuẩn đầu ra</h2>
                                </CardHeader>
                                <CardContent className="grid-1">
                                    <p>Không tìm thấy thông tin chuẩn đầu ra</p>
                                </CardContent>
                            </Card>
                            <Card className="solid">
                                <CardHeader>
                                    <h2>Công nợ sinh viên</h2>
                                </CardHeader>
                                <CardContent className="grid-1">
                                    <div>
                                        <p>
                                            <b>Số tiền đã nộp:&#160;</b>0
                                        </p>
                                        <p>
                                            <b>Công nợ hiện tại:&#160;</b>0
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="home-main__body__info__list-card">
                                <Card className="solid">
                                    <CardHeader>
                                        <h2>Ký túc xá</h2>
                                    </CardHeader>
                                    <CardContent className="grid-1"></CardContent>
                                </Card>
                                <Card className="solid color-blue">
                                    <CardHeader>
                                        <h1>6</h1>
                                    </CardHeader>
                                    <CardContent className="grid-1">
                                        <p>Lịch học trong tuần</p>
                                    </CardContent>
                                </Card>
                                <Card className="solid color-green">
                                    <CardHeader>
                                        <h1 style={{ color: 'var(--txt-green)' }}>0</h1>
                                    </CardHeader>
                                    <CardContent className="grid-1">
                                        <p> Lịch thi trong tuần</p>
                                    </CardContent>
                                </Card>
                                <Card className="solid color-pink">
                                    <CardHeader>
                                        <h1 style={{ color: 'var(--color-error)' }}>0</h1>
                                    </CardHeader>
                                    <CardContent className="grid-1">
                                        <p>Thông báo nhắc nhở</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card className="solid" style={{ backgroundColor: 'var(--bg-pink)' }}>
                                <CardContent className="grid-1">
                                    <p style={{ color: 'var(--color-error)' }}>Không tìm thấy thông tin nhắc nhở</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>

                <div className="home-main__body__list-cate">
                    <Link to={config.routes.me}>
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bxs-user-detail"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Thông tin sinh viên</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-briefcase"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Nhắc nhở</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={config.routes.scheduleWeek}>
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-calendar-week"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Lịch theo tuần</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-calendar"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Lịch theo tiến độ</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={config.routes.umbrellaPrograms}>
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-objects-horizontal-left"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Chương trình khung</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={config.routes.courseRegistration}>
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bxl-stack-overflow"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Đăng ký học phần</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-dollar"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Tra cứu công nợ</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-dollar-circle"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Thanh toán trực tuyến</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-file"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Phiếu thu tổng hợp</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-check-shield"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Khen thưởng sinh viên</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-line-chart"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text  grid-1">
                                <p>Kết quả học tập</p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/">
                        <Card className="solid home-main__body__list-cate__item">
                            <CardHeader>
                                <i className="home-main__body__list-cate__item__icon bx bx-file-find"></i>
                            </CardHeader>
                            <CardContent className="solid home-main__body__list-cate__item__text grid-1">
                                <p>Thanh toán dịch vụ</p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                <div className="home-main__body__more">
                    <Card>
                        <CardHeader>
                            <h2>Lớp học phần</h2>
                            <select name="" id="" className="home-main__body__more__select">
                                <option defaultValue="1" defaultChecked>
                                    Học kỳ 1 năm học 2022-2023
                                </option>
                            </select>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="home-main__body__more__list">
                                <div className="home-main__body__more__list__header">
                                    <span>Môn học/học phần</span>
                                    <span>Số tín chỉ</span>
                                </div>
                                <div className="home-main__body__more__list__content">
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Lịch sử đảng cộng sản</span>
                                            <span>221210507153</span>
                                        </div>
                                        <div>
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h2>Kết quả học tập</h2>
                            <select name="" id="" className="home-main__body__more__select">
                                <option defaultValue="1" defaultChecked>
                                    Học kỳ 1 năm học 2022-2023
                                </option>
                            </select>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <Image
                                style={{ margin: '0 auto' }}
                                src="https://student.hiu.vn/Content/ThemeMXH/img/tkkqht.png"
                            />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h2>Tiến độ học tập</h2>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="home-main__body__more__chart">
                                <div className="home-main__body__more__chart__svg">
                                    <div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <span>Đã học: 121 tín chỉ</span>
                                            <span>151%</span>
                                        </div>
                                    </div>
                                </div>
                                <p>121/80</p>
                                <div>
                                    <span>
                                        <span style={{ backgroundColor: 'var(--color-primary)' }}></span>
                                        <span>Tổng số tín chỉ hoàn thành</span>
                                    </span>
                                    <span>
                                        <span style={{ backgroundColor: 'var(--txt-green)' }}></span>
                                        <span>Số tín chỉ đã học</span>
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
