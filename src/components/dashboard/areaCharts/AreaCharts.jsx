import AreaBarChart from "./AreaBarChart"
import LineChartPage from "./LineChart"
import TaskChart from "./TaskbarCart"
const AreaCharts = ({data}) => {
  const {TaceChart,LineChart,barChart}=data
  return (
    <section className="">
     {barChart?.length ? <AreaBarChart data={barChart} />:null}
     {LineChart?.length ? <LineChartPage data={LineChart} />:null}
      {TaceChart?.length ? <TaskChart data={TaceChart} />:null}
    </section>
  )
}

export default AreaCharts
