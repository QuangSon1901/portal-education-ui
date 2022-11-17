import React from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';

const CourseRegistration = () => {
    return (
        <div className="container course-registration">
            <div className="course-registration__body">
                <Card>
                    <CardHeader>
                        <h1>Đăng ký học phần</h1>
                    </CardHeader>
                    <CardContent className="grid-1">
                        <div className="course-registration__body__content">
                            <div className="course-registration__body__content__head">
                                <select name="" id="" className="home-main__body__more__select">
                                    <option defaultValue="1" defaultChecked>
                                        Chọn đợt đăng ký
                                    </option>
                                    <option>Học kỳ 1 năm học 2022-2023</option>
                                </select>
                                <div>
                                    <div className="course-registration__body__content__head__input-group">
                                        <input
                                            type="radio"
                                            id="type-course1"
                                            name="type-course"
                                            checked
                                            onChange={() => true}
                                        />
                                        <label htmlFor="type-course1">Học mới</label>
                                    </div>
                                    <div className="course-registration__body__content__head__input-group">
                                        <input
                                            type="radio"
                                            id="type-course2"
                                            name="type-course"
                                            onChange={() => true}
                                        />
                                        <label htmlFor="type-course2">Học lại</label>
                                    </div>
                                </div>
                            </div>
                            <div className="course-registration__body__content__body">
                                <div className="course-registration__body__content__body__group">
                                    <div className="course-registration__body__content__body__group__head">
                                        <span></span>
                                        <h3>Môn học/học phần đang chờ đăng ký</h3>
                                    </div>
                                    <div className="course-registration__body__content__body__group__table">
                                        <Table>
                                            <THead>
                                                <Tr>
                                                    <TH></TH>
                                                    <TH>STT</TH>
                                                    <TH>Mã học phần</TH>
                                                    <TH>Tên môn học/học phần</TH>
                                                    <TH>TC</TH>
                                                    <TH>Bắt buộc</TH>
                                                    <TH>học phần: học trước (a), tiên quyết (b), song hành (c)</TH>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                <Tr className="course-registration__body__content__body__group__table__choose">
                                                    <TD className="center-border-table">
                                                        <input
                                                            type="radio"
                                                            name="hocphanchodangky"
                                                            id="hocphanchodangky1"
                                                            onChange={() => true}
                                                        />
                                                    </TD>
                                                    <TD className="center-border-table">1</TD>
                                                    <TD className="center-border-table">0008</TD>
                                                    <TD>Tin học đại cương</TD>
                                                    <TD className="center-border-table">2</TD>
                                                    <TD className="center-border-table">
                                                        <i className="bx bxs-check-square check"></i>
                                                    </TD>
                                                    <TD></TD>
                                                </Tr>
                                                <Tr className="course-registration__body__content__body__group__table__choose">
                                                    <TD className="center-border-table">
                                                        <input
                                                            type="radio"
                                                            name="hocphanchodangky"
                                                            id="hocphanchodangky1"
                                                            onChange={() => true}
                                                        />
                                                    </TD>
                                                    <TD className="center-border-table">2</TD>
                                                    <TD className="center-border-table">2154</TD>
                                                    <TD>Intensive English - A1a</TD>
                                                    <TD className="center-border-table">3</TD>
                                                    <TD className="center-border-table">
                                                        <i className="bx bxs-x-square error"></i>
                                                    </TD>
                                                    <TD></TD>
                                                </Tr>
                                            </TBody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="course-registration__body__content__body__collapse">
                                    <div className="course-registration__body__content__body__group">
                                        <div className="course-registration__body__content__body__group__head">
                                            <span></span>
                                            <h3>Lớp học phần chờ đăng ký</h3>
                                        </div>
                                        <div className="course-registration__body__content__body__group__table">
                                            <Table>
                                                <THead>
                                                    <Tr>
                                                        <TH>STT</TH>
                                                        <TH>Thông tin lớp học phần</TH>
                                                        <TH>Đã đăng ký</TH>
                                                    </Tr>
                                                </THead>
                                                <TBody>
                                                    <Tr>
                                                        <TD className="center-border-table">1</TD>
                                                        <TD>
                                                            <p>
                                                                <b>Tin học đại cương (Qui chế 43 - ĐH,CĐ)</b>
                                                            </p>
                                                            <p>
                                                                Trạng thái:&#160;
                                                                <b style={{ color: 'var(--color-error)' }}>Đã khóa</b>
                                                            </p>
                                                            <p>
                                                                Mã lớp học phần:&#160;221210000802 - AC21DH-CO1;
                                                                EV21DH-EV1; TM21DH-TM1
                                                            </p>
                                                        </TD>
                                                        <TD className="center-border-table">19/25</TD>
                                                    </Tr>
                                                </TBody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="course-registration__body__content__body__group">
                                        <div className="course-registration__body__content__body__group__head">
                                            <span></span>
                                            <h3>Chi tiết lớp học phần</h3>
                                        </div>
                                        <div className="course-registration__body__content__body__group__table">
                                            <Table>
                                                <THead>
                                                    <Tr>
                                                        <TH>
                                                            Trạng thái:&#160;
                                                            <span style={{ color: 'var(--color-error)' }}>Đã khoá</span>
                                                        </TH>
                                                        <TH>Sĩ số đối đã</TH>
                                                    </Tr>
                                                </THead>
                                                <TBody>
                                                    <Tr>
                                                        <TD>
                                                            <p>
                                                                Lịch học:&#160;<b>LT - Thứ 4 (Tiết 7 &#8594; 9 )</b>
                                                            </p>
                                                            <p>
                                                                Dãy nhà:&#160;
                                                                <b style={{ color: 'var(--color-primary' }}>
                                                                    CS1 (215 Điện Biên Phủ , P.15 , Quận Bình Thạnh)
                                                                </b>
                                                            </p>
                                                            <p>
                                                                Phòng:&#160;
                                                                <b style={{ color: 'var(--color-primary' }}>
                                                                    12.5 Daisy
                                                                </b>
                                                            </p>
                                                        </TD>
                                                        <TD>
                                                            <p>
                                                                <b>GV:&#160;ThS Nguyễn Minh Trường</b>
                                                            </p>
                                                            <p style={{ color: 'var(--color-primary)' }}>
                                                                23/11/2022 - 23/11/2022
                                                            </p>
                                                        </TD>
                                                    </Tr>
                                                </TBody>
                                            </Table>
                                            <div className="course-registration__body__content__body__group__table__submit">
                                                <InputCustom
                                                    typeComp="button"
                                                    className="primary"
                                                    value="Đăng ký ngay"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-registration__body__content__body__group">
                                    <div className="course-registration__body__content__body__group__head">
                                        <span></span>
                                        <h3>Môn học/học phần đang chờ đăng ký</h3>
                                    </div>
                                    <div className="course-registration__body__content__body__group__table">
                                        <Table className="course-registration__body__content__body__group__table__table">
                                            <THead>
                                                <Tr>
                                                    <TH></TH>
                                                    <TH></TH>
                                                    <TH>STT</TH>
                                                    <TH>Mã lớp học phần</TH>
                                                    <TH>Tên môn học/học phần</TH>
                                                    <TH>Lớp học dự kiến</TH>
                                                    <TH>TC</TH>
                                                    <TH>Học phí</TH>
                                                    <TH>Hạn nộp</TH>
                                                    <TH>Thu</TH>
                                                    <TH>Trạng thái đăng ký</TH>
                                                    <TH>Ngày ĐK</TH>
                                                    <TH>Trạng thái Lớp học phần</TH>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                <Tr>
                                                    <TD
                                                        colSpan="6"
                                                        className="center-border-table"
                                                        style={{ fontWeight: '700' }}
                                                    >
                                                        Tổng
                                                    </TD>
                                                    <TD className="center-border-table" style={{ fontWeight: '700' }}>
                                                        21
                                                    </TD>
                                                    <TD colSpan="7"></TD>
                                                </Tr>
                                                <Tr>
                                                    <TD>
                                                        <div className="table-btn-small">
                                                            <InputCustom typeComp="button" value="Xem" />
                                                        </div>
                                                    </TD>
                                                    <TD>
                                                        <div className="table-btn-small">
                                                            <InputCustom typeComp="button" value="Huỷ" />
                                                        </div>
                                                    </TD>
                                                    <TD className="center-border-table">1</TD>
                                                    <TD>221210335701</TD>
                                                    <TD>Công nghệ J2EE</TD>
                                                    <TD>TH19DH-TH1; TH19DHB-TH1</TD>
                                                    <TD className="center-border-table">3</TD>
                                                    <TD className="center-border-table">3.300.000</TD>
                                                    <TD className="center-border-table">29/08/2022</TD>
                                                    <TD className="center-border-table">
                                                        <i className="bx bxs-check-square check"></i>
                                                    </TD>
                                                    <TD className="center-border-table">Đăng ký mới</TD>
                                                    <TD className="center-border-table">30/07/2022</TD>
                                                    <TD className="center-border-table">Đã khóa</TD>
                                                </Tr>
                                                <Tr>
                                                    <TD>
                                                        <div className="table-btn-small">
                                                            <InputCustom typeComp="button" value="Xem" />
                                                        </div>
                                                    </TD>
                                                    <TD>
                                                        <div className="table-btn-small">
                                                            <InputCustom typeComp="button" value="Huỷ" />
                                                        </div>
                                                    </TD>
                                                    <TD className="center-border-table">1</TD>
                                                    <TD>221210335701</TD>
                                                    <TD>Công nghệ J2EE</TD>
                                                    <TD>TH19DH-TH1; TH19DHB-TH1</TD>
                                                    <TD className="center-border-table">3</TD>
                                                    <TD className="center-border-table">3.300.000</TD>
                                                    <TD className="center-border-table">29/08/2022</TD>
                                                    <TD className="center-border-table">
                                                        <i className="bx bxs-check-square check"></i>
                                                    </TD>
                                                    <TD className="center-border-table">Đăng ký mới</TD>
                                                    <TD className="center-border-table">30/07/2022</TD>
                                                    <TD className="center-border-table">Đã khóa</TD>
                                                </Tr>
                                            </TBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CourseRegistration;
