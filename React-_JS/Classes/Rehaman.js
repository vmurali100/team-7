import './Rehaman.css'
function Sample() {
    return (
       
        <div className="Sample">
             <h1 className='normal'>Rehaman Anna Component :-</h1>                  
            <h2 className="morning" style={{'text-align':'center','font-size':'30px','text-decoration':'underline green'}}>Telugu New Top Movies</h2>
            <div className='Child'>
                <h3 className="night">Pushpa</h3>
                <img className="pics" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg" alt=""></img>
                <br />
                <a className='anchior' href="https://en.wikipedia.org/wiki/Pushpa:_The_Rise">Read more...</a>
            </div>
            <div className='Child'>
                <h3 className="night">Bheemla Nayak</h3>
                <img className="pics" src="https://assets.thehansindia.com/h-upload/2021/12/21/1136801-eeml.webp " alt="" ></img>
                <br />
                <a  className='anchior' href="https://en.wikipedia.org/wiki/Bheemla_Nayak">Read more...</a>
            </div>
            <div className='Child'>
                <h3 className="night">RRR</h3>
                <img className="pics" src="https://www.pinkvilla.com/imageresize/rrr-review.jpg?width=752&format=webp&t=pvorg" alt=""></img>
                <br />
                <a className='anchior' href="https://en.wikipedia.org/wiki/RRR_(film)">Read more...</a>
            </div>
            <div className='Child'>
                <h3 className="night">Radhe Shyam</h3>
                <img className="pics" src="https://m.media-amazon.com/images/M/MV5BMzNhOTdlNmUtYzNiYi00MmUxLTg3ZjgtZjk4Y2Y5YTk3ODdiXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg" alt="" ></img>
                <br />
                <a className='anchior' href="https://en.wikipedia.org/wiki/Radhe_Shyam">Read more...</a>
            </div>

        </div>
    );
}
export default Sample