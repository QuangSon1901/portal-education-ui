import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import images from '~/assets/images';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';
import { loginUser } from './authSlice';

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            code: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            code: Yup.string().required('Vui lòng nhập mã sinh viên'),
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit(values) {
            dispatch(loginUser(values));
        },
    });
    return (
        <form className="login" onSubmit={formik.handleSubmit}>
            <Image src={images.logo} className="login__logo" />
            <h1 className="login__title">Đăng nhập hệ thống</h1>
            <div className="login__form">
                <InputCustom
                    validate={true}
                    name="code"
                    label="Mã sinh viên"
                    placeholder="Nhập mã sinh viên"
                    error={formik.errors.code && formik.touched.code ? formik.errors.code : ''}
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <InputCustom
                    validate={true}
                    name="password"
                    type="password"
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    error={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className="login__form__forgot">
                    <Link to="/" className="login__form__link">
                        Quên mật khẩu?
                    </Link>
                </div>
                <InputCustom typeComp="button" type="submit" value="Đăng nhập" className="primary" />
                <Link to="/" className="login__form__link">
                    Dành cho phụ huynh
                </Link>
            </div>
        </form>
    );
};

export default Login;
