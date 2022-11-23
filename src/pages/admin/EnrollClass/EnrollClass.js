import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, THead, Tr } from '~/components/Table';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';
import { toast } from 'react-toastify';

const EnrollClass = () => {
    const [classSubjectUpMing, setClassSubjectUpMing] = useState([]);
    const upComingRef = useRef();
    const [menuSelect, setMenuSelect] = useState({ classSubject: true });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/class-subjects/up-coming', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setClassSubjectUpMing(res.classSubjects);
            } catch (error) {}
        };
        fetchData();
    }, []);

    const handleOpenClass = () => {
        const checkbox = upComingRef.current.querySelectorAll('input.selected[type="checkbox"]:checked');
        if (checkbox.length <= 0) return toast.error('Vui lòng chọn lớp học phần');

        const alert = toast.loading('Đang xử lý...');

        const list = [];
        checkbox.forEach((item) => {
            list.push(Number(item.dataset.id));
        });

        const fetchUpdateStatus = async () => {
            try {
                const res = await httpRequest.post(
                    '/class-subjects/open',
                    {
                        data: list,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                if (res.success === 'success') {
                    setClassSubjectUpMing(res.classSubjects);
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
                }
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
        fetchUpdateStatus();
    };

    const handleSelectAll = (event) => {
        const checkbox = upComingRef.current.querySelectorAll('input.selected[type="checkbox"]');
        checkbox.forEach((item) => {
            item.checked = event.target.checked;
        });
    };

    return (
        <div className="admin-list-page">
            <div className="container-admin admin-list-page__body">
                <div className="dashboard-admin__body__breadcrumb">
                    <span>Dashboard</span>
                    <span className="space">/</span>
                    <span>
                        <b>Mở học phần</b>
                    </span>
                </div>
                <div className="admin-list-page__body__cate">
                    <ul>
                        <li
                            className={`${menuSelect.classSubject && 'active'}`}
                            onClick={() => setMenuSelect({ classSubject: !menuSelect['classSubject'] })}
                        >
                            <i className="bx bx-shape-circle"></i>
                            <span>Lớp học phần</span>
                        </li>
                        <li
                            className={`${menuSelect.tryEnroll && 'active'}`}
                            onClick={() => setMenuSelect({ tryEnroll: !menuSelect['tryEnroll'] })}
                        >
                            <i className="bx bx-shape-circle"></i>
                            <span>Chờ duyệt</span>
                        </li>
                    </ul>
                </div>
                <div className="admin-list-page__body__table">
                    {menuSelect.classSubject && (
                        <Card>
                            <CardHeader>
                                <div className="admin-list-page__body__table__header-event">
                                    <h2>Danh sách lớp học phần đang chờ mở</h2>
                                    <button
                                        className="btn-table-icon"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                    >
                                        <i className="bx bx-refresh"></i>
                                    </button>
                                    <button
                                        className="btn-table-icon"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                        onClick={handleOpenClass}
                                    >
                                        <i className="bx bx-window-open"></i>
                                    </button>
                                </div>
                                <div className="admin-list-page__body__table__header-search">
                                    <InputCustom typeComp="text2" placeholder="Tìm kiếm" onChange={() => true} />
                                </div>
                            </CardHeader>
                            <CardContent className="grid-1">
                                <div className="admin-list-page__body__table__content" ref={upComingRef}>
                                    <Table>
                                        <THead>
                                            <Tr>
                                                <TD className="center-border-table">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(event) => handleSelectAll(event)}
                                                    />
                                                </TD>
                                                <TD className="center-border-table">Mã lớp học phần</TD>
                                                <TD>Tên học phần</TD>
                                                <TD>Loại học phần</TD>
                                                <TD>Số lượng sinh viên tối thiểu</TD>
                                                <TD>Số lượng sinh viên tối đa</TD>
                                                <TD className="center-border-table">Trạng Thái</TD>
                                                <TD className="center-border-table">Thao tác</TD>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            {classSubjectUpMing.length > 0 &&
                                                classSubjectUpMing.map((classSubject) => (
                                                    <Tr key={classSubject.id}>
                                                        <TD className="center-border-table">
                                                            <input
                                                                type="checkbox"
                                                                className="selected"
                                                                data-id={classSubject.id}
                                                            />
                                                        </TD>
                                                        <TD className="center-border-table">{classSubject.code}</TD>
                                                        <TD>{classSubject.name}</TD>
                                                        <TD>{classSubject.type_subject}</TD>
                                                        <TD>{classSubject.min_student}</TD>
                                                        <TD>{classSubject.max_student}</TD>
                                                        <TD
                                                            className={`center-border-table ${
                                                                classSubject.status === 0
                                                                    ? 'status-danger'
                                                                    : classSubject.status === 1
                                                                    ? 'status-success'
                                                                    : 'status-error'
                                                            }`}
                                                        >
                                                            {classSubject.status === 0
                                                                ? 'Chưa mở'
                                                                : classSubject.status === 1
                                                                ? 'Đã mở'
                                                                : 'Đã khoá'}
                                                        </TD>
                                                        <TD>
                                                            <div className="flex-action-table">
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                                                >
                                                                    <i className="bx bxs-user-detail"></i>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                                                >
                                                                    <i className="bx bx-edit-alt"></i>
                                                                </button>
                                                                <button
                                                                    className="btn-table-icon"
                                                                    style={{ backgroundColor: 'var(--color-error)' }}
                                                                >
                                                                    <i className="bx bx-trash"></i>
                                                                </button>
                                                            </div>
                                                        </TD>
                                                    </Tr>
                                                ))}
                                        </TBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {menuSelect.tryEnroll && <TryEnroll />}
                </div>
            </div>
        </div>
    );
};

const TryEnroll = forwardRef(({}, ref) => {
    const [tryEnrollData, setTryEnrollData] = useState([]);
    const tryEnrollRef = useRef();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/try-enroll-subject', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setTryEnrollData(res.data);
            } catch (error) {}
        };
        fetchData();
    }, []);

    const handleDuyet = () => {
        const checkbox = tryEnrollRef.current.querySelectorAll('input.selected[type="checkbox"]:checked');
        if (checkbox.length <= 0) return toast.error('Vui lòng chọn sinh viên');

        const alert = toast.loading('Đang xử lý...');

        const list = [];
        checkbox.forEach((item) => {
            list.push({
                student_id: Number(item.dataset.id),
                class_subject_id: Number(item.dataset.class),
            });
        });

        const fetchUpdateStatus = async () => {
            try {
                const res = await httpRequest.post(
                    '/try-enroll-subject/duyet',
                    {
                        data: list,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                        },
                    },
                );

                if (res.success === 'success') {
                    setTryEnrollData(res.data);
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
                }
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
        fetchUpdateStatus();
    };

    const handleSelectAll = (event) => {
        const checkbox = tryEnrollRef.current.querySelectorAll('input.selected[type="checkbox"]');
        checkbox.forEach((item) => {
            item.checked = event.target.checked;
        });
    };
    return (
        <Card>
            <CardHeader>
                <div className="admin-list-page__body__table__header-event">
                    <h2>Danh sách sinh viên đăng ký chờ duyệt</h2>
                    <button className="btn-table-icon" style={{ backgroundColor: 'var(--color-primary)' }}>
                        <i className="bx bx-refresh"></i>
                    </button>
                    <button
                        className="btn-table-icon"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        onClick={handleDuyet}
                    >
                        <i className="bx bx-window-open"></i>
                    </button>
                </div>
                <div className="admin-list-page__body__table__header-search">
                    <InputCustom typeComp="text2" placeholder="Tìm kiếm" onChange={() => true} />
                </div>
            </CardHeader>
            <CardContent className="grid-1">
                <div className="admin-list-page__body__table__content" ref={tryEnrollRef}>
                    <Table>
                        <THead>
                            <Tr>
                                <TD className="center-border-table">
                                    <input type="checkbox" onChange={(event) => handleSelectAll(event)} />
                                </TD>
                                <TD className="center-border-table">Mã sinh viên</TD>
                                <TD>Tên sinh viên</TD>
                                <TD>Mã lớp học phần</TD>
                                <TD className="center-border-table">Trạng Thái</TD>
                                <TD className="center-border-table">Thao tác</TD>
                            </Tr>
                        </THead>
                        <TBody>
                            {tryEnrollData.length > 0 &&
                                tryEnrollData.map((student, index) => (
                                    <Tr key={index}>
                                        <TD className="center-border-table">
                                            <input
                                                type="checkbox"
                                                className="selected"
                                                data-id={student.student_id}
                                                data-class={student.class_subject_id}
                                            />
                                        </TD>
                                        <TD className="center-border-table">{student.student_code}</TD>
                                        <TD>{student.student_namestudent}</TD>
                                        <TD>{student.class_subject_code}</TD>
                                        <TD
                                            className={`center-border-table ${
                                                student.status === 0 ? 'status-danger' : 'status-success'
                                            }`}
                                        >
                                            {student.status === 0 ? 'Chờ duyệt' : 'Đã duyệt'}
                                        </TD>
                                        <TD>
                                            <div className="flex-action-table">
                                                <button
                                                    className="btn-table-icon"
                                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                                >
                                                    <i className="bx bxs-user-detail"></i>
                                                </button>
                                                <button
                                                    className="btn-table-icon"
                                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                                >
                                                    <i className="bx bx-edit-alt"></i>
                                                </button>
                                                <button
                                                    className="btn-table-icon"
                                                    style={{ backgroundColor: 'var(--color-error)' }}
                                                >
                                                    <i className="bx bx-trash"></i>
                                                </button>
                                            </div>
                                        </TD>
                                    </Tr>
                                ))}
                        </TBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
});

export default EnrollClass;
