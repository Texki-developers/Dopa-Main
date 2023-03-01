'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styles from './Carousel.module.scss'

export const Carousel = ({ children, itemsPerWindow, gap = 16, dots, navigator, setNavigator }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const [gridWidth, setGridWidth] = useState(0)
    const lengthRef = useRef(0)
    const startXRef = useRef(0);
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(navigator,'this is navigator');
        if(navigator === -1){
            setCurrentIndex((prevIndex) =>
                prevIndex === lengthRef.current - 1 ? 0 : prevIndex + 1
            )
        }else if(navigator === 1){
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? lengthRef.current - 1 : prevIndex - 1
            );
        }
        // setNavigator(0)
    },[navigator])

    useEffect(() => {
        carouselRef.current.addEventListener("mousedown", handleMouseDown);
        carouselRef.current.addEventListener("mouseup", handleMouseUp);
        carouselRef.current.addEventListener("mouseleave", handleMouseLeave);
        carouselRef.current.addEventListener("mousemove", handleMouseMove);
        carouselRef.current.addEventListener("touchstart", handleTouchStart);
        carouselRef.current.addEventListener("touchend", handleTouchEnd);

        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener("mousedown", handleMouseDown);
                carouselRef.current.removeEventListener("mouseup", handleMouseUp);
                carouselRef.current.removeEventListener("mouseleave", handleMouseLeave);
                carouselRef.current.removeEventListener("mousemove", handleMouseMove);
                carouselRef.current.removeEventListener("touchstart", handleTouchStart);
                carouselRef.current.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, []);

    useEffect(() => {
        if (sliderRef) {
            lengthRef.current = sliderRef.current.children.length
        }
    }, [sliderRef])

    useEffect(() => {
        if (itemsPerWindow) {
            console.log(currentIndex, lengthRef);
            if (itemsPerWindow % 2 !== 0 && itemsPerWindow % 2 !== 1) {
                setTranslateValue(-(currentIndex * ((carouselRef.current.clientWidth / itemsPerWindow))))
                return
            }
            if (currentIndex < lengthRef.current - (itemsPerWindow - 1)) {
                setTranslateValue(-(currentIndex * (carouselRef.current.clientWidth / itemsPerWindow)))
            } else {
                setCurrentIndex(0);
            }
            return
        }
        setTranslateValue(-(currentIndex * carouselRef.current.clientWidth));
    }, [currentIndex])

    useEffect(() => { console.log(itemsPerWindow, 'ipv check'); }, [itemsPerWindow])

    const handleMouseDown = (event) => {
        startXRef.current = event.clientX;
    };

    useEffect(() => {
        let sliderItem = sliderRef.current.childNodes
        if (itemsPerWindow) {
            for (let i = 0; i < sliderItem.length; i++) {
                sliderRef.current.childNodes[i].style.width = `${((carouselRef.current.clientWidth / itemsPerWindow) - gap)}px`
                sliderRef.current.childNodes[i].style.marginLeft = gap / 2 + "px"
                sliderRef.current.childNodes[i].style.marginRight = gap / 2 + "px"
            }
            setGridWidth(carouselRef.current.clientWidth / itemsPerWindow);
        } else {
            for (let i = 0; i < sliderItem.length; i++) {
                sliderRef.current.childNodes[i].style.width = `100%`
                sliderRef.current.childNodes[i].style.marginLeft = 0 + "px"
                sliderRef.current.childNodes[i].style.marginRight = 0 + "px"
            }
        }
    }, [itemsPerWindow, gap])

    const handleMouseUp = (event) => {
        const endX = event.clientX;
        const difference = startXRef.current - endX;
        if (difference > 50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === lengthRef.current - 1 ? 0 : prevIndex + 1
            );
        } else if (difference < -50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? lengthRef.current - 1 : prevIndex - 1
            );
        }
    };

    const handleTouchStart = (event) => {
        startXRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        const endX = event.changedTouches[0].clientX;
        const difference = startXRef.current - endX;
        if (difference > 50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === lengthRef.current - 1 ? 0 : prevIndex + 1
            );
        } else if (difference < -50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? lengthRef.current - 1 : prevIndex - 1
            );
        }
    }

    const handleMouseLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleMouseMove = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        // setTranslateValue(-(index * carouselRef.current.clientWidth));
    };


    return (
        <div className={styles["carousel-container"]} ref={carouselRef}>
            <div
                className={styles["carousel-slider"]}
                ref={sliderRef}
                style={{
                    transform: `translateX(${translateValue}px)`,
                    transition: "transform ease-out 0.45s",
                    gridTemplateColumns: `repeat(${lengthRef.current}, ${itemsPerWindow ? gridWidth + 'px' : "100%"})`
                }}
            >
                {children}
                {/* {images.map((image, index) => (
                    <Image key={index} src={image} className={styles.image} alt={`Image ${index + 1}`} />
                ))} */}
            </div>
            {
                dots &&
                <div className={styles["dots-container"]}>
                    {[...Array(lengthRef.current)].map((_, index) => (
                        <div
                            key={index}
                            className={`${styles['dot']} ${styles[currentIndex === index ? "dot--active" : ""]}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            }
        </div>
    );
};

