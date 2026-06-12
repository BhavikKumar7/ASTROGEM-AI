import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const ProblemBarChart = ({ data }) => {
    const chartData =
        data.map(item => ({
            problem:
                item._id,
            count:
                item.count
        }));

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-8">
                Top Problems
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="problem" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#3b82f6"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProblemBarChart;