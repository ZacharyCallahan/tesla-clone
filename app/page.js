import Background from "./components/Background";
import CarHeader from "./components/CarHeader";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <CarHeader demoLink={'/'} detailsLink={'/'} orderLink={'/'} content={"Lease starting at $399/mo*"} header={"Model Y"} />
        <Background />
      </main>
    </>
  )
}
