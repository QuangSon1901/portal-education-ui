import React from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';

const UmbrellaProgram = () => {
    return (
        <div className="container umbrella-programs">
            <div className="umbrella-programs__body">
                <Card>
                    <CardHeader>
                        <h1>Chương trình khung</h1>
                        <div className="umbrella-programs__body__header__event">
                            <div>
                                <i className="bx bx-printer"></i>
                                <span>In</span>
                            </div>
                            <div>
                                <i className="bx bx-caret-down-square"></i>
                            </div>
                            <div>
                                <i className="bx bx-fullscreen"></i>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="grid-1">
                        <div className="umbrella-programs__body__content">
                            <div className="umbrella-programs__body__content__table">
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TH>STT</TH>
                                            <TH>Tên môn học/Học phần</TH>
                                            <TH>Mã Học phần</TH>
                                            <TH>Học phần</TH>
                                            <TH>Số TC</TH>
                                            <TH>Số tiết LT</TH>
                                            <TH>Số tiết TH</TH>
                                            <TH>Nhóm tự chọn</TH>
                                            <TH>Số TC bắt buộc của nhóm</TH>
                                            <TH>Đạt</TH>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="center-border-table">
                                                Học kỳ 1
                                            </TD>
                                            <TD className="center-border-table">18</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__collapse umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="left-border-table">
                                                Học phần bắt buộc
                                            </TD>
                                            <TD className="center-border-table">11</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr>
                                            <TD>1</TD>
                                            <TD>Tin học đại cương</TD>
                                            <TD>00008</TD>
                                            <TD></TD>
                                            <TD>2</TD>
                                            <TD>30</TD>
                                            <TD>0</TD>
                                            <TD>0</TD>
                                            <TD></TD>
                                            <TD>
                                                <i className="bx bxs-check-square check"></i>
                                            </TD>
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__collapse umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="">
                                                Học phần tự chọn
                                            </TD>
                                            <TD className="center-border-table">11</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr>
                                            <TD>1</TD>
                                            <TD>Tin học đại cương</TD>
                                            <TD>00008</TD>
                                            <TD></TD>
                                            <TD>2</TD>
                                            <TD>30</TD>
                                            <TD>0</TD>
                                            <TD>0</TD>
                                            <TD></TD>
                                            <TD>
                                                <i className="bx bxs-check-square check"></i>
                                            </TD>
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="center-border-table">
                                                Học kỳ 2
                                            </TD>
                                            <TD className="center-border-table">18</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__collapse umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="">
                                                Học phần bắt buộc
                                            </TD>
                                            <TD className="center-border-table">11</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr>
                                            <TD>1</TD>
                                            <TD>Tin học đại cương</TD>
                                            <TD>00008</TD>
                                            <TD></TD>
                                            <TD>2</TD>
                                            <TD>30</TD>
                                            <TD>0</TD>
                                            <TD>0</TD>
                                            <TD></TD>
                                            <TD>
                                                <i className="bx bxs-check-square check"></i>
                                            </TD>
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__collapse umbrella-programs__body__content__tr">
                                            <TD colSpan="4" className="left-border-table">
                                                Học phần tự chọn
                                            </TD>
                                            <TD className="center-border-table">11</TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr>
                                            <TD>1</TD>
                                            <TD>Tin học đại cương</TD>
                                            <TD>00008</TD>
                                            <TD></TD>
                                            <TD>2</TD>
                                            <TD>30</TD>
                                            <TD>0</TD>
                                            <TD>0</TD>
                                            <TD></TD>
                                            <TD>
                                                <i className="bx bxs-check-square check"></i>
                                            </TD>
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD colSpan="4">Tổng TC yêu cầu</TD>
                                            <TD className="center-border-table umbrella-programs__body__content__red">
                                                205
                                            </TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD colSpan="4">Tổng TC bắt buộc</TD>
                                            <TD className="center-border-table umbrella-programs__body__content__red">
                                                135
                                            </TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD colSpan="4">Tổng TC tự chọn</TD>
                                            <TD className="center-border-table umbrella-programs__body__content__red">
                                                73
                                            </TD>
                                            <TD colSpan="5" className="center-border-table" />
                                        </Tr>
                                    </TBody>
                                </Table>
                            </div>

                            <p>
                                <i>
                                    Ghi chú: Những môn học/Học phần có dấu{' '}
                                    <span style={{ color: 'var(--color-error)' }}>*</span> không được tính vào Trung
                                    bình chung tích lũy
                                </i>
                            </p>

                            <div className="umbrella-programs__body__content__note">
                                <div>
                                    <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}></div>
                                    <span>Môn học/Học phần đã (hoặc đang) học</span>
                                </div>
                                <div>
                                    <div style={{ backgroundColor: '#fff' }}></div>
                                    <span>Môn học sinh viên chưa đăng ký học tập</span>
                                </div>
                                <div>
                                    <i className="bx bxs-check-square check"></i>
                                    <span>Đạt</span>
                                </div>
                                <div>
                                    <i className="bx bxs-x-square error"></i>
                                    <span>Không đạt</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UmbrellaProgram;
