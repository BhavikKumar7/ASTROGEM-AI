import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const ConsultationLineChart = ({ data }) => {
    const chartData =
        data.map(item => ({
            month:
                monthNames[item._id.month],
            count:
                item.count
        }));

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-8">
                Consultation Trend
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ConsultationLineChart;