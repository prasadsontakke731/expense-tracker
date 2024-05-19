import { Chart, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import Labels from "./Labels"

Chart.register(ArcElement)


const confige = {
    data: {
        datasets: [{

            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10
        }]

    },
    options: {
        cutout: 115
    }
}
const Graph = () => {
    return (
        <div className="flex justify-content max-w-xs ms-auto">
            <div className="item">
                <div className="chart relative">
                    <Doughnut {...confige} />
                    <h3 className="mb-4 font-bold title">Total <span className="block text-3xl text-emerald-500 ">$0</span></h3>
                </div>
                <div className="flex flex-col py-10 gap-4">
                    {/* labels */}
                    <Labels />

                </div>
            </div>
        </div>
    )
}

export default Graph