import React from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';

const ScheduleWeek = () => {
    return (
        <div className="container schedule-week">
            <div className="schedule-week__body">
                <Card>
                    <CardHeader>
                        <h1>Lịch học, lịch thi theo tuần</h1>
                    </CardHeader>
                    <CardContent className="grid-1">
                        <div className="schedule-week__body__content">
                            <div className="schedule-week__body__content__head">
                                <div className="schedule-week__body__content__head__input-group">
                                    <input
                                        type="radio"
                                        name="schedule"
                                        id="all-schedule"
                                        checked
                                        onChange={() => true}
                                    />
                                    <label htmlFor="all-schedule">Tất cả</label>
                                </div>
                                <div className="schedule-week__body__content__head__input-group">
                                    <input type="radio" name="schedule" id="learn-schedule" onChange={() => true} />
                                    <label htmlFor="learn-schedule">Lịch học</label>
                                </div>
                                <div className="schedule-week__body__content__head__input-group">
                                    <input type="radio" name="schedule" id="test-schedule" onChange={() => true} />
                                    <label htmlFor="test-schedule">Lịch thi</label>
                                </div>
                                <div className="schedule-week__body__content__head__input-group">
                                    <input
                                        type="text"
                                        className="schedule-week__body__content__head__input-group__calendar"
                                        onChange={() => true}
                                    />
                                    <i className="bx bx-calendar"></i>
                                </div>
                                <div className="umbrella-programs__body__header__event">
                                    <div>
                                        <i className="bx bx-calendar"></i>
                                        <span>Hiện tại</span>
                                    </div>
                                    <div>
                                        <i className="bx bx-printer"></i>
                                        <span>In lịch</span>
                                    </div>
                                    <div>
                                        <i className="bx bx-chevron-left"></i>
                                        <span>Trở về</span>
                                    </div>
                                    <div>
                                        <span>Tiếp</span>
                                        <i className="bx bx-chevron-right"></i>
                                    </div>
                                    <div>
                                        <i className="bx bx-fullscreen"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-week__body__content__body">
                                <div className="schedule-week__body__content__body__table">
                                    <Table>
                                        <THead>
                                            <Tr>
                                                <TH>Ca học</TH>
                                                <TH>
                                                    Thứ 2 <br /> 14/11/2022
                                                </TH>
                                                <TH>
                                                    Thứ 3 <br /> 15/11/2022
                                                </TH>
                                                <TH>
                                                    Thứ 4 <br /> 16/11/2022
                                                </TH>
                                                <TH>
                                                    Thứ 5 <br /> 17/11/2022
                                                </TH>
                                                <TH>
                                                    Thứ 6 <br /> 18/11/2022
                                                </TH>
                                                <TH>
                                                    Thứ 7 <br /> 19/11/2022
                                                </TH>
                                                <TH>
                                                    Chủ nhật <br /> 20/11/2022
                                                </TH>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            <Tr>
                                                <TD
                                                    className="center-border-table"
                                                    style={{ backgroundColor: 'var(--bg-yellow)', fontWeight: '600' }}
                                                >
                                                    Sáng
                                                </TD>
                                                <TD></TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                            </Tr>
                                            <Tr>
                                                <TD
                                                    className="center-border-table"
                                                    style={{ backgroundColor: 'var(--bg-yellow)', fontWeight: '600' }}
                                                >
                                                    Chiều
                                                </TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD>
                                                    <div className="schedule-week__body__content__body__table__tag">
                                                        <p>
                                                            <b>Phát triển phần mềm mã nguồn mở</b>
                                                        </p>
                                                        <p>TH19DH-TH1 - 221210335301</p>
                                                        <p>Tiết:&#160;2 - 6</p>
                                                        <p>Giờ:&#160;07:35 - 12:00</p>
                                                        <p>Phòng:&#160;9.5: 9.5 -Phòng máy</p>
                                                        <p>
                                                            GV:&#160;
                                                            <span
                                                                style={{
                                                                    color: 'var(--color-primary)',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                MAI TRUNG THÀNH
                                                            </span>
                                                        </p>
                                                    </div>
                                                </TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                            </Tr>
                                            <Tr>
                                                <TD
                                                    className="center-border-table"
                                                    style={{ backgroundColor: 'var(--bg-yellow)', fontWeight: '600' }}
                                                >
                                                    Tối
                                                </TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                            </Tr>
                                        </TBody>
                                    </Table>
                                </div>
                                <div className="umbrella-programs__body__content__note" style={{ marginTop: '2rem' }}>
                                    <div>
                                        <div style={{ backgroundColor: 'var(--bg-third)' }}></div>
                                        <span>Lịch học</span>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: 'var(--color-blue)' }}></div>
                                        <span>Lịch học trực tuyến</span>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: 'var(--bg-yellow)' }}></div>
                                        <span>Lịch thi</span>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: 'var(--color-error)' }}></div>
                                        <span>Lịch tạm ngưng</span>
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

export default ScheduleWeek;
