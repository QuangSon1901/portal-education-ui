import React, { Fragment, useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import * as httpResquest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';

const UmbrellaProgram = () => {
    const [umbrellaData, setUmbrellaData] = useState({});
    const [collapse, setCollapse] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            if (!storage.get(process.env.REACT_APP_TOKEN))
                return { status: 401, success: 'error', message: 'No token!' };
            const token = storage.get(process.env.REACT_APP_TOKEN);
            try {
                const res = await httpResquest.get('/umbrella-program', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.success === 'success') {
                    let result = res.umbrella_programs.reduce(function (r, a) {
                        r[a.term] = r[a.term] || [];
                        r[a.term].push(a);
                        return r;
                    }, Object.create(null));
                    setUmbrellaData(result);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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
                                        {Object.keys(umbrellaData).map((item, index) => {
                                            let stt = 1;
                                            return (
                                                <Fragment key={index}>
                                                    <Tr
                                                        className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr"
                                                        onClick={() => setCollapse({ [item]: !collapse[item] })}
                                                    >
                                                        <TD colSpan="4" className="center-border-table">
                                                            Học kỳ {item}
                                                        </TD>
                                                        <TD className="center-border-table">
                                                            {umbrellaData[item].reduce((r, i) => (r += i.credits), 0)}
                                                        </TD>
                                                        <TD colSpan="5" className="center-border-table" />
                                                    </Tr>
                                                    {umbrellaData[item].filter((x) => x.type_subject === 'bắt buộc')
                                                        .length > 0 && (
                                                        <Tr
                                                            className={`umbrella-programs__body__content__collapse umbrella-programs__body__content__tr ${
                                                                !collapse[item] && 'hidden'
                                                            }`}
                                                        >
                                                            <TD colSpan="4" className="left-border-table">
                                                                Học phần bắt buộc
                                                            </TD>
                                                            <TD className="center-border-table">
                                                                {umbrellaData[item].reduce(
                                                                    (r, i) =>
                                                                        i.type_subject === 'bắt buộc'
                                                                            ? (r += i.credits)
                                                                            : r,
                                                                    0,
                                                                )}
                                                            </TD>
                                                            <TD colSpan="5" className="center-border-table" />
                                                        </Tr>
                                                    )}

                                                    {umbrellaData[item].map((item2, index2) => {
                                                        if (item2.type_subject === 'bắt buộc')
                                                            return (
                                                                <Tr
                                                                    key={index2}
                                                                    className={`${!collapse[item] && 'hidden'}`}
                                                                >
                                                                    <TD className="center-border-table">{stt++}</TD>
                                                                    <TD>{item2.subject}</TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.code}
                                                                    </TD>
                                                                    <TD className="center-border-table"></TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.credits}
                                                                    </TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.theory_lesson}
                                                                    </TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.practice_lesson}
                                                                    </TD>
                                                                    <TD className="center-border-table">0</TD>
                                                                    <TD></TD>
                                                                    <TD>
                                                                        <i className="bx bxs-check-square check"></i>
                                                                    </TD>
                                                                </Tr>
                                                            );

                                                        return null;
                                                    })}
                                                    {umbrellaData[item].filter((x) => x.type_subject === 'tự chọn')
                                                        .length > 0 && (
                                                        <Tr
                                                            className={`umbrella-programs__body__content__collapse umbrella-programs__body__content__tr ${
                                                                !collapse[item] && 'hidden'
                                                            }`}
                                                        >
                                                            <TD colSpan="4" className="">
                                                                Học phần tự chọn
                                                            </TD>
                                                            <TD className="center-border-table">
                                                                {umbrellaData[item].reduce(
                                                                    (r, i) =>
                                                                        i.type_subject === 'tự chọn'
                                                                            ? (r += i.credits)
                                                                            : r,
                                                                    0,
                                                                )}
                                                            </TD>
                                                            <TD colSpan="5" className="center-border-table" />
                                                        </Tr>
                                                    )}

                                                    {umbrellaData[item].map((item2, index2) => {
                                                        if (item2.type_subject === 'tự chọn')
                                                            return (
                                                                <Tr
                                                                    key={index2}
                                                                    className={`${!collapse[item] && 'hidden'}`}
                                                                >
                                                                    <TD className="center-border-table">{stt++}</TD>
                                                                    <TD>{item2.subject}</TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.code}
                                                                    </TD>
                                                                    <TD className="center-border-table"></TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.credits}
                                                                    </TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.theory_lesson}
                                                                    </TD>
                                                                    <TD className="center-border-table">
                                                                        {item2.practice_lesson}
                                                                    </TD>
                                                                    <TD className="center-border-table">0</TD>
                                                                    <TD></TD>
                                                                    <TD>
                                                                        <i className="bx bxs-check-square check"></i>
                                                                    </TD>
                                                                </Tr>
                                                            );

                                                        return null;
                                                    })}
                                                </Fragment>
                                            );
                                        })}
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
