const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:px-24 px-6 absolute text-gray-100 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2 ">{overview}</p>
      <div className="flex my-4 md:m-0">
        <button className="bg-gray-100 text-gray-900  px-3 py-1 md:py-4 md:px-12 text-lg rounded-lg flex gap-2 items-center hover:bg-opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg md:flex md:gap-2 items-center hover:bg-opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
