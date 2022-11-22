import React, { Fragment, useEffect, useRef, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Modal, { ModalContent, ModalHeader } from '~/components/Modal';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';

const CreateSchedule = () => {
    const [facultySelect, setFacultySelect] = useState(0);
    const [facultyData, setFacultyData] = useState([]);
    const [modalToggle, setModalToggle] = useState({});
    const [schedule, setSchedule] = useState([]);
    const [requestData, setRequestData] = useState({
        rooms: [],
        teachers: [],
        subjects: [],
        class_subjects: [],
        assignment: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/faculty', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setFacultyData(res.faculties);
            } catch (error) {}
        };
        fetchData();

        const fetch = async () => {
            try {
                const res = await httpRequest.post(
                    '/schedule',
                    {
                        rooms: [
                            {
                                id: 1,
                                code: 'LAB-01',
                                type_room: 1,
                                quantity: 30,
                            },
                            {
                                id: 2,
                                code: 'LAB-02',
                                type_room: 1,
                                quantity: 30,
                            },
                            {
                                id: 3,
                                code: 'LAB-03',
                                type_room: 1,
                                quantity: 30,
                            },
                            {
                                id: 7,
                                code: 'LT-01',
                                type_room: 2,
                                quantity: 30,
                            },
                            {
                                id: 8,
                                code: 'LT-02',
                                type_room: 2,
                                quantity: 30,
                            },
                            {
                                id: 9,
                                code: 'LT-03',
                                type_room: 2,
                                quantity: 30,
                            },
                            {
                                id: 28,
                                code: 'LT-101',
                                type_room: 2,
                                quantity: 90,
                            },
                            {
                                id: 29,
                                code: 'LT-102',
                                type_room: 2,
                                quantity: 90,
                            },
                            {
                                id: 30,
                                code: 'LT-103',
                                type_room: 2,
                                quantity: 90,
                            },
                        ],
                        teachers: [
                            {
                                id: 1,
                                busy: [
                                    { ca: 's', thu: 4 },
                                    { ca: 'c', thu: 4 },
                                ],
                            },
                            {
                                id: 2,
                                busy: null,
                            },
                            {
                                id: 3,
                                busy: [{ ca: 's', thu: 3 }],
                            },
                            {
                                id: 13,
                                busy: null,
                            },
                            {
                                id: 5,
                                busy: null,
                            },
                            {
                                id: 6,
                                busy: null,
                            },
                            {
                                id: 8,
                                busy: null,
                            },
                            {
                                id: 9,
                                busy: null,
                            },
                        ],
                        subjects: [
                            {
                                id: 1,
                                code: '31626',
                                credits: 2,
                                group: 1,
                            },
                            {
                                id: 2,
                                code: '78197',
                                credits: 2,
                                group: 1,
                            },
                            {
                                id: 3,
                                code: '52737',
                                credits: 3,
                                group: 1,
                            },
                            {
                                id: 4,
                                code: '68836',
                                credits: 4,
                                group: 1,
                            },
                            {
                                id: 13,
                                code: '87017',
                                credits: 2,
                                group: 3,
                            },
                            {
                                id: 14,
                                code: '21547',
                                credits: 2,
                                group: 3,
                            },
                            {
                                id: 15,
                                code: '63520',
                                credits: 4,
                                group: 3,
                            },
                            {
                                id: 16,
                                code: '60653',
                                credits: 3,
                                group: 3,
                            },
                            {
                                id: 17,
                                code: '64009',
                                credits: 3,
                                group: 3,
                            },
                            {
                                id: 18,
                                code: '59896',
                                credits: 4,
                                group: 3,
                            },
                            {
                                id: 25,
                                code: '42195',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 26,
                                code: '69826',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 27,
                                code: '69733',
                                credits: 2,
                                group: 5,
                            },
                            {
                                id: 28,
                                code: '62902',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 29,
                                code: '53863',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 30,
                                code: '36067',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 31,
                                code: '32644',
                                credits: 3,
                                group: 5,
                            },
                            {
                                id: 40,
                                code: '22706',
                                credits: 2,
                                group: 7,
                            },
                            {
                                id: 41,
                                code: '96352',
                                credits: 3,
                                group: 7,
                            },
                            {
                                id: 42,
                                code: '26496',
                                credits: 3,
                                group: 7,
                            },
                            {
                                id: 43,
                                code: '88553',
                                credits: 3,
                                group: 7,
                            },
                            {
                                id: 44,
                                code: '87943',
                                credits: 3,
                                group: 7,
                            },
                            {
                                id: 45,
                                code: '93005',
                                credits: 2,
                                group: 7,
                            },
                            {
                                id: 46,
                                code: '43960',
                                credits: 3,
                                group: 7,
                            },
                            {
                                id: 47,
                                code: '41166',
                                credits: 2,
                                group: 7,
                            },
                        ],
                        class_subjects: [
                            {
                                id: 1,
                                subject_id: 1,
                            },
                            {
                                id: 2,
                                subject_id: 2,
                            },
                            {
                                id: 3,
                                subject_id: 3,
                            },
                            {
                                id: 4,
                                subject_id: 4,
                            },
                            {
                                id: 13,
                                subject_id: 13,
                            },
                            {
                                id: 14,
                                subject_id: 14,
                            },
                            {
                                id: 15,
                                subject_id: 15,
                            },
                            {
                                id: 16,
                                subject_id: 16,
                            },
                            {
                                id: 17,
                                subject_id: 17,
                            },
                            {
                                id: 18,
                                subject_id: 18,
                            },
                            {
                                id: 26,
                                subject_id: 25,
                            },
                            {
                                id: 27,
                                subject_id: 26,
                            },
                            {
                                id: 28,
                                subject_id: 27,
                            },
                            {
                                id: 29,
                                subject_id: 28,
                            },
                            {
                                id: 30,
                                subject_id: 29,
                            },
                            {
                                id: 31,
                                subject_id: 30,
                            },
                            {
                                id: 32,
                                subject_id: 31,
                            },
                            {
                                id: 42,
                                subject_id: 40,
                            },
                            {
                                id: 43,
                                subject_id: 41,
                            },
                            {
                                id: 44,
                                subject_id: 42,
                            },
                            {
                                id: 45,
                                subject_id: 43,
                            },
                            {
                                id: 46,
                                subject_id: 44,
                            },
                            {
                                id: 47,
                                subject_id: 45,
                            },
                            {
                                id: 48,
                                subject_id: 46,
                            },
                            {
                                id: 49,
                                subject_id: 47,
                            },
                        ],
                        assignment: [
                            {
                                class_subject_id: 1,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 2,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 3,
                                teacher_id: 2,
                            },
                            {
                                class_subject_id: 4,
                                teacher_id: 3,
                            },
                            {
                                class_subject_id: 13,
                                teacher_id: 13,
                            },
                            {
                                class_subject_id: 14,
                                teacher_id: 8,
                            },
                            {
                                class_subject_id: 15,
                                teacher_id: 2,
                            },
                            {
                                class_subject_id: 16,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 17,
                                teacher_id: 9,
                            },
                            {
                                class_subject_id: 18,
                                teacher_id: 2,
                            },
                            {
                                class_subject_id: 26,
                                teacher_id: 6,
                            },
                            {
                                class_subject_id: 27,
                                teacher_id: 9,
                            },
                            {
                                class_subject_id: 28,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 29,
                                teacher_id: 2,
                            },
                            {
                                class_subject_id: 30,
                                teacher_id: 8,
                            },
                            {
                                class_subject_id: 31,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 32,
                                teacher_id: 9,
                            },
                            {
                                class_subject_id: 42,
                                teacher_id: 3,
                            },
                            {
                                class_subject_id: 43,
                                teacher_id: 1,
                            },
                            {
                                class_subject_id: 44,
                                teacher_id: 13,
                            },
                            {
                                class_subject_id: 45,
                                teacher_id: 5,
                            },
                            {
                                class_subject_id: 46,
                                teacher_id: 5,
                            },
                            {
                                class_subject_id: 47,
                                teacher_id: 6,
                            },
                            {
                                class_subject_id: 48,
                                teacher_id: 8,
                            },
                            {
                                class_subject_id: 49,
                                teacher_id: 1,
                            },
                        ],
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                setSchedule(res.data);
            } catch (error) {}
        };

        fetch();
    }, []);

    const handleCreateSchedule = () => {
        const fetchCreateSchedule = async () => {
            try {
                const res = await httpRequest.post(
                    '/schedule',
                    {
                        ...requestData,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                if (res.success === 'success') setSchedule(res.data);
            } catch (error) {}
        };
        fetchCreateSchedule();
    };

    const handleSubmitSchedule = () => {
        const list = [];
        for (let arr = 0; arr < schedule.length; arr++) {
            for (let row = 0; row < 2; row++) {
                for (let column = 0; column < 6; column++) {
                    if (schedule[arr][row][column] != null) {
                        list.push(schedule[arr][row][column]);
                    }
                }
            }
        }
        console.log(list);
    };

    return (
        <>
            <div className="admin-list-page">
                <div className="container-admin admin-list-page__body">
                    <div className="dashboard-admin__body__breadcrumb">
                        <span>Dashboard</span>
                        <span className="space">/</span>
                        <span>
                            <b>Lập thời khoá biểu</b>
                        </span>
                    </div>
                    <div className="admin-list-page__body__cate">
                        <ul>
                            <li className="active">
                                <i className="bx bx-shape-circle"></i>
                                <span>Tự động</span>
                            </li>
                            <li>
                                <i className="bx bx-border-radius"></i>
                                <span>Thủ công</span>
                            </li>
                        </ul>
                    </div>
                    <div className="create-schedule">
                        <div className="create-schedule__body">
                            <Card>
                                <CardHeader>
                                    <h2>Nhập dữ liệu</h2>
                                </CardHeader>
                                <CardContent className="grid-1">
                                    <div className="create-schedule__body__content">
                                        <div className="create-schedule__body__content__form">
                                            <div className="create-schedule__body__content__group">
                                                <div>
                                                    <span>Dữ liệu tham số đầu vào</span>
                                                    <select
                                                        name=""
                                                        id=""
                                                        className="home-main__body__more__select"
                                                        value={facultySelect}
                                                        onChange={(event) =>
                                                            setFacultySelect(Number(event.target.value))
                                                        }
                                                    >
                                                        <option value={0}>Tất cả khoa</option>
                                                        {facultyData.length > 0 &&
                                                            facultyData.map((faculty) => (
                                                                <option
                                                                    value={faculty.id}
                                                                    key={faculty.id}
                                                                >{`Khoa ${faculty.name}`}</option>
                                                            ))}
                                                    </select>
                                                </div>
                                                <ul className="create-schedule__body__content__group__input">
                                                    <li>
                                                        <span>Danh sách phòng học</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="button"
                                                                    value="Chọn phòng học"
                                                                    onClick={() =>
                                                                        setModalToggle({ room: !modalToggle.room })
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#F3BA2C' }}
                                                                >
                                                                    <i className="bx bxs-file-json"></i>
                                                                    <span>json</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#546A7A' }}
                                                                >
                                                                    <i className="bx bxs-file-txt"></i>
                                                                    <span>txt</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Danh sách giáo viên</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="button"
                                                                    value="Chọn giáo viên"
                                                                    className={
                                                                        requestData.rooms.length > 0 ? '' : 'disable'
                                                                    }
                                                                    onClick={() =>
                                                                        setModalToggle({
                                                                            teacher: !modalToggle.teacher,
                                                                        })
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#F3BA2C' }}
                                                                >
                                                                    <i className="bx bxs-file-json"></i>
                                                                    <span>json</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#546A7A' }}
                                                                >
                                                                    <i className="bx bxs-file-txt"></i>
                                                                    <span>txt</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Danh sách môn học/học phần</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="button"
                                                                    value="Chọn học phần"
                                                                    className={
                                                                        requestData.rooms.length > 0 &&
                                                                        requestData.teachers.length > 0
                                                                            ? ''
                                                                            : 'disable'
                                                                    }
                                                                    onClick={() =>
                                                                        setModalToggle({
                                                                            subject: !modalToggle.subject,
                                                                        })
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#F3BA2C' }}
                                                                >
                                                                    <i className="bx bxs-file-json"></i>
                                                                    <span>json</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#546A7A' }}
                                                                >
                                                                    <i className="bx bxs-file-txt"></i>
                                                                    <span>txt</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Danh sách phân công</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="button"
                                                                    value="Chọn danh sách phân công"
                                                                    className={
                                                                        requestData.rooms.length > 0 &&
                                                                        requestData.teachers.length > 0 &&
                                                                        requestData.subjects.length > 0 &&
                                                                        requestData.class_subjects.length > 0
                                                                            ? ''
                                                                            : 'disable'
                                                                    }
                                                                    onClick={() =>
                                                                        setModalToggle({ pc: !modalToggle.pc })
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#F3BA2C' }}
                                                                >
                                                                    <i className="bx bxs-file-json"></i>
                                                                    <span>json</span>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#546A7A' }}
                                                                >
                                                                    <i className="bx bxs-file-txt"></i>
                                                                    <span>txt</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="create-schedule__body__content__group">
                                                <div>
                                                    <span>Dữ liệu tham số chung</span>
                                                </div>
                                                <ul className="create-schedule__body__content__group__input">
                                                    <li>
                                                        <span>Số tiết buổi sáng</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="text2"
                                                                    placeholder="Nhập số tiết buổi sáng"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Số tiết buổi chiều</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="text2"
                                                                    placeholder="Nhập số tiết buổi chiều"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Số ngày trong tuần</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="text2"
                                                                    placeholder="Nhập số ngày trong tuần"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Số ngày liền kề của các ca cùng lớp học phần (lớp 4 chỉ trở
                                                            lên)
                                                        </span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="text2"
                                                                    placeholder="Nhập số ngày liền kề"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="create-schedule__body__content__submit">
                                            <div className="create-schedule__body__content__submit__btn">
                                                <InputCustom
                                                    typeComp="button"
                                                    className="primary"
                                                    value="Lập ngay"
                                                    onClick={handleCreateSchedule}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <h2>Kết quả lập thời khoá biểu</h2>
                                </CardHeader>
                                <CardContent className="grid-1">
                                    <div className="create-schedule__body__content">
                                        <div className="create-schedule__body__content__schedule">
                                            <div className="create-schedule__body__content__schedule__head">
                                                <div className="create-schedule__body__content__schedule__head__left">
                                                    <div>
                                                        <i className="bx bx-chevron-left"></i>
                                                        <span>Trở về</span>
                                                    </div>
                                                    <div>
                                                        <span>Tiếp</span>
                                                        <i className="bx bx-chevron-right"></i>
                                                    </div>
                                                </div>
                                                <div className="create-schedule__body__content__schedule__head__right">
                                                    <div onClick={handleSubmitSchedule}>
                                                        <span>Xác nhận</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="create-schedule__body__content__schedule__body">
                                                <div>
                                                    <span>Chọn phòng:&#160;&#160;</span>
                                                    <select name="" id="" className="home-main__body__more__select">
                                                        <option defaultValue="1" defaultChecked>
                                                            A01 - Phòng lab
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="create-schedule__body__content__schedule__body__table">
                                                    <Table>
                                                        <THead>
                                                            <Tr>
                                                                <TH>A01</TH>
                                                                <TH>
                                                                    Thứ 2 <br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Thứ 3<br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Thứ 4<br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Thứ 5<br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Thứ 6<br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Thứ 7<br />
                                                                    21/01/2022
                                                                </TH>
                                                                <TH>
                                                                    Chủ nhật
                                                                    <br />
                                                                    21/01/2022
                                                                </TH>
                                                            </Tr>
                                                        </THead>
                                                        <TBody>
                                                            {schedule.length > 0 &&
                                                                schedule[0].map((shift, index) => (
                                                                    <Tr key={index}>
                                                                        <TD className="center-border-table">
                                                                            {index === 0 ? 'Ca sáng' : 'Ca chiều'}
                                                                        </TD>
                                                                        {shift.length > 0 &&
                                                                            shift.map((lich, index2) => (
                                                                                <TD key={index2} className="test">
                                                                                    {lich ? (
                                                                                        <div className="schedule-week__body__content__body__table__tag">
                                                                                            <p>
                                                                                                <b>
                                                                                                    {lich.subject_name}
                                                                                                </b>
                                                                                            </p>
                                                                                            <p>
                                                                                                {
                                                                                                    lich.class_subject_code
                                                                                                }
                                                                                            </p>
                                                                                            <p>
                                                                                                Phòng:&#160;
                                                                                                {`${lich.room_code}: ${lich.type_room}`}
                                                                                            </p>
                                                                                            <p>
                                                                                                Ngày:&#160;
                                                                                                {lich.date}
                                                                                            </p>
                                                                                            <p>
                                                                                                Tín chỉ:&#160;
                                                                                                {lich.credits}
                                                                                            </p>
                                                                                            <p>
                                                                                                GV:&#160;
                                                                                                <span
                                                                                                    style={{
                                                                                                        color: 'var(--color-primary)',
                                                                                                        fontWeight:
                                                                                                            '600',
                                                                                                    }}
                                                                                                >
                                                                                                    {lich.teacher_name}
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    ) : (
                                                                                        ''
                                                                                    )}
                                                                                </TD>
                                                                            ))}
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
                </div>
            </div>
            <ModalRoom
                active={modalToggle['room']}
                close={() => setModalToggle({})}
                facultySelect={facultySelect}
                requestData={requestData}
                setRequestData={setRequestData}
            />
            <ModalTeacher
                active={modalToggle['teacher']}
                close={() => setModalToggle({})}
                facultySelect={facultySelect}
                requestData={requestData}
                setRequestData={setRequestData}
            />
            <ModalSubject
                active={modalToggle['subject']}
                close={() => setModalToggle({})}
                facultySelect={facultySelect}
                requestData={requestData}
                setRequestData={setRequestData}
            />
            <ModalPC
                active={modalToggle['pc']}
                close={() => setModalToggle({})}
                requestData={requestData}
                setRequestData={setRequestData}
            />
        </>
    );
};

const ModalRoom = ({ active, close, facultySelect, requestData, setRequestData }) => {
    const [rooms, setRooms] = useState([]);
    const roomRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get(`/faculty/${facultySelect}/rooms`, {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setRooms(res.rooms);
            } catch (error) {}
        };
        fetchData();
    }, [facultySelect]);

    const handleSubmitRoom = () => {
        const checkbox = roomRef.current.querySelectorAll('input[type="checkbox"]:checked');
        const list = [];
        checkbox.forEach((item) => {
            list.push(Number(item.dataset.id));
        });
        const result = rooms.filter((item) => list.includes(item.id));
        const result2 = [];
        result.forEach((item) => {
            result2.push({
                id: item.id,
                code: item.code,
                type_room: item.type_room,
                quantity: item.quantity,
            });
        });
        setRequestData({ ...requestData, rooms: result2 });
        close();
    };
    return (
        <>
            <div className={`overlay ${active && 'active'}`} />
            <div className="admin-list-page__modal">
                <Modal className={`${active && 'active'}`}>
                    <ModalHeader close={close}>
                        <h2>Chọn danh sách phòng học</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="admin-list-page__modal__content">
                            <div className="admin-list-page__modal__content__table" ref={roomRef}>
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>Mã phòng</TD>
                                            <TD>Loại phòng</TD>
                                            <TD>Thuộc khoa</TD>
                                            <TD>Số lượng ghế</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {rooms.length > 0 &&
                                            rooms.map((room) => (
                                                <Tr key={room.id}>
                                                    <TD>
                                                        <input type="checkbox" data-id={room.id} />
                                                    </TD>
                                                    <TD>{room.code}</TD>
                                                    <TD>{room.type_room_name}</TD>
                                                    <TD>{room.faculty}</TD>
                                                    <TD>{room.quantity}</TD>
                                                </Tr>
                                            ))}
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom
                                        typeComp="button"
                                        value="Chọn"
                                        className="primary"
                                        onClick={() => handleSubmitRoom()}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

const ModalTeacher = ({ active, close, facultySelect, requestData, setRequestData }) => {
    const [teachers, setTeachers] = useState([]);
    const teacherRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get(`/faculty/${facultySelect}/teachers`, {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setTeachers(res.teachers);
            } catch (error) {}
        };
        fetchData();
    }, [facultySelect]);

    const handleSubmitRoom = () => {
        const checkbox = teacherRef.current.querySelectorAll('input[type="checkbox"]:checked');
        const list = [];
        checkbox.forEach((item) => {
            list.push(Number(item.dataset.id));
        });
        const result = teachers.filter((item) => list.includes(item.id));
        const result2 = [];
        result.forEach((item) => {
            result2.push({
                id: item.id,
                name: item.name,
                busy: JSON.parse(item.busy),
            });
        });
        setRequestData({ ...requestData, teachers: result2 });
        close();
    };
    return (
        <>
            <div className={`overlay ${active && 'active'}`} />
            <div className="admin-list-page__modal">
                <Modal className={`${active && 'active'}`}>
                    <ModalHeader close={close}>
                        <h2>Chọn danh sách giáo viên</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="admin-list-page__modal__content">
                            <div className="admin-list-page__modal__content__table" ref={teacherRef}>
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>Họ tên</TD>
                                            <TD>Thuộc khoa</TD>
                                            <TD>Lịch bận</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {teachers.length > 0 &&
                                            teachers.map((teacher) => (
                                                <Tr key={teacher.id}>
                                                    <TD>
                                                        <input type="checkbox" data-id={teacher.id} />
                                                    </TD>
                                                    <TD>{teacher.name}</TD>
                                                    <TD>{teacher.faculty}</TD>
                                                    <TD>
                                                        {teacher.busy &&
                                                            JSON.parse(teacher.busy).map((busy, index) => (
                                                                <div key={index}>
                                                                    <span>
                                                                        Ca: <b>{busy.ca}</b>&#160;&#160;
                                                                    </span>
                                                                    <span>
                                                                        Thứ: <b>{busy.thu}</b>
                                                                    </span>
                                                                </div>
                                                            ))}
                                                    </TD>
                                                </Tr>
                                            ))}
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom
                                        typeComp="button"
                                        value="Chọn"
                                        className="primary"
                                        onClick={() => handleSubmitRoom()}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

const ModalSubject = ({ active, close, facultySelect, requestData, setRequestData }) => {
    const [subjects, setSubjects] = useState([]);
    const [collapse, setCollapse] = useState({});
    const subjectRef = useRef();
    useEffect(() => {
        if (!facultySelect || facultySelect === 0) return;
        const fetchData = async () => {
            try {
                const res = await httpRequest.get(`/faculty/${facultySelect}/umbrella-program`, {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setSubjects(res.umbrella_programs);
            } catch (error) {}
        };
        fetchData();
    }, [facultySelect]);

    const handleSubmitSubject = () => {
        const checkbox = subjectRef.current.querySelectorAll('input.subject[type="checkbox"]:checked');
        const list = [];
        checkbox.forEach((item) => {
            list.push(Number(item.dataset.id));
        });
        const result = subjects.filter((item) => list.includes(item.id));
        const result2 = [];
        result.forEach((item) => {
            result2.push({
                id: item.id,
                code: item.code,
                credits: item.credits,
                group: item.term,
            });
        });

        const checkboxClass = subjectRef.current.querySelectorAll('input.class-subject[type="checkbox"]:checked');
        const listClass = [];
        checkboxClass.forEach((item) => {
            listClass.push({
                id: Number(item.dataset.class),
                subject_id: Number(item.dataset.subject),
                code: Number(item.dataset.code),
                name: item.dataset.subname,
                credits: Number(item.dataset.credits),
            });
        });
        setRequestData({ ...requestData, class_subjects: listClass, subjects: result2 });
        close();
    };
    return (
        <>
            <div className={`overlay ${active && 'active'}`} />
            <div className="admin-list-page__modal">
                <Modal className={`${active && 'active'}`}>
                    <ModalHeader close={close}>
                        <h2>Chọn danh sách học phần</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="admin-list-page__modal__content">
                            <div className="admin-list-page__modal__content__table" ref={subjectRef}>
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TH>
                                                <input type="checkbox" />
                                            </TH>
                                            <TH>Mã học phần</TH>
                                            <TH>Tên học phần</TH>
                                            <TH>Tín chỉ</TH>
                                            <TH>Học kỳ theo CT khung</TH>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {subjects.length > 0 &&
                                            subjects.map((subject) => (
                                                <Fragment key={subject.id}>
                                                    <Tr
                                                        className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr"
                                                        onClick={() =>
                                                            setCollapse({ [subject.id]: !collapse[subject.id] })
                                                        }
                                                    >
                                                        <TD>
                                                            <input
                                                                type="checkbox"
                                                                className="subject"
                                                                data-id={subject.id}
                                                            />
                                                        </TD>
                                                        <TD>{subject.code}</TD>
                                                        <TD>{subject.subject}</TD>
                                                        <TD>{subject.credits}</TD>
                                                        <TD>{subject.term}</TD>
                                                    </Tr>
                                                    {subject.class_subject.length > 0 && (
                                                        <Tr
                                                            className={`umbrella-programs__body__content__collapse umbrella-programs__body__content__tr ${
                                                                !collapse[subject.id] && 'hidden'
                                                            }`}
                                                        >
                                                            <TD colSpan="3">Chọn lớp học phần</TD>
                                                            <TD>Số lượng sinh viên tối thiểu</TD>
                                                            <TD>Số lượng sinh viên tối đa</TD>
                                                        </Tr>
                                                    )}
                                                    {subject.class_subject.length > 0 &&
                                                        subject.class_subject.map((classSubject) => (
                                                            <Tr
                                                                key={classSubject.id}
                                                                className={`${!collapse[subject.id] && 'hidden'}`}
                                                            >
                                                                <TD>
                                                                    <input
                                                                        type="checkbox"
                                                                        className="class-subject"
                                                                        data-subject={subject.id}
                                                                        data-class={classSubject.id}
                                                                        data-code={classSubject.code}
                                                                        data-credits={subject.credits}
                                                                        data-subname={subject.subject}
                                                                    />
                                                                </TD>
                                                                <TD colSpan="2">{classSubject.code}</TD>
                                                                <TD>{classSubject.min_student}</TD>
                                                                <TD>{classSubject.max_student}</TD>
                                                            </Tr>
                                                        ))}
                                                </Fragment>
                                            ))}
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom
                                        typeComp="button"
                                        value="Chọn"
                                        className="primary"
                                        onClick={handleSubmitSubject}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

const ModalPC = ({ active, close, requestData, setRequestData }) => {
    const pcRef = useRef();
    const handleSubmit = () => {
        const checked = pcRef.current.querySelectorAll('.selected');
        const list = [];
        checked.forEach((item) => {
            list.push({
                class_subject_id: Number(item.dataset.id),
                teacher_id: Number(item.querySelector('select').value),
            });
        });
        setRequestData({ ...requestData, assignment: list });
        close();
    };
    return (
        <>
            <div className={`overlay ${active && 'active'}`} />
            <div className="admin-list-page__modal">
                <Modal className={`${active && 'active'}`}>
                    <ModalHeader close={close}>
                        <h2>Chọn giáo viên phân công cho lớp học phần</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="admin-list-page__modal__content">
                            <div className="admin-list-page__modal__content__table" ref={pcRef}>
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TD>Mã lớp học phần</TD>
                                            <TD>Tên học phần</TD>
                                            <TD>Tín chỉ</TD>
                                            <TD>Chọn giáo viên</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {requestData.class_subjects.length > 0 &&
                                            requestData.class_subjects.map((classSubject) => (
                                                <Tr
                                                    key={classSubject.id}
                                                    className={'selected'}
                                                    data-id={classSubject.id}
                                                >
                                                    <TD>{classSubject.code}</TD>
                                                    <TD>{classSubject.name}</TD>
                                                    <TD>{classSubject.credits}</TD>
                                                    <TD>
                                                        <select name="" id="" className="home-main__body__more__select">
                                                            <option value={0} defaultChecked>
                                                                Chọn giáo viên
                                                            </option>
                                                            {requestData.teachers.length > 0 &&
                                                                requestData.teachers.map((teacher) => (
                                                                    <option key={teacher.id} value={teacher.id}>
                                                                        {teacher.name}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    </TD>
                                                </Tr>
                                            ))}
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom
                                        typeComp="button"
                                        value="Chọn"
                                        className="primary"
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

export default CreateSchedule;
