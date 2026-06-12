import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const GemstoneBarChart = ({ data }) => {
    const chartData =
        data.map(item => ({
            gemstone:
                item._id.english,
            count:
                item.count
        }));

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-8">
                Most Recommended Gemstones
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gemstone" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#2563eb"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GemstoneBarChart;