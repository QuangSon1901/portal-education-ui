import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, THead, Tr } from '~/components/Table';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';

const ClassSubject = () => {
    const [classSubjectData, setClassSubjectData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/class-subjects', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setClassSubjectData(res.classSubjects);
            } catch (error) {}
        };
        fetchData();
    }, []);
    return (
        <div className="admin-list-page">
            <div className="container-admin admin-list-page__body">
                <div className="dashboard-admin__body__breadcrumb">
                    <span>Dashboard</span>
                    <span className="space">/</span>
                    <span>
                        <b>Lớp Học phần</b>
                    </span>
                </div>
                <div className="admin-list-page__body__table">
                    <Card>
                        <CardHeader>
                            <div className="admin-list-page__body__table__header-event">
                                <h2>Danh sách lớp học phần</h2>
                                <button className="btn-table-icon" style={{ backgroundColor: 'var(--color-primary)' }}>
                                    <i className="bx bx-plus"></i>
                                </button>
                                <button className="btn-table-icon" style={{ backgroundColor: 'var(--color-primary)' }}>
                                    <i className="bx bx-refresh"></i>
                                </button>
                            </div>
                            <div className="admin-list-page__body__table__header-search">
                                <InputCustom typeComp="text2" placeholder="Tìm kiếm" onChange={() => true} />
                            </div>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="admin-list-page__body__table__content">
                                <Table>
                                    <THead>
                                        <Tr>
                                            <TD className="center-border-table">
                                                <input type="checkbox" />
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
                                        {classSubjectData.length > 0 &&
                                            classSubjectData.map((classSubject) => (
                                                <Tr key={classSubject.id}>
                                                    <TD className="center-border-table">
                                                        <input type="checkbox" />
                                                    </TD>
                                                    <TD className="center-border-table">{classSubject.code}</TD>
                                                    <TD>{classSubject.name}</TD>
                                                    <TD>{classSubject.type_subject}</TD>
                                                    <TD>{classSubject.max_student}</TD>
                                                    <TD>{classSubject.min_student}</TD>
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
                </div>
            </div>
        </div>
    );
};

export default ClassSubject;
