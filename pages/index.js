
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Common from "../components/Common";
import Backlog from "../components/Backlog";
import Anomalous from "../components/Anomalous";

export default function Home() {
  return (
    <div className='min-w-[1000px] h-[200vh]'>
        <div className=''>
            <Header/>
            <NavBar/>
        </div>
        <div className='mx-[10rem] space-y-6 pt-4'>
            <Common/>
            <Backlog/>
            <Anomalous/>
        </div>
    </div>
  )
}
