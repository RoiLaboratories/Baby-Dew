import { Icon } from "@iconify/react";

function ScrollerBtn() {
  const handleClick = () => {
    const elem = document.querySelector("#hero");
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rounded-full size-12 fixed bottom-16 right-5 p-[2px] flex-center bg-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-black">
      <button
        className="rounded-full size-full border-3  border-black flex-center text-white  cursor-pointer focus:outline-none"
        onClick={handleClick}
      >
        <Icon icon={"ri:arrow-up-s-line"} className="text-3xl" />
      </button>
    </div>
  );
}

export default ScrollerBtn;
