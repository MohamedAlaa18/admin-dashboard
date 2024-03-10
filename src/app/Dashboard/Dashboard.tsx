import Title from "components/Title"
import Cards from "./Cards"
import Section2 from "./Section2"
import Section3 from "./Section3"


function Dashboard() {

    return (
        <>
            <Title title={"Dashboard"} subtitle={"Welcome to your dashboard"} isDashboard={true} />
            <Cards />
            <Section2 />
            <Section3 />
        </>
    )
}

export default Dashboard