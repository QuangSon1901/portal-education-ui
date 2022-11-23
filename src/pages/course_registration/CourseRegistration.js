import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';

const CourseRegistration = () => {
    const [subjectData, setSubjectData] = useState({});
    const [collapse, setCollapse] = useState(null);
    const [collapseChoose, setCollapseChoose] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/enroll-subject', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setSubjectData({ not_enroll: res.not_enroll, enrolled: res.enrolled });
            } catch (error) {}
        };
        fetchData();
    }, []);

    const handleEnroll = async (id) => {
        try {
            const res = await httpRequest.get(`/try-enroll-subject/${id}`, {
                headers: {
                    Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                },
            });

            if (res.success === 'success') {
                setSubjectData({ not_enroll: res.not_enroll, enrolled: res.enrolled });
                setCollapse(null);
                setCollapseChoose(0);
            }
        } catch (error) {}
    };

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
                                                {subjectData.not_enroll &&
                                                    subjectData.not_enroll.length > 0 &&
                                                    subjectData.not_enroll.map((subject, index) => (
                                                        <Tr
                                                            key={index}
                                                            className="course-registration__body__content__body__group__table__choose"
                                                        >
                                                            <TD className="center-border-table">
                                                                <input
                                                                    type="radio"
                                                                    name="hocphanchodangky"
                                                                    id="hocphanchodangky1"
                                                                    onClick={(event) =>
                                                                        event.target.checked &&
                                                                        setCollapse(subject.subject_id)
                                                                    }
                                                                />
                                                            </TD>
                                                            <TD className="center-border-table">{++index}</TD>
                                                            <TD className="center-border-table">
                                                                {subject.subject_code}
                                                            </TD>
                                                            <TD>{subject.subject_name}</TD>
                                                            <TD className="center-border-table">
                                                                {subject.subject_credits}
                                                            </TD>
                                                            <TD className="center-border-table">
                                                                {subject.type_subject === 'bắt buộc' && (
                                                                    <i className="bx bxs-check-square check"></i>
                                                                )}
                                                            </TD>
                                                            <TD></TD>
                                                        </Tr>
                                                    ))}
                                            </TBody>
                                        </Table>
                                    </div>
                                </div>
                                {collapse !== null &&
                                    subjectData.not_enroll.find((item) => item.subject_id === collapse).class_subjects
                                        .length > 0 && (
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
                                                                <TH></TH>
                                                                <TH>Thông tin lớp học phần</TH>
                                                                <TH>Đã đăng ký</TH>
                                                            </Tr>
                                                        </THead>
                                                        <TBody>
                                                            {subjectData.not_enroll
                                                                .find((item) => item.subject_id === collapse)
                                                                .class_subjects.map((team, index) => (
                                                                    <Tr key={index}>
                                                                        <TD className="center-border-table">
                                                                            <input
                                                                                type="radio"
                                                                                checked={
                                                                                    collapseChoose === index
                                                                                        ? true
                                                                                        : false
                                                                                }
                                                                                onChange={() =>
                                                                                    setCollapseChoose(index)
                                                                                }
                                                                            />
                                                                        </TD>
                                                                        <TD>
                                                                            <p>
                                                                                <b>
                                                                                    {
                                                                                        subjectData.not_enroll.find(
                                                                                            (item) =>
                                                                                                item.subject_id ===
                                                                                                collapse,
                                                                                        ).subject_name
                                                                                    }
                                                                                </b>
                                                                            </p>
                                                                            <p>
                                                                                Trạng thái:&#160;
                                                                                {team.status === 0 ? (
                                                                                    <b
                                                                                        style={{
                                                                                            color: 'var(--txt-color)',
                                                                                        }}
                                                                                    >
                                                                                        Chưa mở
                                                                                    </b>
                                                                                ) : team.status === 1 ? (
                                                                                    <b
                                                                                        style={{
                                                                                            color: 'var(--color-primary)',
                                                                                        }}
                                                                                    >
                                                                                        Đang mở
                                                                                    </b>
                                                                                ) : (
                                                                                    <b
                                                                                        style={{
                                                                                            color: 'var(--color-error)',
                                                                                        }}
                                                                                    >
                                                                                        Đã khóa
                                                                                    </b>
                                                                                )}
                                                                            </p>
                                                                            <p>Mã lớp học phần:&#160;{team.code}</p>
                                                                        </TD>
                                                                        <TD className="center-border-table">
                                                                            19/{team.max_student}
                                                                        </TD>
                                                                    </Tr>
                                                                ))}
                                                        </TBody>
                                                    </Table>
                                                </div>
                                            </div>
                                            <div className="course-registration__body__content__body__group">
                                                <div className="course-registration__body__content__body__group__head">
                                                    <span></span>
                                                    <h3>Chi tiết lớp học phần</h3>
                                                    <div
                                                        className="course-registration__body__content__body__group__head__submit"
                                                        onClick={() =>
                                                            handleEnroll(
                                                                subjectData.not_enroll.find(
                                                                    (item) => item.subject_id === collapse,
                                                                ).class_subjects[collapseChoose].id,
                                                            )
                                                        }
                                                    >
                                                        <h3>Đăng ký</h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="course-registration__body__content__body__group__table"
                                                    style={{ maxHeight: '40rem' }}
                                                >
                                                    <Table>
                                                        <THead>
                                                            <Tr>
                                                                <TH>
                                                                    Trạng thái:&#160;
                                                                    {subjectData.not_enroll.find(
                                                                        (item) => item.subject_id === collapse,
                                                                    ).class_subjects[collapseChoose].status === 0 ? (
                                                                        <span style={{ color: 'var(--txt-color)' }}>
                                                                            Chưa mở
                                                                        </span>
                                                                    ) : subjectData.not_enroll.find(
                                                                          (item) => item.subject_id === collapse,
                                                                      ).class_subjects[collapseChoose].status === 1 ? (
                                                                        <span style={{ color: 'var(--color-primary)' }}>
                                                                            Đang mở
                                                                        </span>
                                                                    ) : (
                                                                        <span style={{ color: 'var(--color-error)' }}>
                                                                            Đã khoá
                                                                        </span>
                                                                    )}
                                                                </TH>
                                                                <TH>Sĩ số đối đã</TH>
                                                            </Tr>
                                                        </THead>
                                                        <TBody>
                                                            {subjectData.not_enroll
                                                                .find((item) => item.subject_id === collapse)
                                                                .class_subjects[collapseChoose].schedule.map(
                                                                    (item, index) => (
                                                                        <Tr key={index}>
                                                                            <TD>
                                                                                <p>
                                                                                    Lịch học:&#160;
                                                                                    <b>
                                                                                        {`Thứ ${item.day_of_week} (Tiết ${item.lesson_start} -> ${item.lesson_end} )`}
                                                                                    </b>
                                                                                </p>
                                                                                <p>
                                                                                    Dãy nhà:&#160;
                                                                                    <b
                                                                                        style={{
                                                                                            color: 'var(--color-primary',
                                                                                        }}
                                                                                    >
                                                                                        CS1 (215 Điện Biên Phủ , P.15 ,
                                                                                        Quận Bình Thạnh)
                                                                                    </b>
                                                                                </p>
                                                                                <p>
                                                                                    Phòng:&#160;
                                                                                    <b
                                                                                        style={{
                                                                                            color: 'var(--color-primary',
                                                                                        }}
                                                                                    >
                                                                                        {`${item.room_code} - ${item.room_name}`}
                                                                                    </b>
                                                                                </p>
                                                                            </TD>
                                                                            <TD>
                                                                                <p>
                                                                                    <b>GV:&#160;{item.teacher_name}</b>
                                                                                </p>
                                                                                <p
                                                                                    style={{
                                                                                        color: 'var(--color-primary)',
                                                                                    }}
                                                                                >
                                                                                    {item.date}
                                                                                </p>
                                                                            </TD>
                                                                        </Tr>
                                                                    ),
                                                                )}
                                                        </TBody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                <div className="course-registration__body__content__body__group">
                                    <div className="course-registration__body__content__body__group__head">
                                        <span></span>
                                        <h3>Môn học/học phần đã đăng ký</h3>
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
                                                {subjectData.enrolled && subjectData.enrolled.length > 0 && (
                                                    <Tr>
                                                        <TD
                                                            colSpan="6"
                                                            className="center-border-table"
                                                            style={{ fontWeight: '700' }}
                                                        >
                                                            Tổng
                                                        </TD>
                                                        <TD
                                                            className="center-border-table"
                                                            style={{ fontWeight: '700' }}
                                                        >
                                                            {subjectData.enrolled.length}
                                                        </TD>
                                                        <TD colSpan="7"></TD>
                                                    </Tr>
                                                )}

                                                {subjectData.enrolled &&
                                                    subjectData.enrolled.length > 0 &&
                                                    subjectData.enrolled.map((subject, index) => (
                                                        <Tr key={index}>
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
                                                            <TD className="center-border-table">{++index}</TD>
                                                            <TD>{subject.class_subject_code}</TD>
                                                            <TD>{subject.subject_name}</TD>
                                                            <TD>TH19DH-TH1; TH19DHB-TH1</TD>
                                                            <TD className="center-border-table">
                                                                {subject.subject_credits}
                                                            </TD>
                                                            <TD className="center-border-table">3.300.000</TD>
                                                            <TD className="center-border-table">29/08/2022</TD>
                                                            <TD className="center-border-table">
                                                                <i className="bx bxs-check-square check"></i>
                                                            </TD>
                                                            <TD className="center-border-table">Đăng ký mới</TD>
                                                            <TD className="center-border-table">30/07/2022</TD>
                                                            <TD
                                                                className={`center-border-table ${
                                                                    subject.class_subject_status === 0
                                                                        ? 'status-danger'
                                                                        : subject.class_subject_status === 1
                                                                        ? 'status-success'
                                                                        : 'status-error'
                                                                }`}
                                                            >
                                                                {subject.class_subject_status === 0
                                                                    ? 'Chưa mở'
                                                                    : subject.class_subject_status === 1
                                                                    ? 'Đã mở'
                                                                    : 'Đã khoá'}
                                                            </TD>
                                                        </Tr>
                                                    ))}
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
