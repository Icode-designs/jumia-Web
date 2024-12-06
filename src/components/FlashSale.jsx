import React, { useEffect } from "react";
import { GiPriceTag } from "react-icons/gi";
import { TfiAngleRight } from "react-icons/tfi";

export default function FlashSale() {
  useEffect(() => {
    var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If the countdown is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        // Optionally, display a message or take other action
      }
    }, 1000);

    return () => clearInterval(x); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-white mt-4 rounded-lg p-0 md:mx-20 max-md:mx-auto">
      <div className="flex justify-between mt-3 rounded-t-lg font-bold  text-white py-3 bg-red-700 w-full px-2">
        <p className="flex items-center gap-1 text-xl">
          <GiPriceTag />
          Flash Sale
        </p>
        <div className="flex justify-between items-center max-sm:text-sm ">
          <p>Time Left:</p>
          <div className="flex justify-between gap-1">
            <div className="flex justify-between">
              <p id="days">00</p>
              <p>d:</p>
            </div>
            <div className="flex justify-between">
              <p id="hours">00</p>
              <p>h:</p>
            </div>
            <div className="flex justify-between">
              <p id="minutes">00</p>
              <p>m:</p>
            </div>
            <div className="flex justify-between">
              <p id="seconds">00</p>
              <p>s</p>
            </div>
          </div>
        </div>
        <a href="#" className="flex gap-1 items-center text-orange-500 text-sm">
          SEE ALL <TfiAngleRight className="font-bold" />
        </a>
      </div>
      <div className="grid grid-cols-6 max-md:grid-cols-3 gap-1 mx-2 text-sm ">
        <div className="hover:scale-105">
          <img src="/image/rec1.jpg" alt="Product 1" />
          <p>B008 Elegant Female Crys...</p>
          <p>&#8358;1,280</p>
          <p className="line-through text-xs text-gray-600">&#8358;2,200</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec2.jpg" alt="Product 2" />
          <p>Riapawel 4 PCS Bohemia...</p>
          <p>&#8358;6,688</p>
          <p className="line-through text-xs text-gray-600">&#8358;3,899</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec3.jpg" alt="Product 3" />
          <p>Fashion Ladies Opal Cryst...</p>
          <p>&#8358;3,399</p>
          <p className="line-through text-xs text-gray-600">&#8358;4,990</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec4.jpg" alt="Product 4" />
          <p>B007 Fashion Love Heart...</p>
          <p>&#8358;999</p>
          <p className="line-through text-xs text-gray-600">&#8358;1,500</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec5.jpg" alt="Product 5" />
          <p>Punk Infinite Infinity Sign...</p>
          <p>&#8358;760</p>
          <p className="line-through text-xs text-gray-600">&#8358;1,520</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec6.jpg" alt="Product 6" />
          <p>New Fashionable Chain L...</p>
          <p>&#8358;1,999</p>
        </div>
      </div>
    </section>
  );
}
