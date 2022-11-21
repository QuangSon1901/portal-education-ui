import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card, { CardContent } from '~/components/Card';
import Image from '~/components/Image';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import { authSelector } from '~/redux/selector';

const Profile = () => {
    const { user } = useSelector(authSelector);

    const [chooseInfo, setChooseInfo] = useState({ info: true });
    return (
        <div className="container profile">
            <div className="profile__body">
                <Card>
                    <CardContent className="grid-1">
                        <div className="profile__body__info">
                            <div className="profile__body__info__student">
                                <Image src="https://student.hiu.vn/Content/images/no_avatar.svg" />
                                <div>
                                    <p>
                                        MSSV:&#160;<b>{user && user.code}</b>
                                    </p>
                                    <p>
                                        Họ tên:&#160;<b>{user && user.name}</b>
                                    </p>
                                    <p>
                                        Giới tính:&#160;<b>Nam</b>
                                    </p>
                                </div>
                            </div>
                            <div className="profile__body__info__learning">
                                <div className="profile__body__info__learning__header">Thông tin học vấn</div>
                                <div className="profile__body__info__learning__content">
                                    <div>
                                        <p>
                                            Trạng thái:&#160;<b>Đang tích luỹ tín chỉ</b>
                                        </p>
                                        <p>
                                            Lớp học:&#160;<b>{user && user.team}</b>
                                        </p>
                                        <p>
                                            Bậc đào tạo:&#160;<b>Đại học</b>
                                        </p>
                                        <p>
                                            Khoa:&#160;<b>{user && user.faculty}</b>
                                        </p>
                                        <p>
                                            Chuyên nghành:&#160;<b>{user && user.faculty}</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Ngày vào trường:&#160;<b>{user && user.year_start}</b>
                                        </p>
                                        <p>
                                            Cơ sở:&#160;<b>Cơ sở chính</b>
                                        </p>
                                        <p>
                                            Loại hình đào tạo:&#160;<b>{user && user.program}</b>
                                        </p>
                                        <p>
                                            Ngành:&#160;<b>{user && user.faculty}</b>
                                        </p>
                                        <p>
                                            Khoá học:&#160;<b>DHCQK2019</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile__body__nav-tab">
                            <div className="profile__body__nav-tab__choose">
                                <div
                                    className={`${chooseInfo.info && 'active'}`}
                                    onClick={() => setChooseInfo({ info: true })}
                                >
                                    Thông tin cá nhân
                                </div>
                                <div
                                    className={`${chooseInfo.profile && 'active'}`}
                                    onClick={() => setChooseInfo({ profile: true })}
                                >
                                    Hồ sơ
                                </div>
                                <div
                                    className={`${chooseInfo.decision && 'active'}`}
                                    onClick={() => setChooseInfo({ decision: true })}
                                >
                                    Quyết định
                                </div>
                                <div></div>
                            </div>
                            <div className="profile__body__nav-tab__content">
                                {chooseInfo.info && <InfoStudent data={user} />}
                                {chooseInfo.profile && <ProfileStudent />}
                                {chooseInfo.decision && <DecisionStudent />}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const InfoStudent = ({ data }) => {
    return (
        <div className="profile__body__nav-tab__content__text">
            <div>
                <p>
                    Ngày sinh:&#160;<b>{data && data.birth}</b>
                </p>
                <p>
                    Đối tượng:&#160;<b></b>
                </p>
                <p>
                    Ngày vào đoàn:&#160;<b></b>
                </p>
                <p>
                    Điện thoại:&#160;<b>{data && data.phone}</b>
                </p>
                <p>
                    Email:&#160;<b>{data && data.email}</b>
                </p>
                <p>
                    Email HIU:&#160;<b>{data && data.email_school}</b>
                </p>
                <p>
                    Nơi sinh:&#160;<b>Tỉnh Đắk Lắk</b>
                </p>
                <p>
                    Hộ khẩu thường trú:&#160;<b>Tại một nơi nào đó</b>
                </p>
                <p>
                    Địa chỉ liên hệ:&#160;<b>Tại một nơi nào đó</b>
                </p>
            </div>
            <div>
                <p>
                    Dân tộc:&#160;<b>Kinh</b>
                </p>
                <p>
                    Ngày cấp:&#160;<b>03/08/2018</b>
                </p>
                <p>
                    Nơi cấp:&#160;<b>Đắk Lắk</b>
                </p>
                <p>
                    Diện chính sách:&#160;<b></b>
                </p>
                <p>
                    Ngày vào Đảng:&#160;<b></b>
                </p>
                <p>
                    Mật khẩu email HIU:&#160;<b></b>
                </p>
            </div>
            <div>
                <p>
                    Tôn giáo:&#160;<b>Không</b>
                </p>
            </div>
            <div>
                <p>
                    Khu vực:&#160;<b></b>
                </p>
            </div>
        </div>
    );
};

const ProfileStudent = () => {
    return (
        <div className="profile__body__nav-tab__content__table">
            <Table>
                <THead>
                    <Tr>
                        <TH>STT</TH>
                        <TH>Tên hồ sơ</TH>
                        <TH>Ghi chú</TH>
                        <TH>Bắt buộc</TH>
                        <TH>Đã nộp</TH>
                        <TH>File scan</TH>
                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <TD className="center-border-table">1</TD>
                        <TD>Giấy chứng nhận kết quả thi (01 bản chính)</TD>
                        <TD></TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">2</TD>
                        <TD>Giấy báo nhập học (01 bản chính)</TD>
                        <TD>01 bản chính</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">3</TD>
                        <TD>Giấy chứng nhận tốt nghiệp tạm thời (01 bản công chứng)</TD>
                        <TD>01 bản sao y công chứng</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">4</TD>
                        <TD>Hộ khẩu hoặc KT3 (01 bản công chứng)</TD>
                        <TD>01 bản sao y công chứng</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">5</TD>
                        <TD>Phiếu thông tin sinh viên (01 bản xác nhận địa phương hoặc cơ quan)</TD>
                        <TD>01 bản xác nhận địa phương hoặc cơ quan</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">6</TD>
                        <TD>Giấy xác nhận được hưởng chế độ ưu tiên, đối tượng khu vực (nếu có)</TD>
                        <TD>nếu có</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table"></TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">7</TD>
                        <TD>Khám sức khỏe (không quá 6 tháng)</TD>
                        <TD>không quá 6 tháng</TD>
                        <TD className="center-border-table"></TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">8</TD>
                        <TD>Bằng THPT hoặc bổ túc THPT,TCCN,CĐ,Bằng khác ( 01 bản công chứng)</TD>
                        <TD>01 bản sao y công chứng</TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">9</TD>
                        <TD>Học bạ hoặc bảng điểm tương ứng với bằng TN (01 bản công chứng)</TD>
                        <TD>01 bản sao y công chứng</TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">10</TD>
                        <TD>Giấy khai sinh (01 bản sao hợp lệ)</TD>
                        <TD>01 bản sao</TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                    <Tr>
                        <TD className="center-border-table">11</TD>
                        <TD>Chứng minh nhân dân (01 bản photo)</TD>
                        <TD>01 bản sao</TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD className="center-border-table">
                            <i className="bx bx-check"></i>
                        </TD>
                        <TD></TD>
                    </Tr>
                </TBody>
            </Table>
        </div>
    );
};

const DecisionStudent = () => {
    return (
        <div className="profile__body__nav-tab__content__table">
            <Table>
                <THead>
                    <Tr>
                        <TH>STT</TH>
                        <TH>Số quyết định</TH>
                        <TH>Loại quyết định</TH>
                        <TH>Ngày quyết định</TH>
                        <TH>Ngày ký</TH>
                        <TH>File scan</TH>
                    </Tr>
                </THead>
                <TBody></TBody>
            </Table>
        </div>
    );
};

export default Profile;
