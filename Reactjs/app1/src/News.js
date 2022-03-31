import './News.css'
function News(){
    return(
        <div className="all">
            <b style={{'font-size':'30px','font-style':'italic','margin-left':'350px',
            margin: '10px 378px 0px 372px','background-color':'wheat'}}>THE DAILY NEWS</b>
            <div className="main">
                <div className="left">
                    <p>False information is circulating, making it harder for people to understand and stay safe. Help by limiting the spread of harmful misinformation & disinformation about Ukraine. Fight On A Global Scale. Delivering A Better World. Strategic Preparedness. Prevention & Detection.</p>
                    <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/anoruhw9n76uuyqe_1646961426.jpeg"></img>
                    <p>There is misinformation being shared about the causes of the conflict and what is happening on the ground. There are images and videos being viewed by millions that are old or misleading, creating a confused picture of what is happening and how people are being affected.</p>
                </div>
                <div className="right">
                    <img src="https://www.aljazeera.com/wp-content/uploads/2022/03/AP22070609336904.jpg?resize=770%2C513"></img>
                    <p>The Center for Disaster Philanthropy’s (CDP) response to this crisis is focused on humanitarian needs that arise, particularly among internally-displaced peoples (IDPs) and refugees. We are not looking at the conflict itself except how it affects population movement and humanitarian needs. To that end, this profile is not providing detailed updates about the status of the war as we believe that is better done by news media.</p>
                </div>
            </div>
        </div>
    )
}
export default News