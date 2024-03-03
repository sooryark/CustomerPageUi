import Check from "../assets/Icons/Check";
import HistoryIcon from "../assets/Icons/HistoryIcon";
import person from "../assets/Icons/person.avif";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-5">
        <img
          src={person}
          alt="card-img"
          className="rounded-full w-52 h-52 bg-cover"
        />
      </div>
      <div className="text-white mb-5">
        <h1 className="text-5xl font-bold">John Smith</h1>
        <p className="text-3xl font-bold">Stock Investor</p>
        <p>Johnsmith@gmail.com</p>
      </div>
      <div>
        <p className="text-white text-xl mb-2">
          Add stocks for targeted Insights
        </p>
        <div className="flex gap-2">
          <button className="bg-white rounded-full py-1 px-4">Microsoft</button>
          <button className="bg-white rounded-full py-1 px-4">Apple</button>
          <button className="bg-white rounded-full py-1 px-4">SAP</button>
          <button className="bg-white rounded-full py-1 px-4">+</button>
        </div>
        <div>
          <button className="bg-white rounded-full py-1 px-4 mt-2">
            Vanguard
          </button>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="bg-[#7752FE] rounded-full py-1 px-4 text-white flex items-center font-bold gap-1">
          <HistoryIcon />
          Search History
        </button>
        <button className="bg-[#7752FE] rounded-full py-1 px-4 text-white flex items-center font-bold gap-1">
          <Check />
          Saved Questions
        </button>
      </div>
    </div>
  );
};

export default Card;
