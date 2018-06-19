import React, { PureComponent } from 'react'

import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'components/Common'

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

class CarouselCustomTag extends PureComponent {
  state = { activeIndex: 0 }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={() => this.onExiting()}
          onExited={() => this.onExited()}
          timeout={0}>
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`}
        </style>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={() => this.next()}
          previous={() => this.previous()}
          timeout={0}>
          <CarouselIndicators
            items={items}
            activeIndex={this.state.activeIndex}
            onClickHandler={index => this.goToIndex(index)}
          />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => this.previous()} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => this.next()} />
        </Carousel>
      </div>
    )
  }
}

export default CarouselCustomTag
