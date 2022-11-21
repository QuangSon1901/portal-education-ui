import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, THead, Tr } from '~/components/Table';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';

const Teacher = () => {
    const [teacherData, setTeacherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/teacher', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setTeacherData(res.teachers);
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
                        <b>Giáo viên</b>
                    </span>
                </div>
                <div className="admin-list-page__body__table">
                    <Card>
                        <CardHeader>
                            <div className="admin-list-page__body__table__header-event">
                                <h2>Danh sách giáo viên</h2>
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
                                            <TD className="center-border-table">Avatar</TD>
                                            <TD>Mã giáo viên</TD>
                                            <TD>Họ tên</TD>
                                            <TD>Khoa</TD>
                                            <TD>Email</TD>
                                            <TD>Email trường</TD>
                                            <TD className="center-border-table">Trạng Thái</TD>
                                            <TD className="center-border-table">Thao tác</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {teacherData.length > 0 &&
                                            teacherData.map((teacher) => (
                                                <Tr key={teacher.id}>
                                                    <TD className="center-border-table">
                                                        <input type="checkbox" />
                                                    </TD>
                                                    <TD className="center-border-table">Avatar</TD>
                                                    <TD>{teacher.code}</TD>
                                                    <TD>{teacher.name}</TD>
                                                    <TD>{teacher.faculty}</TD>
                                                    <TD>{teacher.email}</TD>
                                                    <TD>{teacher.email_school}</TD>
                                                    <TD className="center-border-table">
                                                        {teacher.status === 0 ? 'Đang dạy' : 'Tạm ngưng'}
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

export default Teacher;
