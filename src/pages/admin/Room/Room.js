import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Table, { TBody, TD, THead, Tr } from '~/components/Table';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';

const Room = () => {
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/rooms', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setRoomData(res.rooms);
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
                        <b>Phòng học</b>
                    </span>
                </div>
                <div className="admin-list-page__body__table">
                    <Card>
                        <CardHeader>
                            <div className="admin-list-page__body__table__header-event">
                                <h2>Danh sách phòng học</h2>
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
                                            <TD className="center-border-table">Mã phòng</TD>
                                            <TD>Tên phòng</TD>
                                            <TD>Loại phòng</TD>
                                            <TD>Số lượng chỗ ngồi</TD>
                                            <TD className="center-border-table">Trạng Thái</TD>
                                            <TD className="center-border-table">Thao tác</TD>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        {roomData.length > 0 &&
                                            roomData.map((room) => (
                                                <Tr key={room.id}>
                                                    <TD className="center-border-table">
                                                        <input type="checkbox" />
                                                    </TD>
                                                    <TD className="center-border-table">{room.name}</TD>
                                                    <TD>{`Phòng ${room.name}`}</TD>
                                                    <TD>{room.type_room}</TD>
                                                    <TD>{room.quantity}</TD>
                                                    <TD className="center-border-table">
                                                        {room.status === 0 ? 'Mở' : 'Đã khoá'}
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

export default Room;
