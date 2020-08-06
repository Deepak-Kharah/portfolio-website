import React from "react";

import MentionTimelineTile from "../lists/MentionTimelineTile";

export default function Mentions() {
    return (
        <section id="mentions">
            <div className="container">
                <header>
                    <h1>Mentions</h1>
                </header>

                <MentionTimelineTile
                    title="Winner of Smart India Hackathon 2020"
                    desc="Smart India Hackathon is a National level Hackathon organised by Government of India. This event took place virtually from 1st August 2020 to 3rd August 2020. About 1081 finalist came across the Indian subcontinent to solve 243 problem statements issued by various Ministries and Companies. During this event, we created a school information system tailored to the need of the Government of Sikkim. Five teams were working on this problem statement but, our solid planning and implementation made us the winner."
                    date="2020 August"
                />
                <MentionTimelineTile
                    title="VCET Hackathon 2019 finalist"
                    desc="VCET Hackathon is an annual hackathon competition held at Vidyavardhini’s College of Engineering and Technology. This year the organisers decided the topics for the participants. This code sprint lasted for thirty hours, during which we developed an application named Classmate. After three jury rounds, we were amongst the top 10 teams to qualify for the final judging round. The last round was the pitching round, where we shared our inspiration, workflow and the future of the Classmate. In the event conclusion, our team was in the fourth position amongst all the 45+ teams."
                    date="2019 September"
                />
                <MentionTimelineTile
                    title="Winner of VNPS 2019"
                    desc="VNPS is the annual competition held by all the departmental committees in unison in Vidyavardhini's college of Engineering and Technology. We presented project Kh-e-ti in the event, which is a tractor renting service for the farmers and won the event."
                    date="2019 April"
                />
            </div>
        </section>
    );
}
