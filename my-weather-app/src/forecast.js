import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import "./forecast.css"


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const day = new Date().getDay();
    const forecastWeek = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day));

    return (<>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{forecastWeek[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="temp"> {Math.round(item.main.temp)}Â°F </label>

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>

            ))}


        </Accordion>
    </>
    )
}

export default Forecast;