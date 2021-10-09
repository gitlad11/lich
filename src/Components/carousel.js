import React, {useEffect , useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NoImage from '../Images/NoImage.jpg'


function MyCarousel(props){
	const items = props.items
	const styles = {
		container : {
			height : "400px",
			minWidth : "300px",
			backgroundColor : "#fff",
			borderRadius : "8px",
			boxShadow: "0 0 10px rgba(0,0,0,0.5)"
		},
		carousel : {
			maxWidth : "400px",
		},
		images : {
			height : "inherit",
			maxHeight : "280px",
			maxWidth : "340px"
		}
	}
	useEffect(() => {
		console.log(items)
	},[])	
	if(items == null ||  items.lenght <= 0 )
		{return (

		  <div style={styles.container} > 
		<Carousel infiniteLoop={true} autoPlay={true} style={styles.carousel} dynamicHeight={true}>
                <div >
                   <img style={styles.images} src={NoImage} />
                    <p className="legend">Нет описания</p>
                </div>
                <div>
                    <img style={styles.images} src={NoImage} />
                    <p className="legend">Нет описания</p>
                </div>
                <div>
                    <img style={styles.images} src={NoImage} />
                    <p className="legend">Нет описания</p>
                </div>
            </Carousel>
          </div> 
		)
	} else {
		return (
			<div style={styles.container} > 
		<Carousel infiniteLoop={true} autoPlay={true} style={styles.carousel} dynamicHeight={true}>
                <div >
                   <img style={styles.images} src={items[1].url} />
                    <p className="legend">{items[1].title}</p>
                </div>
                <div>
                    <img style={styles.images} src={items[2].url}  />
                    <p className="legend">{items[2].title}</p>
                </div>
                <div>
                    <img style={styles.images} src={items[3].url}  />
                    <p className="legend">{items[3].title}</p>
                </div>
                <div>
                    <img style={styles.images} src={items[4].url}  />
                    <p className="legend">{items[4].title}</p>
                </div>
                <div>
                    <img style={styles.images} src={items[5].url}  />
                    <p className="legend">{items[5].title}</p>
                </div>

            </Carousel>
          </div> 
			)
	}
}

export default MyCarousel;