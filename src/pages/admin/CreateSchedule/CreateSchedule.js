import React, { Fragment, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Modal, { ModalContent, ModalHeader } from '~/components/Modal';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';
import * as XLSX from 'xlsx';
import { handleScoll } from '~/utils/scrollBody';
import moment from 'moment/moment';

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
    const [scheduleRoomSelect, setScheduleRoomSelect] = useState(null);
    const [dateInput, setDateInput] = useState(new Date());
    const [dateOfWeek, setDateOfWeek] = useState(6);
    const [consecutiveInput, setConsecutiveInput] = useState(0);

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

    const handleCreateSchedule = () => {
        const fetchCreateSchedule = async () => {
            const alert = toast.loading('Đang lập thời khoá biểu...');
            try {
                const res = await httpRequest.post(
                    '/schedule',
                    {
                        ...requestData,
                        date: moment(dateInput).format('YYYY/MM/DD'),
                        day_of_week: dateOfWeek,
                        day_consecutive: consecutiveInput,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                setSchedule(res.data);
                setScheduleRoomSelect(0);
                toast.update(alert, {
                    render: 'Thành công',
                    type: 'success',
                    isLoading: false,
                    autoClose: 5000,
                    closeButton: true,
                    closeOnClick: true,
                    draggable: true,
                });
            } catch (error) {
                toast.update(alert, {
                    render: 'Thất bại',
                    type: 'error',
                    isLoading: false,
                    autoClose: 5000,
                    closeButton: true,
                    closeOnClick: true,
                    draggable: true,
                });
            }
        };
        fetchCreateSchedule();
    };

    const handleSubmitSchedule = () => {
        const alert = toast.loading('Đang xử lý...');
        const list = [];
        for (let arr = 0; arr < schedule.length; arr++) {
            for (let row = 0; row < 2; row++) {
                for (let column = 0; column < 6; column++) {
                    if (schedule[arr].data[row][column] != null) {
                        list.push(schedule[arr].data[row][column]);
                    }
                }
            }
        }

        const fetchSaveSchedule = async () => {
            try {
                const res = await httpRequest.post(
                    '/schedule-save',
                    {
                        data: list,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                if (res.success === 'success')
                    toast.update(alert, {
                        render: 'Thành công',
                        type: 'success',
                        isLoading: false,
                        autoClose: 5000,
                        closeButton: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                setSchedule([]);
            } catch (error) {
                toast.update(alert, {
                    render: 'Thất bại',
                    type: 'error',
                    isLoading: false,
                    autoClose: 5000,
                    closeButton: true,
                    closeOnClick: true,
                    draggable: true,
                });
                setSchedule([]);
            }
        };
        fetchSaveSchedule();
    };

    const handleExcel = (event, type) => {
        let selectedFile = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, {
                type: 'binary',
            });

            workbook.SheetNames.forEach((sheet) => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                switch (type) {
                    case 'rooms':
                        setRequestData({ ...requestData, rooms: rowObject });
                        break;
                    case 'teachers':
                        let newArr = [];
                        rowObject.forEach((item) =>
                            newArr.push({
                                id: item.id,
                                name: item.name,
                                busy: item.busy === 'null' ? null : JSON.parse(item.busy),
                            }),
                        );
                        setRequestData({ ...requestData, teachers: newArr });
                        break;
                    case 'subjects':
                        setRequestData({ ...requestData, subjects: rowObject });
                        break;
                    case 'class_subjects':
                        setRequestData({ ...requestData, class_subjects: rowObject });
                        break;
                    case 'assignment':
                        setRequestData({ ...requestData, assignment: rowObject });
                        break;
                    default:
                }
            });
        };
        fileReader.readAsBinaryString(selectedFile);
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
                                                        <span>
                                                            Danh sách phòng học{' '}
                                                            {requestData.rooms.length > 0 && (
                                                                <b style={{ color: 'var(--color-primary)' }}>Đã nhập</b>
                                                            )}
                                                        </span>
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
                                                                <div
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                    <input
                                                                        type="file"
                                                                        className="excel"
                                                                        onChange={(event) =>
                                                                            handleExcel(event, 'rooms')
                                                                        }
                                                                    />
                                                                </div>
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
                                                        <span>
                                                            Danh sách giáo viên{` `}
                                                            {requestData.teachers.length > 0 && (
                                                                <b style={{ color: 'var(--color-primary)' }}>Đã nhập</b>
                                                            )}
                                                        </span>
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
                                                                    <input
                                                                        type="file"
                                                                        className="excel"
                                                                        onChange={(event) =>
                                                                            handleExcel(event, 'teachers')
                                                                        }
                                                                    />
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
                                                        <span>
                                                            Danh sách môn học/học phần{' '}
                                                            {requestData.subjects.length > 0 && (
                                                                <b style={{ color: 'var(--color-primary)' }}>Đã nhập</b>
                                                            )}
                                                        </span>
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
                                                                    <input
                                                                        type="file"
                                                                        className="excel"
                                                                        onChange={(event) =>
                                                                            handleExcel(event, 'subjects')
                                                                        }
                                                                    />
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: '#016F36' }}
                                                                >
                                                                    <i className="bx bxs-file"></i>
                                                                    <span>excel</span>
                                                                    <input
                                                                        type="file"
                                                                        className="excel"
                                                                        onChange={(event) =>
                                                                            handleExcel(event, 'class_subjects')
                                                                        }
                                                                    />
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
                                                        <span>
                                                            Danh sách phân công{' '}
                                                            {requestData.assignment.length > 0 && (
                                                                <b style={{ color: 'var(--color-primary)' }}>Đã nhập</b>
                                                            )}
                                                        </span>
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
                                                                    <input
                                                                        type="file"
                                                                        className="excel"
                                                                        onChange={(event) =>
                                                                            handleExcel(event, 'assignment')
                                                                        }
                                                                    />
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
                                                        <span>Số ngày trong tuần</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    typeComp="text2"
                                                                    placeholder="Nhập số ngày trong tuần"
                                                                    value={dateOfWeek}
                                                                    onChange={(event) =>
                                                                        setDateOfWeek(event.target.value)
                                                                    }
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
                                                                    value={consecutiveInput}
                                                                    onChange={(event) =>
                                                                        setConsecutiveInput(event.target.value)
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>Ngày bắt đầu học</span>
                                                        <div>
                                                            <div>
                                                                <InputCustom
                                                                    value={dateInput}
                                                                    onChange={(value) => setDateInput(value)}
                                                                    typeComp="date"
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
                            {schedule.length > 0 && (
                                <Card className="result-schedule">
                                    <CardHeader>
                                        <h2>Kết quả lập thời khoá biểu</h2>
                                    </CardHeader>
                                    <CardContent className="grid-1">
                                        <div className="create-schedule__body__content">
                                            <div className="create-schedule__body__content__schedule">
                                                <div className="create-schedule__body__content__schedule__head">
                                                    <div className="create-schedule__body__content__schedule__head__left">
                                                        <div style={{ backgroundColor: '#fff' }}>
                                                            <span style={{ color: 'var(--txt-color)' }}>
                                                                Chọn phòng:&#160;&#160;
                                                            </span>
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="home-main__body__more__select"
                                                                onChange={(event) =>
                                                                    setScheduleRoomSelect(event.target.value)
                                                                }
                                                            >
                                                                {schedule.length > 0 &&
                                                                    schedule.map((item, index) => (
                                                                        <option
                                                                            key={index}
                                                                            value={index}
                                                                        >{`Phòng ${item.code}`}</option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="create-schedule__body__content__schedule__head__right">
                                                        <div onClick={handleSubmitSchedule}>
                                                            <span>Lưu xuống CSDL</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="create-schedule__body__content__schedule__body">
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
                                                                </Tr>
                                                            </THead>
                                                            <TBody>
                                                                {schedule.length > 0 &&
                                                                    schedule[scheduleRoomSelect].data.map(
                                                                        (shift, index) => (
                                                                            <Tr key={index}>
                                                                                <TD className="center-border-table">
                                                                                    {index === 0
                                                                                        ? 'Ca sáng'
                                                                                        : 'Ca chiều'}
                                                                                </TD>
                                                                                {shift.length > 0 &&
                                                                                    shift.map((lich, index2) => (
                                                                                        <TD
                                                                                            key={index2}
                                                                                            className="test"
                                                                                        >
                                                                                            {lich ? (
                                                                                                <div className="schedule-week__body__content__body__table__tag">
                                                                                                    <p>
                                                                                                        <b>
                                                                                                            {
                                                                                                                lich.subject_name
                                                                                                            }
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
                                                                                                            {
                                                                                                                lich.teacher_name
                                                                                                            }
                                                                                                        </span>
                                                                                                    </p>
                                                                                                </div>
                                                                                            ) : (
                                                                                                ''
                                                                                            )}
                                                                                        </TD>
                                                                                    ))}
                                                                            </Tr>
                                                                        ),
                                                                    )}
                                                            </TBody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
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

    const handleClassSubjectChecked = (event) => {
        const subject_id = event.target.dataset.subject;
        const checkbox = subjectRef.current.querySelector(`input.subject[data-id="${subject_id}"]`);
        const checkboxClass = subjectRef.current.querySelectorAll(`input.class-subject[data-subject="${subject_id}"]`);
        let index = 0;
        checkboxClass.forEach((item) => {
            if (item.checked) {
                index = 1;
            }
        });

        index === 1 ? (checkbox.checked = true) : (checkbox.checked = false);
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
                                                        onClick={() => setCollapse({ [subject.id]: true })}
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
                                                                        onChange={(event) =>
                                                                            handleClassSubjectChecked(event)
                                                                        }
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
