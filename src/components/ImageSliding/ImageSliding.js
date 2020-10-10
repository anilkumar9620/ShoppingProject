import React, { Component } from 'react';
import classes from './ImageSliding.css';
let interval;
class ImageSliding extends Component {
    state = {
        x: 0,
        slider: [{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzZ8kMhn6vrIx9_x3RO70h4ur5avo2peqQAw&usqp=CAU' },
        { src: 'https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg' },
        { src: 'https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg' },
        { src: 'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg' }
        ]
    }
    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                x: this.state.x - 100
            })
            if (this.state.x === -(this.state.slider.length) * 100) {
                this.setState({
                    x: 0
                })
            }
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval(interval);
    }
    goLeft = () => {
        console.log(this.state.x);
        if (this.state.x === 0) {
            this.setState({
                x: -(this.state.slider.length - 1) * 100
            })
        } else {
            this.setState({
                x: this.state.x + 100
            })
        }

    }
    goRight = () => {
        console.log(this.state.x);
        if (this.state.x === -100 * (this.state.slider.length - 1)) {
            this.setState({
                x: 0
            })
        } else {
            this.setState({
                x: this.state.x - 100
            })
        }
    }
    render() {

        return (
            <div className={classes.slider}>
                {this.state.slider.map((item, index) => {
                    return (
                        <div className={classes.slide} key={index} style={{ transform: `translateX(${this.state.x}%)` }}>
                            <img src={item.src}
                                alt='image'
                                className={classes.img_width} />
                        </div>
                    )
                })}
                {/* <button className={classes.goleft} onClick={this.goLeft}>go left</button>
                <button className={classes.goright} onClick={this.goRight}>go right</button>
                <div className={classes.fixing}>
                    <h2 className={classes.fixing_opacity}>We work for all types of bags</h2>
                </div> */}

            </div>
        )
    }

}

export default ImageSliding;