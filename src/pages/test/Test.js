import React, { Fragment, useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';

const Test = () => {
    const [json, setJson] = useState([]);

    useEffect(() => {
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
                                id: 4,
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
                                teacher_id: 4,
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
                                teacher_id: 4,
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

                setJson(res.data);
            } catch (error) {}
        };

        fetch();
    }, []);

    let test = 1;
    return (
        <div className="container" style={{ marginTop: '4rem' }}>
            {json.length > 0 &&
                json.map((arr, index) => {
                    return (
                        <Fragment key={index}>
                            {arr.map((row, index) => (
                                <Fragment key={index}>
                                    {row.map((column, index) => (
                                        <span key={index}>
                                            {column ? '--' + test++ + '--' : 'null'} <span>---</span>
                                        </span>
                                    ))}
                                    <br />
                                </Fragment>
                            ))}
                            <br />
                        </Fragment>
                    );
                })}
        </div>
    );
};

export default Test;
