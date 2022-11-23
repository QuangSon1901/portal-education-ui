import React, { useEffect, useState } from 'react';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Table, { TBody, TD, TH, THead, Tr } from '~/components/Table';
import { getDayInWeek, getNextWeek, getPrevWeek } from '~/utils/dateEvent';
import moment from 'moment';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';
const ScheduleWeek = () => {
    const [dataCalendar, setDataCalendar] = useState({});
    const [dayNow, setDayNow] = useState(new Date());

    useEffect(() => {
        const fetchSchedule = async () => {
            const token = storage.get(process.env.REACT_APP_TOKEN);
            if (!token) return;
            try {
                const res = await httpRequest.post(
                    '/schedule-student',
                    {
                        date_start: moment(getDayInWeek(dayNow, 1)).format('YYYY/MM/DD'),
                        date_end: moment(getDayInWeek(dayNow, 7)).format('YYYY/MM/DD'),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (res.success === 'success') {
                    setDataCalendar(res.data);
                }
            } catch (error) {}
        };

        fetchSchedule();
    }, [dayNow]);

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
                                    <div onClick={() => setDayNow(getPrevWeek(dayNow))}>
                                        <i className="bx bx-chevron-left"></i>
                                        <span>Trở về</span>
                                    </div>
                                    <div onClick={() => setDayNow(getNextWeek(dayNow))}>
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
                                                    Thứ 2 <br /> {moment(getDayInWeek(dayNow, 1)).format('DD-MM-YYYY')}
                                                </TH>
                                                <TH>
                                                    Thứ 3 <br /> {moment(getDayInWeek(dayNow, 2)).format('DD-MM-YYYY')}
                                                </TH>
                                                <TH>
                                                    Thứ 4 <br /> {moment(getDayInWeek(dayNow, 3)).format('DD-MM-YYYY')}
                                                </TH>
                                                <TH>
                                                    Thứ 5 <br /> {moment(getDayInWeek(dayNow, 4)).format('DD-MM-YYYY')}
                                                </TH>
                                                <TH>
                                                    Thứ 6 <br /> {moment(getDayInWeek(dayNow, 5)).format('DD-MM-YYYY')}
                                                </TH>
                                                <TH>
                                                    Thứ 7 <br /> {moment(getDayInWeek(dayNow, 6)).format('DD-MM-YYYY')}
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
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 2 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 3 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 4 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 5 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 6 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 7 && item.lesson_end <= 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                            </Tr>
                                            <Tr>
                                                <TD
                                                    className="center-border-table"
                                                    style={{ backgroundColor: 'var(--bg-yellow)', fontWeight: '600' }}
                                                >
                                                    Chiều
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 2 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 3 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 4 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 5 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 6 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
                                                <TD>
                                                    {dataCalendar.length > 0 &&
                                                        dataCalendar
                                                            .filter(
                                                                (item) =>
                                                                    item.day_of_week === 7 &&
                                                                    item.lesson_end <= 12 &&
                                                                    item.lesson_start > 6,
                                                            )
                                                            .map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="schedule-week__body__content__body__table__tag"
                                                                >
                                                                    <p>
                                                                        <b>{item.subject_name}</b>
                                                                    </p>
                                                                    <p>{item.subject_code}</p>
                                                                    <p>
                                                                        Tiết:&#160;
                                                                        {`${item.lesson_start} - ${item.lesson_end}`}
                                                                    </p>
                                                                    <p>
                                                                        Phòng:&#160;
                                                                        {`${item.room_code} - ${item.type_room}`}
                                                                    </p>
                                                                    <p>
                                                                        GV:&#160;
                                                                        <span
                                                                            style={{
                                                                                color: 'var(--color-primary)',
                                                                                fontWeight: '600',
                                                                            }}
                                                                        >
                                                                            {item.teacher_name}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                </TD>
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
