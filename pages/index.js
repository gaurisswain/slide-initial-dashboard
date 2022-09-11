import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ActivityCard from "../components/ActivityCard";
export default function Home() {
  return (
    <div>
      <script type="text/javascript" src="../public/js/chart.js"></script>
      <Header>
      <div className="grid-container3">
  <div className="itemi">
    <img
      src="https://picsum.photos/55"
      style={{
        borderRadius: "27.5px",
        float: "left",
        marginLeft: 15,
        marginTop: 40
      }}
    />
    <p className="totalrev">Total Revenue</p>
    <p className="norev">$52.6k</p>
    <p className="growth">+ 3.5%</p>
  </div>
  <div className="itemj">
    <img
      src="https://picsum.photos/55"
      style={{
        borderRadius: "27.5px",
        float: "left",
        marginLeft: 15,
        marginTop: 40
      }}
    />
    <p className="totalrev">Today Revenue</p>
    <p className="norev">$1.2k</p>
    <p className="decline">- 5.5%</p>
  </div>
  <div className="itemk">
    <p className="report">Report</p>
  </div>
</div>

      <div className="container">
            <div className="row">
              <div className="col"></div>
            </div>
            <div className="row">
              <div className="col s-12 m-6">
                <div className="graph-songs" />
              </div>
            </div>
          </div>
        <div className="flex flex-col gap-y-4 ">
          <div className="flex flex-row gap-x-3 items-center">
            <i className="bi bi-instagram text-2xl text-pink-600"></i>
            <div className="text-2xl font-semibold">Instagram Posts</div>
          </div>
          <div className="overflow-y-auto h-screen">
            <div className="grid grid-cols-4 gap-3 gap-y-5">
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              {/* <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard> */}
              {/* <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard> */}
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
