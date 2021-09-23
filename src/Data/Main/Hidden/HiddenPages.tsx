import Test from "Sections/Main/Pages/Hidden/Test"
// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// import { ExampleContentRender } from "Tools/ExampleTools"

// Pages are hidden from navbar
const HiddenPagesData = [
    {
        title: "Hidden Page 1",
        content: <h1>Hidden Page 1</h1>
    },
    {
        title: "Test",
        content: <Test />
    },
]

// Renders content for each object (for example use only)
// ExampleContentRender(HiddenPagesData)
// Returns the data as links before export

LinkRenderer(HiddenPagesData)

export default HiddenPagesData