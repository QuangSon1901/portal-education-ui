import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { changePassSelector } from '~/redux/selector';
import InputCustom from '../InputCustom';
import Modal, { ModalContent, ModalHeader } from '../Modal';
import changePassSlice from './changePassSlice';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';
import { toast } from 'react-toastify';

const ModalChangePass = () => {
    const dispatch = useDispatch();
    const { toggle } = useSelector(changePassSelector);

    const formik = useFormik({
        initialValues: {
            password: '',
            new_password: '',
            password_confirmation: '',
        },
        validationSchema: Yup.object().shape({
            password: Yup.string().required('Vui lòng nhập Mật khẩu cũ!'),
            new_password: Yup.string().required('Vui lòng nhập Mật khẩu mới!'),
            password_confirmation: Yup.string()
                .required('Vui lòng nhập lại Mật khẩu!')
                .oneOf([Yup.ref('new_password'), null], 'Mật khẩu chưa đúng!'),
        }),
        onSubmit(values) {
            const fetchChangePass = async () => {
                const loading = toast.loading('Đang xử lý...');

                if (!storage.get(process.env.REACT_APP_TOKEN))
                    return { status: 401, success: 'error', message: 'No token!' };
                const token = storage.get(process.env.REACT_APP_TOKEN);
                try {
                    const res = await httpRequest.post(
                        '/auth/change-pass',
                        {
                            password: values.password,
                            newPassword: values.new_password,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );
                    if (res.success === 'success') {
                        toast.update(loading, {
                            render: 'Thay đổi mật khẩu thành công!',
                            type: 'success',
                            isLoading: false,
                            autoClose: 5000,
                            closeButton: true,
                            closeOnClick: true,
                            draggable: true,
                        });
                        dispatch(changePassSlice.actions.toggle());
                    }
                } catch (error) {
                    toast.update(loading, {
                        render: 'Có lỗi xảy ra!',
                        type: 'error',
                        isLoading: false,
                        autoClose: 5000,
                        closeButton: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                }
            };
            fetchChangePass();
        },
    });

    useEffect(() => {
        formik.resetForm();
    }, [toggle]);

    return (
        <>
            <div
                className={`overlay ${toggle && 'active'}`}
                onClick={() => dispatch(changePassSlice.actions.toggle())}
            ></div>
            <div className={`change-pass`}>
                <Modal className={`${toggle && 'active'}`} style={{ width: '500px', maxWidth: '75%' }}>
                    <ModalHeader close={() => dispatch(changePassSlice.actions.toggle())}>
                        <h2>Đổi mật khẩu</h2>
                    </ModalHeader>
                    <ModalContent>
                        <div className="change-pass__content">
                            <form className="change-pass__content__form" onSubmit={formik.handleSubmit}>
                                <InputCustom
                                    validate={true}
                                    name="password"
                                    label="Mật khẩu cũ"
                                    placeholder="Nhập mật khẩu cũ"
                                    error={
                                        formik.errors.password && formik.touched.password ? formik.errors.password : ''
                                    }
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <InputCustom
                                    validate={true}
                                    name="new_password"
                                    label="Mật khẩu mới"
                                    placeholder="Nhập mật khẩu mới"
                                    error={
                                        formik.errors.new_password && formik.touched.new_password
                                            ? formik.errors.new_password
                                            : ''
                                    }
                                    value={formik.values.new_password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <InputCustom
                                    validate={true}
                                    name="password_confirmation"
                                    label="Xác nhận mật khẩu"
                                    placeholder="Xác nhận lại mật khẩu"
                                    error={
                                        formik.errors.password_confirmation && formik.touched.password_confirmation
                                            ? formik.errors.password_confirmation
                                            : ''
                                    }
                                    value={formik.values.password_confirmation}
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

export default ModalChangePass;
