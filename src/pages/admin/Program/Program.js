import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card, { CardContent, CardHeader } from '~/components/Card';
import InputCustom from '~/components/InputCustom';
import Modal, { ModalContent, ModalHeader } from '~/components/Modal';
import Table, { TBody, TD, THead, Tr } from '~/components/Table';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';
const Program = () => {
    const [programData, setProgramData] = useState([]);
    const [modal, setModal] = useState({
        add: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await httpRequest.get('/program', {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') setProgramData(res.programs);
            } catch (error) {}
        };
        fetchData();
    }, []);

    const handleDelete = (id) => {
        const fetchData = async () => {
            const alert = toast.loading('Đang xử lý...');
            try {
                const res = await httpRequest.deleteRq('/program/' + id, {
                    headers: {
                        Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                    },
                });

                if (res.success === 'success') {
                    setProgramData(res.programs);
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

        Notiflix.Confirm.show(
            'Notiflix Confirm',
            'Do you agree with me?',
            'Yes',
            'No',
            () => {
                fetchData();
            },
            () => {},
            { zindex: 99999 },
        );
    };

    return (
        <>
            <div className="admin-list-page">
                <div className="container-admin admin-list-page__body">
                    <div className="dashboard-admin__body__breadcrumb">
                        <span>Dashboard</span>
                        <span className="space">/</span>
                        <span>
                            <b>Chương trình đào tạo</b>
                        </span>
                    </div>
                    <div className="admin-list-page__body__table">
                        <Card>
                            <CardHeader>
                                <div className="admin-list-page__body__table__header-event">
                                    <h2>Danh sách chương trình đào tạo</h2>
                                    <button
                                        className="btn-table-icon"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                        onClick={() => setModal({ ...modal, add: true })}
                                    >
                                        <i className="bx bx-plus"></i>
                                    </button>
                                    <button
                                        className="btn-table-icon"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                    >
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
                                                <TD>Tên chương trình đào tạo</TD>
                                                <TD>Tên viết tắt</TD>
                                                <TD className="center-border-table">Trạng Thái</TD>
                                                <TD className="center-border-table">Thao tác</TD>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            {programData.length > 0 &&
                                                programData.map((program) => (
                                                    <Tr key={program.id}>
                                                        <TD className="center-border-table">
                                                            <input type="checkbox" />
                                                        </TD>
                                                        <TD>{program.name}</TD>
                                                        <TD>{program.ac_name}</TD>
                                                        <TD className="center-border-table">
                                                            {program.status === 0 ? 'Đang hoạt động' : 'Tạm ngưng'}
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
                                                                    onClick={() => handleDelete(program.id)}
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
            <AddModal
                active={modal['add']}
                close={() => setModal({ ...modal, add: false })}
                setProgramData={setProgramData}
            />
        </>
    );
};

const AddModal = ({ active, close, setProgramData }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            ac_name: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Vui lòng nhập Tên chương trình!'),
            ac_name: Yup.string().required('Vui lòng nhập Tên viết tắt!'),
        }),
        onSubmit(values) {
            const fetchData = async () => {
                const alert = toast.loading('Đang xử lý...');
                try {
                    const res = await httpRequest.post(
                        '/program',
                        {
                            ...values,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${storage.get(process.env.REACT_APP_TOKEN)}`,
                            },
                        },
                    );

                    if (res.success === 'success') {
                        setProgramData(res.programs);
                        toast.update(alert, {
                            render: 'Thành công',
                            type: 'success',
                            isLoading: false,
                            autoClose: 5000,
                            closeButton: true,
                            closeOnClick: true,
                            draggable: true,
                        });
                        close();
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
                    close();
                }
            };
            fetchData();
        },
    });
    return (
        <>
            <div className={`overlay ${active && 'active'}`} />
            <div className="admin-list-page__modal">
                <Modal className={`${active && 'active'}`}>
                    <ModalHeader close={close}>
                        <h2>Thêm chương trình đào tạo</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="admin-list-page__modal__content">
                            <form className="change-pass__content__form" onSubmit={formik.handleSubmit}>
                                <InputCustom
                                    validate={true}
                                    name="name"
                                    label="Tên chương trình"
                                    placeholder="Nhập tên chương trình"
                                    error={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <InputCustom
                                    validate={true}
                                    name="ac_name"
                                    label="Tên viết tắt"
                                    placeholder="Nhập tên viết tắt"
                                    error={formik.errors.ac_name && formik.touched.ac_name ? formik.errors.ac_name : ''}
                                    value={formik.values.ac_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className="change-pass__content__form__submit">
                                    <InputCustom typeComp="button" type="submit" value="Lưu" className="primary" />
                                </div>
                            </form>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

export default Program;
