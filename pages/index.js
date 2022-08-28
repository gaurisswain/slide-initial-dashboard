import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ActivityCard from "../components/ActivityCard";

export default function Home() {
  return (
    <div>
      <Header>
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
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
