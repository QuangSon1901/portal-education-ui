import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authSelector } from '~/redux/selector';

const PromiseLoading = () => {
    const authRedux = useSelector(authSelector);
    const notifyEle = useRef(null);

    useEffect(() => {
        if (authRedux.loading === true) notifyEle.current = toast.loading('Đang tải...');

        if (notifyEle !== null && authRedux.loading === false && authRedux.response) {
            switch (authRedux.response.status) {
                case 200:
                case 201:
                    toast.update(notifyEle.current, {
                        render: authRedux.response.message,
                        type: 'success',
                        isLoading: false,
                        autoClose: 5000,
                        closeButton: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                    break;
                default:
                    toast.update(notifyEle.current, {
                        render: authRedux.response.message,
                        type: 'error',
                        isLoading: false,
                        autoClose: 5000,
                        closeButton: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                    break;
            }
            notifyEle.current = null;
        }
    }, [authRedux.loading]);

    return null;
};

export default PromiseLoading;
