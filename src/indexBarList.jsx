import React, { useState, useRef, useEffect } from "react";
import "./indexBarList.scss";

function IndexBarList({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isScrolling, setIsScrolling] = useState(true);

  const handleIndexClick = (index) => {
    setCurrentIndex(index);
    setIsScrolling(false);
    const targetListItem =
      listContainerRef.current.querySelectorAll(".list-wrapper")[index];

    targetListItem.scrollIntoView({ behavior: "auto" });
  };

  const handleScroll = () => {
    const listWrappers =
      listContainerRef.current.querySelectorAll(".list-wrapper");
    const scrollPosition = listContainerRef.current.scrollTop;
    scrollPositionRef.current = scrollPosition;
    let activeIndex = 0;
    listWrappers.forEach((wrapper, index) => {
      const rect = wrapper.getBoundingClientRect();
      if (scrollPosition >= rect.top && rect.top > -20 && rect.top < 20) {
        activeIndex = index;
        setCurrentIndex(activeIndex);
      }
    });
  };

  useEffect(() => {
    listContainerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      listContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const listWrappers =
      listContainerRef.current.querySelectorAll(".list-wrapper");

    if (!isScrolling) return;

    if (currentIndex < listWrappers.length) {
      const targetListItem = listWrappers[currentIndex];
      const rect = targetListItem.getBoundingClientRect();
      const containerRect = listContainerRef.current.getBoundingClientRect();

      const maxScrollPosition =
        listContainerRef.current.scrollHeight - containerRect.height;

      const targetScrollPosition =
        scrollPositionRef.current + rect.top - containerRect.top;

      const finalScrollPosition = Math.min(
        maxScrollPosition,
        targetScrollPosition
      );

      listContainerRef.current.scrollTo({
        top: finalScrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="index-bar-list">
      <div className="list-container" ref={listContainerRef}>
        {data.map((item, index) => (
          <div key={index} className="list-wrapper">
            <div className="list-title">{item.index}</div>
            <ul className="list">
              {item.data.map((itemData, indexData) => (
                <li key={indexData}>{itemData}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="index-bar">
        <div className="index-list">
          {data.map((item, index) => (
            <div
              key={index}
              className={`index-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleIndexClick(index)}
            >
              {item.index}
            </div>
          ))}
        </div>
        <div
          className={`scroll-indicator ${currentIndex === 0 ? "active" : ""}`}
        />
      </div>
    </div>
  );
}

export default IndexBarList;
