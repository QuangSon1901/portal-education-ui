import React from 'react';
import { Line } from 'react-chartjs-2';
import images from '~/assets/images';
import Card, { CardContent, CardHeader } from '~/components/Card';
import Image from '~/components/Image';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Dashboard = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const dataNumber = [
        { title: 'January', number: 100 },
        { title: 'February', number: 150 },
        { title: 'March', number: 110 },
        { title: 'April', number: 200 },
        { title: 'May', number: 140 },
        { title: 'June', number: 190 },
        { title: 'July', number: 130 },
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataNumber.map((item) => item.number),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className="dashboard-admin">
            <div className="container-admin dashboard-admin__body">
                <div className="dashboard-admin__body__breadcrumb">
                    <span>Dashboard</span>
                    <span className="space">/</span>
                    <span>
                        <b>Bảng thống kê</b>
                    </span>
                </div>
                <div className="dashboard-admin__body__statistical">
                    <Card className="solid" style={{ background: 'linear-gradient(to right, #834d9b, #d04ed6)' }}>
                        <CardHeader>
                            <h2>Sinh viên mới</h2>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="dashboard-admin__body__statistical__content">
                                <div>
                                    <Image src={images.graduated} />
                                    <h1>420</h1>
                                </div>
                                <span>18% Higher Then Last Year</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="solid" style={{ background: 'linear-gradient(to right, #00b4db, #0083b0)' }}>
                        <CardHeader>
                            <h2>Tổng sinh viên</h2>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="dashboard-admin__body__statistical__content">
                                <div>
                                    <Image src={images.students} />
                                    <h1>8601</h1>
                                </div>
                                <span>07% Less Then Last Year</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="solid" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)' }}>
                        <CardHeader>
                            <h2>Số lượng giáo viên</h2>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="dashboard-admin__body__statistical__content">
                                <div>
                                    <Image src={images.teacher} />
                                    <h1>275</h1>
                                </div>
                                <span>12% Higher Then Last Year</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="solid" style={{ background: 'linear-gradient(to right, #f7971e, #ffd200)' }}>
                        <CardHeader>
                            <h2>Thu phí</h2>
                        </CardHeader>
                        <CardContent className="grid-1">
                            <div className="dashboard-admin__body__statistical__content">
                                <div>
                                    <Image src={images.profit} />
                                    <h1>$48,697</h1>
                                </div>
                                <span>22% Less Then Last Year</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="dashboard-admin__body__chart">
                    <div className="dashboard-admin__body__chart__group">
                        <Card>
                            <CardHeader>
                                <h2>Báo cáo nhập học mới</h2>
                            </CardHeader>
                            <CardContent className="grid-1">
                                <div className="dashboard-admin__body__chart__group__content">
                                    <div className="dashboard-admin__body__chart__group__content__right">
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i className="bx bx-line-chart" style={{ color: '#198754' }}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i
                                                    className="bx bx-line-chart-down"
                                                    style={{ color: 'var(--color-error)' }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i className="bx bx-line-chart" style={{ color: '#198754' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboard-admin__body__chart__group__content__process">
                                        <div
                                            className="dashboard-admin__body__chart__group__content__process__active"
                                            style={{
                                                background: 'linear-gradient(to right, #56ab2f, #a8e063)',
                                                width: '70%',
                                            }}
                                        >
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h2>Báo cáo nhập học mới</h2>
                            </CardHeader>
                            <CardContent className="grid-1">
                                <div className="dashboard-admin__body__chart__group__content">
                                    <div className="dashboard-admin__body__chart__group__content__right">
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i className="bx bx-line-chart" style={{ color: '#198754' }}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i
                                                    className="bx bx-line-chart-down"
                                                    style={{ color: 'var(--color-error)' }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Hôm nay</span>
                                            <div>
                                                <span>105</span>
                                                <i className="bx bx-line-chart" style={{ color: '#198754' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboard-admin__body__chart__group__content__process">
                                        <div
                                            className="dashboard-admin__body__chart__group__content__process__active"
                                            style={{
                                                background: 'linear-gradient(316deg, #fc5286, #fbaaa2)',
                                                width: '50%',
                                            }}
                                        >
                                            <span>50%</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="dashboard-admin__body__chart__group">
                        <Card>
                            <CardHeader>
                                <h2>Biểu đồ giảng dạy</h2>
                            </CardHeader>
                            <CardContent className="grid-1">
                                <div className="dashboard-admin__body__chart__group__content">
                                    <div className="dashboard-admin__body__chart__group__content__left">
                                        <Line options={options} data={data} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
