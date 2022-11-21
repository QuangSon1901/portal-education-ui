import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Modal, { ModalContent, ModalHeader } from '~/components/Modal';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';

const CreateSchedule = () => {
    const [facultyData, setFacultyData] = useState([]);
    const [modalToggle, setModalToggle] = useState({});

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
    }, []);

    console.log(modalToggle);
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
                                                    <select name="" id="" className="home-main__body__more__select">
                                                        <option defaultValue="0" defaultChecked>
                                                            Tất cả khoa
                                                        </option>
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
                                                <InputCustom typeComp="button" className="primary" value="Lập ngay" />
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
                                                    <div>
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
                                                                    Thứ 2<br />
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
                                                            <Tr>
                                                                <TD className="center-border-table">Ca sáng</TD>
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
                                                                <TD></TD>
                                                                <TD></TD>
                                                                <TD></TD>
                                                                <TD></TD>
                                                            </Tr>
                                                            <Tr>
                                                                <TD className="center-border-table">Ca tối</TD>
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
                                                                <TD></TD>
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
                </div>
            </div>
            <ModalRoom active={modalToggle['room']} close={() => setModalToggle({})} />
            <ModalTeacher active={modalToggle['teacher']} close={() => setModalToggle({})} />
            <ModalSubject active={modalToggle['subject']} close={() => setModalToggle({})} />
        </>
    );
};

const ModalRoom = ({ active, close }) => {
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
                            <div className="admin-list-page__modal__content__table">
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
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>1232</TD>
                                            <TD>1232</TD>
                                            <TD>1232</TD>
                                            <TD>1232</TD>
                                        </Tr>
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom typeComp="button" value="Chọn" className="primary" />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

const ModalTeacher = ({ active, close }) => {
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
                            <div className="admin-list-page__modal__content__table">
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>Họ tên</TD>
                                            <TD>Lịch bận</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhfh</TD>
                                            <TD>
                                                <div>
                                                    <span>
                                                        Ca: <b>Sáng</b>&#160;&#160;
                                                    </span>
                                                    <span>
                                                        Thứ: <b>4</b>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        Ca: <b>Sáng</b>&#160;&#160;
                                                    </span>
                                                    <span>
                                                        Thứ: <b>4</b>
                                                    </span>
                                                </div>
                                            </TD>
                                        </Tr>
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom typeComp="button" value="Chọn" className="primary" />
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

const ModalSubject = ({ active, close }) => {
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
                            <div className="admin-list-page__modal__content__table">
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TH>
                                                <input type="checkbox" />
                                            </TH>
                                            <TH>Mã học phần</TH>
                                            <TH>Tín chỉ</TH>
                                            <TH>Học kỳ theo CT khung</TH>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>3</TD>
                                            <TD>1</TD>
                                        </Tr>
                                        <Tr
                                            className={`umbrella-programs__body__content__collapse umbrella-programs__body__content__tr`}
                                        >
                                            <TD colSpan="2">Chọn lớp học phần</TD>
                                            <TD>Số lượng sinh viên tối thiểu</TD>
                                            <TD>Số lượng sinh viên tối đa</TD>
                                        </Tr>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>10</TD>
                                            <TD>30</TD>
                                        </Tr>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>10</TD>
                                            <TD>30</TD>
                                        </Tr>
                                        <Tr className="umbrella-programs__body__content__toggle umbrella-programs__body__content__tr">
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>3</TD>
                                            <TD>1</TD>
                                        </Tr>
                                        <Tr
                                            className={`umbrella-programs__body__content__collapse umbrella-programs__body__content__tr`}
                                        >
                                            <TD colSpan="2">Chọn lớp học phần</TD>
                                            <TD>Số lượng sinh viên tối thiểu</TD>
                                            <TD>Số lượng sinh viên tối đa</TD>
                                        </Tr>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>10</TD>
                                            <TD>30</TD>
                                        </Tr>
                                        <Tr>
                                            <TD>
                                                <input type="checkbox" />
                                            </TD>
                                            <TD>jafhhsdasjdaddnffh</TD>
                                            <TD>10</TD>
                                            <TD>30</TD>
                                        </Tr>
                                    </TBody>
                                </Table>
                            </div>
                            <div className="admin-list-page__modal__content__submit">
                                <div className="admin-list-page__modal__content__submit__btn">
                                    <InputCustom typeComp="button" value="Chọn" className="primary" />
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
